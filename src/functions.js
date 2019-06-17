function getApiClient_ () {
  return new ApiClient_(new Connection_())
}

function prices_ (slug, from, to) {
  assertCanAccessHistoricData_(from)
  var results = getApiClient_().fetchPrices(slug, from, to)
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

function priceOpenClose_ (slug, from, to) {
  assertCanAccessHistoricData_(from)

  var endOfDay = beginningOfDaytoEndOfDay_(to)

  var results = getApiClient_().fetchOhlc(slug, from, endOfDay)
  assertHasData_(results)

  var firstDateResults = results[0]
  var lastDateResults = results[results.length - 1]

  if (firstDateResults == null ||
      lastDateResults == null ||
      !firstDateResults.hasOwnProperty('openPriceUsd') ||
      !lastDateResults.hasOwnProperty('closePriceUsd')) {
    throw new NoDataError_()
  }

  return {
    open: firstDateResults.openPriceUsd,
    close: lastDateResults.closePriceUsd
  }
}

function priceAbsoluteChange_ (slug, from, to) {
  var prices = priceOpenClose_(slug, from, to)
  return prices.close - prices.open
}

function pricePercentChange_ (slug, from, to) {
  var prices = priceOpenClose_(slug, from, to)
  var priceDiff = prices.close - prices.open

  return priceDiff * 100 / prices.open
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

function activeAddresses_ (slug, from, to) {
  assertCanAccessHistoricData_(from)
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

function transactionVolume_ (slug, from, to) {
  assertCanAccessHistoricData_(from)
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

function ohlc_ (slug, from, to) {
  assertCanAccessHistoricData_(from)
  var results = getApiClient_().fetchOhlc(slug, from, to)
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

function priceVolumeDiff_ (currency, slug, from, to) {
  assertCanAccessHistoricData_(from)
  var results = getApiClient_().fetchPriceVolumeDiff(currency, slug, from, to)
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

function socialVolume_ (slug, from, to, socialVolumeType) {
  assertCanAccessHistoricData_(from)
  var results = getApiClient_().fetchSocialVolume(slug, from, to, socialVolumeType)
  assertHasData_(results)

  var headers = ['Date', 'Mentions Count']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.mentionsCount)
    ]
  }))
}

function githubActivity_ (slug, from, to) {
  assertCanAccessHistoricData_(from)
  var results = getApiClient_().fetchGithubActivity(slug, from, to)
  assertHasData_(results)

  var headers = ['Date', 'Activity']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.activity)
    ]
  }))
}

function devActivity_ (slug, from, to) {
  assertCanAccessHistoricData_(from)
  var results = getApiClient_().fetchDevActivity(slug, from, to)
  assertHasData_(results)

  var headers = ['Date', 'Activity']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.activity)
    ]
  }))
}

function networkGrowth_ (slug, from, to) {
  assertCanAccessHistoricData_(from)
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

function exchangeFundsFlow_ (slug, from, to) {
  assertCanAccessHistoricData_(from)
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

function tokenCirculation_ (slug, from, to) {
  assertCanAccessHistoricData_(from)
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

function trendingWords_ (source, size, hour, from, to) {
  assertCanAccessHistoricData_(from)
  var results = getApiClient_().fetchTrendingWords(source, size, hour, from, to)
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

function tokenAgeConsumed_ (slug, from, to) {
  assertCanAccessHistoricData_(from)
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

function activeDeposits_ (slug, from, to) {
  assertCanAccessHistoricData_(from)
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

function gasUsed_ (slug, from, to) {
  assertCanAccessHistoricData_(from)
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
  assertCanAccessHistoricData_(from)
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
  assertCanAccessHistoricData_(from)
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

function news_ (tag, from, to, size) {
  assertCanAccessHistoricData_(from)
  var results = getApiClient_().fetchNews(tag, from, to, size)
  assertHasData_(results)

  var headers = ['Date', 'Title', 'Source', 'URL', 'Description']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      result.title,
      result.sourceName,
      result.url,
      result.description
    ]
  }))
}

function latestPrice_ (slug, currency) {
  var supportedCurrencies = ['USD', 'BTC']

  if (supportedCurrencies.indexOf(currency.toUpperCase()) === -1) {
    throw new UnsupportedError_(currency + ' is not supported! Use any of: ' + supportedCurrencies.join('/'))
  }

  var currencyField = 'price' + currency.charAt(0).toUpperCase() + currency.toLowerCase().slice(1)
  var result = getApiClient_().fetchLatestPrice(slug, currencyField)

  assertHasData_(result)

  return result[currencyField]
}
