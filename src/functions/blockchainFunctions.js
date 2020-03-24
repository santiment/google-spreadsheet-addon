function activeDeposits_ (slug, from, to) {
  const results = getApiClient_().fetchActiveDeposits(slug, from, to)
  assertHasData_(results)

  const headers = ['Date', 'Active Deposits']

  return [headers].concat(results.map(result =>
    [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.activeDeposits)
    ]
  ))
}

function networkGrowth_ (slug, from, to) {
  const results = getApiClient_().fetchNetworkGrowth(slug, from, to)
  assertHasData_(results)

  const headers = ['Date', 'New Addresses']

  return [headers].concat(results.map(result =>
    [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.newAddresses)
    ]
  ))
}

function tokenAgeConsumed_ (slug, from, to) {
  const results = getApiClient_().fetchTokenAgeConsumed(slug, from, to)
  assertHasData_(results)

  const headers = ['Date', 'Token Age Consumed']

  return [headers].concat(results.map(result =>
    [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.tokenAgeConsumed)
    ]
  ))
}

function exchangeFundsFlow_ (slug, from, to) {
  const results = getApiClient_().fetchExchangeFundsFlow(slug, from, to)
  assertHasData_(results)

  const headers = ['Date', 'In/Out Difference']

  return [headers].concat(results.map(result =>
    [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.inOutDifference)
    ]
  ))
}

function historicalBalance_ (slug, from, to, address) {
  const results = getApiClient_().fetchHistoricalBalance(slug, from, to, address)
  assertHasData_(results)

  const headers = ['Date', 'Balance']

  return [headers].concat(results.map(result =>
    [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.balance)
    ]
  ))
}

function tokenTopTransactions_ (slug, from, to, limit) {
  const limitArgument = limit || 10
  const results = getApiClient_().fetchTokenTopTransactions(slug, from, to, limitArgument)
  assertHasData_(results)
  const headers = [
    'Date',
    'From Address',
    'From Is Exchange',
    'To Address',
    'To Is Exchange',
    'Transaction Hash',
    'Transaction Value'
  ]

  return [headers].concat(results.tokenTopTransactions.map(result =>
    [
      formatDatetimeField_(result.datetime),
      result.fromAddress.address,
      result.fromAddress.isExchange,
      result.toAddress.address,
      result.toAddress.isExchange,
      result.trxHash,
      formatNumber_(result.trxValue)
    ]
  ))
}

function ethTopTransactions_ (slug, from, to, limit, transactionType) {
  const results = getApiClient_().fetchEthTopTransactions(slug, from, to, limit, transactionType)
  assertHasData_(results)

  const headers = [
    'Date',
    'From Address',
    'From Is Exchange',
    'To Address',
    'To Is Exchange',
    'Transaction Hash',
    'Transaction Value'
  ]

  return [headers].concat(results.ethTopTransactions.map(result =>
    [
      formatDatetimeField_(result.datetime),
      result.fromAddress.address,
      result.fromAddress.isExchange,
      result.toAddress.address,
      result.toAddress.isExchange,
      result.trxHash,
      formatNumber_(result.trxValue)
    ]
  ))
}

function ethSpentOverTime_ (slug, from, to) {
  const results = getApiClient_().fetchEthSpentOverTime(slug, from, to)
  assertHasData_(results)

  const headers = ['Date', 'ETH Spent']

  return [headers].concat(results.ethSpentOverTime.map(result =>
    [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.ethSpent)
    ]
  ))
}

function topHoldersPercentOfTotalSupply_ (slug, from, to, numberOfHolders) {
  const numberOfHoldersArgument = numberOfHolders || 10
  const results = getApiClient_()
    .fetchTopHoldersPercentOfTotalSupply(slug, from, to, numberOfHoldersArgument)

  assertHasData_(results)

  const headers = [
    'Date',
    'In Exchanges',
    'Outside Exchanges',
    'In Top Holders Total'
  ]

  return [headers].concat(results.map(result =>
    [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.inExchanges),
      formatNumber_(result.outsideExchanges),
      formatNumber_(result.inTopHoldersTotal)
    ]
  ))
}

function historicalBalanceDedup_ (slug, from, to, address) {
  const results = getApiClient_().fetchHistoricalBalance(slug, from, to, address)
  assertHasData_(results)

  const headers = ['Date', 'Balance']

  const arr = results.map(result =>
    [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.balance)
    ]
  )

  const deduped = []
  const lastDayIndex = arr.length - 1
  arr.forEach((el, index) => {
    if (deduped.length === 0 || lastDayIndex === index || deduped[deduped.length - 1][1] !== el[1]) {
      deduped.push(el)
    }
  })

  return [headers].concat(deduped)
}
