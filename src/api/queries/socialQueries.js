ApiClient_.prototype.fetchSocialVolumeProjects = function() {
    var query = { query: '{ socialVolumeProjects }' }
    return this.conn.graphQLQuery(query, 'socialVolumeProjects')
}

ApiClient_.prototype.fetchSocialVolume = function(
    slug,
    from,
    to,
    socialVolumeType
) {
    var query = {
        query:
            '{\
       socialVolume(slug: "' +
            slug +
            '",\
                   from: "' +
            toUTC_(from) +
            '",\
                   to: "' +
            toUTC_(to) +
            '",\
                   socialVolumeType: ' +
            socialVolumeType +
            ',\
                   interval: "1d") {\
         mentionsCount\
         datetime\
       }\
    }',
    }

    return this.conn.graphQLQuery(query, 'socialVolume')
}

ApiClient_.prototype.fetchTrendingWords = function(
    source,
    size,
    hour,
    from,
    to
) {
    var query = {
        query:
            '{\
       trendingWords(source: ' +
            source +
            ',\
                     size: ' +
            size +
            ',\
                     hour: ' +
            hour +
            ',\
                     from: "' +
            toUTC_(from) +
            '",\
                     to: "' +
            toUTC_(to) +
            '") {\
         datetime\
         topWords {\
           score\
           word\
         }\
       }\
    }',
    }

    return this.conn.graphQLQuery(query, 'trendingWords')
}

ApiClient_.prototype.fetchNews = function(tag, from, to, size) {
    var query = {
        query:
            '{\
       news(tag: "' +
            tag +
            '",\
            from: "' +
            toUTC_(from) +
            '",\
            to: "' +
            toUTC_(to) +
            '",\
            size: ' +
            size +
            ') {\
         datetime\
         title\
         sourceName\
         url\
         description\
       }\
     }',
    }

    return this.conn.graphQLQuery(query, 'news')
}
