ApiClient_.prototype.fetchGetMetric = function (metric, slug, from, to, timeBoundSuffix) {
  var timeBound = ['', '1d', '7d', '30d', '60d', '90d', '180d', '365d', '2y', '3y', '5y', '10y']
  var timeBoundMetrics = [
    'mean_realized_price_usd',
    'mvrv_usd',
    'circulation',
    'realized_value_usd'
  ]

  if (timeBoundSuffix !== '') {
    if ((timeBound.indexOf(timeBoundSuffix) !== -1) && (timeBoundMetrics.indexOf(metric) !== -1)) {
      var reworkedTimeBound = '_' + timeBoundSuffix
    } else {
      throw Error
    }
  } else {
    reworkedTimeBound = ''
  }

  var query = {
    'query': '{\
       getMetric(metric: "' + metric + reworkedTimeBound + '") {\
          timeseriesData(from: "' + toUTC_(from) + '",\
                         to: "' + toUTC_(to) + '",\
                         slug: "' + slug + '"){\
                            datetime\
                            value\
          }\
      }\
    }'
  }

  return this.conn.graphQLQuery(query, 'getMetric')
}
