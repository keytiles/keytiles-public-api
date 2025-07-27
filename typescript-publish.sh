#!/bin/bash

echo "Publishing TypeScript lib..."

cd typescript
npm publish
cd ..

echo "done"
