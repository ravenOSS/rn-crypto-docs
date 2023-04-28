# GraphQL Basics

GraphQL is an API query language developed by Facebook and maintained by the GraphQL Foundation. The power of GraphQL is that the query writer is in control of how data is returned.

As a user of a Blocktap you will need to use the GraphQL language to write queries for information that you want. When you send a query to the server, the server will interpret the query and return data in the same structure as requested.

In this tutorial, we will write a few simple queries, break down the syntax, and show the corresponding results to help you understand GraphQL queries.

First things first
Every query has at least three parts. These three parts form the basis for the language:

Specify the operation you want to perform, which is querying.
Specify which object(s) you want inside your query.
Specify, for each object, the fields of data you want to retrieve.
The rest is just syntax!

Finding Bitcoin
You will start with the simplest possible query, finding a single asset in Blocktap.

Concretely, the query looks like:

```json
query myquery {
  asset(assetSymbol: "BTC") {
    assetName
    assetSymbol
    assetType
  }
}
```

query myquery { constructs a new query operation named mysquery. You can name the query anything you want. This line ends with an open curly brace { to denote the start of the contents of the query. Once we are done writing the query, the last line will be a closing curly brace } denoting the end of the query.
asset(assetSymbol:"BTC") { requests a asset object. In particular, we specify that we want to find the asset object that has assetSymbol equal to "BTC". The symbol is text, so it must be wrapped in double-quotes. Lastly, we end this line with another open curly brace { to denote that we want to fetch fields for the asset.
assetName is a field of the asset, the common name of the asset.
assetSymbol is also a field of the asset, the symbol of the asset.
assetType is also a field of the asset, the category of the asset.
} ends the asset object fields
} ends the query operation
Remember the three parts of a GraphQL query.

Part 1, specifying the operation, is found in line 1.
Part 2, specifying the object, is found in line 2.
Part 3, specifying the fields of the object, is found in lines 3, 4, and 5.
The results will be JSON in the following format:

```json
{
  "data": {
    "asset": {
      "assetName": "Bitcoin",
      "assetSymbol": "BTC",
      "assetType": "Coin"
    }
  }
}
```

Notice that the results have a similar structure of the query.

Finding the current price of Bitcoin USDT on Binance
The next example finds the current price of Bitcoin in US Dollars on the exchange Binance. This query is similar to the previous query with two exceptions. We have more filtering criteria and we have a sub-object that we want to retrieve fields from.

The query looks like this:

```json
query binanceQuery {
  market(exchangeSymbol: "Binance", baseSymbol: "BTC", quoteSymbol: "USDT") {
    marketSymbol
    ticker {
      lastPrice
    }
  }
}
```

Breaking this down line by line:

query binanceQuery { constructs a new query named binanceQuery and uses a open curly brace { to denote the start of the contents of the query.
market(exchangeSymbol: "Binance", baseSymbol: "BTC", quoteSymbol: "USDT") { requests that we find a market that matches three critiera: the exchange is "Binance", the baseSymbol is "BTC" and the quoteSymbol is "USDT". Again this uses a { curly brace to denote that we are fetching fields of the market object.
marketSymbol retrieves the symbol for the market.
ticker is an sub-object on a market that has its own fields. We use the { open curly brace to denote the subsequent fields are part of this object.
lastPrice is a field of the ticker object and contains the last traded price for the market's ticker.
} end ticker fields
} end market fields
} end the query
As you can see, this query was similar to the first, but we introduced the ticker object that lives inside of markets. The lesson here is that root level objects can have sub-object with their own fields. Sub-object can also have their own sub-objects!

You may be wondering how you know what the objects and fields are available. You can refer to the Object Types documentation for a list of options.

The response of the above query will be a JSON result that looks like:

```json
{
  "data": {
    "market": {
      "marketSymbol": "Binance:BTC/USDT",
      "ticker": {
        "lastPrice": "3487.00000000"
      }
    }
  }
}
```

Finding the current price of Bitcoin USDT on all exchanges
This example highlights one of the more powerful features of Blocktap, filtering. In this example, instead of returning a single result, we will return a list of markets that match our criteria.

We will also use the market filter object to perform this filtering. For each market matching our filter criteria we will return the last tick price.

The query looks like:

```json
query someMarkets {
  markets(filter: { baseSymbol: { _eq: "BTC" }, quoteSymbol: { _eq: "USD" } }) {
    marketSymbol
    ticker {
      lastPrice
    }
  }
}
```

Breaking this down line by line:

query someMarkets { constructs a new query named someMarkets and uses a open curly brace { to denote the start of the contents of the query
markets(filter: { baseSymbol: {_eq: "BTC"}, quoteSymbol: {_eq: "USD" }}) { will return a list of markets. This is different than the market object type previously used which only returns a single market. This line also includes a parameter filter. Instead of a string, it is a an object that includes fields specifying that the base symbol should equal "BTC" and the quote symbol should equal "USD". The part that looks like {_eq: "BTC"} is known as the operation.
marketSymbol for each market, return the market symbol
ticker for each market, return the ticker object and use the open curly brace { to specify the ticker fields
lastPrice is the ticker field with the last traded price
} end ticker fields
} end market fields
} end query
The response would look like this...

```json
{
  "data": {
    "markets": [
      {
        "marketSymbol": "Bitfinex:BTC/USD",
        "ticker": {
          "lastPrice": "3635.80000000"
        }
      },
      {
        "marketSymbol": "bitFlyer:BTC/USD",
        "ticker": {
          "lastPrice": "3489.11000000"
        }
      },
      {
        "marketSymbol": "Bitstamp:BTC/USD",
        "ticker": {
          "lastPrice": "3498.48000000"
        }
      },
      {
        "marketSymbol": "Bittrex:BTC/USD",
        "ticker": {
          "lastPrice": "3490.00500000"
        }
      },
      {
        "marketSymbol": "CoinbasePro:BTC/USD",
        "ticker": {
          "lastPrice": "3499.17000000"
        }
      },
      {
        "marketSymbol": "Gemini:BTC/USD",
        "ticker": {
          "lastPrice": "3496.91000000"
        }
      }
    ]
  }
}
```

As you can see, we returned a list of markets. This is different than the previous examples that returned a single market. The key difference is that we requested markets object instead of the market object.

The neat thing is that the fields for both markets and market remain the same. When we request an object that returns a list, the fields we specify in the query are the same as the fields for a single result.

The most complicated part of the above query is the filtering. The filter parameter is an object. The syntax for filtering can be tricky, but it follows the same convention that we use for other objects. We use the open curly brace { and end curly brace } to specify what we want inside the object. In this example, the filter object contains two field baseSymbol and quoteSymbol. Each of those field has a value that is also an object called the operator. The operator looks like {_eq: "BTC"} and specifies the type and value of the operation. Combining the field and operator creates a filter, which looks like: { baseSymbol: {_eq: "BTC"} }.

You may have noticed in prior examples when querying a singlar market that we provided strings to the input fields: market(exchangeSymbol: "Binance", baseSymbol: "BTC", quoteSymbol: "USDT").

In the current example we are querying multiple objects via markets. While the filter object has similarly named fields, baseSymbol and quoteSymbol, these filters use operator objects {_eq: "BTC"} and {_eq:"USDT"} instead of strings.

This difference exists because parameters on single objects, market, always perform equality operations. When multiple objects are queried, such as with markets, we can perform additional operations, such as greater than, less than, like, or in.

You can read more about filtering in the filter, sort, and page documentation.

Aliases
What happens if we want to compare the price of two different markets? There are a few ways to do this. But one useful aspect of GraphQL is aliasing.

Aliases allow you to request data from the same object or field but under a different name, an alias. For example if you want to compare the price of two different currencies you would need to request two market objects, you can use aliases to do this in a single query.

```json
query Price {
  BTCUSDT: market(baseSymbol: "BTC", quoteSymbol: "USDT", exchangeSymbol: "Binance") {
    ticker {
      lastPrice
    }
  }
  LTCUSDT: market(baseSymbol: "LTC", quoteSymbol: "USDT", exchangeSymbol: "Binance") {
    ticker {
      lastPrice
    }
  }
}
```

The response would be the following...

```json
{
  "data": {
    "BTCUSDT": {
      "ticker": {
        "lastPrice": "4039.99000000"
      }
    },
    "LTCUSDT": {
      "ticker": {
        "lastPrice": "32.87000000"
      }
    }
  }
}
```

All we did is add a name to each field, in this case BTCUSDT: and LTCUSDT:. If we didn't add the alias, GraphQL would have a syntax error stating that we have duplicate objects called market. You'll also notice that the results have properties that match the alias as well.

Further Reading
For more indepth review of GraphQL syntax, we recommend reading the GraphQL Documentation.

You can learn more about the object types in Blocktap in the Object Types documentation.
