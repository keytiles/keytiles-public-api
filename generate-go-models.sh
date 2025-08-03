#!/bin/bash

# generating all the models

echo "Before you continue, did you check this? https://keytiles.atlassian.net/wiki/spaces/KEYTILES/pages/182321153/keytiles-public-api+-+and+generated+models#Fixing-compilation-errors-in-Go-models-after-codegen"
read -p "Should we continue? (y/n)" -n 1 -r
echo    # (optional) move to a new line
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    echo "OK aborting then..."
    exit 0
fi

# lets set a var so the invoked scripts will not ask the same question again
SURE_TO_CONTINUE="yes"
export SURE_TO_CONTINUE

source scripts/_generate-go-commons.sh
source scripts/_generate-go-hitcollectionapi_v2.sh
source scripts/_generate-go-managementapi_v2.sh
source scripts/_generate-go-reportsapi_v1.sh
source scripts/_generate-go-queryapi_v3.sh

echo "all done!"
echo "check https://keytiles.atlassian.net/wiki/spaces/KEYTILES/pages/182321153/keytiles-public-api+-+and+generated+models#To-generate-Go-models now!"

