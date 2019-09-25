function getMetric_ (metric, slug, from, to, timeBound) {
  if ((typeof (timeBound) === 'undefined') || (timeBound === null)) {
    var reworkedTimeBound = ''
  } else {
    reworkedTimeBound = timeBound
  }

  var results = getApiClient_().fetchGetMetric(metric, slug, from, to, reworkedTimeBound)
  assertHasData_(results)

  var headers = ['Date', 'Value']
  return [headers].concat(results.timeseriesData.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.value)
    ]
  }))
}
