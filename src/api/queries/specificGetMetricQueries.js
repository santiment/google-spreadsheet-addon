ApiClient_.prototype.fetchExchangeSpecific = function (metric, slug, from, to, exchangeName, interval = '1d') {
  const query = {
    'query': `{
      getMetric(metric: "${metric}") {
        timeseriesData(
          selector: { owner: "${exchangeName}", slug: "${slug}" }
          ${fromParam(from)}
          ${toParam(to)}
          ${intervalParam(interval)}
        ) { datetime, value }
      }
    }`
  }

  return this.conn.graphQLQuery(query, 'getMetric')
}

ApiClient_.prototype.fetchMinersBalance = function (slug, from, to, interval = '1d') {
  const metric = 'labelled_historical_balance'
  const labelFunction = 'santiment/miner:v1'
  const query = {
    'query': `{
      getMetric(metric: "${metric}") {
        timeseriesData(
          selector: { labelFqn: "${labelFunction}", slug: "${slug}" }
          ${fromParam(from)}
          ${toParam(to)}
          ${intervalParam(interval)}
        ) { datetime, value }
      }
    }`
  }

  return this.conn.graphQLQuery(query, 'getMetric')
}
