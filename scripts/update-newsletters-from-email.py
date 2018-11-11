import imaplib
import email
import os
import io
import myutils
import frontmatter
import dateutil.parser
from bs4 import BeautifulSoup

mail = imaplib.IMAP4_SSL('imap.gmail.com')
mail.login('email', 'password')

mail.list()
mail.select('cryptoumnweb')

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

            # adding styles below, but commented out because it messed up the styles on the rest of the site
            # content += '<style>'
            # for s in d.find_all('style'):
            #     content += s.string
            # content += '</style>'

            # main_table = d.select_one('body > table')
            # main_tables = main_table.select('td.mlTemplateContainer > table')

            # # contains the "open in browser" link
            # first_table = main_tables[0]
            # print(first_table.prettify())

            # # # mailerlite logo
            # # last_table = main_tables[2].decompose()

            # # remove unsubscribe link
            # main_table.select_one('table.mlContentTable.mlFooterTable').decompose()

            # content += '\n\n\n' + main_table.prettify()

            body = d.select_one('body')
            body.select_one('.mlContentTable.mlFooterTable').decompose()
            body.select_one('table.mobileHide').decompose()
            thing = body.select('.mlContentTable a img')
            last = thing[len(thing) - 1]
            last.decompose()
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
