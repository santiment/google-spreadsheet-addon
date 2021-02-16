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

function aggregatedGetMetric_ (metric, slug, from, to, options) {
  const results = getApiClient_().fetchAggregatedGetMetric(metric, slug, from, to, options)
  assertHasData_(results)

  if (results === null || !Object.prototype.hasOwnProperty.call(results, 'aggregatedTimeseriesData')) {
    throw new NoDataError_()
  }


  return formatNumber_(results.aggregatedTimeseriesData)
}
