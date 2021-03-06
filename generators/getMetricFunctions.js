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
    metric: 'daily_active_addresses',
    sheetMetricName: 'active_addresses',
    description: [
      'Returns the active addresses for the specified asset, during a given time interval.',
      'Active Addresses" refers to the number of unique addresses that',
      'participated in transactions on a blockchain.'
    ],
    returns: 'active addresses.'
  },
  {
    metric: 'active_addresses_24h',
    sheetMetricName: 'active_addresses_24h',
    description: [
      'Returns the active addresses for the specified asset, during a given time interval.',
      'Active Addresses" refers to the number of unique addresses that',
      'participated in transactions on a blockchain.'
    ],
    returns: 'active addresses for the last 24 hours.'
  },
  {
    metric: 'amount_in_top_holders',
    sheetMetricName: 'top_holders_held_overall',
    description: [
      'Returns the amount of coins/tokens held by the top holders.'
    ],
    returns: 'amount of coins/tokens held by the top holders.'
  },
  {
    metric: 'amount_in_exchange_top_holders',
    sheetMetricName: 'top_holders_held_on_exchange',
    description: [
      'Returns the amount of coins/tokens held only by the exchange top holders.'
    ],
    returns: 'amount of coins/tokens held only by the top holders.'
  },
  {
    metric: 'amount_in_non_exchange_top_holders',
    sheetMetricName: 'top_holders_held_off_exchange',
    description: [
      'Returns the amount of coins/tokens held only by the non exchange top holders.'
    ],
    returns: 'amount of coins/tokens held only by the top holders.'
  },
  {
    metric: 'percent_of_total_supply_on_exchanges',
    sheetMetricName: 'exchange_percent_of_supply',
    description: [
      'Returns exchange percent of total supply.'
    ],
    returns: 'exchange percent of total supply.'
  },
  {
    metric: 'holders_distribution',
    sheetMetricName: 'holders_distribution',
    supportedBalances: [
      '0-0.001', '0.001-0.01', '0.01-0.1', '0.1-1',
      '1-10', '10-100', '100-1k',
      '1k-10k', '10k-100k', '100k-1M',
      '1M-10M', '10M-inf', 'total'
    ],
    description: [
      'Represents the total number of addresses holding the given amount of tokens.'
    ],
    returns: 'total number of addresses holding the given amount of tokens.'
  },
  {
    metric: 'bitmex_perpetual_funding_rate',
    sheetMetricName: 'bitmex_perpetual_contract_funding_rate',
    description: [
      'Returns the funding rates that are paid by one of the sides of the perpetual contract to the other'
    ],
    returns: 'the funding rates that are paid by one of the sides of the perpetual contract to the other'
  },
  {
    metric: 'network_profit_loss',
    sheetMetricName: 'network_profit_loss',
    description: [
      'Returns the network\'s profit/loss.'
    ],
    returns: 'the network\'s profit/loss.'
  },
  {
    metric: 'price',
    supportedCurrencies: ['USD'],
    sheetMetricName: 'price',
    description: [
      'Returns the prices for the slug in the given time period.'
    ],
    returns: 'the prices for the slug in the given time period.'
  },
  {
    metric: 'transaction_volume',
    sheetMetricName: 'volume',
    description: [
      'Returns the slug\'s trading volume.'
    ],
    returns: 'the slug\'s trading volume.'
  },
  {
    metric: 'social_volume',
    description: [
      'Returns the social volume for a slug.'
    ],
    hasSource: true,
    returns: 'the slug\'s social volume.'
  },
  {
    metric: 'marketcap',
    description: [
      'Returns the marketcap for a slug.'
    ],
    supportedCurrencies: ['USD'],
    returns: 'the slug\'s marketcap.'
  },
  {
    metric: 'whale_transaction_count_100k_usd_to_inf',
    sheetMetricName: 'whale_transaction_count',
    description: [
      'Returns the number of transactions transferring more than 100k USD.'
    ],
    returns: 'the number of transactions transferring more than 100k USD.'
  },
  {
    metric: 'holders_distribution_combined_balance',
    supportedBalances: [
      '0-0.001', '0.001-0.01', '0.01-0.1', '0.1-1',
      '1-10', '10-100', '100-1k',
      '1k-10k', '10k-100k', '100k-1M',
      '1M-10M', '10M-inf', 'total'
    ],
    description: [
      'Returns the number of tokens in a specific bucket.'
    ],
    returns: 'the number of tokens in a specific bucket.'
  },
  {
    metric: 'sentiment_volume_consumed',
    sheetMetricName: 'weighted_social_sentiment',
    description: [
      'Returns the weighted social sentiment for a slug.'
    ],
    hasSource: true,
    returns: 'the slug\'s weighted social sentiment.'
  },
  {
    metric: 'bitmex_perpetual_open_interest',
    description: [
      'Returns the amount of open perpetual contracts currently on Bitmex\'s',
      'Project Ticker / USD trading pairs. When open interest reaches unusually high numbers,',
      'it can precede increased volatility in the coin’s price.'
    ],
    returns: 'the amount of open perpetual contracts.'
  }
]

module.exports = {
  metricsList: metricsList
}
