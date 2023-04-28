# Lightning Network Payments

WARNING: This feature is experimental!
Blocktap supports a pay-per-request system using micropayments on the Bitcoin Lightning Network.

Using the Lightning Network to make requests to Blocktap consists of a three step process:

Call the Blocktap invoice API (this generates an invoice and a one-time-use API key)
Pay the invoice via the Lightning Network
Use the one-time-use API key to retrieve the results
Lightning Network Channel
To ensure fast payments, we recommend creating a channel with our Lightning Network node:

03df257120256b5f0b87d25659946d42067a094c765bff830eb66d6ffba6f4d5da@38.87.54.164:9735
Copy
Important Notes
This feature is experimental.
The pay-per-request API key is a one-time-use key. After your request to the GraphQL endoint has been made, the key will no longer be valid.
You must send the exact same request body to the /graphql endpoint that was used to generate the invoice with the /api/invoice endpoint. Failure to do so will result in a error.
You cannot reuse your API key, even with the same query. In the future, the results will be cached for a small period of time so that you can retry your request if your connection is interrupted.
Only simple validation of the query is performed when the invoice is generated. We cannot guarantee that your query will execute correctly or return data. For example, using an exchange or asset symbol that is not in the system will return no data. In the future we will add a refund capability for queries that do not execute correctly.
Step 1: Invoice API
The first step is retrieving a lightning network invoice and one-time-use API key from the invoice endpoint.

POST /api/invoice
Content-Type: application/json
Copy
Parameters
The body of the POST request should be Content-Type: application/json. The JSON body can have the following properties similar to sending GraphQL requests:

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

Response
The response will will be Content-Type: application/json and have the following properties:

Name	Type	Description
price	number	Price of the invoice in USD
value	number	Invoice size in millisatoshi (0.00000000001 BTC)
paymentRequest	string	Lightning Network invoice
apikey	string	Blocktap one-time-use API key that can be used after the invoice is paid
An example response is:

```json
{
  "price": 0.0000369897648072,
  "value": 1000,
  "paymentRequest": "lntb10n1pwqtz6wpp5gq7za4fhw247yupn3gfh37fn4v29fss9hctt2t4d3u9pmhehrdrsdqavfkx7cmtw3shqgr5da4k2m3qxy6r2cqzysxq2w5dr7auveh4dsd00eje57ck76805s69eeukfglyl6j7p986fj5fjmyvqaxxrn9vs0r3p9l0phesre3ht3estnz3prrn9l6sjwsqsqr6sfa3",
  "apikey": "20208e84c648179822d968eedf102b5d44ce49da04ef3d63c83ec22834ed3b0b"
}
```

JavaScript Example

```js
let query = `
query market {
  market(exchangeSymbol: "Binance", baseSymbol: "LTC", quoteSymbol: "BTC") {
    marketSymbol
    ticker {
      lastPrice
    }
  }
}`;

fetch('https://api.blocktap.io/api/invoice', {
  method: 'POST',
  header: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ query }),
})
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);
Copy
Node.js Example
let https = require('https');

let query = `
query market {
  market(exchangeSymbol: "Binance", baseSymbol: "LTC", quoteSymbol: "BTC") {
    marketSymbol
    ticker {
      lastPrice
    }
  }
}`;

let payload = JSON.stringify({ query });

let req = https.request(
  {
    host: 'api.blocktap.io',
    method: 'POST',
    path: '/api/invoice',
    header: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(query),
    },
  },
  res => {
    let buffers = [];
    res.on('data', data => buffers.push(data));
    res.on('end', () => {
      let result = Buffer.concat(buffers);
      console.log(JSON.parse(result));
    });
  }
);

req.write(payload);
req.end();
Copy
cURL Example
curl \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{ "query": "{ exchange (exchangeSymbol:\"binance\") { country } }" }' \
  ```

  <https://api.blocktap.io/api/invoice>

Step 3: GraphQL API
Using a pay-per-request API key is similar to a normal API key. Refer to the connecting page for more information about attaching the API key to a request.

GraphiQL Interface
You can view an example of the Lightning Network in action when using the Pay-Per-Request mode in the GraphiQL interface.

When you first execute a query, the interface will prompt you to continue by paying a Lightning Network invoice.

Lightning Network Invoice

Once you have paid the invoice, the Paid button will execute the Blocktap query using your paid one-time-use API key.

Results
