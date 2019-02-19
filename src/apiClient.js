function ApiClient_ (conn) {
  this.conn = conn
}

ApiClient_.prototype.hasValidApiKey = function () {
  var response = this.fetchCurrentUserPermissions()
  return (response && response.permissions && response.permissions.spreadsheet) === true
}

ApiClient_.prototype.fetchCurrentUserPermissions = function () {
  var query = { 'query': '{currentUser {permissions {spreadsheet}}}' }
  return this.conn.graphQLQuery(query, 'currentUser')
}

ApiClient_.prototype.fetchDailyPrices = function (slug, from, to) {
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
  }

  return this.conn.graphQLQuery(query, 'historyPrice')
}

ApiClient_.prototype.fetchAllProjects = function () {
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
  }

  return this.conn.graphQLQuery(query, 'allProjects')
}

ApiClient_.prototype.fetchErc20Projects = function () {
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
  }

  return this.conn.graphQLQuery(query, 'allErc20Projects')
}

ApiClient_.prototype.fetchDailyActiveAddresses = function (slug, from, to) {
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
  }

  return this.conn.graphQLQuery(query, 'dailyActiveAddresses')
}

ApiClient_.prototype.fetchDailyTransactionVolume = function (slug, from, to) {
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
  }

  return this.conn.graphQLQuery(query, 'transactionVolume')
}

ApiClient_.prototype.fetchDailyOhlc = function (slug, from, to) {
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
  }

  return this.conn.graphQLQuery(query, 'ohlc')
}

ApiClient_.prototype.fetchDailyPriceVolumeDiff = function (currency, ticker, from, to) {
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
  }

  return this.conn.graphQLQuery(query, 'priceVolumeDiff')
}

ApiClient_.prototype.fetchSocialVolumeProjects = function () {
  var query = { 'query': '{ socialVolumeProjects }' }
  return this.conn.graphQLQuery(query, 'socialVolumeProjects')
}

ApiClient_.prototype.fetchDailySocialVolume = function (slug, from, to, socialVolumeType) {
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
  }

  return this.conn.graphQLQuery(query, 'socialVolume')
}
