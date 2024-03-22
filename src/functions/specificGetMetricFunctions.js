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

function minersBalance_ (slug, from, to, interval = '1d') {
  const results = getApiClient_()
    .fetchMinersBalance(slug, from, to, interval)

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
