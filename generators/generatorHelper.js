const timeBound = ['', '1d', '7d', '30d', '60d', '90d', '180d', '365d', '2y', '3y', '5y', '10y']

const data = [
  {
    metric: 'daily_avg_marketcap',
    description: 'Gets the daily average marketcap',
    fiatCurrency: 'usd'
  },
  { metric: 'daily_avg_price', description: 'Gets the daily average price', fiatCurrency: 'usd' },
  {
    metric: 'daily_closing_marketcap',
    description: 'Gets the daily closing marketcap',
    fiatCurrency: 'usd'
  },
  { metric: 'daily_closing_price', description: 'Gets the daily closing price', fiatCurrency: 'usd' },
  { metric: 'daily_high_price', description: 'Gets the daily high price', fiatCurrency: 'usd' },
  { metric: 'daily_low_price', description: 'Gets the daily low price', fiatCurrency: 'usd' },
  { metric: 'daily_opening_price', description: 'Gets the daily opening price', fiatCurrency: 'usd' },
  { metric: 'daily_trading_volume', description: 'Gets the daily trading volume', fiatCurrency: 'usd' },
  { metric: 'daily_active_addresses', description: 'Gets the daily active addresses' },
  {
    metric: 'mean_realized_price',
    description: 'Gets the mean realised price',
    fiatCurrency: 'usd',
    timeBound: timeBound
  },
  {
    metric: 'mvrv_long_short_diff',
    description: 'Gets the difference between MVRV'
  },
  { metric: 'mvrv', description: 'Gets the MVRV', fiatCurrency: 'usd', timeBound: timeBound },
  { metric: 'circulation', description: 'Gets the token circulation', timeBound: timeBound },
  { metric: 'mean_age', description: 'Gets the token\'s mean age' },
  {
    metric: 'realized_value',
    description: 'Gets a token\'s realised value',
    fiatCurrency: 'usd',
    timeBound: timeBound
  },
  { metric: 'velocity', description: 'Gets the token\'s velocity' },
  { metric: 'transaction_volume', description: 'Gets the transaction volume' },
  {
    metric: 'transaction_volume_5min',
    description: 'Gets the transaction volume for every 5 minutes'
  },
  { metric: 'exchange_inflow', description: 'Gets the exchange inflow' },
  { metric: 'exchange_outflow', description: 'Gets the exchange outflow' },
  { metric: 'exchange_balance', description: 'Gets the exchange balance' },
  { metric: 'age_destroyed', description: 'Gets the token\'s age destroyed' },
  {
    metric: 'age_destroyed_5min',
    description: 'Gets the token\'s age destroyed for every 5 minutes'
  },
  { metric: 'nvt', description: 'Gets the Network Value to Transaction ratio' }
]

module.exports = {
  data: data,
  timeBound: timeBound
}
