ApiClient_.prototype.fetchPrices = function(slug, from, to) {
    var query = {
        query:
            '{\
       historyPrice(slug: "' +
            slug +
            '",\
                    from: "' +
            toUTC_(from) +
            '",\
                    to: "' +
            toUTC_(to) +
            '",\
                    interval: "1d") {\
         datetime\
         priceUsd\
         volume\
       }\
     }',
    }

    return this.conn.graphQLQuery(query, 'historyPrice')
}

ApiClient_.prototype.fetchOhlc = function(slug, from, to) {
    var query = {
        query:
            '{\
       ohlc(slug: "' +
            slug +
            '",\
            from: "' +
            toUTC_(from) +
            '",\
            to: "' +
            toUTC_(to) +
            '",\
            interval: "1d") {\
         datetime\
         closePriceUsd\
         highPriceUsd\
         lowPriceUsd\
         openPriceUsd\
       }\
    }',
    }

    return this.conn.graphQLQuery(query, 'ohlc')
}

ApiClient_.prototype.fetchPriceVolumeDiff = function(currency, slug, from, to) {
    var query = {
        query:
            '{\
       priceVolumeDiff(currency: "' +
            currency +
            '",\
                       slug: "' +
            slug +
            '",\
                       from: "' +
            toUTC_(from) +
            '",\
                       to: "' +
            toUTC_(to) +
            '",\
                       interval: "1d") {\
         datetime\
         priceChange\
         priceVolumeDiff\
         volumeChange\
       }\
     }',
    }

    return this.conn.graphQLQuery(query, 'priceVolumeDiff')
}

ApiClient_.prototype.fetchDailyClosingPrice = function(slug, from, to) {
    var query = {
        query:
            '{\
       ohlc(slug: "' +
            slug +
            '",\
            from: "' +
            toUTC_(from) +
            '",\
            to: "' +
            toUTC_(to) +
            '",\
            interval: "1d") {\
         closePriceUsd\
       }\
    }',
    }

    return this.conn.graphQLQuery(query, 'ohlc')
}

ApiClient_.prototype.fetchLatestPrice = function(slug, currencyField) {
    var query = {
        query: '{ projectBySlug(slug: "' + slug + '") {' + currencyField + '}}',
    }

    return this.conn.graphQLQuery(query, 'projectBySlug')
}
