#!/usr/bin/env bash

touch ./commit-message.txt
printf "" > ./commit-message.txt
printf "\n\nAutomated update\n\n" >> ./commit-message.txt

printf "python3 ./update-club-events-from-gopherlink.py <<<\n" >> ./commit-message.txt
python ./scripts/update-club-events-from-gopherlink.py >> ./commit-message.txt
printf "\n>>>\n" >> ./commit-message.txt

printf "python3 ./update-newsletters-from-email.py <<<\n" >> ./commit-message.txt
python ./scripts/update-newsletters-from-email.py >> ./commit-message.txt
printf "\n>>>" >> ./commit-message.txt

# compile site
hugo

# update git
git add content/ docs/ static/
git commit -m "update-site.sh: $(date) $(cat ./commit-message.txt)"
git push -u origin master

# rm ./commit-message.txt
