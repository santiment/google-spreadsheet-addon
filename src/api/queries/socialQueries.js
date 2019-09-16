ApiClient_.prototype.fetchSocialVolumeProjects = function () {
  var query = { 'query': '{ socialVolumeProjects }' }
  return this.conn.graphQLQuery(query, 'socialVolumeProjects')
}

ApiClient_.prototype.fetchSocialVolume = function (slug, from, to, socialVolumeType) {
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

ApiClient_.prototype.fetchEmergingTrends = function (size, from, to) {
  var query = {
    'query': '{\
       getTrendingWords(size: ' + size + ',\
                     from: "' + toUTC_(from) + '",\
                     to: "' + toUTC_(to) + '",\
                     interval: "1d") {\
         datetime\
         topWords {\
           score\
           word\
         }\
       }\
    }'
  }

  return this.conn.graphQLQuery(query, 'getTrendingWords')
}

ApiClient_.prototype.fetchNews = function (tag, from, to, size) {
  var query = {
    'query': '{\
       news(tag: "' + tag + '",\
            from: "' + toUTC_(from) + '",\
            to: "' + toUTC_(to) + '",\
            size: ' + size + ') {\
         datetime\
         title\
         sourceName\
         url\
         description\
       }\
     }'
  }

  return this.conn.graphQLQuery(query, 'news')
}

ApiClient_.prototype.fetchHistoryTwitterData = function (slug, from, to) {
  var query = {
    'query': '{\
       historyTwitterData(slug: "' + slug + '",\
                          from: "' + toUTC_(from) + '",\
                          to: "' + toUTC_(to) + '",\
                          interval: "1d") {\
         datetime\
         followersCount\
       }\
     }'
  }

  return this.conn.graphQLQuery(query, 'historyTwitterData')
}

ApiClient_.prototype.fetchSocialDominance = function (slug, from, to, source) {
  var query = {
    'query': '{\
       socialDominance(slug: "' + slug + '",\
                       from: "' + toUTC_(from) + '",\
                       to: "' + toUTC_(to) + '",\
                       interval: "1d",\
                       source: ' + source + ') {\
         datetime\
         dominance\
       }\
     }'
  }

  return this.conn.graphQLQuery(query, 'socialDominance')
}
