import requests
import frontmatter
import io
import os
import re
import datetime
import sys
from dateutil import tz
import dateutil.parser

# All dates/times are in UTC, and are stored that way in the md files
# HOWEVER, "display" dates (including, for example, the URL in md frontmatter)
# are in local tz

orgid = "155406"

# how many of the last events to grab
updatelast = 5
try:
    updatelast = int(sys.argv[1])
except:
    pass

root = os.path.realpath(os.path.join(
    os.path.normpath(
        os.path.dirname(__file__),
    ),
    "..",
))

def generatepostcontent (eventjson):
    img = "<img src=\"/img/club-event/" + eventjson["imagePath"] + "\" alt=\"" + eventjson["name"] + " banner image\" /><br>"
    info = '''
    <p class="eventInfo">
        <strong>Time</strong>: {time}<br>
        <strong>Location</strong>: {location}
    </p>
    '''.format(
        location=event["location"],
        time=dateutil.parser.parse(event["startsOn"]).astimezone(tz=tz.tzlocal()).strftime('%I:%M %p on %A, %B %e, %Y'),
    )
    return img + info + eventjson["description"]

def generatepost (eventjson):
    p = frontmatter.Post('', date=datetime.datetime.now(datetime.timezone.utc).isoformat())
    updatepost(eventjson, p)
    return p

def downloadimage (eventjson):
    url = "https://images.collegiatelink.net/clink/images/" + eventjson["imagePath"]
    response = requests.get(url)
    if response.status_code == 200:
        path = os.path.join(root, os.path.normpath("static/img/club-event/" + eventjson["imagePath"]))
        with open(path, "w+b") as f:
            f.write(response.content)
            print("Downloaded image for event " + eventjson["name"] + " to " + path)

def pagepath (eventjson):
    return os.path.join(root, os.path.normpath("content/club-event/" + eventjson["id"] + ".md"))

def pageexists (eventjson):
    return os.path.isfile(pagepath(eventjson))

def updatepost (eventjson, p):
    p.content = generatepostcontent(eventjson)

    p["title"] = eventjson["name"]
    # p["slug"] = eventjson["name"]
    starts = dateutil.parser.parse(eventjson["startsOn"])
    p["publishdate"] = starts.isoformat()

    slug = re.sub(r"[^a-zA-Z0-9]+", "-", eventjson["name"]).lower().strip()
    slugdate = starts.astimezone(tz=tz.tzlocal())
    p["url"] = "/club-event/" + slugdate.strftime("%Y/%m/%d") + "/" + slug
    p["lastmod"] = datetime.datetime.now(datetime.timezone.utc).isoformat()
    p["starts"] = starts.isoformat()
    p["ends"] = dateutil.parser.parse(eventjson["endsOn"]).isoformat()
    p["image"] = "/img/club-event/" + eventjson["imagePath"]
    p["categories"] = eventjson["categoryNames"]
    p["tags"] = eventjson["benefitNames"]

def writepage (eventjson, p):
    fpath = pagepath(eventjson)
    with open(fpath, mode="w+b") as f:
        o = io.BytesIO()
        frontmatter.dump(p, o, handler=frontmatter.YAMLHandler())
        f.write(o.getvalue())
        print("Wrote page for event " + eventjson["name"] + " to " + fpath)

try:
    url = "https://gopherlink.umn.edu/api/discovery/event/search"

    querystring = {
        "orderByField": "endsOn",
        "orderByDirection": "descending",
        "status": "Approved",
        "take": str(updatelast),
        "organizationIds[0]": orgid,
    }

    r = requests.get(url, params=querystring)

    if r.status_code == 200:
        response = r.json()

        for event in response["value"]:
            if pageexists(event):
                p = frontmatter.load(pagepath(event))
                updatepost(event, p)
                writepage(event, p)
            else:
                p = generatepost(event)
                writepage(event, p)
                downloadimage(event)

except Exception as e:
    print(e)
