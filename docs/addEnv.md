---
Title: Configure Babel for .ENV
---

Use \*React-Native-Dotenv for environment variables.

Note that variables are imported into the components by:

```javascript
import { API_KEY } from '@env'
```

```bash
npm i react-native-dotenv
yarn add react-native-dotenv
```

```javascript
module.exports = function (api) {
	api.cache(false)
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			['react-native-paper/babel'],
			[
				'module:react-native-dotenv',
				{
					envName: 'APP_ENV',
					moduleName: '@env',
					path: '.env',
					blocklist: null,
					allowlist: null,
					safe: false,
					allowUndefined: true,
					verbose: false,
				},
			],
		],
	}
}
```
