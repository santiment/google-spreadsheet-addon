/**
 * Gets the daily prices for the specified asset, during a given time interval.
 *
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of daily prices.
 * @customfunction
 */
function SAN_DAILY_PRICES (projectSlug, from, to) {
  checkForHistoricData_(from)

  var results = new ApiClient_(new Connection_()).fetchDailyPrices(projectSlug, from, to)
  var headers = ['Date', 'USD Price', 'Volume']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.priceUsd),
      formatNumber_(result.volume)
    ]
  }))
}

/**
 * Gets an array of all assets for which Santiment has data.
 * Each asset record includes: ticker, name, slug, price in USD, market cap in USD,
 * volume in USD, USD balance, ETH balance, ETH spent in the last 30 days,
 * ETH spent in the last 7 days, ETH spent in the last day.
 *
 * @returns {Array} of all projects.
 * @customfunction
 */
function SAN_ALL_PROJECTS () {
  var results = new ApiClient_(new Connection_()).fetchAllProjects()
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

/**
 * Gets an array of all ERC20 assets for which Santiment has data.
 * Each asset record includes: ticker, name, slug, price in USD, market cap in USD,
 * volume in USD, USD balance, ETH balance, ETH spent in the last 30 days,
 * ETH spent in the last 7 days, ETH spent in the last day and main contract address.
 * @returns {Array} of all ERC20 projects.
 * @customfunction
 */
function SAN_ERC20_PROJECTS () {
  var results = new ApiClient_(new Connection_()).fetchErc20Projects()

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

/**
 * Gets the daily active addresses for the specified asset, during a given time interval.
 * "Daily Active Addresses" refers to the number of unique addresses that
 * participated in transactions on a blockchain each day.
 *
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of daily active addresses.
 * @customfunction
 */
function SAN_DAILY_ACTIVE_ADDRESSES (projectSlug, from, to) {
  checkForHistoricData_(from)

  var results = new ApiClient_(new Connection_()).fetchDailyActiveAddresses(projectSlug, from, to)
  var headers = ['Date', 'Active Addresses']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.activeAddresses)
    ]
  }))
}

/**
 * Gets the daily transaction volume for the specified asset, during a given time interval.
 * "Transaction Volume" refers to the total number of tokens within all
 * transfers that have occurred on a blockchain.
 *
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of daily transaction volumes.
 * @customfunction
 */
function SAN_DAILY_TRANSACTION_VOLUME (projectSlug, from, to) {
  checkForHistoricData_(from)

  var results = new ApiClient_(new Connection_()).fetchDailyTransactionVolume(projectSlug, from, to)
  var headers = ['Date', 'Transaction Volume']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.transactionVolume)
    ]
  }))
}

/**
 * Gets the daily open, high, low, and close price values for the specified asset, during a given time interval.
 *
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of daily open, high, low, and close price values.
 * @customfunction
 */
function SAN_DAILY_OHLC (projectSlug, from, to) {
  checkForHistoricData_(from)

  var results = new ApiClient_(new Connection_()).fetchDailyOhlc(projectSlug, from, to)
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

/**
 * Gets the daily price-volume difference technical indicator for a given asset,
 * currency and time interval. This indicator measures the difference in trend between price and volume,
 * specifically when price goes up as volume goes down. Currency can be displayed in either USD or BTC.
 *
 * @param {string} currency The currency in which the data should be presented. Either "USD" or "BTC".
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of daily price-volume difference technical indicator.
 * @customfunction
 */
function SAN_DAILY_PRICE_VOLUME_DIFF (currency, projectSlug, from, to) {
  checkForHistoricData_(from)

  var results = new ApiClient_(new Connection_()).fetchDailyPriceVolumeDiff(currency, projectSlug, from, to)
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

/**
 * Returns a list of project slugs for which there is social volume data.
 * @returns {Array} of social volume projects.
 * @customfunction
 */
function SAN_SOCIAL_VOLUME_PROJECTS () {
  var results = new ApiClient_(new Connection_()).fetchSocialVolumeProjects()
  var headers = ['Social Volume Projects']
  return headers.concat(results)
}

/**
 * Returns a list of mentions count for a given project and time interval.
 *
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @param {string} socialVolumeType The source of mention counts, one of the following:
 * "PROFESSIONAL_TRADERS_CHAT_OVERVIEW",
 * "TELEGRAM_CHATS_OVERVIEW",
 * "TELEGRAM_DISCUSSION_OVERVIEW",
 * "DISCORD_DISCUSSION_OVERVIEW"
 *
 * @returns {Array} of mention counts.
 * @customfunction
 */
function SAN_DAILY_SOCIAL_VOLUME (projectSlug, from, to, socialVolumeType) {
  checkForHistoricData_(from)

  var results = new ApiClient_(new Connection_()).fetchDailySocialVolume(projectSlug, from, to, socialVolumeType)
  var headers = ['Date', 'Mentions Count']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.mentionsCount)
    ]
  }))
}

/**
 * Returns a list of github activity for a given slug and time interval.
 *
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of github activity.
 * @customfunction
 */
function SAN_DAILY_GITHUB_ACTIVITY (projectSlug, from, to) {
  checkForHistoricData_(from)

  var results = new ApiClient_(new Connection_()).fetchDailyGithubActivity(projectSlug, from, to)
  var headers = ['Date', 'Activity']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.activity)
    ]
  }))
}

/**
 * Returns a list of dev activity for a given slug and time interval.
 *
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of dev activity.
 * @customfunction
 */
