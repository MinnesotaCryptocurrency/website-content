import imaplib
import email
import os
import io
import myutils
import frontmatter
import dateutil.parser
import json
from bs4 import BeautifulSoup

mail = imaplib.IMAP4_SSL('imap.gmail.com')
with open(myutils.pathify(myutils.root, 'secret.json')) as f:
    j = json.loads(f.read())
    mail.login(j['email'], j['password'])
    mail.list()
    mail.select(j['label'])

result, data = mail.uid('search', None, "ALL")
# search and return uids instead

i = len(data[0].split())
for x in range(i):
    latest_email_uid = data[0].split()[x]  # unique ids wrt label selected
    fpath = myutils.pathify(myutils.root, 'content/newsletter/', latest_email_uid.decode('utf-8') + '.md')
    if os.path.exists(fpath):
        continue
    print('here')

    result, email_data = mail.uid('fetch', latest_email_uid, '(RFC822)')

    raw_email = email_data[0][1]

    raw_email_string = raw_email.decode('utf-8')

    # converts byte literal to string removing b''
    email_message = email.message_from_string(raw_email_string)

    # this will loop through all the available multiparts in mail
    for part in email_message.walk():
        if part.get_content_type() == "text/html":  # ignore attachments/html
            body = part.get_payload(decode=True)

            d = BeautifulSoup(body.decode('utf-8'), 'html.parser')

            content = ''

            body = d.select_one('body')

            anchors = body.select('a')
            for a in anchors:
                a['rel'] = 'nofollow'
                del a['target']

            # View in browser link
            anchors[0].decompose()
            # Unsubscribe link
            anchors[len(anchors) - 2].decompose()
            # Mailerlite link
            anchors[len(anchors) - 1].decompose()

            content += '\n\n\n' + body.prettify()

            post = frontmatter.Post(content,
                date=dateutil.parser.parse(email_message["date"]).isoformat(),
                title=str(d.title.string),
                slug=str(d.title.string),
                categories=['Newsletter'],
                tags=[],
            )

            o = io.BytesIO()
            frontmatter.dump(post, o, handler=frontmatter.YAMLHandler())
            with open(fpath, 'w+b') as f:
                f.write(o.getvalue())
                print('Newsletter \"' + str(d.title.string) + '\" written to ' + fpath)

        else:
            continue
