#!/bin/bash

# generating using https://github.com/oapi-codegen/oapi-codegen

oapi-codegen -config generate-go-reportsapiv1.config.yaml src/main/openapi/reports-api-v1.yaml

