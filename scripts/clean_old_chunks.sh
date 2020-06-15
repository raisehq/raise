#!/bin/bash

set -o errexit
set -o errtrace
set -o nounset
set -o pipefail

BUCKET="testing.herodev.es"
DAYS=10

# Usage: ./clean_old_files.sh bucket_name
# This script will delete all the chunks modified before the 10 days.

if [ -n "${1-}" ]; then
    BUCKET=${1}
else
	echo "Missing params: bucket. Ex: ./clean_old_files.sh testing.herodev.es";exit 1;
fi

OLD_DATE=$([ "$(uname)" = Linux ] && date --date="${DAYS} days ago" +"%Y"."%m"."%d" || date -v-${DAYS}d +"%Y"."%m"."%d")
OLD_DATE=$(echo ${OLD_DATE} | tr . -)

aws s3 ls --recursive s3://${BUCKET} | awk '$1 <= "'${OLD_DATE}'" {print $0}' | sort -n > files.txt

while IFS="" read -r line || [ -n "$line" ]
do
    file_name=$(echo ${line} | awk '{ print $4 }')
    if [[ ${file_name} == *"chunk"* ]]; then
        aws s3 rm s3://${BUCKET}/${file_name}
    fi
done < files.txt
rm -rf files.txt
