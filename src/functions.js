function getApiClient_ () {
  return new ApiClient_(new Connection_())
}

function dailyPrices_ (slug, from, to) {
  assertCanAccessHistoricData_(from)
  var results = getApiClient_().fetchDailyPrices(slug, from, to)
  assertHasData_(results)

  var headers = ['Date', 'USD Price', 'Volume']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.priceUsd),
      formatNumber_(result.volume)
    ]
  }))
}

function allProjects_ () {
  var results = getApiClient_().fetchAllProjects()
  assertHasData_(results)

  var headers = [
    'Ticker',
    'Name',
    'Slug',
    'USD Price',
    'USD Marketcap',
    'USD Volume',
    'USD Balance',
    'ETH Balance',
    'ETH Spent 30D',
    'ETH Spent 7D',
    'ETH Spent 1D'
  ]

  return [headers].concat(results.map(function (result) {
    return [
      result.ticker,
      result.name,
      result.slug,
      formatNumber_(result.priceUsd),
      formatNumber_(result.marketcapUsd),
      formatNumber_(result.volumeUsd),
      formatNumber_(result.usdBalance),
      formatNumber_(result.ethBalance),
      formatNumber_(result.ethSpent30d),
      formatNumber_(result.ethSpent7d),
      formatNumber_(result.ethSpent1d)
    ]
  }))
}

function erc20Projects_ () {
  var results = getApiClient_().fetchErc20Projects()
  assertHasData_(results)

  var headers = [
    'Ticker',
    'Name',
    'Slug',
    'USD Price',
    'USD Marketcap',
    'USD Volume',
    'USD Balance',
    'ETH Balance',
    'ETH Spent 30D',
    'ETH Spent 7D',
    'ETH Spent 1D',
    'Main Contract Address'
  ]

  return [headers].concat(results.map(function (result) {
    return [
      result.ticker,
      result.name,
      result.slug,
      formatNumber_(result.priceUsd),
      formatNumber_(result.marketcapUsd),
      formatNumber_(result.volumeUsd),
      formatNumber_(result.usdBalance),
      formatNumber_(result.ethBalance),
      formatNumber_(result.ethSpent30d),
      formatNumber_(result.ethSpent7d),
      formatNumber_(result.ethSpent1d),
      result.mainContractAddress
    ]
  }))
}

function dailyTransactionVolume_ (slug, from, to) {
  assertCanAccessHistoricData_(from)
  var results = getApiClient_().fetchDailyTransactionVolume(slug, from, to)
  assertHasData_(results)

  var headers = ['Date', 'Transaction Volume']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.transactionVolume)
    ]
  }))
}

function dailyOhlc_ (slug, from, to) {
  assertCanAccessHistoricData_(from)
  var results = getApiClient_().fetchDailyOhlc(slug, from, to)
  assertHasData_(results)

  var headers = [
    'Date',
    'Close Price USD',
    'High Price USD',
    'Low Price USD',
    'Open Price USD'
  ]

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.closePriceUsd),
      formatNumber_(result.highPriceUsd),
      formatNumber_(result.lowPriceUsd),
      formatNumber_(result.openPriceUsd)
    ]
  }))
}

function dailyPriceVolumeDiff_ (currency, slug, from, to) {
  assertCanAccessHistoricData_(from)
  var results = getApiClient_().fetchDailyPriceVolumeDiff(currency, slug, from, to)
  assertHasData_(results)

  var headers = ['Date', 'Price Change', 'Price Volume Diff', 'Volume Change']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.priceChange),
      formatNumber_(result.priceVolumeDiff),
      formatNumber_(result.volumeChange)
    ]
  }))
}

function socialVolumeProjects_ () {
  var results = getApiClient_().fetchSocialVolumeProjects()
  assertHasData_(results)

  var headers = ['Social Volume Projects']
  return headers.concat(results)
}

function dailySocialVolume_ (slug, from, to, socialVolumeType) {
  assertCanAccessHistoricData_(from)
  var results = getApiClient_().fetchDailySocialVolume(slug, from, to, socialVolumeType)
  assertHasData_(results)

  var headers = ['Date', 'Mentions Count']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.mentionsCount)
    ]
  }))
}

function dailyGithubActivity_ (slug, from, to) {
  assertCanAccessHistoricData_(from)
  var results = getApiClient_().fetchDailyGithubActivity(slug, from, to)
  assertHasData_(results)

  var headers = ['Date', 'Activity']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.activity)
    ]
  }))
}

