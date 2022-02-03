function exchangeSpecific_ (metric, slug, from, to, exchangeName, interval = '1d') {
  const results = getApiClient_()
    .fetchExchangeSpecific(metric, slug, from, to, exchangeName, interval)

  assertHasData_(results)

  datetimeField = handleDatetimeField(interval)

  const headers = ['Date', 'Value']
  return [headers].concat(results.timeseriesData.map(result =>
    [
      formatDatetimeField_(result.datetime, datetimeField),
      formatNumber_(result.value)
    ]
  ))
}
