#!/bin/bash

# generating using https://github.com/oapi-codegen/oapi-codegen

if [ "$SURE_TO_CONTINUE" != "yes" ]
then
    echo "Before you continue, did you check this? https://keytiles.atlassian.net/wiki/spaces/KEYTILES/pages/182321153/keytiles-public-api+-+and+generated+models#Fixing-compilation-errors-in-Go-models-after-codegen"
    read -p "Should we continue? (y/n)" -n 1 -r
    echo    # (optional) move to a new line
    if [[ ! $REPLY =~ ^[Yy]$ ]]
    then
        echo "OK aborting then..."
        exit 0
    fi
fi

echo "generating management-api-v2 ..."

mkdir -p gopkg/model/generated/management_v2
oapi-codegen -config go-helper/generator1/generate-go-managementapiv2.config.yaml src/main/openapi/management-api-v2.yaml

