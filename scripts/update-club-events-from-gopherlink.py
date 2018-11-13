import requests
import frontmatter
import io
import os
import datetime
import sys
from dateutil import tz
import dateutil.parser

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
    img = "<img src=\"/img/club-event/" + eventjson["ImagePath"] + "\" alt=\"" + eventjson["Name"] + " banner image\" /><br>"
    info = '''
    <p class="eventInfo">
        <strong>Time</strong>: {time}<br>
        <strong>Location</strong>: {location}
    </p>
    '''.format(
        location=event["Location"],
        time=dateutil.parser.parse(event["StartsOn"]).astimezone(tz=tz.tzlocal()).strftime('%I:%M %p on %A, %B %e, %Y'),
    )
    return img + info + eventjson["Description"]

def generatepost (eventjson):
    p = frontmatter.Post('', date=datetime.datetime.now(datetime.timezone.utc).isoformat())
    updatepost(eventjson, p)
    return p

def downloadimage (eventjson):
    url = "https://images.collegiatelink.net/clink/images/" + eventjson["ImagePath"]
    response = requests.get(url)
    if response.status_code == 200:
        path = os.path.join(root, os.path.normpath("static/img/club-event/" + eventjson["ImagePath"]))
        with open(path, "w+b") as f:
            f.write(response.content)
            print("Downloaded image for event " + eventjson["Name"] + " to " + path)

def pagepath (eventjson):
    return os.path.join(root, os.path.normpath("content/club-event/" + eventjson["Id"] + ".md"))

def pageexists (eventjson):
    return os.path.isfile(pagepath(eventjson))

def updatepost (eventjson, p):
    p.content = generatepostcontent(eventjson)

    p["title"] = eventjson["Name"]
    p["slug"] = eventjson["Name"]
    starts = dateutil.parser.parse(eventjson["StartsOn"])
    d = datetime.datetime.now(datetime.timezone.utc)
    if starts < d:
        d = starts
    p["publishdate"] = d.isoformat()
    p["lastmod"] = datetime.datetime.now(datetime.timezone.utc).isoformat()
    p["starts"] = starts.isoformat()
    p["ends"] = dateutil.parser.parse(eventjson["EndsOn"]).isoformat()
    p["image"] = "/img/club-event/" + eventjson["ImagePath"]
    p["categories"] = eventjson["CategoryNames"]
    p["tags"] = eventjson["BenefitNames"]

def writepage (eventjson, p):
    fpath = pagepath(eventjson)
    with open(fpath, mode="w+b") as f:
        o = io.BytesIO()
        frontmatter.dump(p, o, handler=frontmatter.YAMLHandler())
        f.write(o.getvalue())
        print("Wrote page for event " + eventjson["Name"] + " to " + fpath)

try:
    url = "https://gopherlink.umn.edu/api/discovery/search/events"

    querystring = {
        "top": str(updatelast),
        "orderBy[0]": "EndsOn desc",
        "context": "{\"organizationIds\": [" + orgid + "]}",
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
