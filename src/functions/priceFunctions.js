function latestPrice_ (slug, currency) {
  var supportedCurrencies = ['USD', 'BTC']

  if (supportedCurrencies.indexOf(currency.toUpperCase()) === -1) {
    throw new UnsupportedError_(currency + ' is not supported! Use any of: ' + supportedCurrencies.join('/'))
  }

  var currencyField = 'price' + currency.charAt(0).toUpperCase() + currency.toLowerCase().slice(1)
  var result = getApiClient_().fetchLatestPrice(slug, currencyField)

  assertHasData_(result)

  return result[currencyField]
}

function dailyClosingPrice_ (slug, day) {
  assertCanAccessHistoricData_(day, slug)
  var endOfDay = beginningOfDaytoEndOfDay_(day)

  var results = getApiClient_().fetchDailyClosingPrice(slug, day, endOfDay)
  assertHasData_(results)

  var result = results[0]

  if ( result == null || !result.hasOwnProperty('closePriceUsd')) {
    throw new NoDataError_()
  }

  return formatNumber_(result.closePriceUsd)
}

function prices_ (slug, from, to) {
  assertCanAccessHistoricData_(from, slug)
  var results = getApiClient_().fetchPrices(slug, from, to)
  assertHasData_(results)

  var headers = ['Date', 'USD Price', 'Volume']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.priceUsd),
      formatNumber_(result.volume)
    ]
  }))
}

function priceOpenClose_ (slug, from, to) {
  assertCanAccessHistoricData_(from, slug)

  var endOfDay = beginningOfDaytoEndOfDay_(to)

  var results = getApiClient_().fetchOhlc(slug, from, endOfDay)
  assertHasData_(results)

  var firstDateResults = results[0]
  var lastDateResults = results[results.length - 1]

  if (firstDateResults == null ||
      lastDateResults == null ||
      !firstDateResults.hasOwnProperty('openPriceUsd') ||
      !lastDateResults.hasOwnProperty('closePriceUsd')) {
    throw new NoDataError_()
  }

  return {
    open: firstDateResults.openPriceUsd,
    close: lastDateResults.closePriceUsd
  }
}

function priceAbsoluteChange_ (slug, from, to) {
  var prices = priceOpenClose_(slug, from, to)
  return prices.close - prices.open
}

function pricePercentChange_ (slug, from, to) {
  var prices = priceOpenClose_(slug, from, to)
  var priceDiff = prices.close - prices.open

  return priceDiff * 100 / prices.open
}

function ohlc_ (slug, from, to) {
  assertCanAccessHistoricData_(from, slug)
  var results = getApiClient_().fetchOhlc(slug, from, to)
  assertHasData_(results)

  var headers = [
    'Date',
    'Close Price USD',
    'High Price USD',
    'Low Price USD',
    'Open Price USD'
  ]

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.closePriceUsd),
      formatNumber_(result.highPriceUsd),
      formatNumber_(result.lowPriceUsd),
      formatNumber_(result.openPriceUsd)
    ]
  }))
}

function priceVolumeDiff_ (currency, slug, from, to) {
  assertCanAccessHistoricData_(from, slug)
  var results = getApiClient_().fetchPriceVolumeDiff(currency, slug, from, to)
  assertHasData_(results)

  var headers = ['Date', 'Price Change', 'Price Volume Diff', 'Volume Change']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.priceChange),
      formatNumber_(result.priceVolumeDiff),
      formatNumber_(result.volumeChange)
    ]
  }))
}
