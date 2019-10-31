var TIME_BOUNDS = ['1d', '7d', '30d', '60d', '90d', '180d', '365d', '2y', '3y', '5y', '10y']
var CURRENCIES = ['usd']

function currencyOptionChecker_ (options) {
  if ('currency' in options) {
    options.currency = options.currency || 'usd'
  }
}

function timeboundOptionChecker_ (options) {
  if ('timeBound' in options) {
    options.timeBound = options.timeBound || ''
  }
}

function optionsChecker_ (options) {
  currencyOptionChecker_(options)
  timeboundOptionChecker_(options)
}

/*
The metric name will be changed,
depending on the options 'options.currency' and 'options.timeBound', which will respectively
append '_<currency>' and/or _<number><[d|y]> at the end of the name.
*/
function metricNameGenerator_ (metric, options) {
  var metricName = metric

  if (CURRENCIES.indexOf(options.currency) >= 0) {
    metricName += ('_' + options.currency)
  }

  if (options.timeBound !== '' && TIME_BOUNDS.indexOf(options.timeBound) >= 0) {
    metricName += ('_' + options.timeBound)
  }

  return metricName
}

ApiClient_.prototype.fetchGetMetric = function (metric, slug, from, to, options) {
  optionsChecker_(options)
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
