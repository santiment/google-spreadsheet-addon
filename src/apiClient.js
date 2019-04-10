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

ApiClient_.prototype.fetchPrices = function (slug, from, to) {
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

ApiClient_.prototype.fetchActiveAddresses = function (slug, from, to) {
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

ApiClient_.prototype.fetchTransactionVolume = function (slug, from, to) {
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

ApiClient_.prototype.fetchOhlc = function (slug, from, to) {
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

ApiClient_.prototype.fetchPriceVolumeDiff = function (currency, slug, from, to) {
  var query = {
    'query': '{\
       priceVolumeDiff(currency: "' + currency + '",\
                       slug: "' + slug + '",\
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

ApiClient_.prototype.fetchDailyGithubActivity = function (slug, from, to) {
  var query = {
    'query': '{\
       githubActivity(slug: "' + slug + '",\
                    from: "' + toUTC_(from) + '",\
                    to: "' + toUTC_(to) + '",\
                    interval: "1d") {\
         activity\
         datetime\
       }\
     }'
  }

  return this.conn.graphQLQuery(query, 'githubActivity')
}

ApiClient_.prototype.fetchDailyDevActivity = function (slug, from, to) {
  var query = {
    'query': '{\
       devActivity(slug: "' + slug + '",\
                    from: "' + toUTC_(from) + '",\
                    to: "' + toUTC_(to) + '",\
                    interval: "1d") {\
         activity\
         datetime\
       }\
     }'
  }

  return this.conn.graphQLQuery(query, 'devActivity')
}

ApiClient_.prototype.fetchDailyNetworkGrowth = function (slug, from, to) {
  var query = {
    'query': '{\
       networkGrowth(slug: "' + slug + '",\
                     from: "' + toUTC_(from) + '",\
                     to: "' + toUTC_(to) + '",\
                     interval: "1d") {\
         newAddresses\
         datetime\
       }\
     }'
  }

  return this.conn.graphQLQuery(query, 'networkGrowth')
}

ApiClient_.prototype.fetchDailyExchangeFundsFlow = function (slug, from, to) {
  var query = {
    'query': '{\
       exchangeFundsFlow(slug: "' + slug + '",\
                         from: "' + toUTC_(from) + '",\
                         to: "' + toUTC_(to) + '",\
                         interval: "1d") {\
         inOutDifference\
         datetime\
       }\
     }'
  }

  return this.conn.graphQLQuery(query, 'exchangeFundsFlow')
}

ApiClient_.prototype.fetchDailyTokenCirculation = function (slug, from, to) {
  var query = {
    'query': '{\
       tokenCirculation(slug: "' + slug + '",\
                        from: "' + toUTC_(from) + '",\
                        to: "' + toUTC_(to) + '",\
                        interval: "1d") {\
         tokenCirculation\
         datetime\
       }\
     }'
  }

  return this.conn.graphQLQuery(query, 'tokenCirculation')
}


ApiClient_.prototype.fetchDailyTrendingWords = function (source, size, hour, from, to) {
  var query = {
    'query': '{\
       trendingWords(source: ' + source + ',\
                     size: ' + size + ',\
                     hour: ' + hour + ',\
                     from: "' + toUTC_(from) + '",\
                     to: "' + toUTC_(to) + '") {\
         datetime\
         topWords {\
           score\
           word\
         }\
       }\
    }'
  }

  return this.conn.graphQLQuery(query, 'trendingWords')
}

ApiClient_.prototype.fetchProjectFundamentals = function (slug) {
  var query = {
    'query': '{\
       projectBySlug(slug: "' + slug + '") {\
         ticker\
         name\
         slug\
         fundsRaisedUsdIcoEndPrice\
         ethSpent30d: ethSpent(days:30)\
         ethBalance\
         usdBalance\
         priceUsd\
         percentChange24h\
         percentChange7d\
         volumeChange24h\
         availableSupply\
         marketcapUsd\
         averageDevActivity(days:30)\
       }\
     }'
  }

  return this.conn.graphQLQuery(query, 'projectBySlug')
}

ApiClient_.prototype.fetchProjectSocialData = function (slug) {
  var query = {
    'query': '{\
      projectBySlug(slug: "' + slug + '") {\
        ticker\
        name\
        slug\
        websiteLink\
        facebookLink\
        blogLink\
        linkedinLink\
        githubLink\
        twitterLink\
        whitepaperLink\
        redditLink\
        slackLink\
      }\
    }'
  }

  return this.conn.graphQLQuery(query, 'projectBySlug')
}

ApiClient_.prototype.fetchDailyTokenAgeConsumed = function (slug, from, to) {
  var query = {
    'query': '{\
       tokenAgeConsumed(slug: "' + slug + '",\
                        from: "' + toUTC_(from) + '",\
                        to: "' + toUTC_(to) + '",\
                        interval: "1d") {\
         tokenAgeConsumed\
         datetime\
       }\
     }'
  }

  return this.conn.graphQLQuery(query, 'tokenAgeConsumed')
}

ApiClient_.prototype.fetchMvrvRatio = function (slug, from, to) {
  var query = {
    'query': '{\
       mvrvRatio(slug: "' + slug + '",\
                 from: "' + toUTC_(from) + '",\
                 to: "' + toUTC_(to) + '",\
                 interval: "1d") {\
         ratio\
         datetime\
       }\
     }'
  }

  return this.conn.graphQLQuery(query, 'mvrvRatio')
}

ApiClient_.prototype.fetchNvtRatio = function (slug, from, to) {
  var query = {
    'query': '{\
       nvtRatio(slug: "' + slug + '",\
                from: "' + toUTC_(from) + '",\
                to: "' + toUTC_(to) + '",\
                interval: "1d") {\
         nvtRatioTxVolume\
         nvtRatioCirculation\
         datetime\
       }\
     }'
  }

  return this.conn.graphQLQuery(query, 'nvtRatio')
}

ApiClient_.prototype.fetchDailyActiveDeposits = function (slug, from, to) {
  var query = {
    'query': '{\
       dailyActiveDeposits(slug: "' + slug + '",\
                           from: "' + toUTC_(from) + '",\
                           to: "' + toUTC_(to) + '",\
                           interval: "1d") {\
         activeDeposits\
         datetime\
       }\
     }'
  }

  return this.conn.graphQLQuery(query, 'dailyActiveDeposits')
}


ApiClient_.prototype.fetchRealizedValue = function (slug, from, to) {
  var query = {
    'query': '{\
       realizedValue(slug: "' + slug + '",\
                     from: "' + toUTC_(from) + '",\
                     to: "' + toUTC_(to) + '",\
                     interval: "1d") {\
         realizedValue\
         datetime\
       }\
     }'
  }

  return this.conn.graphQLQuery(query, 'realizedValue')
}

ApiClient_.prototype.fetchGasUsed = function (from, to) {
  var query = {
    'query': '{\
       gasUsed(from: "' + toUTC_(from) + '",\
               to: "' + toUTC_(to) + '",\
               interval: "1d") {\
         ethGasUsed\
         datetime\
       }\
     }'
  }

  return this.conn.graphQLQuery(query, 'gasUsed')
}
