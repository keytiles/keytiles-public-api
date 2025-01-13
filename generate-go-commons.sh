#!/bin/bash

# generating using https://github.com/oapi-codegen/oapi-codegen

oapi-codegen -config generate-go-commons-typesv2.config.yaml src/main/openapi/common-types-v2.yaml
oapi-codegen -config generate-go-commons-schedulev1.config.yaml src/main/openapi/common-schedule-v1.yaml

