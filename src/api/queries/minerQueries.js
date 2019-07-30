ApiClient_.prototype.fetchGasUsed = function(slug, from, to) {
  var query = {
    query:
      '{\
       gasUsed(slug: "' +
      slug +
      '",\
               from: "' +
      toUTC_(from) +
      '",\
               to: "' +
      toUTC_(to) +
      '",\
               interval: "1d") {\
         gasUsed\
         datetime\
       }\
     }'
  }

  return this.conn.graphQLQuery(query, 'gasUsed')
}

ApiClient_.prototype.fetchMiningPoolsDistribution = function(slug, from, to) {
  var query = {
    query:
      '{\
       miningPoolsDistribution(slug: "' +
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
         top3\
         top10\
         other\
       }\
     }'
  }

  return this.conn.graphQLQuery(query, 'miningPoolsDistribution')
}

ApiClient_.prototype.fetchMinersBalance = function(slug, from, to) {
  var query = {
    query:
      '{\
       minersBalance(slug: "' +
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
         balance\
       }\
     }'
  }

  return this.conn.graphQLQuery(query, 'minersBalance')
}
