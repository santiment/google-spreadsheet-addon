const metricsList = [
  {
    metric: 'daily_avg_marketcap',
    description: 'the daily average marketcap',
    currency: 'usd'
  },
  { metric: 'daily_avg_price', description: 'the daily average price', currency: 'usd' },
  {
    metric: 'daily_closing_marketcap',
    description: 'the daily closing marketcap',
    currency: 'usd'
  },
  { metric: 'daily_closing_price', description: 'the daily closing price', currency: 'usd' },
  { metric: 'daily_high_price', description: 'the daily high price', currency: 'usd' },
  { metric: 'daily_low_price', description: 'the daily low price', currency: 'usd' },
  { metric: 'daily_opening_price', description: 'the daily opening price', currency: 'usd' },
  { metric: 'daily_trading_volume', description: 'the daily trading volume', currency: 'usd' },
  { metric: 'daily_active_addresses', description: 'the daily active addresses' },
  {
    metric: 'mean_realized_price',
    description: 'the mean realised price',
    currency: 'usd'
  },
  {
    metric: 'mvrv_usd_long_short_diff',
    description: 'the difference between MVRV'
  },
  { metric: 'mvrv', description: 'the MVRV', currency: 'usd' },
  { metric: 'circulation', description: 'the token circulation' },
  { metric: 'mean_age', description: 'the token\'s mean age' },
  {
    metric: 'realized_value',
    description: 'a token\'s realised value',
    currency: 'usd'
  },
  { metric: 'velocity', description: 'the token\'s velocity' },
  { metric: 'transaction_volume', description: 'the transaction volume' },
  { metric: 'exchange_inflow', description: 'the exchange inflow' },
  { metric: 'exchange_outflow', description: 'the exchange outflow' },
  { metric: 'exchange_balance', description: 'the exchange balance' },
  { metric: 'age_destroyed', description: 'the token\'s age destroyed' },
  { metric: 'nvt', description: 'the Network Value to Transaction ratio' }
]

module.exports = {
  metricsList: metricsList
}
