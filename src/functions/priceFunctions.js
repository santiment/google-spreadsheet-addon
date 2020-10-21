function latestPrice_ (slug, currency) {
  const supportedCurrencies = ['USD', 'BTC']

  if (supportedCurrencies.indexOf(currency.toUpperCase()) === -1) {
    throw new UnsupportedError_(`${currency} is not supported! Use any of: ${supportedCurrencies.join('/')}`)
  }

  const currencyField = `price${currency.charAt(0).toUpperCase()}${currency.toLowerCase().slice(1)}`
  const result = getApiClient_().fetchLatestPrice(slug, currencyField)

  assertHasData_(result)

  return result[currencyField]
}

function dailyClosingPrice_ (slug, day) {
  const endOfDay = beginningOfDaytoEndOfDay_(day)

  const results = getApiClient_().fetchDailyClosingPrice(slug, day, endOfDay)
  assertHasData_(results)

  const result = results[0]

  if (result == null || !Object.prototype.hasOwnProperty.call(result, 'closePriceUsd')) {
    throw new NoDataError_()
  }

  return formatNumber_(result.closePriceUsd)
}

function prices_ (slug, from, to, interval='1d') {
  const results = getApiClient_().fetchPrices(slug, from, to, interval)
  assertHasData_(results)

  if (interval.includes('d')) {
    datetimeField = 'date'
  } else {
    datetimeField = 'datetime'
  }

  const headers = ['Date', 'USD Price', 'Volume']
  return [headers].concat(results.map(result =>
    [
      formatDatetimeField_(result.datetime, datetimeField),
      formatNumber_(result.priceUsd),
      formatNumber_(result.volume)
    ]
  ))
}

function priceOpenClose_ (slug, from, to) {
  const endOfDay = beginningOfDaytoEndOfDay_(to)

  const results = getApiClient_().fetchOhlc(slug, from, endOfDay)
  assertHasData_(results)

  const firstDateResults = results[0]
  const lastDateResults = results[results.length - 1]

  if (firstDateResults == null ||
      lastDateResults == null ||
      !Object.prototype.hasOwnProperty.call(firstDateResults, 'openPriceUsd') ||
      !Object.prototype.hasOwnProperty.call(lastDateResults, 'closePriceUsd')) {
    throw new NoDataError_()
  }

  return {
    open: firstDateResults.openPriceUsd,
    close: lastDateResults.closePriceUsd
  }
}

function priceAbsoluteChange_ (slug, from, to) {
  const prices = priceOpenClose_(slug, from, to)
  return prices.close - prices.open
}

function pricePercentChange_ (slug, from, to) {
  const prices = priceOpenClose_(slug, from, to)
  const priceDiff = prices.close - prices.open

  return priceDiff * 100 / prices.open
}

function ohlc_ (slug, from, to) {
  const results = getApiClient_().fetchOhlc(slug, from, to)
  assertHasData_(results)

  const headers = [
    'Date',
    'Open Price USD',
    'High Price USD',
    'Low Price USD',
    'Close Price USD'
  ]

  return [headers].concat(results.map(result =>
    [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.openPriceUsd),
      formatNumber_(result.highPriceUsd),
      formatNumber_(result.lowPriceUsd),
      formatNumber_(result.closePriceUsd)
    ]
  ))
}

function priceVolumeDiff_ (currency, slug, from, to) {
  const results = getApiClient_().fetchPriceVolumeDiff(currency, slug, from, to)
  assertHasData_(results)

  const headers = ['Date', 'Price Change', 'Price Volume Diff', 'Volume Change']

  return [headers].concat(results.map(result =>
    [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.priceChange),
      formatNumber_(result.priceVolumeDiff),
      formatNumber_(result.volumeChange)
    ]
  ))
}
