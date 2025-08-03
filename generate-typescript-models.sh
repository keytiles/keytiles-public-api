#!/bin/bash

cd typescript

# Make node install
if [ ! -d "node_modules" ]; then
  # just needed once
  echo "It looks this is your first time... installing node modules..."
  npm install
fi

rm -rf src

cd ..

# generating all the models

source scripts/_generate-typescript-commons.sh
source scripts/_generate-typescript-management-api-v2.sh
source scripts/_generate-typescript-hitcollection-api-v2.sh
source scripts/_generate-typescript-reports-api-v1.sh
source scripts/_generate-typescript-query-api-v3.sh

# time to compile typescript

cd typescript
npm run build
cd ..

echo "all done!"
echo "check https://keytiles.atlassian.net/wiki/spaces/KEYTILES/pages/182321153/keytiles-public-api+-+and+generated+models#Steps-to-follow-evolving-the-contracts and do post checks!"
echo "If all good you can publish now by executing 'typescript-publish.sh' script"

