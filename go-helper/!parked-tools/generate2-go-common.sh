#!/bin/bash

# generating using: https://github.com/contiamo/openapi-generator-go

openapi-generator-go generate models --output gopkg/model/generated2/common/common-types --spec src/main/openapi/common-types-v2.yaml --package-name kt_pubapi_gen_common
openapi-generator-go generate models --output gopkg/model/generated2/common/schedule --spec src/main/openapi/common-schedule-v1.yaml --package-name kt_pubapi_gen_common
