/* eslint-disable no-var */

var TIME_BOUNDS = ['1d', '7d', '30d', '60d', '90d', '180d', '365d', '2y', '3y', '5y', '10y']
const SUPPORTED_CURRENCIES = ['USD']
const SUPPORTED_BALANCES = [
  '0-0.001', '0.001-0.01', '0.01-0.1', '0.1-1',
  '1-10', '10-100', '100-1k',
  '1k-10k', '10k-100k', '100k-1M',
  '1M-10M', '10M-inf', 'total'
]
const DEFAULT_CURRENCY = 'USD'
const DEFAULT_AGGREGATION = 'null'

function prepareOptions_ (options) {
  if ('currency' in options) { options.currency = options.currency || DEFAULT_CURRENCY }
  if ('timeBound' in options) { options.timeBound = options.timeBound || '' }
  if ('interval' in options) { options.interval = options.interval || '1d' }
  if ('aggregation' in options) {
    options.aggregation = (
      options.aggregation === 'null' ? options.aggregation : options.aggregation.toUpperCase()
    ) || DEFAULT_AGGREGATION
  }
}

function supportedCurrencies_ () {
  return SUPPORTED_CURRENCIES.map(currency => currency.toLowerCase())
}

function supportedBalances_ () {
  return SUPPORTED_BALANCES
}

/*
The metric name will be changed,
depending on the options 'options.currency' and 'options.timeBound', which will respectively
append '_<currency>' and/or _<number><[d|y]> at the end of the name.
*/
function metricNameGenerator_ (metric, options) {
  let metricName = metric
  const requestedCurrency = (options.currency || '').toLowerCase()
  const requestedBalance = (options.balance || '')

  if ((supportedCurrencies_()).indexOf(requestedCurrency) >= 0) {
    metricName += `_${requestedCurrency}`
  }

  if ((supportedBalances_()).indexOf(requestedBalance) >= 0) {
    metricName += `_${requestedBalance.replace('-', '_to_')}`
  }

  if (options.timeBound !== '' && TIME_BOUNDS.indexOf(options.timeBound) >= 0) {
    metricName += `_${options.timeBound}`
  }

  return metricName
}

ApiClient_.prototype.fetchGetMetric = function (metric, slug, from, to, options) {
  prepareOptions_(options)
  const metricName = metricNameGenerator_(metric, options)
  const query = {
    'query': `{
       getMetric(metric: "${metricName}") {
          timeseriesData(${commonParams(slug, from, to, options.interval)}){
                           datetime
                           value
          }
      }
    }`
  }

  return this.conn.graphQLQuery(query, 'getMetric')
}

ApiClient_.prototype.fetchAggregatedGetMetric = function (metric, slug, from, to, options) {
  prepareOptions_(options)
  const metricName = metricNameGenerator_(metric, options)
  const query = {
    'query': `{
       getMetric(metric: "${metricName}") {
          aggregatedTimeseriesData(${commonParamsAggregated(slug, from, to, options.aggregation)})
        }
    }`
  }

  return this.conn.graphQLQuery(query, 'getMetric')
}
