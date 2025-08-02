#!/bin/bash

# generating using https://orval.dev/

cd typescript

npx orval --config ./orval-management-api-v2-cfg.ts
# for debugging this is the same:
#node ./node_modules/orval/dist/bin/orval.js --config ./orval-management-api-v2-cfg.ts

cd ..