function SAN_DAILY_DEV_ACTIVITY (projectSlug, from, to) {
  checkForHistoricData_(from)

  var results = new ApiClient_(new Connection_()).fetchDailyDevActivity(projectSlug, from, to)
  var headers = ['Date', 'Activity']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.activity)
    ]
  }))
}

/**
 * Returns the number of new addresses being created on the project network for a given slug and time interval.
 *
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of number of new addresses.
 * @customfunction
 */
function SAN_DAILY_NETWORK_GROWTH (projectSlug, from, to) {
  checkForHistoricData_(from)

  var results = new ApiClient_(new Connection_()).fetchDailyNetworkGrowth(projectSlug, from, to)
  var headers = ['Date', 'New Addresses']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.newAddresses)
    ]
  }))
}

/**
 * Fetches the difference between the tokens that were deposited minus
 * the tokens that were withdrawn from an exchange for a given slug and time interval.
 *
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of dev activity.
 * @customfunction
 */
function SAN_DAILY_EXCHANGE_FUNDS_FLOW (projectSlug, from, to) {
  checkForHistoricData_(from)

  var results = new ApiClient_(new Connection_()).fetchDailyExchangeFundsFlow(projectSlug, from, to)
  var headers = ['Date', 'In/Out Difference']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.inOutDifference)
    ]
  }))
}


/**
 * Returns token circulation for a given slug and time interval.
 *
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of token circulation.
 * @customfunction
 */
function SAN_DAILY_TOKEN_CIRCULATION (projectSlug, from, to) {
  checkForHistoricData_(from)

  var results = new ApiClient_(new Connection_()).fetchDailyTokenCirculation(projectSlug, from, to)
  var headers = ['Date', 'Token Circulation']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.tokenCirculation)
    ]
  }))
}

/**
 * Returns list of trending words and their corresponding trend score.
 *
 * @param {string} source One of the following:
 * TELEGRAM
 * PROFESSIONAL_TRADERS_CHAT
 * REDDIT
 * ALL
 * @param {number} size An integer showing how many words should be included in the top list (max 100).
 * @param {number} hour An integer showing the hour of the day when the calculation was executed.
 * The trending words are currently generated only 3 times a day - 01:00 UTC, 08:00 UTC and 14:00 UTC. Example: 1
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of trending words and their score.
 * @customfunction
 */
function SAN_DAILY_TRENDING_WORDS (source, size, hour, from, to) {
  checkForHistoricData_(from)

  var results = new ApiClient_(new Connection_()).fetchDailyTrendingWords(source, size, hour, from, to)
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

/**
 * Fetch fundamentals for a specified project.
 *
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @returns {Array} of project details.
 * @customfunction
 */
function SAN_PROJECT_FUNDAMENTALS (projectSlug) {
  var result = new ApiClient_(new Connection_()).fetchProjectFundamentals(projectSlug)
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

/**
 * Fetch social data for a specified project.
 *
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @returns {Array} of project's social data.
 * @customfunction
 */
function SAN_PROJECT_SOCIAL_DATA (projectSlug) {
  var result = new ApiClient_(new Connection_()).fetchProjectSocialData(projectSlug)

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

/**
 * Returns amount of tokens changing addresses, multiplied by the number of blocks
 * created on the blockchain since they last moved.
 * Spikes are signal of a large amount of tokens moving after being idle for an extended period of time.
 *
 * Grouping by interval works by summing all records in the interval.
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of burn rates.
 * @customfunction
 */
function SAN_DAILY_TOKEN_AGE_CONSUMED (projectSlug, from, to) {
  checkForHistoricData_(from)

  var results = new ApiClient_(new Connection_()).fetchDailyTokenAgeConsumed(projectSlug, from, to)
  var headers = ['Date', 'Token Age Consumed']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.tokenAgeConsumed)
    ]
  }))
}

/**
 * Returns MVRV(Market-Value-to-Realized-Value)
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of ratios.
 * @customfunction
 */
function SAN_MVRV_RATIO (projectSlug, from, to) {
  checkForHistoricData_(from)

  var results = new ApiClient_(new Connection_()).fetchMvrvRatio(projectSlug, from, to)
  var headers = ['Date', 'Ratio']
  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.ratio)
    ]
  }))
}

/**
 * Returns NVT (Network-Value-to-Transactions-Ratio Daily Market Cap / Daily Transaction Volume)
 * Since Daily Transaction Volume gets rather noisy and easy to manipulate
 * by transferring the same tokens through couple of addresses over and over again,
 * it’s not an ideal measure of a network’s economic activity.
 * That’s why we calculate NVT using Daily Trx Volume, but also by using Daily Token Circulation instead,
 * which filters out excess transactions and provides a cleaner overview of a blockchain’s daily transaction throughput.
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of NVT ratios.
 * @customfunction
 */
function SAN_NVT_RATIO (projectSlug, from, to) {
  checkForHistoricData_(from)

  var results = new ApiClient_(new Connection_()).fetchNvtRatio(projectSlug, from, to)
  var headers = ['Date', 'NVT Ratio Transaction Volume', 'NVT Ratio Circulation']
  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.nvtRatioTxVolume),
      formatNumber_(result.nvtRatioCirculation)
    ]
  }))
}

/**
 * Returns number of unique deposit addresses that have been active for a project.
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of deposit address numbers.
 * @customfunction
 */
function SAN_DAILY_ACTIVE_DEPOSITS (projectSlug, from, to) {
  checkForHistoricData_(from)

  var results = new ApiClient_(new Connection_()).fetchDailyActiveDeposits(projectSlug, from, to)
  var headers = ['Date', 'Active Deposits']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.activeDeposits)
    ]
  }))
}
