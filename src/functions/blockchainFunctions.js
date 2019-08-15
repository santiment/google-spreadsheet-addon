function activeAddresses_ (slug, from, to) {
  var dictFromParams = {}
  dictFromParams[typeof (slug)] = 'string'
  dictFromParams[from.constructor.name] = 'Date'
  dictFromParams[to.constructor.name] = 'Date'
  assertParameters_(dictFromParams)

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

function historicalBalance_ (slug, from, to, address) {
  var results = getApiClient_().fetchHistoricalBalance(slug, from, to, address)
  assertHasData_(results)

  var headers = ['Date', 'Balance']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.balance)
    ]
  }))
}

function tokenTopTransactions_ (slug, from, to, limit) {
  var results = getApiClient_().fetchTokenTopTransactions(slug, from, to, limit)
  assertHasData_(results)
  var headers = [
    'Date',
    'From Address',
    'From Is Exchange',
    'To Address',
    'To Is Exchange',
    'Transaction Hash',
    'Transaction Value'
  ]

  return [headers].concat(results.tokenTopTransactions.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      result.fromAddress.address,
      result.fromAddress.isExchange,
      result.toAddress.address,
      result.toAddress.isExchange,
      result.trxHash,
      formatNumber_(result.trxValue)
    ]
  }))
}

function ethTopTransactions_ (slug, from, to, limit, transactionType) {
  var results = getApiClient_().fetchEthTopTransactions(slug, from, to, limit, transactionType)
  assertHasData_(results)

  var headers = [
    'Date',
    'From Address',
    'From Is Exchange',
    'To Address',
    'To Is Exchange',
    'Transaction Hash',
    'Transaction Value'
  ]

  return [headers].concat(results.ethTopTransactions.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      result.fromAddress.address,
      result.fromAddress.isExchange,
      result.toAddress.address,
      result.toAddress.isExchange,
      result.trxHash,
      formatNumber_(result.trxValue)
    ]
  }))
}

function ethSpentOverTime_ (slug, from, to) {
  var results = getApiClient_().fetchEthSpentOverTime(slug, from, to)
  assertHasData_(results)

  var headers = ['Date', 'ETH Spent']

  return [headers].concat(results.ethSpentOverTime.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.ethSpent)
    ]
  }))
}

function topHoldersPercentOfTotalSupply_ (slug, from, to, numberOfHolders) {
  var results = getApiClient_().fetchTopHoldersPercentOfTotalSupply(slug, from, to, numberOfHolders)

  assertHasData_(results)

  var headers = [
    'Date',
    'In Exchanges',
    'Outside Exchanges',
    'In Top Holders Total'
  ]

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.inExchanges),
      formatNumber_(result.outsideExchanges),
      formatNumber_(result.inTopHoldersTotal)
    ]
  }))
}
