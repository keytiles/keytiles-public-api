# What is this?

In this folder you find OpenApi definitions of our different APIs.

# API versioning policy

We follow Semantic versioning with the APIs. The version of the API you always find at the place defined by Open API /info/version JSON path.

# File naming strategy

However API version is always a.b.c format in file naming we follow slightly different strategy.

1. File names never contain the patch version so you just find maximum two number there "a.b" format.
1. The most recent API of a major version is always kept in a file which is postfixed with the major version only using "-vX".
1. When a file name contains "-vX.Y" version then this file is NOT the most recent one in major version X but kind of an archived minor version. We keep them only for easier diff possibility so by comparing it to the "-vX" postfixed file name (or any other "-vX.Y") you can find the changes easier in between those two.

