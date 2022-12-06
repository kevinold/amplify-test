```
$ amplify-test node src/create.mjs
EVENT: undefined
Promise { <pending> }
[WARN] 06:28.991 GraphQLAPI - ensure credentials error No Cognito Identity pool provided for unauthenticated access
Error: No credentials
    at GraphQLAPIClass.<anonymous> (/private/tmp/amplify-test/node_modules/@aws-amplify/api-graphql/lib/GraphQLAPI.js:115:35)
    at step (/private/tmp/amplify-test/node_modules/@aws-amplify/api-graphql/node_modules/tslib/tslib.js:141:27)
    at Object.next (/private/tmp/amplify-test/node_modules/@aws-amplify/api-graphql/node_modules/tslib/tslib.js:122:57)
    at fulfilled (/private/tmp/amplify-test/node_modules/@aws-amplify/api-graphql/node_modules/tslib/tslib.js:112:62)
```