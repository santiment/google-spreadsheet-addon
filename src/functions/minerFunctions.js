function gasUsed_ (slug, from, to) {
  var results = getApiClient_().fetchGasUsed(slug, from, to)
  assertHasData_(results)

  var headers = ['Date', 'Gas Used']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.gasUsed)
    ]
  }))
}

function miningPoolsDistribution_ (slug, from, to) {
  var results = getApiClient_().fetchMiningPoolsDistribution(slug, from, to)
  assertHasData_(results)

  var headers = ['Date', 'Top 3', 'Top 10', 'Other']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.top3),
      formatNumber_(result.top10),
      formatNumber_(result.other)
    ]
  }))
}

function minersBalance_ (slug, from, to) {
  var results = getApiClient_().fetchMinersBalance(slug, from, to)
  assertHasData_(results)

  var headers = ['Date', 'Balance']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.balance)
    ]
  }))
}
