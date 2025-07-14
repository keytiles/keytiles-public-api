# What is here?

Generated code for TypeScript.

# Evaluation of different generators

We have evaluated several generators to achieve this.

## https://openapi-generator.tech

It has several modules: https://openapi-generator.tech/docs/generators

## https://openapi-ts.dev/

- Generates one schema into one file - it's ok, convenient
- Generated code is a bit complicated by assigning types into object structure. Works but bit weird.  
  With "npx openapi-typescript --export-type=true --root-types=true" not bad result tough but still weird...
- Followed the external file $ref links nice and generated all types (tested with reports-api) but does not support
  "import mapping" - and this is bad as we actually have modularity on schema level... Would be better to keep it in generated code too.

## https://github.com/hey-api/openapi-ts

Formerly https://www.npmjs.com/package/openapi-typescript-codegen but discontinued there.

- well, this one could not generate reports-api as thrown error "Error: Reference not found: ./common-types-v2.yaml#/components/schemas/ContainerResponseClass"
  immediately
- as a bonus, "import mapping" not supported: https://github.com/hey-api/openapi-ts/issues/201
