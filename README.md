# keytiles-public-api

At Keytiles we follow "API First" approach. And we also follow "Contract first" approach - meaning: we maintain the OpenApi specs and then generate code out of it. This repository contains these OpenApi v3 specification files so you know how to communicate with API endpoints.

Also contains generated models for Java, Golang and TypeScript - so basically it is possible to import Java, Golang and TypeScript library into your code as well and simply use the generated code in your own projects. Every time we update the OpenApi spec we also release a new version of these libs.

# What do we provide? Supported languages

We generate models out of the contracts for

- Java
- Golang
- TypeScript

languages (so far)

# How to use / include?

## Java

1. We distribute the code via our Nexus repo so make sure you add it to your Maven settings.xml
   ```xml
    <repository>
        <id>keytiles-public-releases</id>
        <name>Keytiles Nexus Public Releases</name>
        <url>https://nexus.keytiles.com/nexus/content/repositories/public-releases/</url>
        <releases>
            <enabled>true</enabled>
            <updatePolicy>never</updatePolicy>
            <checksumPolicy>fail</checksumPolicy>
        </releases>
        <snapshots>
            <enabled>false</enabled>
        </snapshots>
    </repository>
    <repository>
        <id>keytiles-public-snapshots</id>
        <name>Keytiles Nexus Public Snapshots</name>
        <url>https://nexus.keytiles.com/nexus/content/repositories/public-snapshots/</url>
        <releases>
            <enabled>false</enabled>
        </releases>
        <snapshots>
            <enabled>true</enabled>
            <updatePolicy>always</updatePolicy>
            <checksumPolicy>fail</checksumPolicy>
        </snapshots>
    </repository>
   ```
2. Add to your Maven dependency
   ```xml
    <dependency>
        <groupId>com.keytiles</groupId>
        <artifactId>keytiles-public-api</artifactId>
        <version>${keytiles.pub.api.version}</version>
    </dependency>
   ```

## Golang

This repository is a Golang library as well itself.

So to use it, just add this to your Go dependencies

`go get -u github.com/keytiles/keytiles-public-api@vx.y.z` - where "vx.y.z" is the version you want.

To see the available versions simply check the version tags of the repo's main branch and/or [CHANGELOG](CHANGELOG.md).

The generated models you find in [/gopkg/model/generated](gopkg/model/generated/) folder.

## TypeScript

We publish the NPM package on Github. To use it in your project

`npm install @keytiles/keytiles-public-api@x.y.z` - where "x.y.z" is the version you want.

To see the available versions visit https://github.com/keytiles/keytiles-public-api/pkgs/npm/keytiles-public-api and/or [CHANGELOG](CHANGELOG.md).

The generated code you find in the [typescript/src](typescript/src/) folder.

# Versioning the generated codes

We follow [Semantic versioning](https://semver.org) - as it brings benefits for everyone.
Versions started from 1.0.0.

And since this repo contains multiple API specs (each having its own versioning) versioning is a bit tricky...
But defineable for sure. We go with "union" approach basically.

Meaning what we try to keep is the following:

- Bump patch version - if there are only fixes in generated library codes (see supported languages above).  
  It is also possible if there was a problem with the generated lib in specific language which we fix BUT without changing schemas, we just release a fix version.
- Bump minor version - if there are any new things in ani API contracts - but no breaking change anywhere
- Bump major version - if there is at least breaking change in any API contracts. Simply put: you might run into compile issues
  including this new version of the lib in any supported programming language.

You should also take a look into [CHANGELOG](CHANGELOG.md).

# For maintainers

Please check and follow https://keytiles.atlassian.net/wiki/spaces/KEYTILES/pages/182321153/keytiles-public-api+-+and+generated+models
