# keytiles-public-api

At Keytiles we follow "API First" approach. And we also follow "Contract first" approach - meaning: we maintain the OpenApi specs and then generate code out of it. This repository contains these OpenApi v3 specification files so you know how to communicate with API endpoints.

Also contains generated models for Java and Golang - so basically it is possible to use this repo as a Java or Golang library as well. Every time we update the OpenApi spec we also release a new version of these libs.

# Generating Java code

We started to use the Swagger Java Codegen originally but it did not meet several requirements. To solve this we came up with our own modified codegen which is also open source and you can find it here: https://github.com/keytiles/keytiles-swagger-codegen

The generated Java classes are in folder "/target/generated-sources" (FYI) but if you wish to use them please note that there is a "pom.xml" in the root. Making
this project a Java project. Just simply pull in the stuff as a Mavem dependency and that's it.

# Generating Go code

It came later than Java. And we used this blog post as a starting point: https://ldej.nl/post/generating-go-from-openapi-3/ - written by Laurence De Jong.
For now our choice is https://github.com/oapi-codegen/oapi-codegen.

Generated code goes into "/gopkg/model/generated" folder. And package names are derived from the name of the API and the main version. Package names also showing you clearly that code in these packages are "keytiles public API generated" codes.

# Generating Typescript code

Recently we also added this to provide generated code.

The tool we use for this is: https://orval.dev/

Generated code goes into "/typescript/src/model/generated" folder.

# Versioning the generated codes

We started to use incremental versioning pretty late - from 2025 January.

And since this repo contains multipple API specs (each having its own versioning) for now the generated code versions are just simple incremental versions - no matter which particular API has changed.

Versions started from 1.0.0 - and each meaningful change will just bump up the minor version or in bugfix cases the patch version - that's it. Same applies for Java and Golang.

# For maintainers

Please check and follow https://keytiles.atlassian.net/wiki/spaces/KEYTILES/pages/182321153/keytiles-public-api+-+and+generated+models
