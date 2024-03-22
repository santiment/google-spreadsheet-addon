ApiClient_.prototype.fetchGasUsed = function (slug, from, to) {
  const query = {
    'query': `{
       gasUsed(${commonParams(slug, from, to)}) {
         gasUsed
         datetime
       }
     }`
  }

  return this.conn.graphQLQuery(query, 'gasUsed')
}

ApiClient_.prototype.fetchMiningPoolsDistribution = function (slug, from, to) {
  const query = {
    'query': `{
       miningPoolsDistribution(${commonParams(slug, from, to)}) {
         datetime
         top3
         top10
         other
       }
     }`
  }

  return this.conn.graphQLQuery(query, 'miningPoolsDistribution')
}
