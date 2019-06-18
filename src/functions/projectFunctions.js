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
