function getMetric_ (metric, slug, from, to, options) {
  var results = getApiClient_().fetchGetMetric(metric, slug, from, to, options)
  assertHasData_(results)

  var headers = ['Date', 'Value']
  return [headers].concat(results.timeseriesData.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.value)
    ]
  }))
}
