/**
 * Gets the daily prices for the asset specified, during a given time frame.
 *
 * @param {"santiment"} projectSlug Name of the asset at coinmarketcap.com,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://coinmarketcap.com/currencies/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of daily prices.
 * @customfunction
 */
function SAN_DAILY_PRICES (projectSlug, from, to) {
  checkForHistoricData_(from)

  var results = new ApiClient_(new Connection_()).fetchDailyPrices(projectSlug, from, to)
  var headers = ['date', 'priceUsd', 'volume']

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
 * Each asset record includes: slug, name, price in USD, market cap in USD,
 * volume in USD, USD balance, ETH balance, ETH spent in the last 30 days,
 * ETH spent in the last 7 days, ETH spent in the last day, and ticker.
 *
 * @returns {Array} of all projects.
 * @customfunction
 */
function SAN_ALL_PROJECTS () {
  var results = new ApiClient_(new Connection_()).fetchAllProjects()
  var headers = [
    'slug',
    'name',
    'priceUsd',
    'marketcapUsd',
    'volumeUsd',
    'usdBalance',
    'ethBalance',
    'ethSpent30d',
    'ethSpent7d',
    'ethSpent1d',
    'ticker'
  ]

  return [headers].concat(results.map(function (result) {
    return [
      result.slug,
      result.name,
      formatNumber_(result.priceUsd),
      formatNumber_(result.marketcapUsd),
      formatNumber_(result.volumeUsd),
      formatNumber_(result.usdBalance),
      formatNumber_(result.ethBalance),
      formatNumber_(result.ethSpent30d),
      formatNumber_(result.ethSpent7d),
      formatNumber_(result.ethSpent1d),
      result.ticker
    ]
  }))
}

/**
 * Gets an array of all ERC20 assets for which Santiment has data.
 * Each asset record includes: slug, name, price in USD, market cap in USD,
 * volume in USD, USD balance, ETH balance, ETH spent in the last 30 days,
 * ETH spent in the last 7 days, ETH spent in the last day, ticker and main contract address.
 * @returns {Array} of all ERC20 projects.
 * @customfunction
 */
function SAN_ERC20_PROJECTS () {
  var results = new ApiClient_(new Connection_()).fetchErc20Projects()

  var headers = [
    'slug',
    'name',
    'priceUsd',
    'marketcapUsd',
    'volumeUsd',
    'usdBalance',
    'ethBalance',
    'ethSpent30d',
    'ethSpent7d',
    'ethSpent1d',
    'ticker',
    'mainContractAddress'
  ]

  return [headers].concat(results.map(function (result) {
    return [
      result.slug,
      result.name,
      formatNumber_(result.priceUsd),
      formatNumber_(result.marketcapUsd),
      formatNumber_(result.volumeUsd),
      formatNumber_(result.usdBalance),
      formatNumber_(result.ethBalance),
      formatNumber_(result.ethSpent30d),
      formatNumber_(result.ethSpent7d),
      formatNumber_(result.ethSpent1d),
      result.ticker,
      result.mainContractAddress
    ]
  }))
}

/**
 * Gets the daily active addresses for the asset specified, during a given time frame.
 * "Daily Active Addresses" refers to the number of unique addresses that
 * participated in transactions on a blockchain each day.
 *
 * @param {"santiment"} projectSlug Name of the asset at coinmarketcap.com,
 * which can be found at the end of the URL
 * (eg. the Santiment URL is https://coinmarketcap.com/currencies/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of daily active addresses.
 * @customfunction
 */
function SAN_DAILY_ACTIVE_ADDRESSES (projectSlug, from, to) {
  checkForHistoricData_(from)

  var results = new ApiClient_(new Connection_()).fetchDailyActiveAddresses(projectSlug, from, to)
  var headers = ['date', 'activeAddresses']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.activeAddresses)
    ]
  }))
}

/**
 * Gets the daily transaction volume for the asset specified, during a given time frame.
 * "Transaction Volume" refers to the total number of tokens within all
 * transfers that have occurred on a blockchain each day.
 *
 * @param {"santiment"} projectSlug Name of the asset at coinmarketcap.com,
 * which can be found at the end of the URL
 * (eg. the Santiment URL is https://coinmarketcap.com/currencies/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of daily transaction volumes.
 * @customfunction
 */
