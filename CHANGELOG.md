# Release 2.0.1

## Breaking changes

After practical feedbacks and also introducing TypeScript (which provided feedback too) we decided to **simplify the API error handling**.
This will lead into leaner generated models and eliminate lots of unnecessary inheritance on unhappy paths.
The main idea is that we stop using predefined enums as error codes (`ProblemBaseClass` in `common-types-v2.yaml`) and switch to simple strings instead.
This only means we give up tightly coupling and trade it to loosely coupling (we will still keep the error code enums! just do not enforce them into error codes) so
when a code constructs the error response has to be a bit more careful. And also those code pieces which are consuming these responses must be bit more careful.
But this is a good trade off in contrast with the complexity it caused in every generated code in all languages!

Actually, **the change is not a real breaking change in terms of returned response in JSON format! There is no change at all in the JSON format** for example. You would not even notice this!!

But let's list all the changes contract to contract.

- `common-types-v3.yaml` is introduced. The change here is triggering all of the changes in all other contracts.
  The only difference compared to v2 is in `ProblemBaseClass` (renamed to `ProblemClass` as we don't want to extend it anymore), the `errorCodes` field from now
  is simply a string and not an enum anymore.
  This is a small change but this is the change exactly which makes it possible to get rid of lots of inheritance and extending in API level error handling.
- `management-api-v2.yaml` is introduced. This facilitates the change we described above, starts to use `common-types-v3.yaml` and compared to `management-api-v1.yaml` stops extending the
  `ProblemBaseClass`. Therefore we also do not need own `ManagementEndpointProblemClass` neither `MachineReadableManagementEndpointMessageResponseClass`.
  It is simply reusing the `MessageResponseClass` from `common-types-v3.yaml` instead of defining own.
- `hitcollection-api-v2.yaml` is introduced. Totally the same type of changes were applied here as in the newly introduced `management-api-v2.yaml`.
  Compare simply with `hitcollection-api-v1.yaml` to see details.
- `query-api-v3.yaml` is introduced. Same simplifications were applied here as in the newly introduced `management-api-v2.yaml`.
  Compare simply with `query-api-v2.yaml` to see details. Custom classes and overrides in ".problems" properties now gone.

## New features

- `common-metadata-v1.yaml` is introduced. Will be useful for situations where an entity has title, description and changelog history.
  For now the Reporting layer is using this as first citizen.
- `common.schedule-v1.yaml` is introduced. Will be useful in situations where certain actions should be schedulable.
  For now the Reporting layer is using this as first citizen.
- Pre-releasing `reports-api v1.yaml` so we can start working with it. This is a completely new API.

# Release 2.0.0

This version is invalid.
We ran into problems first time setup Github based NPM package - for first time generated TypeScript code :-( And we could not fix this so omit this version entirely seemed to be easier...

# Release 1.2.0

## New features

- Error code changes
  - "authorization_noPermission" is added to "common-types-v2.yaml"
  - "requestData_XXX" are added to "common-types-v2.yaml"
  - "data_contradictingRequest" (now it is replaced by "requestData_contradicting") was removed from "common-types-v2.yaml".
    This can be viewed as a breaking change of course however not really, as it was just used so far in Hit Collection API once, and there we know nobody is processing those potential
    error cases programmaticaly so far. So simpler for now to just do it and go with it.
- BaseResponseClass in "common-types-v2.yaml" from now can optionally carry "vars". So variables. Key-Value pairs attached to the error which can be (much better) processed by client code.
  This also opens up the possibility to phrase messages / error messages as templates, referring in certain Variable values with something like "${myVarName}" or similar syntax. This later
  can be a huge step towrds language translations.

# Release 1.1.0

## New features

- New error code "underlying_resource_unavailable" is added to "common-types-v2.yaml"

# Release 1.0.4

## Fixes

Let's do Changelog from this point

# Release 1.0.0

Initial commit - took from snapshot release.
Also added Golang generator
