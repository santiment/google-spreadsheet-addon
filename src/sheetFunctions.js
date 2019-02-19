/**
 * Gets the daily prices for the asset specified, during a given time frame.
 *
 * @param {"santiment"} project_slug Name of the asset at coinmarketcap.com, which can be found at the end of the URL (eg. the Santiment URL is https://coinmarketcap.com/currencies/santiment, so the project_slug would be santiment).
 * @param {DATE(2018, 9, 21)} from The starting date to fetch the data.
 * @param {DATE(2018, 10, 10)} to The ending date to fetch the data.
 * @customfunction
 */
function SAN_DAILY_PRICES(project_slug, from, to) {
  checkForHistoricData_(from)

  var results = new ApiClient_(new Connection_()).fetchDailyPrices(project_slug, from, to)
  var headers = ['date', 'priceUsd', 'volume']

  return [headers].concat(results.map(function(result) {
    return [
      formatDatetimeField_(result['datetime']),
      formatNumber_(result['priceUsd']),
      formatNumber_(result['volume'])
    ];
  }));
}

/**
 * Gets an array of all assets for which Santiment has data. Each asset record includes: slug, name, price in USD, market cap in USD, volume in USD, USD balance, ETH balance, ETH spent in the last 30 days, ETH spent in the last 7 days, ETH spent in the last day, and ticker.
 *
 * @customfunction
 */
function SAN_ALL_PROJECTS() {
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
  ];

  return [headers].concat(results.map(function(result) {
    return [
      result['slug'],
      result['name'],
      formatNumber_(result['priceUsd']),
      formatNumber_(result['marketcapUsd']),
      formatNumber_(result['volumeUsd']),
      formatNumber_(result['usdBalance']),
      formatNumber_(result['ethBalance']),
      formatNumber_(result['ethSpent30d']),
      formatNumber_(result['ethSpent7d']),
      formatNumber_(result['ethSpent1d']),
      result['ticker']
    ];
  }));
}

/**
 * Gets an array of all ERC20 assets for which Santiment has data. Each asset record includes: slug, name, price in USD, market cap in USD, volume in USD, USD balance, ETH balance, ETH spent in the last 30 days, ETH spent in the last 7 days, ETH spent in the last day, ticker and main contract address.
 *
 * @customfunction
 */
function SAN_ERC20_PROJECTS() {
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
  ];

  return [headers].concat(results.map(function(result) {
    return [
      result['slug'],
      result['name'],
      formatNumber_(result['priceUsd']),
      formatNumber_(result['marketcapUsd']),
      formatNumber_(result['volumeUsd']),
      formatNumber_(result['usdBalance']),
      formatNumber_(result['ethBalance']),
      formatNumber_(result['ethSpent30d']),
      formatNumber_(result['ethSpent7d']),
      formatNumber_(result['ethSpent1d']),
      result['ticker'],
      result['mainContractAddress']
    ];
  }));
}

/**
 * Gets the daily active addresses for the asset specified, during a given time frame. "Daily Active Addresses" refers to the number of unique addresses that participated in transactions on a blockchain each day.
 *
 * @param {"santiment"} project_slug Name of the asset at coinmarketcap.com, which can be found at the end of the URL (eg. the Santiment URL is https://coinmarketcap.com/currencies/santiment, so the project_slug would be santiment).
 * @param {DATE(2018, 9, 21)} from The starting date to fetch the data.
 * @param {DATE(2018, 10, 10)} to The ending date to fetch the data.
 * @customfunction
 */
function SAN_DAILY_ACTIVE_ADDRESSES(project_slug, from, to) {
  checkForHistoricData_(from)

  var results = new ApiClient_(new Connection_()).fetchDailyActiveAddresses(project_slug, from, to)
  var headers = ['date', 'activeAddresses']

  return [headers].concat(results.map(function(result) {
    return [
      formatDatetimeField_(result['datetime']),
      formatNumber_(result['activeAddresses']),
    ];
  }));
}

/**
 * Gets the daily transaction volume for the asset specified, during a given time frame. "Transaction Volume" refers to the total number of tokens within all transfers that have occurred on a blockchain each day.
 *
 * @param {"santiment"} project_slug Name of the asset at coinmarketcap.com, which can be found at the end of the URL (eg. the Santiment URL is https://coinmarketcap.com/currencies/santiment, so the project_slug would be santiment).
 * @param {DATE(2018, 9, 21)} from The starting date to fetch the data.
 * @param {DATE(2018, 10, 10)} to The ending date to fetch the data.
 * @customfunction
 */
