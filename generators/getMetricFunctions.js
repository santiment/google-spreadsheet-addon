const metricsList = [
  {
    metric: 'daily_avg_marketcap',
    description: ['Returns the daily average marketcap.'],
    returns: 'of daily average marketcaps.',
    supportedCurrencies: ['usd']
  },
  {
    metric: 'daily_closing_marketcap',
    description: ['Returns the daily closing marketcap.'],
    returns: 'of daily closing marketcaps.',
    supportedCurrencies: ['usd']
  },
  {
    metric: 'daily_active_addresses',
    sheetMetricName: 'active_addresses',
    description: [
      'Returns the active addresses for the specified asset, during a given time interval.',
      'Active Addresses" refers to the number of unique addresses that',
      'participated in transactions on a blockchain.'
    ],
    returns: 'of daily active addresses numbers.'
  },
  {
    metric: 'mean_realized_price',
    description: ['Returns the mean realized price.'],
    returns: 'of mean realized prices.',
    supportedCurrencies: ['usd'],
    hasTimeBound: true
  },
  {
    metric: 'mvrv_long_short_diff',
    description: ['Returns the difference between MVRV.'],
    returns: 'of MVRV differences.',
    supportedCurrencies: ['usd']
  },
  {
    metric: 'mvrv',
    sheetMetricName: 'mvrv_ratio',
    description: ['Returns MVRV(Market-Value-to-Realized-Value).'],
    returns: 'of MVRV ratios.',
    supportedCurrencies: ['usd'],
    hasTimeBound: true
  },
  {
    metric: 'circulation',
    sheetMetricName: 'token_circulation',
    description: ['Returns token circulation for a given slug and time interval.'],
    returns: 'of token circulation values.',
    hasTimeBound: true
  },
  {
    metric: 'mean_age',
    description: ['Returns the token\'s mean age.'],
    returns: 'of mean age values.' },
  {
    metric: 'realized_value',
    description: [
      'Returns Realized value - sum of the acquisition costs of an asset located in a wallet.',
      'The realized value across the whole network is computed by summing the realized values',
      'of all wallets holding tokens at the moment.'
    ],
    returns: 'of realized values.',
    supportedCurrencies: ['usd'],
    hasTimeBound: true
  },
  {
    metric: 'velocity',
    description: ['Returns the token\'s velocity.'],
    returns: 'of token velocity values.'
  },
  {
    metric: 'transaction_volume',
    description: [
      'Gets the transaction volume for the specified asset, during a given time interval.',
      'Transaction Volume" refers to the total number of tokens within all',
      'transfers that have occurred on a blockchain.'
    ],
    returns: 'of transaction volumes.'
  },
  {
    metric: 'exchange_inflow',
    description: ['Returns the exchange inflow.'],
    returns: 'of exchange inflows.'
  },
  {
    metric: 'exchange_outflow',
    description: ['Returns the exchange outflow.'],
    returns: 'of exchange outflows.'
  },
  {
    metric: 'exchange_balance',
    description: ['Returns the exchange balance.'],
    returns: 'of exchange balances.'
  },
  {
    metric: 'age_destroyed',
    description: ['Returns the token\'s age destroyed'],
    returns: 'of age destroyed values.'
  },
  {
    metric: 'nvt',
    sheetMetricName: 'nvt_ratio',
    description: [
      'Returns NVT (Network-Value-to-Transactions-Ratio Daily Market Cap / Daily Transaction Volume)',
      'Since Daily Transaction Volume gets rather noisy and easy to manipulate',
      'by transferring the same tokens through couple of addresses over and over again,',
      'it’s not an ideal measure of a network’s economic activity.',
      'That’s why we calculate NVT using Daily Trx Volume, but also by using Daily Token Circulation instead,',
      'which filters out excess transactions and provides a cleaner overview of a blockchain’s',
      'daily transaction throughput.'
    ],
    returns: 'of NVT ratios'
  }
]

module.exports = {
  metricsList: metricsList
}
