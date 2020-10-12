function getMetric_ (metric, slug, from, to, options) {
  const results = getApiClient_().fetchGetMetric(metric, slug, from, to, options)
  assertHasData_(results)

  if (options.interval.includes('d')) {
    datetimeField = 'date'
  } else {
    datetimeField = 'datetime'
  }
  const headers = ['Date', 'Value']
  return [headers].concat(results.timeseriesData.map(result =>
    [
      formatDatetimeField_(result.datetime, datetimeField),
      formatNumber_(result.value)
    ]
  ))
}
