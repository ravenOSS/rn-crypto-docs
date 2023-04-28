---
Title: Configure Lambda function for AppSync proxy to external api
----

Link to docs
https://docs.amplify.aws/guides/functions/graphql-from-lambda/q/platform/react-native/

Need to add IAM for function
```
amplify update api

Select services: GraghQL

Select setting to edit: Authorization modes

Choose default authorization type for API: IAM

⚠️  WARNING: Some types do not have authorization rules configured. That means all create, read, update, and delete operations are denied on these types:
         - Asset
Learn more about "@auth" authorization rules here: https://docs.amplify.aws/cli/graphql/authorization-rules

⚠️ The API_KEY auth type has been removed from the API.
⚠️ If other resources depend on this API, run "amplify update <category>" and reselect this API to remove the dependency on the API key.
⚠️ This must be done before running "amplify push" to prevent a push failure

```
