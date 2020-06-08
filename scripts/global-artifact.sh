#!/bin/bash

DIR_ONBOARDING="/packages/onboarding/dist"
if [ ! -d "$DIR_ONBOARDING" ]; then
  echo ">>>>>>>>> DOWNLOAD <<<<<<<<<<"
  aws s3 cp --recursive s3://raise-actirfact-pipeline/onboarding /packages/onboarding
  echo ">>>>>>>>> MOVE TO DIST <<<<<<<<<<"
  mv /packages/onboarding/onboarding /packages/onboarding/dist
fi

DIR_COMPONENTS="/packages/components/dist"
if [ ! -d "$DIR_COMPONENTS" ]; then
  echo ">>>>>>>>> DOWNLOAD <<<<<<<<<<"
  aws s3 cp --recursive s3://raise-actirfact-pipeline/components /packages/components
  echo ">>>>>>>>> MOVE TO DIST <<<<<<<<<<"
  mv ./packages/components/components ./packages/components/dist
fi