# Adding authentication to app

use sudo if necessary

```bash
amplify add auth
```

```bash
? Do you want to use the default authentication and security configuration? Default configuration
? How do you want users to be able to sign in? Username
? Do you want to configure advanced settings?  No, I am done.
```

## Update resources

```bash
sudo amplify push
```

### Add Auth UI components

## Amplify UI

<https://ui.docs.amplify.aws/react-native/getting-started/introduction>

```bash
npm i @aws-amplify/ui-react-native aws-amplify react-native-safe-area-context amazon-cognito-identity-js @react-native-community/netinfo @react-native-async-storage/async-storage react-native-get-random-values react-native-url-polyfill
```

## Create registration page - change App.js to

```js
import React from 'react'
import { Button } from 'react-native'

import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native'
import { Amplify } from 'aws-amplify'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig)

function SignOutButton() {
	const { signOut } = useAuthenticator()
	return <Button title='Sign Out' onPress={signOut} />
}

function App() {
	return (
		<Authenticator.Provider>
			<Authenticator loginMechanisms={['email']}>
				<SignOutButton />
			</Authenticator>
		</Authenticator.Provider>
	)
}

export default App
```
