const data = [
  {
    metric: 'daily_avg_marketcap',
    description: 'the daily average marketcap',
    fiatCurrency: 'usd'
  },
  { metric: 'daily_avg_price', description: 'the daily average price', fiatCurrency: 'usd' },
  {
    metric: 'daily_closing_marketcap',
    description: 'the daily closing marketcap',
    fiatCurrency: 'usd'
  },
  { metric: 'daily_closing_price', description: 'the daily closing price', fiatCurrency: 'usd' },
  { metric: 'daily_high_price', description: 'the daily high price', fiatCurrency: 'usd' },
  { metric: 'daily_low_price', description: 'the daily low price', fiatCurrency: 'usd' },
  { metric: 'daily_opening_price', description: 'the daily opening price', fiatCurrency: 'usd' },
  { metric: 'daily_trading_volume', description: 'the daily trading volume', fiatCurrency: 'usd' },
  { metric: 'daily_active_addresses', description: 'the daily active addresses' },
  {
    metric: 'mean_realized_price',
    description: 'the mean realised price',
    fiatCurrency: 'usd'
  },
  {
    metric: 'mvrv_usd_long_short_diff',
    description: 'the difference between MVRV'
  },
  { metric: 'mvrv', description: 'the MVRV', fiatCurrency: 'usd' },
  { metric: 'circulation', description: 'the token circulation' },
  { metric: 'mean_age', description: 'the token\'s mean age' },
  {
    metric: 'realized_value',
    description: 'a token\'s realised value',
    fiatCurrency: 'usd'
  },
  { metric: 'velocity', description: 'the token\'s velocity' },
  { metric: 'transaction_volume', description: 'the transaction volume' },
  {
    metric: 'transaction_volume_5min',
    description: 'the transaction volume for every 5 minutes'
  },
  { metric: 'exchange_inflow', description: 'the exchange inflow' },
  { metric: 'exchange_outflow', description: 'the exchange outflow' },
  { metric: 'exchange_balance', description: 'the exchange balance' },
  { metric: 'age_destroyed', description: 'the token\'s age destroyed' },
  {
    metric: 'age_destroyed_5min',
    description: 'the token\'s age destroyed for every 5 minutes'
  },
  { metric: 'nvt', description: 'the Network Value to Transaction ratio' }
]

module.exports = {
  data: data
}
