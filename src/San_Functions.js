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

  var query = {
    'query': '{\
       historyPrice(slug: "' + project_slug + '",\
                    from: "' + toUTC_(from) + '",\
                    to: "' + toUTC_(to) + '",\
                    interval: "1d") {\
         datetime\
         priceUsd\
         volume\
       }\
     }'
  };

  return graphQLTimeseriesQuery_(query, 'historyPrice', ['priceUsd', 'volume']);
}

/**
 * Gets an array of all assets for which Santiment has data. Each asset record includes: slug, name, price in USD, market cap in USD, volume in USD, USD balance, ETH balance, ETH spent in the last 30 days, ETH spent in the last 7 days, ETH spent in the last day, and ticker.
 *
 * @customfunction
 */
function SAN_ALL_PROJECTS() {
  var query = {
    'query': '{\
       allProjects {\
         slug\
         name\
         ticker\
         marketcapUsd\
         priceUsd\
         volumeUsd\
         ethBalance\
         usdBalance\
         ethSpent30d: ethSpent(days:30)\
         ethSpent7d: ethSpent(days:7)\
         ethSpent1d: ethSpent(days:1)\
       }\
     }'
  };

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
  var result = graphQLQuery_(query, 'allProjects');

  return [headers].concat(result.map(function(project) {
    return [
      project['slug'],
      project['name'],
      parseFloat(project['priceUsd'] || 0),
      parseFloat(project['marketcapUsd'] || 0),
      parseFloat(project['volumeUsd'] || 0),
      parseFloat(project['usdBalance'] || 0),
      parseFloat(project['ethBalance'] || 0),
      parseFloat(project['ethSpent30d'] || 0),
      parseFloat(project['ethSpent7d'] || 0),
      parseFloat(project['ethSpent1d'] || 0),
      project['ticker']
    ];
  }));
}

/**
 * Gets an array of all ERC20 assets for which Santiment has data. Each asset record includes: slug, name, price in USD, market cap in USD, volume in USD, USD balance, ETH balance, ETH spent in the last 30 days, ETH spent in the last 7 days, ETH spent in the last day, ticker and main contract address.
 *
 * @customfunction
 */
function SAN_ERC20_PROJECTS() {
  var query = {
    'query': '{\
       allErc20Projects {\
         slug\
         name\
         ticker\
         mainContractAddress\
         marketcapUsd\
         priceUsd\
         volumeUsd\
         ethBalance\
         usdBalance\
         ethSpent30d: ethSpent(days:30)\
         ethSpent7d: ethSpent(days:7)\
         ethSpent1d: ethSpent(days:1)\
       }\
     }'
  };

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
  var result = graphQLQuery_(query, 'allErc20Projects');

  return [headers].concat(result.map(function(project) {
    return [
      project['slug'],
      project['name'],
      parseFloat(project['priceUsd'] || 0),
      parseFloat(project['marketcapUsd'] || 0),
      parseFloat(project['volumeUsd'] || 0),
      parseFloat(project['usdBalance'] || 0),
      parseFloat(project['ethBalance'] || 0),
      parseFloat(project['ethSpent30d'] || 0),
      parseFloat(project['ethSpent7d'] || 0),
      parseFloat(project['ethSpent1d'] || 0),
      project['ticker'],
      project['mainContractAddress']
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

  var query = {
    'query': '{\
       dailyActiveAddresses(slug: "' + project_slug + '",\
                            from: "' + toUTC_(from) + '",\
                            to: "' + toUTC_(to) + '",\
                            interval: "1d") {\
         activeAddresses\
         datetime\
       }\
     }'
  };

  return graphQLTimeseriesQuery_(query, 'dailyActiveAddresses', ['activeAddresses']);
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

  var query = {
    'query': '{\
       transactionVolume(slug: "' + project_slug + '",\
                         from: "' + toUTC_(from) + '",\
                         to: "' + toUTC_(to) + '",\
                         interval: "1d") {\
         transactionVolume\
         datetime\
       }\
     }'
  };

  return graphQLTimeseriesQuery_(query, 'transactionVolume', ['transactionVolume']);
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

  var query = {
    'query': '{\
       ohlc(slug: "' + project_slug + '",\
            from: "' + toUTC_(from) + '",\
            to: "' + toUTC_(to) + '",\
            interval: "1d") {\
         datetime\
         closePriceUsd\
         highPriceUsd\
         lowPriceUsd\
         openPriceUsd\
       }\
    }'
  };

  return graphQLTimeseriesQuery_(query, 'ohlc', ['closePriceUsd', 'highPriceUsd', 'lowPriceUsd', 'openPriceUsd']);
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

  var query = {
    'query': '{\
       priceVolumeDiff(currency: "' + currency + '",\
                       ticker: "' + project_ticker + '",\
                       from: "' + toUTC_(from) + '",\
                       to: "' + toUTC_(to) + '",\
                       interval: "1d") {\
         datetime\
         priceChange\
         priceVolumeDiff\
         volumeChange\
       }\
     }'
  };

  return graphQLTimeseriesQuery_(query, 'priceVolumeDiff', ['priceChange', 'priceVolumeDiff', 'volumeChange']);
};

/**
 * Returns a list of project slugs for which there is social volume data.
 *
 * @customfunction
 */
function SAN_SOCIAL_VOLUME_PROJECTS() {
  var query = { 'query': '{ socialVolumeProjects }' };
  var result = graphQLQuery_(query, 'socialVolumeProjects');
  return ['SV Projects'].concat(result);
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

  var query = {
    'query': '{\
       socialVolume(slug: "' + project_slug + '",\
                   from: "' + toUTC_(from) + '",\
                   to: "' + toUTC_(to) + '",\
                   socialVolumeType: ' + social_volume_type + ',\
                   interval: "1d") {\
         mentionsCount\
         datetime\
       }\
    }'
  };

  return graphQLTimeseriesQuery_(query, 'socialVolume', ['mentionsCount']);
}
