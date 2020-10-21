ApiClient_.prototype.fetchPrices = function (slug, from, to, interval) {
  const query = {
    'query': `{
       historyPrice(${commonParams(slug, from, to, interval)}) {
         datetime
         priceUsd
         volume
       }
     }`
  }

  return this.conn.graphQLQuery(query, 'historyPrice')
}

ApiClient_.prototype.fetchOhlc = function (slug, from, to) {
  const query = {
    'query': `{
       ohlc(${commonParams(slug, from, to)}) {
         datetime
         closePriceUsd
         highPriceUsd
         lowPriceUsd
         openPriceUsd
       }
    }`
  }

  return this.conn.graphQLQuery(query, 'ohlc')
}

ApiClient_.prototype.fetchPriceVolumeDiff = function (currency, slug, from, to) {
  const query = {
    'query': `{
       priceVolumeDiff(currency: "${currency}",
                       ${commonParams(slug, from, to)}) {
         datetime
         priceChange
         priceVolumeDiff
         volumeChange
       }
     }`
  }

  return this.conn.graphQLQuery(query, 'priceVolumeDiff')
}

ApiClient_.prototype.fetchDailyClosingPrice = function (slug, from, to) {
  const query = {
    'query': `{
       ohlc(${commonParams(slug, from, to)}) {
         closePriceUsd
       }
    }`
  }

  return this.conn.graphQLQuery(query, 'ohlc')
}

ApiClient_.prototype.fetchLatestPrice = function (slug, currencyField) {
  const query = {
    'query': `{ projectBySlug(${slugParam(slug)}) { ${currencyField} }}`
  }

  return this.conn.graphQLQuery(query, 'projectBySlug')
}
