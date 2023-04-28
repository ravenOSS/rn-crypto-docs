# Create a GraphQL client for AWS Appsync

```javascript
import { createAuthLink } from 'aws-appsync-auth-link'
import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link'

import {
	ApolloClient,
	ApolloLink,
	HttpLink,
	InMemoryCache,
} from '@apollo/client'
import { v4 as uuidv4 } from 'uuid'

import awsmobile from '../src/aws-exports'

const url = awsmobile.aws_appsync_graphqlEndpoint
const region = awsmobile.aws_appsync_region
const auth = {
	type: awsmobile.aws_appsync_authenticationType,
	apiKey: awsmobile.aws_appsync_apiKey,
}

const httpLink = new HttpLink({ uri: url })

const AppSyncLink = ApolloLink.from([
	createAuthLink({ url, region, auth }),
	httpLink,
])

const AppSyncClient = new ApolloClient({
	link: AppSyncLink,
	cache: new InMemoryCache(),
})

export default AppSyncClient
```
