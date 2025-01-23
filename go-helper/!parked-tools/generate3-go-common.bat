REM this is using https://github.com/OpenAPITools/openapi-generator

docker run --rm -v D:\workspace\keytiles\public-repos\keytiles-public-api:/local openapitools/openapi-generator-cli generate -i /local/src/main/openapi/common-types-v2.yaml -g go -o /local/gopkg/model/generated3/common-types-v2 -c /local/go-helper/generator3/common-types-v2.cfg.yaml --global-property models

docker run --rm -v D:\workspace\keytiles\public-repos\keytiles-public-api:/local openapitools/openapi-generator-cli generate -i /local/src/main/openapi/common-schedule-v1.yaml -g go -o /local/gopkg/model/generated3/common-schedule-v1 -c /local/go-helper/generator3/common-schedule-v1.cfg.yaml --global-property models