#!/bin/bash

echo "Publishing TypeScript lib..."

cd typescript/publish
#npm publish --tag buu
npm publish
cd ..

echo "done"
