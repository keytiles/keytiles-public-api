#!/bin/bash

# generating using https://github.com/openapi-ts/openapi-typescript/tree/main/packages/openapi-typescript

mkdir -p typescript/model/generated/common/types_v2
npx openapi-typescript ./path/to/my/schema.yaml -o ./path/to/my/schema.d.ts
oapi-codegen -config go-helper/generator1/generate-go-commons-typesv2.config.yaml src/main/openapi/common-types-v2.yaml

mkdir -p gopkg/model/generated/common/schedule_v1
oapi-codegen -config go-helper/generator1/generate-go-commons-schedulev1.config.yaml src/main/openapi/common-schedule-v1.yaml

mkdir -p gopkg/model/generated/common/metadata_v1
oapi-codegen -config go-helper/generator1/generate-go-commons-metadatav1.config.yaml src/main/openapi/common-metadata-v1.yaml
