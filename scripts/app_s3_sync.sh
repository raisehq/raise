#!/bin/bash

set -o errexit
set -o errtrace
set -o nounset
set -o pipefail

# Preventing caching --> Cache-Control: no-store. 
# The response may not be stored in any cache. Although other directives may be set, this alone is the only directive you need in preventing cached responses on modern browsers.

# Caching: Cache-Control --> public, max-age=time_in_seconds
# The maximum amount of time a resource is considered fresh.

# Requiring revalidation --> Cache-Control:no-cache.
# Specifying no-cache or max-age=0 indicates that clients can cache a resource and must revalidate each time before using it.

DOMAIN="herodev.es"
ARTIFACT_PATH="packages/client/build"
MAX_AGE=86400

if [ -n "${2-}" ]; then
    DOMAIN=${1}
    ARTIFACT_PATH=${2}
else
	echo "Missing params: domain, artifact_path. Ex: ${DOMAIN} ${ARTIFACT_PATH}"; exit 1;
fi

echo "-------------------------------------------------------------------------"
echo "Sync all files except for service-worker and index with max-age ${MAX_AGE}..."
echo "-------------------------------------------------------------------------"
aws s3 sync ${ARTIFACT_PATH} s3://$DOMAIN/ \
  --acl public-read \
  --exclude service-worker.js \
  --exclude index.html \
  --metadata-directive REPLACE \
  --cache-control public,max-age=${MAX_AGE} \

echo "------------------------------------------------------------------------------"
echo "Upload service-worker.js with no-store directive..."
echo "------------------------------------------------------------------------------"
aws s3 cp ${ARTIFACT_PATH}/service-worker.js s3://$DOMAIN/service-worker.js \
  --metadata-directive REPLACE \
  --cache-control no-store \
  --content-type application/javascript \
  --acl public-read

echo "------------------------------------------------------------------------------"
echo "Upload index.html with no-store directive..."
echo "------------------------------------------------------------------------------"
aws s3 cp ${ARTIFACT_PATH}/index.html s3://$DOMAIN/index.html \
  --metadata-directive REPLACE \
  --cache-control no-store \
  --content-type text/html \
  --acl public-read
