#!/bin/bash

# generating using https://orval.dev/

echo "Generating all common-xxx-vx.yaml codes..."

cd typescript

npx orval --config ./orval-commons-cfg.ts

cd ..

echo "done"