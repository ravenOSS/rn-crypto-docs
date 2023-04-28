# Blocktap API Docs

Object Types
Blocktap queries are separated into the following high-level object types.

Asset: A coin, token, or other asset

Bitcoin: Additional information for Bitcoin

Assets: An array of asset objects

Exchange: An organization that allows trading of via markets

Exchanges: An array of exchange objects

Market: A single trading pair on an exchange

OHLCV: An array of OHLCV data belonging to a market

Markets: An array of market objects

Time Series: Any data that changes over time. Includes market, asset, and exchange metrics

Bitcoin Time Series: Additional time series data for Bitcoin
Tools

Filtering Sorting and Paging: Fields that return an array that could potentially be very large can be filtered, sorted and paged

```json
query AssetType {
  assets(filter: {
    assetType: {
      _in:[Index, ETF, Fiat]
    }
  }) {
 
   assetName
    assetType
  }
}
```
  
  ```json
  query CurrentSupply {
  assets(filter: {
    currentSupply: {
      _gt: 1000000 # greater than 1,000,000
    }
  }) {
    assetName
  }
}
```

``` json
query MarketCap {
  assets(filter: {
    marketCap: {
      _gt: 1000000
    }
  }) {
    assetName
  }
}
```

```json
query MarketCapRank {
  assets(filter: {
    marketCapRank: {
      _lte: 10 # less than or equal to 10
    }
  }, sort: {
    marketCapRank: ASC
  }) {
    assetName
  }
}
```

```json
query AssetName {
  assets(filter: {
    assetName: {
      _like: "%coin"
    }
  }) {
    
ssetName
  }
}
```

```json
query AssetSymbol {
  assets(filter: {
    assetSymbol: {
      _in: ["BTC", "LTC", "ETH"]
    }
  }) {
    assetName
  }
}
```

```json
query TotalSupply {
  assets(filter: {
    totalSupply: {
      _gt: 1000000 # greater than 1,000,000
    }
  }) {
    assetName
  }
}
```

```json
query AndFilter {
  assets(filter: {
    _and: [
      { assetName:{ _like: "%coin%" }},
      { marketCap:{ _gt: 1000000 }}
    ]
  }){
    assetName
  }
}
```

```json
query OrFilter {
  assets(filter: {
    _or: [
      { assetName: { _like: "%bit%" } }
      { 
assetSymbol: { _like: "%bit%" } }
    ]
  }){
    assetName
    assetSymbol
  }
}
```

```json
query Exchanges {
  exchanges(filter: {
    country: {
      _in: ["US", "CA"]
    }
  }) {
    exchangeName
    country
  }
}
```

```json
query Exchanges {
  exchanges(filter: {
    exchangeName: {
      _eq: "Kraken"
    }
  }) {
    exchangeName
    country
  }
}
```

```json
query Exchanges {
  exchanges(filter: {
    exchangeSymbol: {
      _eq: "Kraken"
    }
  }) {
    exchangeName
    country
  }
}
```

```json
query Exchanges {
  exchanges(filter: {
    fundingDepositType: {
      _eq: FlatFee
    }
  }) {
    exchangeName
    country
  }
}
```

```json
query Exchanges {
  exchanges(filter: {
    fundingWithdrawalType: {
      _eq: FlatFee
    }
  }) {
    exchangeName
    country
  }
}
```

```json
query Exchanges {
  exchanges(filter: {
    spotFeeDiscountType: {
      _eq: Volume
    }
  }) {
    exchangeName
    country
  }
}
```

```json
query Exchanges {
  exchanges(filter: {
    spotFeeType: {
      _eq: Percentage
    }
  }) {
    exchangeName
    country
  }
}
```

```json
query MarketsByBaseSymbol {
  markets(filter: {
    baseSymbol: {
      _eq: "BTC"
    }
  }) {
    marketSymbol
  }
}
```

```json
query MarketsByExchange {
  markets(filter: {
    exchangeSymbol: {
      _like: "%binance%"
    }
  }) {
    marketSymbol
  }
}
```

```json
query MarketsByOpenedOn {
  markets(filter: {
    openedOn: {
      _lt:1565970351
    }
  }) {
    openedOn
  }
}
```

```json
query MarketsBySymbol {
  markets(filter: {
    marketSymbol: {
      _eq:"Binance:ADA/BNB"
    }
  }) {
    marketSymbol
  }
}
```

