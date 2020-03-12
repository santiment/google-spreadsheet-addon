function getMetric_ (metric, slug, from, to, options) {
  const results = getApiClient_().fetchGetMetric(metric, slug, from, to, options)
  assertHasData_(results)

  const headers = ['Date', 'Value']
  return [headers].concat(results.timeseriesData.map(result =>
    [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.value)
    ]
  ))
}
