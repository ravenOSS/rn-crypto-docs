# Connecting

<https://api.blocktap.io/graphql>

## HTTPS

Request to /graphql must use the HTTP POST method.

## Payload

A request body must be Content-Type: application/json encoded object with the following properties:

Name	Type	Mandatory	Description

query	string	true	The GraphQL syntax query to be execute. Can contain multple queries, but only one will execute.

operation	string	false	Used to select which query in query should execute. Can be omitted if there is only one query.

variables	object	false	Object mapping to variables used in the query.
An example payload is:

```json
{
  "query": "query market(@exchangeSymbol: String! baseSymbol:\"BTC\" quoteSymbol:\"USD\") { marketSymbol }",
  "operation": "market",
  "variables": {
    "exchangeSymbol": "Binance"
  }
}
```

## Authorization

You must have an API key to make requests to Blocktap.

Attachment your API key via the Authorization header. The API token value should be prefixed with the word Bearer. For example:

Authorization: Bearer 41fbd86d1515fe219ab9f1b9e9ddd8c6ce44fded2df1f6b4360c82e832452400

Failing to provide an API key will result in a 402 Payment Required HTTP status code.

Limits
Because of the structure of GraphQL, it is possible to fetch massive amounts of data. We use an internal request weighting system to estimate the size of a request and prevent overly large results.

The maximum request size is limited by your API token. Exceeding the maximum request size will result in a 413 Payload Too Large HTTP status code.

HTTPS Examples
Node.js Example

```javascript
const https = require('https');
const QUERY = `
  query ($symbol: String) {
    exchange (exchangeSymbol:$symbol) {
      country
    }
  }
  `;
const VARS = {
  symbol: 'binance',
};
const content = JSON.stringify({ query: QUERY, variables: VARS });
const req = https.request(
  {
    host: 'api.blocktap.io',
    path: '/graphql',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': content.length,
      Authorization: 'Bearer 41fbd86d1515fe219ab9f1b9e9ddd8c6ce44fded2df1f6b4360c82e832452400',
    },
  },
  res => {
    if (res.statusCode !== 200) {
      console.log(`Failed with statusCode ${res.statusCode}`);
      return;
    }
    let buffers = [];
    res.on('data', buffer => buffers.push(buffer));
    res.on('end', () => {
      let result = Buffer.concat(buffers);
      console.log(JSON.parse(result));
    });
  }
);
req.write(content);
req.end();
Copy
cURL Example
curl \
  -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer 41fbd86d1515fe219ab9f1b9e9ddd8c6ce44fded2df1f6b4360c82e832452400" \
  --data '{ "query": "{ exchange (exchangeSymbol:\"binance\") { country } }" }' \
  ```

  <https://api.blocktap.io/graphql>
  