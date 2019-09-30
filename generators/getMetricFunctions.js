const metricsList = [
  {
    metric: 'daily_avg_marketcap',
    description: 'the daily average marketcap',
    hasCurrency: true
  },
  {
    metric: 'daily_closing_marketcap',
    description: 'the daily closing marketcap',
    hasCurrency: true
  },
  { metric: 'daily_active_addresses', sheetMetricName: 'active_addresses', description: 'the daily active addresses' },
  {
    metric: 'mean_realized_price',
    description: 'the mean realised price',
    hasCurrency: true,
    hasTimeBound: true
  },
  {
    metric: 'mvrv_long_short_diff',
    description: 'the difference between MVRV',
    hasCurrency: true
  },
  {
    metric: 'mvrv',
    sheetMetricName: 'mvrv_ratio',
    description: 'the MVRV',
    hasCurrency: true,
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
    description: 'the token\'s realised value',
    hasCurrency: true,
    hasTimeBound: true
  },
  { metric: 'velocity', description: 'the token\'s velocity' },
  { metric: 'transaction_volume', description: 'the transaction volume' },
  { metric: 'exchange_inflow', description: 'the exchange inflow' },
  { metric: 'exchange_outflow', description: 'the exchange outflow' },
  { metric: 'exchange_balance', description: 'the exchange balance' },
  { metric: 'age_destroyed', description: 'the token\'s age destroyed' },
  { metric: 'nvt', sheetMetricName: 'nvt_ratio', description: 'the Network Value to Transaction ratio' }
]

module.exports = {
  metricsList: metricsList
}