function dailyDevActivity_ (slug, from, to) {
  assertCanAccessHistoricData_(from)
  var results = getApiClient_().fetchDailyDevActivity(slug, from, to)
  assertHasData_(results)

  var headers = ['Date', 'Activity']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.activity)
    ]
  }))
}

function dailyNetworkGrowth_ (slug, from, to) {
  assertCanAccessHistoricData_(from)
  var results = getApiClient_().fetchDailyNetworkGrowth(slug, from, to)
  assertHasData_(results)

  var headers = ['Date', 'New Addresses']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.newAddresses)
    ]
  }))
}

function dailyExchangeFundsFlow_ (slug, from, to) {
  assertCanAccessHistoricData_(from)
  var results = getApiClient_().fetchDailyExchangeFundsFlow(slug, from, to)
  assertHasData_(results)

  var headers = ['Date', 'In/Out Difference']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.inOutDifference)
    ]
  }))
}

function dailyTokenCirculation_ (slug, from, to) {
  assertCanAccessHistoricData_(from)
  var results = getApiClient_().fetchDailyTokenCirculation(slug, from, to)
  assertHasData_(results)

  var headers = ['Date', 'Token Circulation']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.tokenCirculation)
    ]
  }))
}

function dailyTrendingWords_ (source, size, hour, from, to) {
  assertCanAccessHistoricData_(from)
  var results = getApiClient_().fetchDailyTrendingWords(source, size, hour, from, to)
  assertHasData_(results)

  var headers = ['Date', 'Word', 'Score']

  results = results.map(function (result) {
    return result.topWords.map(function (topWord) {
      return [
        formatDatetimeField_(result.datetime),
        topWord.word,
        formatNumber_(topWord.score)
      ]
    })
  })

  var flatResults = [].concat.apply([], results)
  return [headers].concat(flatResults)
}

function fetchProjectFundamentals_ (slug) {
  var result = getApiClient_().fetchProjectFundamentals(slug)
  assertHasData_(result)

  var headers = [
    'Ticker',
    'Name',
    'Slug',
    'Funds Raised From ICO In USD',
    'ETH Spent 30D',
    'ETH Balance',
    'USD Balance',
    'USD Price',
    'USD Volume',
    'USD Marketcap',
    'Percent Change 24H',
    'Percent Change 7D',
    'Volume Change 24H',
    'Available Supply',
    'Average Dev Activity 30D'
  ]

  var formattedResult = [
    result.ticker,
    result.name,
    result.slug,
    formatNumber_(result.fundsRaisedUsdIcoEndPrice),
    formatNumber_(result.ethSpent30d),
    formatNumber_(result.ethBalance),
    formatNumber_(result.usdBalance),
    formatNumber_(result.priceUsd),
    formatNumber_(result.volumeUsd),
    formatNumber_(result.marketcapUsd),
    formatNumber_(result.percentChange24h),
    formatNumber_(result.percentChange7d),
    formatNumber_(result.volumeChange24h),
    formatNumber_(result.availableSupply),
    formatNumber_(result.averageDevActivity)
  ]

  return [headers, formattedResult]
}

function projectSocialData_ (slug) {
  var result = getApiClient_().fetchProjectSocialData(slug)
  assertHasData_(result)

  var headers = [
    'Ticker',
    'Name',
    'Slug',
    'Website Link',
    'Whitepaper Link',
    'Facebook Link',
    'Blog Link',
    'LinkedIn Link',
    'Github Link',
    'Twitter Link',
    'Reddit Link',
    'Chat Link'
  ]

  var formattedResult = [
    result.ticker,
    result.name,
    result.slug,
    result.websiteLink,
    result.whitepaperLink,
    result.facebookLink,
    result.blogLink,
    result.linkedinLink,
    result.githubLink,
    result.twitterLink,
    result.redditLink,
    result.slackLink
  ]

  return [headers, formattedResult]
}

function mvrvRatio_ (slug, from, to) {
  assertCanAccessHistoricData_(from)
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
  assertCanAccessHistoricData_(from)
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

function dailyActiveDeposits_ (slug, from, to) {
  assertCanAccessHistoricData_(from)
  var results = getApiClient_().fetchDailyActiveDeposits(slug, from, to)
  assertHasData_(results)

  var headers = ['Date', 'Active Deposits']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.activeDeposits)
    ]
  }))
}


function realizedValue_ (slug, from, to) {
  assertCanAccessHistoricData_(from)
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

function gasUsed_ (from, to) {
  assertCanAccessHistoricData_(from)
  var results = getApiClient_().fetchGasUsed(from, to)
  assertHasData_(results)

  var headers = ['Date', 'ETH Gas Used']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.ethGasUsed)
    ]
  }))
}
