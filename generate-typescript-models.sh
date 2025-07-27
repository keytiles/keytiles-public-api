#!/bin/bash

rm -rf typescript/src

# generating all the models

source scripts/_generate-typescript-commons.sh
source scripts/_generate-typescript-management-api-v1.sh
source scripts/_generate-typescript-reports-api-v1.sh
source scripts/_generate-typescript-query-api-v2.sh

echo "all done!"
echo "check https://keytiles.atlassian.net/wiki/spaces/KEYTILES/pages/182321153/keytiles-public-api+-+and+generated+models#To-generate-Go-models now!"

