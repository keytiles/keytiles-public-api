#!/bin/bash

mvn clean source:jar deploy

echo "NOTE: for some reason mvn deploy re-generated the classes the way now Constructor comments are missing... You see diff now in Git... Just execute 'mvn generate-sources' now to get back comments - until we find wh this is happening..."