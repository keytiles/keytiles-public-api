# What's here?

We were running some evaluations on different codegens. (https://keytiles.atlassian.net/browse/KEYTILES-515)
Unfortunately each had pros-cons so we had to choose the "least worse".

In this folder we have helper configs and some shell scripts which were used to execute stuff.

The most interesting (and deal-breaker) stuff is the lack of polymorphism in Go. No classes, no extending.
Therefore terms like "allOf" or "oneOf" becomes interesting...

# Generator(1) - oapi-codegen

https://github.com/oapi-codegen/oapi-codegen

This was our choice for now. It generates relatively light-weight stuff and best fit for use cases when we want to put different API parts under
different packages and then simply just use them in the "higher level" OpenApi definitions. E.g. with this it is possible the generate the "common"s into
a common package which is then referenced by everything else. See "import-mapping" in corresponding *.config.yaml files which are used by the
generator scripts.

It is a very nicely maintained tool. But has some 

"not required" fields are generated as pointers by default which makes it a bit more difficult in practice to assemble models from code. However then we found 
https://github.com/oapi-codegen/oapi-codegen/issues/266 which ended up in a MR and revealed possibility of using "x-go-type-skip-optional-pointer". Which we
still decided NOT to use now.

Other "con" is how literals like "oneOf" works.


# Generator2 - contiamo/openapi-generator-go

https://github.com/contiamo/openapi-generator-go 

mmmm no... :-)

# Generator3 - official Swagger codegen

https://github.com/OpenAPITools/openapi-generator

Although the generated code is better here and there compared to our choice (generator1) but it was basically impossible to figure out how to use
"import-mapping" and "type-mappping" the way we can generate the "common"s and reuse them in higher layers - without going really crazy. Unfortunately...
So this is definitely a no go for now.