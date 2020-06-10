#!/bin/bash

set -o errexit
set -o errtrace
set -o nounset
set -o pipefail

DOMAIN="herodev.es"
PATH_INVALIDATE="/*"

if [ -n "${1-}" ]; then
    DOMAIN=${1}
    set +o nounset
    if [ ! -z ${2} ]; then
        PATH_INVALIDATE=${2}
    fi
    set -o nounset
else
	echo "Missing params: mandatory domain; optional path to invalidate default /*"; exit 1;
fi

aws cloudfront list-distributions --output=text --query 'DistributionList.Items[*].[Id, DefaultCacheBehavior.TargetOriginId'] | \
while read line ; do
    dist=$(echo $line | awk '{print $1}')
    domain=$(echo $line | awk '{print $2}')

    if [[ ${domain} == ${DOMAIN} ]]; then
        echo "---------------------------------------------------------------------------"
        echo "Invalidating cache for domain ${DOMAIN}..."
        echo "---------------------------------------------------------------------------"
        invalidation_id=$(aws cloudfront create-invalidation --distribution-id ${dist} --paths "${PATH_INVALIDATE}" --query 'Invalidation.Id' | tr -d '"')
        echo -n "Invalidating"
        until aws cloudfront get-invalidation --id ${invalidation_id} --distribution-id ${dist} --query 'Invalidation.Status' | grep "Completed" | tr -d '"'; do 
            sleep 5;
            echo -n "."
        done
        exit 0;
    fi
done
