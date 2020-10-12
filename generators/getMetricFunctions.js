const metricsList = [
  {
    metric: 'daily_avg_marketcap',
    description: ['Returns the daily average marketcap.'],
    returns: 'daily average marketcaps.',
    supportedCurrencies: ['USD']
  },
  {
    metric: 'daily_closing_marketcap',
    description: ['Returns the daily closing marketcap.'],
    returns: 'daily closing marketcaps.',
    supportedCurrencies: ['USD']
  },
  {
    metric: 'mean_realized_price',
    description: ['Returns the mean realized price.'],
    returns: 'mean realized prices.',
    supportedCurrencies: ['USD'],
    hasTimeBound: true
  },
  {
    metric: 'mvrv_long_short_diff',
    description: ['Returns the difference between MVRV.'],
    returns: 'MVRV differences.',
    supportedCurrencies: ['USD']
  },
  {
    metric: 'mvrv',
    sheetMetricName: 'mvrv_ratio',
    description: ['Returns MVRV(Market-Value-to-Realized-Value).'],
    returns: 'MVRV ratios.',
    supportedCurrencies: ['USD'],
    hasTimeBound: true
  },
  {
    metric: 'circulation',
    sheetMetricName: 'token_circulation',
    description: ['Returns token circulation for a given slug and time interval.'],
    returns: 'token circulation values.',
    hasTimeBound: true
  },
  {
    metric: 'mean_age',
    description: ['Returns the token\'s mean age.'],
    returns: 'mean age values.'
  },
  {
    metric: 'mean_dollar_invested_age',
    description: ['Returns the token\'s mean dollar invested age.'],
    returns: 'mean dollar invested age values.'
  },
  {
    metric: 'realized_value',
    description: [
      'Returns Realized value - sum of the acquisition costs of an asset located in a wallet.',
      'The realized value across the whole network is computed by summing the realized values',
      'of all wallets holding tokens at the moment.'
    ],
    returns: 'realized values.',
    supportedCurrencies: ['USD'],
    hasTimeBound: true
  },
  {
    metric: 'velocity',
    description: ['Returns the token\'s velocity.'],
    returns: 'token velocity values.'
  },
  {
    metric: 'transaction_volume',
    description: [
      'Gets the transaction volume for the specified asset, during a given time interval.',
      'Transaction Volume" refers to the total number of tokens within all',
      'transfers that have occurred on a blockchain.'
    ],
    returns: 'transaction volumes.'
  },
  {
    metric: 'exchange_inflow',
    description: ['Returns the exchange inflow.'],
    returns: 'exchange inflows.'
  },
  {
    metric: 'exchange_outflow',
    description: ['Returns the exchange outflow.'],
    returns: 'exchange outflows.'
  },
  {
    metric: 'exchange_balance',
    description: ['Returns the exchange balance.'],
    returns: 'exchange balances.'
  },
  {
    metric: 'age_destroyed',
    description: ['Returns the token\'s age destroyed'],
    returns: 'age destroyed values.'
  },
  {
    metric: 'nvt',
    sheetMetricName: 'nvt_ratio',
    description: [
      'Returns NVT (Network-Value-to-Transactions-Ratio Daily Market Cap / Daily Token Circulation)',
      'Since Daily Transaction Volume gets rather noisy and easy to manipulate',
      'by transferring the same tokens through a couple of addresses repeatedly,',
      'it’s not an ideal measure of a network’s economic activity. That’s why we also',
      'offer another way to calculate NVT by using Daily Token Circulation.',
      'This method filters out excess transactions and provides a cleaner overview of a blockchain’s',
      'daily transaction throughput.'
    ],
    returns: 'NVT ratios'
  },
  {
    metric: 'network_growth',
    description: ['Returns the token\'s network growth'],
    returns: 'network growth.'
  },
  {
    metric: 'active_deposits',
    description: ['Returns number of unique deposit addresses that have been active for a project.'],
    returns: 'deposit address numbers.'
  },
  {
    metric: 'active_addresses_24h',
    sheetMetricName: 'active_addresses',
    description: [
      'Returns the active addresses for the specified asset, during a given time interval.',
      'Active Addresses" refers to the number of unique addresses that',
      'participated in transactions on a blockchain.'
    ],
    returns: 'active addresses for the last 24 hours.'
  }
]

module.exports = {
  metricsList: metricsList
}
