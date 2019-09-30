var timeBound = ['', '1d', '7d', '30d', '60d', '90d', '180d', '365d', '2y', '3y', '5y', '10y']
var currencies = ['usd']

function optionsChecker (options) {
  if ('currency' in options) {
    options.currency = options.currency || 'usd'
    if (currencies.indexOf(options.currency) === -1) {
      throw new Error('This is not a valid currency')
    }
  }
  if ('timeBound' in options) {
    options.timeBound = options.timeBound || ''
    if (timeBound.indexOf(options.timeBound) === -1) {
      throw new Error('This is not a valid timebound suffix')
    }
  }
}

/*
The metric name will be changed,
depending on the options 'options.currency' and 'options.timeBound', which will respectively
append '_<currency>' and/or _<number><[d|y]> at the end of the name.
*/
function metricNameGenerator (metric, options) {
  var metricName = metric

  if (currencies.indexOf(options.currency) >= 0) {
    metricName += ('_' + options.currency)
  }

  if (options.timeBound !== '' && timeBound.indexOf(options.timeBound ) >= 0) {
    metricName += ('_' + options.timeBound)
  }

  return metricName
}

ApiClient_.prototype.fetchGetMetric = function (metric, slug, from, to, options) {
  optionsChecker(options)
  var metricName = metricNameGenerator(metric, options)
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
