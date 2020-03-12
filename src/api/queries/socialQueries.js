ApiClient_.prototype.fetchSocialVolumeProjects = function () {
  const query = { 'query': '{ socialVolumeProjects }' }
  return this.conn.graphQLQuery(query, 'socialVolumeProjects')
}

ApiClient_.prototype.fetchSocialVolume = function (slug, from, to, socialVolumeType) {
  const query = {
    'query': `{
       socialVolume(${commonParams(slug, from, to)},
                   socialVolumeType: ${socialVolumeType}) {
         mentionsCount
         datetime
       }
    }`
  }

  return this.conn.graphQLQuery(query, 'socialVolume')
}

ApiClient_.prototype.fetchEmergingTrends = function (size, from, to) {
  const query = {
    'query': `{
       getTrendingWords(size: ${size},
                     ${fromParam(from)},
                     ${toParam(to)},
                     ${intervalParam()}) {
         datetime
         topWords {
           score
           word
         }
       }
    }`
  }

  return this.conn.graphQLQuery(query, 'getTrendingWords')
}

ApiClient_.prototype.fetchHistoryTwitterData = function (slug, from, to) {
  const query = {
    'query': `{
       historyTwitterData(${commonParams(slug, from, to)}) {
         datetime
         followersCount
       }
     }`
  }

  return this.conn.graphQLQuery(query, 'historyTwitterData')
}

ApiClient_.prototype.fetchSocialDominance = function (slug, from, to, source) {
  const query = {
    'query': `{
       socialDominance(${commonParams(slug, from, to)},
                       source: ${source}) {
         datetime
         dominance
       }
     }`
  }

  return this.conn.graphQLQuery(query, 'socialDominance')
}
