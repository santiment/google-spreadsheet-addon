var SANTIMENT_GRAPHQL_ENDPOINT = "https://api.santiment.net/graphql"
var API_KEY = "API_KEY";
var HISTORIC_DATA_THRESHOLD = 90

function apiKey_() { return getUserProperty_(API_KEY) }
function hasApiKey_() { return !!apiKey_() }

function checkForHistoricData_(from) {
  if (dataIsHistoric_(from) && !hasApiKey_()) {
    throw new Error("You can't use the add-on for historic data at the moment. Please select a starting date within three months in the past.");
  }
}

function dataIsHistoric_(from) {
  var oneDay = 24 * 60 * 60 * 1000;
  var timeSpan = ((new Date()) - from) / oneDay;
  return timeSpan > HISTORIC_DATA_THRESHOLD;
}

function buildRequestOptions_(query) {
  var requestOptions = {
    'muteHttpExceptions': true,
    'method' : 'post',
    'contentType': 'application/json',
    'payload' : JSON.stringify(query)
  }

  if (hasApiKey_()) {
    requestOptions['headers'] = { Authorization: 'Apikey ' + apiKey_() }
  }

  return requestOptions
}

function graphQLQuery_(query, query_name) {
  var response = UrlFetchApp.fetch(SANTIMENT_GRAPHQL_ENDPOINT, buildRequestOptions_(query));

  if (response.getResponseCode() != 200) {
    var errorMessage = JSON.stringify(JSON.parse(response.getContentText())["errors"][0]["message"]);
    throw new Error("Code: " + response.getResponseCode() + ", Message: " + errorMessage);
  }

  return JSON.parse(response.getContentText())["data"][query_name];
}

function fetchDailyPrices_(slug, from, to) {
  var query = {
    'query': '{\
       historyPrice(slug: "' + slug + '",\
                    from: "' + toUTC_(from) + '",\
                    to: "' + toUTC_(to) + '",\
                    interval: "1d") {\
         datetime\
         priceUsd\
         volume\
       }\
     }'
  };

  return graphQLQuery_(query, 'historyPrice');
}

function fetchAllProjects_() {
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

  return graphQLQuery_(query, 'allProjects');
}

function fetchErc20Projects_() {
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

  return graphQLQuery_(query, 'allErc20Projects');
}

function fetchDailyActiveAddresses_(slug, from, to) {
  var query = {
    'query': '{\
       dailyActiveAddresses(slug: "' + slug + '",\
                            from: "' + toUTC_(from) + '",\
                            to: "' + toUTC_(to) + '",\
                            interval: "1d") {\
         activeAddresses\
         datetime\
       }\
     }'
  };

  return graphQLQuery_(query, 'dailyActiveAddresses');
}

function fetchDailyTransactionVolume_(slug, from, to) {
  var query = {
    'query': '{\
       transactionVolume(slug: "' + slug + '",\
                         from: "' + toUTC_(from) + '",\
                         to: "' + toUTC_(to) + '",\
                         interval: "1d") {\
         transactionVolume\
         datetime\
       }\
     }'
  };

  return graphQLQuery_(query, 'transactionVolume');
}

function fetchDailyOhlc_(slug, from, to) {
  var query = {
    'query': '{\
       ohlc(slug: "' + slug + '",\
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

  return graphQLQuery_(query, 'ohlc');
}

function fetchDailyPriceVolumeDiff_(currency, ticker, from, to) {
  var query = {
    'query': '{\
       priceVolumeDiff(currency: "' + currency + '",\
                       ticker: "' + ticker + '",\
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

  return graphQLQuery_(query, 'priceVolumeDiff');
}

function fetchSocialVolumeProjects_() {
  var query = { 'query': '{ socialVolumeProjects }' };
  return graphQLQuery_(query, 'socialVolumeProjects');
}

function fetchDailySocialVolume_(slug, from, to, socialVolumeType) {
  var query = {
    'query': '{\
       socialVolume(slug: "' + slug + '",\
                   from: "' + toUTC_(from) + '",\
                   to: "' + toUTC_(to) + '",\
                   socialVolumeType: ' + socialVolumeType + ',\
                   interval: "1d") {\
         mentionsCount\
         datetime\
       }\
    }'
  };

  return graphQLQuery_(query, 'socialVolume');
}
