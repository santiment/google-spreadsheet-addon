function activeAddresses_ (slug, from, to) {
  assertCanAccessHistoricData_(from, slug)
  var results = getApiClient_().fetchActiveAddresses(slug, from, to)
  assertHasData_(results)

  var headers = ['Date', 'Active Addresses']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.activeAddresses)
    ]
  }))
}

function activeDeposits_ (slug, from, to) {
  assertCanAccessHistoricData_(from, slug)
  var results = getApiClient_().fetchActiveDeposits(slug, from, to)
  assertHasData_(results)

  var headers = ['Date', 'Active Deposits']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.activeDeposits)
    ]
  }))
}

function transactionVolume_ (slug, from, to) {
  assertCanAccessHistoricData_(from, slug)
  var results = getApiClient_().fetchTransactionVolume(slug, from, to)
  assertHasData_(results)

  var headers = ['Date', 'Transaction Volume']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.transactionVolume)
    ]
  }))
}

function networkGrowth_ (slug, from, to) {
  assertCanAccessHistoricData_(from, slug)
  var results = getApiClient_().fetchNetworkGrowth(slug, from, to)
  assertHasData_(results)

  var headers = ['Date', 'New Addresses']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.newAddresses)
    ]
  }))
}

function tokenCirculation_ (slug, from, to) {
  assertCanAccessHistoricData_(from, slug)
  var results = getApiClient_().fetchTokenCirculation(slug, from, to)
  assertHasData_(results)

  var headers = ['Date', 'Token Circulation']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.tokenCirculation)
    ]
  }))
}

function tokenAgeConsumed_ (slug, from, to) {
  assertCanAccessHistoricData_(from, slug)
  var results = getApiClient_().fetchTokenAgeConsumed(slug, from, to)
  assertHasData_(results)

  var headers = ['Date', 'Token Age Consumed']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.tokenAgeConsumed)
    ]
  }))
}

function mvrvRatio_ (slug, from, to) {
  assertCanAccessHistoricData_(from, slug)
  var results = getApiClient_().fetchMvrvRatio(slug, from, to)
  assertHasData_(results)

  var headers = ['Date', 'Ratio']
  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.ratio)
    ]
  }))
}

function nvtRatio_ (slug, from, to) {
  assertCanAccessHistoricData_(from, slug)
  var results = getApiClient_().fetchNvtRatio(slug, from, to)
  assertHasData_(results)

  var headers = ['Date', 'NVT Ratio Transaction Volume', 'NVT Ratio Circulation']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.nvtRatioTxVolume),
      formatNumber_(result.nvtRatioCirculation)
    ]
  }))
}

function realizedValue_ (slug, from, to) {
  assertCanAccessHistoricData_(from, slug)
  var results = getApiClient_().fetchRealizedValue(slug, from, to)
  assertHasData_(results)

  var headers = ['Date', 'Realized Value']
  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.realizedValue)
    ]
  }))
}

function exchangeFundsFlow_ (slug, from, to) {
  assertCanAccessHistoricData_(from, slug)
  var results = getApiClient_().fetchExchangeFundsFlow(slug, from, to)
  assertHasData_(results)

  var headers = ['Date', 'In/Out Difference']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.inOutDifference)
    ]
  }))
}

function historicalBalance_ (slug, from, to) {
  var results = getApiClient_().fetchHistoricalBalance(slug, from, to)
  assertHasData_(results)

  var headers = ['Date', 'Balance']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.balance)
    ]
  }))
}
