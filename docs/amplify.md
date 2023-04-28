# AWS Amplify CLI

Create new account if required

https://docs.amplify.aws/cli/start/install/

May require admin user (sudo)

```
npm install -g @aws-amplify/cli
```

Use sudo for configuration

```
amplify configure

```

login to create new user
- new user ID: cftw-crypto-amplify


# Expo App Creation
```
npm install -g expo-cli  

npx create-expo-app amplified_todo

cd my-app
```

## Add imports to App.js

```
import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'

Amplify.configure(awsconfig)
```

## Install Amplify Libraries
```
npm install aws-amplify amazon-cognito-identity-js @react-native-community/netinfo @react-native-async-storage/async-storage
```

Sync to backend
```
amplify push
```

Initialize (if admin (sudo) was required for previous steps, prefix command with sudo)
```
sudo amplify init
```
