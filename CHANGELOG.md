
# Release 1.2.0

## New features
 * Error code changes
    * "authorization_noPermission" is added to "common-types-v2.yaml"
    * "requestData_XXX" are added to "common-types-v2.yaml"
    * "data_contradictingRequest" (now it is replaced by "requestData_contradicting") was removed from "common-types-v2.yaml".
      This can be viewed as a breaking change of course however not really, as it was just used so far in Hit Collection API once, and there we know nobody is processing those potential
      error cases programmaticaly so far. So simpler for now to just do it and go with it.
 * BaseResponseClass in "common-types-v2.yaml" from now can optionally carry "vars". So variables. Key-Value pairs attached to the error which can be (much better) processed by client code.
   This also opens up the possibility to phrase messages / error messages as templates, referring in certain Variable values with something like "${myVarName}" or similar syntax. This later
   can be a huge step towrds language translations.


# Release 1.1.0

## New features
 * New error code "underlying_resource_unavailable" is added to "common-types-v2.yaml"

# Release 1.0.4

## Fixes

Let's do Changelog from this point

# Release 1.0.0

Initial commit - took from snapshot release.
Also added Golang generator
