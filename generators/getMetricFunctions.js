const metricsList = [
  {
    metric: 'daily_avg_marketcap',
    description: 'the daily average marketcap',
    supportedCurrencies: ['usd']
  },
  {
    metric: 'daily_closing_marketcap',
    description: 'the daily closing marketcap',
    supportedCurrencies: ['usd']
  },
  { metric: 'daily_active_addresses', sheetMetricName: 'active_addresses', description: 'the daily active addresses' },
  {
    metric: 'mean_realized_price',
    description: 'the mean realized price',
    supportedCurrencies: ['usd'],
    hasTimeBound: true
  },
  {
    metric: 'mvrv_long_short_diff',
    description: 'the difference between MVRV',
    supportedCurrencies: ['usd']
  },
  {
    metric: 'mvrv',
    sheetMetricName: 'mvrv_ratio',
    description: 'MVRV(Market-Value-to-Realized-Value)',
    supportedCurrencies: ['usd'],
    hasTimeBound: true
  },
  {
    metric: 'circulation',
    sheetMetricName: 'token_circulation',
    description: 'the token circulation',
    hasTimeBound: true
  },
  { metric: 'mean_age', description: 'the token\'s mean age' },
  {
    metric: 'realized_value',
    description: 'the token\'s realized value',
    supportedCurrencies: ['usd'],
    hasTimeBound: true
  },
  { metric: 'velocity', description: 'the token\'s velocity' },
  { metric: 'transaction_volume', description: 'the transaction volume' },
  { metric: 'exchange_inflow', description: 'the exchange inflow' },
  { metric: 'exchange_outflow', description: 'the exchange outflow' },
  { metric: 'exchange_balance', description: 'the exchange balance' },
  { metric: 'age_destroyed', description: 'the token\'s age destroyed' },
  {
    metric: 'nvt',
    sheetMetricName: 'nvt_ratio',
    description: 'NVT (Network-Value-to-Transactions-Ratio Daily Market Cap / Daily Transaction Volume)'
  }
]

module.exports = {
  metricsList: metricsList
}
