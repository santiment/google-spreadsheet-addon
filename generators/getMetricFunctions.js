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
    hasTimeBound: true,
    returns: 'of ratios'
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
    description: `NVT (Network-Value-to-Transactions-Ratio Daily Market Cap / Daily Transaction Volume)
* Since Daily Transaction Volume gets rather noisy and easy to manipulate
* by transferring the same tokens through couple of addresses over and over again,
* it’s not an ideal measure of a network’s economic activity.
* That’s why we calculate NVT using Daily Trx Volume, but also by using Daily Token Circulation instead,
* which filters out excess transactions and provides a cleaner overview of a blockchain’s daily transaction throughput.
`,
    returns: 'of NVT ratios'
  }
]

module.exports = {
  metricsList: metricsList
}
