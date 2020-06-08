#!/bin/bash

DIR_ONBOARDING="./packages/onboarding/dist"
if [ ! -d "$DIR_ONBOARDING" ]; then
  echo ">>>>>>>>> DOWNLOAD ONBOARDING <<<<<<<<<<"
  aws s3 cp --recursive s3://raise-actirfact-pipeline/onboarding ./packages/onboarding/dist
fi

DIR_COMPONENTS="./packages/components/dist"
if [ ! -d "$DIR_COMPONENTS" ]; then
  echo ">>>>>>>>> DOWNLOAD COMPONETS <<<<<<<<<<"
  aws s3 cp --recursive s3://raise-actirfact-pipeline/components ./packages/components/dist
fi