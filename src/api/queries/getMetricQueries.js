/* eslint-disable no-var */

var TIME_BOUNDS = ['1d', '7d', '30d', '60d', '90d', '180d', '365d', '2y', '3y', '5y', '10y']
const SUPPORTED_CURRENCIES = ['USD']
const SUPPORTED_BALANCES = [
  '0-0.001', '0.001-0.01', '0.01-0.1', '0.1-1',
  '1-10', '10-100', '100-1k',
  '1k-10k', '10k-100k', '100k-1M',
  '1M-10M', '10M-inf', 'total'
]

const SOURCE_MAPPING = {
  'TELEGRAM_DISCUSSION_OVERVIEW': 'TELEGRAM',
  'TELEGRAM_CHATS_OVERVIEW': 'TELEGRAM',
  'REDDIT_COMMENTS_OVERVIEW': 'REDDIT',
  'TWITTER_CHATS_OVERVIEW': 'TWITTER',
  'TOTAL': 'TOTAL',
  'ALL': 'TOTAL'
}

const DEFAULT_CURRENCY = 'USD'
const DEFAULT_AGGREGATION = 'null'

const EXCHANGE_TYPE_DEPENDENT_METRICS = ['BINANCE']
const SUPPORTED_EXCHANGES_MAPPING = {
  'BINANCE': 'binance',
  'BITMEX': 'bitmex_perpetual'
}
const SUPPORTED_EXCHANGE_TYPES = ['BUSD', 'USDT']
const DEFAULT_FUNDING_RATE_EXCHANGE = 'BITMEX'
const DEFAULT_EXCHANGE_TYPE = 'USDT'

function prepareOptions_ (options) {
  if ('currency' in options) { options.currency = options.currency || DEFAULT_CURRENCY }
  if ('timeBound' in options) { options.timeBound = options.timeBound || '' }
  if ('interval' in options) { options.interval = options.interval || '1d' }
  if ('aggregation' in options) {
    options.aggregation = (
      options.aggregation === 'null' ? options.aggregation : options.aggregation.toUpperCase()
    ) || DEFAULT_AGGREGATION
  }
  if ('source' in options) { options.source = options.source || 'TOTAL' }
  if ('exchangeType' in options) { options.exchangeType = options.exchangeType || DEFAULT_EXCHANGE_TYPE }
  if ('fundingRateExchange' in options) {
    options.fundingRateExchange = options.fundingRateExchange || DEFAULT_FUNDING_RATE_EXCHANGE
  }
}

function supportedCurrencies_ () {
  return SUPPORTED_CURRENCIES.map(currency => currency.toLowerCase())
}

function supportedBalances_ () {
  return SUPPORTED_BALANCES
}

function exchangeDependentMetrics_ () {
  return EXCHANGE_TYPE_DEPENDENT_METRICS
}

function supportedExchangeTypes_ () {
  return SUPPORTED_EXCHANGE_TYPES
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

  if (Object.keys(SOURCE_MAPPING).indexOf(options.source) >= 0) {
    if (options.source === 'TELEGRAM_DISCUSSION_OVERVIEW') {
      return 'community_messages_count_telegram' // The metric for telegram discussion overview is not social volume
    }
    metricName += `_${(SOURCE_MAPPING[options.source]).toLowerCase()}`
  }

  if (Object.keys(SUPPORTED_EXCHANGES_MAPPING).indexOf(options.fundingRateExchange) >= 0) {
    metricName = `${SUPPORTED_EXCHANGES_MAPPING[options.fundingRateExchange]}_${metricName}`
    if ((exchangeDependentMetrics_()).indexOf(options.fundingRateExchange) >= 0 &&
        (supportedExchangeTypes_()).indexOf(options.exchangeType) >= 0) {
      metricName = `${(options.exchangeType).toLowerCase()}_${metricName}`
    }
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
