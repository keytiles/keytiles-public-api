#!/bin/bash

echo "Publishing TypeScript lib..."

cd typescript
npm run build

cd publish
#npm publish --tag buu
npm publish
cd ..

echo "done"