function SAN_DAILY_TRANSACTION_VOLUME (projectSlug, from, to) {
  checkForHistoricData_(from)

  var results = new ApiClient_(new Connection_()).fetchDailyTransactionVolume(projectSlug, from, to)
  var headers = ['date', 'transactionVolume']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.transactionVolume)
    ]
  }))
}

/**
 * Gets the daily open, high, low, and close price values for an asset during a given time frame.
 *
 * @param {"santiment"} projectSlug Name of the asset at coinmarketcap.com,
 * which can be found at the end of the URL
 * (eg. the Santiment URL is https://coinmarketcap.com/currencies/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of daily open, high, low, and close price values.
 * @customfunction
 */
function SAN_DAILY_OHLC (projectSlug, from, to) {
  checkForHistoricData_(from)

  var results = new ApiClient_(new Connection_()).fetchDailyOhlc(projectSlug, from, to)
  var headers = ['date', 'closePriceUsd', 'highPriceUsd', 'lowPriceUsd', 'openPriceUsd']

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
 * currency and time period. This indicator measures the difference in trend between price and volume,
 * specifically when price goes up as volume goes down. Currency can be displayed in either USD or BTC.
 *
 * @param {"USD"} currency The currency in which the data should be presented. Either "USD" or "BTC".
 * @param {"SAN"} projectTicker The ticker of the asset, spelled in capital letters e.g. "SAN".
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of daily price-volume difference technical indicator.
 * @customfunction
 */
function SAN_DAILY_PRICE_VOLUME_DIFF (currency, projectTicker, from, to) {
  checkForHistoricData_(from)

  var results = new ApiClient_(new Connection_()).fetchDailyPriceVolumeDiff(currency, projectTicker, from, to)
  var headers = ['date', 'priceChange', 'priceVolumeDiff', 'volumeChange']

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
  var headers = ['SV Projects']
  return headers.concat(results)
}

/**
 * Returns a list of mentions count for a given project and time
 *
 * @param {"santiment"} projectSlug Name of the asset at coinmarketcap.com,
 * which can be found at the end of the URL
 * (eg. the Santiment URL is https://coinmarketcap.com/currencies/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @param {"PROFESSIONAL_TRADERS_CHAT_OVERVIEW"} socialVolumeType the source of mention counts, one of the following:
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
  var headers = ['date', 'mentionsCount']

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
 * @param {"santiment"} projectSlug Name of the asset at coinmarketcap.com,
 * which can be found at the end of the URL
 * (eg. the Santiment URL is https://coinmarketcap.com/currencies/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of github activity.
 * @customfunction
 */
function SAN_DAILY_GITHUB_ACTIVITY (projectSlug, from, to) {
  checkForHistoricData_(from)

  var results = new ApiClient_(new Connection_()).fetchDailyGithubActivity(projectSlug, from, to)
  var headers = ['date', 'activity']

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
 * @param {"santiment"} projectSlug Name of the asset at coinmarketcap.com,
 * which can be found at the end of the URL
 * (eg. the Santiment URL is https://coinmarketcap.com/currencies/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of dev activity.
 * @customfunction
 */
function SAN_DAILY_DEV_ACTIVITY (projectSlug, from, to) {
  checkForHistoricData_(from)

  var results = new ApiClient_(new Connection_()).fetchDailyDevActivity(projectSlug, from, to)
  var headers = ['date', 'activity']

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
 * @param {"santiment"} projectSlug Name of the asset at coinmarketcap.com,
 * which can be found at the end of the URL
 * (eg. the Santiment URL is https://coinmarketcap.com/currencies/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of number of new addresses.
 * @customfunction
 */
function SAN_DAILY_NETWORK_GROWTH (projectSlug, from, to) {
  checkForHistoricData_(from)

  var results = new ApiClient_(new Connection_()).fetchDailyNetworkGrowth(projectSlug, from, to)
  var headers = ['date', 'newAddresses']

  return [headers].concat(results.map(function (result) {
    return [
      formatDatetimeField_(result.datetime),
      formatNumber_(result.newAddresses)
    ]
  }))
}