```json
query MarketsByType {
  markets(filter:{
    marketType:{
      _in:[Futures, Swap]
    }
  }) {
    marketSymbol
  }
}
```

```json
query MarketsByQuoteSymbol {
  markets(filter: {
    quoteSymbol: {
      _eq: "BTC"
    }
  }) {
    marketSymbol
  }
}
```

```json
query market {
  market(marketSymbol: "Binance:BTC/USDT") {
    id
    marketType
  }
}
```

```json
query markets {
  markets(filter: {
    baseAsset: {
      assetName: { _like: "%bit%" }
      marketCap: { _gt: 1000000 }
    }
  }) {
    marketSymbol
    openedOn
  }
}
```

```json
query markets {
  markets(filter: {
    quoteAsset: {
      assetName: { _like: "%bit%" }
      marketCap: { _gt: 1000000 }
    }
  }) {
    marketSymbol
    openedOn
  }
}
```

```json
query markets {
  markets(marketSymbol: "Binance:BTC/USDT") {
    id
    marketType
  }
}
```

```json
query markets {
  markets(marketSymbol: "Binance:*/USDT") {
    id
    marketType
  }
}
```

```json
query markets {
  markets(marketSymbol: "*:BTC/*") {
    id
    marketType
  }
}
```

```json
query markets {
  markets(marketSymbol: "*:*/USDT") {
    id
    marketType
  }
}
```

```json
query markets {
      markets(marketSymbol: "Binance:BTC/*") {
        id
        marketType
      }
    }
```

```json
query markets {
      markets(marketSymbol: "Binance:*/*") {
        id
        marketType
      }
    }
```

```json
query SingleAsset {
  asset(assetSymbol: "BTC") {
    assetName
  }
}
```

```json
query Timeseries {
  timeseries(resolution:_1m limit: 5) {
    startUnix
    startDate
  }
}
```

```json
query Exchanges {
  exchanges(page: {
    skip:0
    limit:10
  }) {
    exchangeName
    country
  }
}
```

```json
query PageAssets {
  assets(page: {
    skip: 0,
    limit: 10
  }) {
    assetName
  }
}
```

```json
query Timeseries {
  timeseries(resolution:_1m) {
    startUnix
    startDate
  }
}
```

```json
query Exchanges {
  exchanges {
    country
  }
}
```

```json
query Exchanges {
  exchanges {
    fundingWithdrawalType
    fundingDepositType
    spotFeeType
    spotFeeDiscountType
  }
}
```

```json
query Exchanges {
  exchanges {
    marketCount
  }
}
```

```json
query ExchangesMarkets {
  exchanges (filter:{
    country:{
      _in: ["US", "JP"]
    }
  }) {
    markets(filter:{
      baseSymbol: {
        _eq:"BTC"
      }
    }) {
      marketSymbol
    }
  }
}
```

```json
query Exchanges {
  exchanges {
    exchangeSymbol
    exchangeName
  }
}

```json
query asset {
  asset(assetSymbol:"BTC") {
    currentSupply
    totalSupply
  }
}
```

```json
query asset {
  asset(assetSymbol:"BTC") {
    marketCap
    marketCapRank
  }
}
```

```json
query AssetMarkets {
  asset(assetSymbol:"BTC") {
    markets {
      marketSymbol
    }
  }
}
```

```json
query asset {
  asset(assetSymbol:"BTC") {
    id
    assetName
    assetSymbol
  }
}
```

```json
query asset {
  asset(assetSymbol:"BTC") {
    targetBlockTime
  }
}

