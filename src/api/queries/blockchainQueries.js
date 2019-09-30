ApiClient_.prototype.fetchActiveDeposits = function (slug, from, to) {
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

ApiClient_.prototype.fetchNetworkGrowth = function (slug, from, to) {
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

ApiClient_.prototype.fetchExchangeFundsFlow = function (slug, from, to) {
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

ApiClient_.prototype.fetchTokenAgeConsumed = function (slug, from, to) {
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

ApiClient_.prototype.fetchHistoricalBalance = function (slug, from, to, address) {
  var query = {
    'query': '{\
       historicalBalance(slug: "' + slug + '",\
                         from: "' + toUTC_(from) + '",\
                         to: "' + toUTC_(to) + '",\
                         interval: "1d",\
                         address: "' + address + '") {\
         datetime\
         balance\
       }\
     }'
  }

  return this.conn.graphQLQuery(query, 'historicalBalance')
}

ApiClient_.prototype.fetchTokenTopTransactions = function (slug, from, to, limit) {
  var query = {
    'query': '{ projectBySlug(slug: "' + slug + '"){\
        tokenTopTransactions(from: "' + toUTC_(from) + '",\
                             to: "' + toUTC_(to) + '",\
                             limit: ' + limit + '){\
                               datetime\
                               fromAddress{\
                                 address\
                                 isExchange\
                               }\
                               toAddress{\
                                 address\
                                 isExchange\
                               }\
                               trxHash\
                               trxValue\
                             }\
                           }\
                         }'
  }

  return this.conn.graphQLQuery(query, 'projectBySlug')
}

ApiClient_.prototype.fetchEthTopTransactions = function (slug, from, to, limit, transactionType) {
  var query = {
    'query': '{ projectBySlug(slug: "' + slug + '"){\
        ethTopTransactions(from: "' + toUTC_(from) + '",\
                           to: "' + toUTC_(to) + '",\
                           limit: ' + limit + '\
                           transactionType: ' + transactionType + '){\
                               datetime\
                               fromAddress{\
                                 address\
                                 isExchange\
                               }\
                               toAddress{\
                                 address\
                                 isExchange\
                               }\
                               trxHash\
                               trxValue\
                             }\
                           }\
                         }'
  }

  return this.conn.graphQLQuery(query, 'projectBySlug')
}

ApiClient_.prototype.fetchEthSpentOverTime = function (slug, from, to) {
  var query = {
    'query': '{ projectBySlug(slug: "' + slug + '"){\
        ethSpentOverTime(from: "' + toUTC_(from) + '",\
                         to: "' + toUTC_(to) + '",\
                         interval: "1d"){\
          datetime\
          ethSpent\
        }\
      }\
    }'
  }

  return this.conn.graphQLQuery(query, 'projectBySlug')
}

ApiClient_.prototype.fetchTopHoldersPercentOfTotalSupply = function (slug, from, to, numberOfHolders) {
  var query = {
    'query': '{\
       topHoldersPercentOfTotalSupply(slug: "' + slug + '",\
                                      from: "' + toUTC_(from) + '",\
                                      to: "' + toUTC_(to) + '",\
                                      interval: "1d",\
                                      numberOfHolders: ' + numberOfHolders + ') {\
                                        datetime\
                                        inExchanges\
                                        outsideExchanges\
                                        inTopHoldersTotal\
                                      }\
     }'
  }

  return this.conn.graphQLQuery(query, 'topHoldersPercentOfTotalSupply')
}
