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

#rm -rf gopkg/model/generated/common

mkdir -p gopkg/model/generated/common/types_v1
oapi-codegen -config go-helper/generator1/generate-go-commons-typesv1.config.yaml src/main/openapi/common-types-v1.yaml

mkdir -p gopkg/model/generated/common/types_v3
oapi-codegen -config go-helper/generator1/generate-go-commons-typesv3.config.yaml src/main/openapi/common-types-v3.yaml

mkdir -p gopkg/model/generated/common/schedule_v1
oapi-codegen -config go-helper/generator1/generate-go-commons-schedulev1.config.yaml src/main/openapi/common-schedule-v1.yaml

mkdir -p gopkg/model/generated/common/metadata_v1
oapi-codegen -config go-helper/generator1/generate-go-commons-metadatav1.config.yaml src/main/openapi/common-metadata-v1.yaml