```

```json
query asset {
  asset(assetSymbol:"BTC") {
    assetType
  }
}
```

```json
query MarketCandles {
  markets(marketSymbol:"Binance:BTC/USDT") {
    ohlcv(resolution: _4h, limit:10, startDate:"2019-01-01", sort:OLD_FIRST)
  }
}
```

```json
query MarketTicker {
  markets(marketSymbol:"Binance:BTC/USDT") {
    ticker {
      percentChange
      lastPrice
      lowPrice
      highPrice
      baseVolume
      quoteVolume
    }
  }
}
```

```json
query markets {
  markets(marketSymbol:"Binance:*/USDT") {
    exchangeSymbol
    baseSymbol
    quoteSymbol
  }
}
```

```json
query markets {
  markets(marketSymbol:"Binance:BTC/USDT") {
    openedOn
    openedOnDate
  }
}
```

```json
query markets {
  markets(marketSymbol:"Binance:BTC/USDT") {
    remoteId
  }
}
```

```json
query markets {
  markets(marketSymbol:"Binance:*/USDT") {
    marketType
    marketSymbol
  }
}
```

```json
query Exchange {
  exchange(exchangeSymbol:"Binance") {
    country
    marketCount
  }
}
```

```json
query Timeseries {
  timeseries(resolution:_1h sort: NEW_FIRST) {
    startUnix
    startDate
  }
}
```

```json
query Exchanges {
  exchanges(sort:{
    exchangeSymbol:ASC
  }) {
    exchangeName
    country
  }
}
```

```json
query PageAssets {
  assets(sort: [
    { assetType: DESC }
    { marketCapRank: ASC }  ]) {
    assetName
    assetSymbol
  }
}
```

```json
query Timeseries {
  timeseries(resolution:_1h startDate: "2019-01-01" endDate: "2019-01-02") {
    startUnix
    startDate
  }
}
```

```json
query Timeseries {
  timeseries(resolution:_1m startUnix: 1565990233 endUnix: 1565990333) {
    startUnix
    startDate
  }
}
```

## Example Queries

Find assets filtered by asset type
Assets can be filtered by their asset type. The asset type is an Enum that indicates if an asset represents a coin, token, fiat currency, etc. To find a list of assets which belong to Index, ETF or Fiat types use the following query.

Find assets filtered by current supply
Assets can be filtered by their current supply. To find a list of assets which have a supply greater than 1,000,000 use the following example.

Find assets filtered by market cap
Assets can be filtered by their market cap in USD. To find a list of assets which have a market cap greater than 1,000,000 USD use the following example.

Find assets filtered by market cap rank
Assets can be filtered by their market cap rank. Use the following example to find the list of top 10 assets with the lowest market cap rank (meaning the highest value since rank 1 is worth the most) sorted by their market cap.

Find assets filtered by name
To find many assets by their name, we can use the assetName filter option. To filter assets with the suffix of "coin", use the following example. (The percent character (%) is a wildcard)

Find assets filtered by symbol
To find a list of assets by their symbol use the following example

Find assets filtered by total supply
Assets can be filtered by their total supply, that is, the maximum number of units of an asset that will ever be available. To find a list of assets which have a total supply greater than 1,000,000 use the following example.

Find assets using complex filter "and"
Assets can be filtered with complex, nested queries. The "_and" operator returns only assets that match all of the filters inside of the_and array. For example, to find a list of assets which have the string "coin" in the name AND have a market cap greater than 1,000,000 USD, use the following query.

Find assets using complex filter "or"
Assets can be filtered with complex, nested queries. The "_or" operator returns assets that match any of the filters inside of the_or array. For example, to write a query that acts as a simple asset name or symbol search we could use the following query

Find exchange by country
How to find exchanges by country

Find exchange by exchange name
How to find exchanges by their exchange symbol

Find exchange by exchange symbol
How to find exchanges by their exchange symbol

Find exchange by funding deposit type
How to find exchanges by their funding deposit type.

Find exchange by funding withdrawal type
How to find exchanges by their funding withdrawal type.

Find exchange by spot fee discount type
How to find exchanges by how they offer discounts on spot trading
Find exchange by spot fee type

How to find exchanges by how they chart for spot fee trading
Find market by base symbol

To filter a market by base symbol, use the following example.
Find market by exchange

To filter a market by it's exchange, use the following example.

Find market by market open timestamp
Markets can be filtered by the unix timestamp at which they were opened. The timestamp is an integer and can use the standard integer filters such as _lt,_gt, and _eq.

Find market by market symbol
To filter a market by it's symbol, use the following example.

Find market by market type
To filter a market by it's type, use the following example.

Find market by quote symbol
To filter a market by base symbol, use the following example.

Find market by symbol
Find a single market by it's symbol. Market symbol is in the form of "Exchange:BASE/QUOTE" and will only return spot markets.

Find market with base asset filtering
Markets can be filtered by their base assets. Any asset filter can be used. The baseAsset filter has an implicit_and so you can include several filters easily at once.

Find market with quote asset filtering
Markets can be filtered by their quote assets. Any asset filter can be used. The quoteAsset filter has an implicit_and so you can include several filters easily at once.

Find markets by their complete market symbols
Markets can be found using a complete market symbol. Market symbol is in the form of "Exchange:BASE/QUOTE" and will only return spot markets.

Find markets by their partial symbol (no base asset)
Markets can be found using a partial market symbol. Market symbol is in the form of "Exchange:BASE/QUOTE" and will only return spot markets. If the base asset is replaced with a wildcard, all markets that match the exchange and quote will be returned.

Find markets by their partial symbol (no exchange or base asset)
Markets can be found using a partial market symbol. Market symbol is in the form of "Exchange:BASE/QUOTE" and will only return spot markets. If the exchange and base asset are replaced with a wildcard, all markets that match the quote asset will be returned.

Find markets by their partial symbol (no exchange or quote asset)
Markets can be found using a partial market symbol. Market symbol is in the form of "Exchange:BASE/QUOTE" and will only return spot markets. If the exchange and quote asset are replaced with a wildcard, all markets that match the base asset will be returned.

Find markets by their partial symbol (no quote asset)
Markets can be found using a partial market symbol. Market symbol is in the form of "Exchange:BASE/QUOTE" and will only return spot markets. If the quote asset is replaced with a wildcard, all markets that match the exchange and base will be returned.

Find markets by their partial symbol (no quote or base asset)
Markets can be found using a partial market symbol. Market symbol is in the form of "Exchange:BASE/QUOTE" and will only return spot markets. If the quote and base asset are replaced with a wildcard, all markets that match the exchange will be returned.

Find single asset
Find information for a single asset. An asset can be found using it's assetSymbol.

Limit
Limit the number of total timeseries items returned with the limit argument. The following example will return 5 minutes worth of information.

Paging
It may be useful at times to limit the number of exchanges being requested in a single query (eg: pagination). Use a page filter to limit and skip a number of exchanges.

Paging assets
It may be useful at times to limit the number of assets being requested in a single query (eg: pagination). Use a page filter to limit and skip a number of assets.

Resolution
Timeseries items represent a period of time. Thus a resolution of how much time each timeseries item contains data for must be provided. To return blocks where each period represents a single minute we can pass a resolution of_1m.

Return an exchanges country
To return an exchanges country, use the following example

Return an exchanges funding information
Blocktap has information on exchange's funding scheme. How they charge for deposits, withdrawals, spot fees, and spot fee discount type.

Return an exchanges market count
To return the number of markets in an exchange, use the following example
Return an exchanges markets

Markets can be accessed by exchange. Any standard market information and filtering, sorting, and paging can be used.

Return an exchanges symbol and name
To return the name and symbol of an exchange, use the following example

Return asset current and total supply
How to return an assets current and total supply

Return asset market cap and rank
How to return an assets market cap and rank

Return asset markets
How to return markets an asset is traded on. Standard market filters can be applied

Return asset name, symbol
How to return an assets name and symbol

Return asset target block time
How to return an assets target block time

Return asset type
How to return an assets type

Return market candle OHLCV history
How to return candle information for a market. Candles are returned as an array of arrays where each inner array represents a candle in the form of... 0: Unix timestamp in seconds 1: Open price+ 2: High price 3: Low price 4: Close price 5: Total volume

Return market current ticker
How to return a markets current ticker with current price, last price, low price, high price, base volume, and quote volume.

Return market exchange, base, and quote symbol
How to return a markets exchange, base, and quote symbol

Return market open date and unix timestamp
How to return a markets open date and unix timestamp

Return market remote ID
How to return a markets remote ID

Return market type and symbol
How to return a markets type and symbol

Return single exchange
How to return a single exchange

Sort
The order timeseries items are returned can be sorted by new first or old first.

Sorting
Exchanges may be sorted by a number of fields. To sort by the exchange name, use the following query.

Sorting assets
Assets may be sorted by a number of fields at the same time. To sort first by the type of asset in a descending order, then by the market cap rank in an ascending order, use the following query.

Start and end date
To request a predefined chunk of time, one can use startDate and endDate. This will return as many time slices as it takes at the defined resolution to fill out data until the specified endDate. If a limit is provided it will return the number in limit or go to endDate whichever is less.

Start and end unix
To request a predefined chunk of time, one can use startUnix and endUnix and supply unix timestamps. This will return as many time slices as it takes at the defined resolution to fill out data until the specified endUnix. If a limit is provided it will return the number in limit or go to endUnix whichever is less.