function SAN_DAILY_TRANSACTION_VOLUME(project_slug, from, to) {
  checkForHistoricData_(from)

  var results = new ApiClient_(new Connection_()).fetchDailyTransactionVolume(project_slug, from, to)
  var headers = ['date', 'transactionVolume']

  return [headers].concat(results.map(function(result) {
    return [
      formatDatetimeField_(result['datetime']),
      formatNumber_(result['transactionVolume']),
    ];
  }));
};

/**
 * Gets the daily open, high, low, and close price values for an asset during a given time frame.
 *
 * @param {"santiment"} project_slug Name of the asset at coinmarketcap.com, which can be found at the end of the URL (eg. the Santiment URL is https://coinmarketcap.com/currencies/santiment, so the project_slug would be santiment).
 * @param {DATE(2018, 9, 21)} from The starting date to fetch the data.
 * @param {DATE(2018, 10, 10)} to The ending date to fetch the data.
 * @customfunction
 */
function SAN_DAILY_OHLC(project_slug, from, to) {
  checkForHistoricData_(from)

  var results = new ApiClient_(new Connection_()).fetchDailyOhlc(project_slug, from, to)
  var headers = ['date', 'closePriceUsd', 'highPriceUsd', 'lowPriceUsd', 'openPriceUsd']

  return [headers].concat(results.map(function(result) {
    return [
      formatDatetimeField_(result['datetime']),
      formatNumber_(result['closePriceUsd']),
      formatNumber_(result['highPriceUsd']),
      formatNumber_(result['lowPriceUsd']),
      formatNumber_(result['openPriceUsd'])
    ];
  }));
};

/**
 * Gets the daily price-volume difference technical indicator for a given asset, currency and time period. This indicator measures the difference in trend between price and volume, specifically when price goes up as volume goes down. Currency can be displayed in either USD or BTC.
 *
 * @param {"USD"} currency The currency in which the data should be presented. Either "USD" or "BTC".
 * @param {"SAN"} project_ticker The ticker of the asset, spelled in capital letters e.g. "SAN".
 * @param {DATE(2018, 9, 21)} from The starting date to fetch the data.
 * @param {DATE(2018, 10, 10)} to The ending date to fetch the data.
 * @customfunction
 */
function SAN_DAILY_PRICE_VOLUME_DIFF(currency, project_ticker, from, to) {
  checkForHistoricData_(from)

  var results = new ApiClient_(new Connection_()).fetchDailyPriceVolumeDiff(currency, project_ticker, from, to)
  var headers = ['date', 'priceChange', 'priceVolumeDiff', 'volumeChange']

  return [headers].concat(results.map(function(result) {
    return [
      formatDatetimeField_(result['datetime']),
      formatNumber_(result['priceChange']),
      formatNumber_(result['priceVolumeDiff']),
      formatNumber_(result['volumeChange']),
    ];
  }));
};

/**
 * Returns a list of project slugs for which there is social volume data.
 *
 * @customfunction
 */
function SAN_SOCIAL_VOLUME_PROJECTS() {
  var results = new ApiClient_(new Connection_()).fetchSocialVolumeProjects()
  var headers = ['SV Projects'];
  return headers.concat(results);
};

/**
 * Returns a list of mentions count for a given project and time
 *
 * @param {"santiment"} project_slug Name of the asset at coinmarketcap.com, which can be found at the end of the URL (eg. the Santiment URL is https://coinmarketcap.com/currencies/santiment, so the project_slug would be santiment).
 * @param {DATE(2018, 9, 21)} from The starting date to fetch the data.
 * @param {DATE(2018, 10, 10)} to The ending date to fetch the data.
 * @param {"PROFESSIONAL_TRADERS_CHAT_OVERVIEW"} social_volume_type the source of mention counts, one of the following: "PROFESSIONAL_TRADERS_CHAT_OVERVIEW", "TELEGRAM_CHATS_OVERVIEW", "TELEGRAM_DISCUSSION_OVERVIEW", "DISCORD_DISCUSSION_OVERVIEW"
 *
 * @customfunction
 */
function SAN_DAILY_SOCIAL_VOLUME(project_slug, from, to, social_volume_type) {
  checkForHistoricData_(from)

  var results = new ApiClient_(new Connection_()).fetchDailySocialVolume(project_slug, from, to, social_volume_type)
  var headers = ['date', 'mentionsCount']

  return [headers].concat(results.map(function(result) {
    return [
      formatDatetimeField_(result['datetime']),
      formatNumber_(result['mentionsCount'])
    ];
  }));
}
