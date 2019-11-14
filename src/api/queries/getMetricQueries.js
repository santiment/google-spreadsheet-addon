var TIME_BOUNDS = ['1d', '7d', '30d', '60d', '90d', '180d', '365d', '2y', '3y', '5y', '10y']
var SUPPORTED_CURRENCIES = ['USD']
var DEFAULT_CURRENCY = 'USD'

function prepareOptions_ (options) {
  if ('currency' in options) { options.currency = options.currency || DEFAULT_CURRENCY }
  if ('timeBound' in options) { options.timeBound = options.timeBound || '' }
}

function supportedCurrencies_ () {
  return SUPPORTED_CURRENCIES.map(function (currency) { return currency.toLowerCase() })
}

/*
The metric name will be changed,
depending on the options 'options.currency' and 'options.timeBound', which will respectively
append '_<currency>' and/or _<number><[d|y]> at the end of the name.
*/
function metricNameGenerator_ (metric, options) {
  var metricName = metric
  var requestedCurrency = (options.currency || '').toLowerCase()

  if ((supportedCurrencies_()).indexOf(requestedCurrency) >= 0) {
    metricName += ('_' + requestedCurrency)
  }

  if (options.timeBound !== '' && TIME_BOUNDS.indexOf(options.timeBound) >= 0) {
    metricName += ('_' + options.timeBound)
  }

  return metricName
}

ApiClient_.prototype.fetchGetMetric = function (metric, slug, from, to, options) {
  prepareOptions_(options)
  var metricName = metricNameGenerator_(metric, options)
  var query = {
    'query': '{\
       getMetric(metric: "' + metricName + '") {\
          timeseriesData(from: "' + toUTC_(from) + '",\
                         to: "' + toUTC_(to) + '",\
                         slug: "' + slug + '",\
                         interval: "1d"){\
                           datetime\
                           value\
          }\
      }\
    }'
  }

  return this.conn.graphQLQuery(query, 'getMetric')
}