ApiClient_.prototype.fetchActiveAddresses = function(slug, from, to) {
    var query = {
        query:
            '{\
       dailyActiveAddresses(slug: "' +
            slug +
            '",\
                            from: "' +
            toUTC_(from) +
            '",\
                            to: "' +
            toUTC_(to) +
            '",\
                            interval: "1d") {\
         activeAddresses\
         datetime\
       }\
     }',
    }

    return this.conn.graphQLQuery(query, 'dailyActiveAddresses')
}

ApiClient_.prototype.fetchActiveDeposits = function(slug, from, to) {
    var query = {
        query:
            '{\
       dailyActiveDeposits(slug: "' +
            slug +
            '",\
                           from: "' +
            toUTC_(from) +
            '",\
                           to: "' +
            toUTC_(to) +
            '",\
                           interval: "1d") {\
         activeDeposits\
         datetime\
       }\
     }',
    }

    return this.conn.graphQLQuery(query, 'dailyActiveDeposits')
}

ApiClient_.prototype.fetchTransactionVolume = function(slug, from, to) {
    var query = {
        query:
            '{\
       transactionVolume(slug: "' +
            slug +
            '",\
                         from: "' +
            toUTC_(from) +
            '",\
                         to: "' +
            toUTC_(to) +
            '",\
                         interval: "1d") {\
         transactionVolume\
         datetime\
       }\
     }',
    }

    return this.conn.graphQLQuery(query, 'transactionVolume')
}

ApiClient_.prototype.fetchNetworkGrowth = function(slug, from, to) {
    var query = {
        query:
            '{\
       networkGrowth(slug: "' +
            slug +
            '",\
                     from: "' +
            toUTC_(from) +
            '",\
                     to: "' +
            toUTC_(to) +
            '",\
                     interval: "1d") {\
         newAddresses\
         datetime\
       }\
     }',
    }

    return this.conn.graphQLQuery(query, 'networkGrowth')
}

ApiClient_.prototype.fetchExchangeFundsFlow = function(slug, from, to) {
    var query = {
        query:
            '{\
       exchangeFundsFlow(slug: "' +
            slug +
            '",\
                         from: "' +
            toUTC_(from) +
            '",\
                         to: "' +
            toUTC_(to) +
            '",\
                         interval: "1d") {\
         inOutDifference\
         datetime\
       }\
     }',
    }

    return this.conn.graphQLQuery(query, 'exchangeFundsFlow')
}

ApiClient_.prototype.fetchTokenCirculation = function(slug, from, to) {
    var query = {
        query:
            '{\
       tokenCirculation(slug: "' +
            slug +
            '",\
                        from: "' +
            toUTC_(from) +
            '",\
                        to: "' +
            toUTC_(to) +
            '",\
                        interval: "1d") {\
         tokenCirculation\
         datetime\
       }\
     }',
    }

    return this.conn.graphQLQuery(query, 'tokenCirculation')
}

ApiClient_.prototype.fetchTokenAgeConsumed = function(slug, from, to) {
    var query = {
        query:
            '{\
       tokenAgeConsumed(slug: "' +
            slug +
            '",\
                        from: "' +
            toUTC_(from) +
            '",\
                        to: "' +
            toUTC_(to) +
            '",\
                        interval: "1d") {\
         tokenAgeConsumed\
         datetime\
       }\
     }',
    }

    return this.conn.graphQLQuery(query, 'tokenAgeConsumed')
}

ApiClient_.prototype.fetchMvrvRatio = function(slug, from, to) {
    var query = {
        query:
            '{\
       mvrvRatio(slug: "' +
            slug +
            '",\
                 from: "' +
            toUTC_(from) +
            '",\
                 to: "' +
            toUTC_(to) +
            '",\
                 interval: "1d") {\
         ratio\
         datetime\
       }\
     }',
    }

    return this.conn.graphQLQuery(query, 'mvrvRatio')
}

ApiClient_.prototype.fetchNvtRatio = function(slug, from, to) {
    var query = {
        query:
            '{\
       nvtRatio(slug: "' +
            slug +
            '",\
                from: "' +
            toUTC_(from) +
            '",\
                to: "' +
            toUTC_(to) +
            '",\
                interval: "1d") {\
         nvtRatioTxVolume\
         nvtRatioCirculation\
         datetime\
       }\
     }',
    }

    return this.conn.graphQLQuery(query, 'nvtRatio')
}

ApiClient_.prototype.fetchRealizedValue = function(slug, from, to) {
    var query = {
        query:
            '{\
       realizedValue(slug: "' +
            slug +
            '",\
                     from: "' +
            toUTC_(from) +
            '",\
                     to: "' +
            toUTC_(to) +
            '",\
                     interval: "1d") {\
         realizedValue\
         datetime\
       }\
     }',
    }

    return this.conn.graphQLQuery(query, 'realizedValue')
}

ApiClient_.prototype.fetchHistoricalBalance = function(
    slug,
    from,
    to,
    address
) {
    var query = {
        query:
            '{\
       historicalBalance(slug: "' +
            slug +
            '",\
                         from: "' +
            toUTC_(from) +
            '",\
                         to: "' +
            toUTC_(to) +
            '",\
                         interval: "1d",\
                         address: "' +
            address +
            '") {\
         datetime\
         balance\
       }\
     }',
    }

    return this.conn.graphQLQuery(query, 'historicalBalance')
}
