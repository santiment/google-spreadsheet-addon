function getMetric_ (metric, slug, from, to, options) {
  const results = getApiClient_().fetchGetMetric(metric, slug, from, to, options)
  assertHasData_(results)

  const datetimeField = handleDatetimeField(options.interval)
  const headers = ['Date', 'Value']
  return [headers].concat(results.timeseriesData.map(result =>
    [
      formatDatetimeField_(result.datetime, datetimeField),
      formatNumber_(result.value)
    ]
  ))
}
