ApiClient_.prototype.fetchExchangeFundsFlow = function (slug, from, to) {
  const query = {
    'query': `{
       exchangeFundsFlow(${commonParams(slug, from, to)}) {
         inOutDifference
         datetime
       }
     }`
  }

  return this.conn.graphQLQuery(query, 'exchangeFundsFlow')
}

ApiClient_.prototype.fetchTokenAgeConsumed = function (slug, from, to) {
  const query = {
    'query': `{
       tokenAgeConsumed(${commonParams(slug, from, to)}) {
         tokenAgeConsumed
         datetime
       }
     }`
  }

  return this.conn.graphQLQuery(query, 'tokenAgeConsumed')
}

ApiClient_.prototype.fetchHistoricalBalance = function (slug, from, to, address) {
  const query = {
    'query': `{
       historicalBalance(${commonParams(slug, from, to)}, address: "${address}") {
         datetime
         balance
       }
     }`
  }

  return this.conn.graphQLQuery(query, 'historicalBalance')
}

ApiClient_.prototype.fetchTokenTopTransactions = function (slug, from, to, limit) {
  const query = {
    'query': `{
      projectBySlug(${slugParam(slug)}){
        tokenTopTransactions(${fromParam(from)},
                             ${toParam(to)},
                             limit: ${limit}){
                               datetime
                               fromAddress{
                                 address
                                 isExchange
                               }
                               toAddress{
                                 address
                                 isExchange
                               }
                               trxHash
                               trxValue
                             }
                           }
                         }`
  }

  return this.conn.graphQLQuery(query, 'projectBySlug')
}

ApiClient_.prototype.fetchEthTopTransactions = function (slug, from, to, limit, transactionType) {
  const query = {
    'query': `{
      projectBySlug(${slugParam(slug)}){
        ethTopTransactions(${fromParam(from)},
                           ${toParam(to)},
                           limit: ${limit},
                           transactionType: ${transactionType}){
                               datetime
                               fromAddress{
                                 address
                                 isExchange
                               }
                               toAddress{
                                 address
                                 isExchange
                               }
                               trxHash
                               trxValue
                             }
                           }
                         }`
  }

  return this.conn.graphQLQuery(query, 'projectBySlug')
}

ApiClient_.prototype.fetchEthSpentOverTime = function (slug, from, to) {
  const query = {
    'query': `{
      projectBySlug(${slugParam(slug)}){
        ethSpentOverTime(${fromParam(from)},
                         ${toParam(to)},
                         ${intervalParam()}){
          datetime
          ethSpent
        }
      }
    }`
  }

  return this.conn.graphQLQuery(query, 'projectBySlug')
}

ApiClient_.prototype.fetchTopHoldersPercentOfTotalSupply = function (slug, from, to, numberOfHolders) {
  const query = {
    'query': `{
       topHoldersPercentOfTotalSupply(${commonParams(slug, from, to)},
                                      numberOfHolders: ${numberOfHolders}) {
                                        datetime
                                        inExchanges
                                        outsideExchanges
                                        inTopHoldersTotal
                                      }
     }`
  }

  return this.conn.graphQLQuery(query, 'topHoldersPercentOfTotalSupply')
}
