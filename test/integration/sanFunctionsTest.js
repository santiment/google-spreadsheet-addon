require('../support/helper.js')

const listOfFunctions = [
  'SAN_ACTIVE_ADDRESSES',
  'SAN_ACTIVE_ADDRESSES',
  'SAN_ACTIVE_ADDRESSES_24H',
  'SAN_ACTIVE_ADDRESSES_24H_AGGREGATED',
  'SAN_ACTIVE_ADDRESSES_24H_MULTIPLE_SLUGS',
  'SAN_ACTIVE_ADDRESSES_AGGREGATED',
  'SAN_ACTIVE_ADDRESSES_MULTIPLE_SLUGS',
  'SAN_ACTIVE_DEPOSITS',
  'SAN_ACTIVE_DEPOSITS_AGGREGATED',
  'SAN_ACTIVE_DEPOSITS_MULTIPLE_SLUGS',
  'SAN_AGE_DESTROYED',
  'SAN_AGE_DESTROYED_AGGREGATED',
  'SAN_AGE_DESTROYED_MULTIPLE_SLUGS',
  'SAN_ALL_PROJECTS',
  'SAN_BITMEX_PERPETUAL_CONTRACT_FUNDING_RATE',
  'SAN_BITMEX_PERPETUAL_CONTRACT_FUNDING_RATE_AGGREGATED',
  'SAN_BITMEX_PERPETUAL_CONTRACT_FUNDING_RATE_MULTIPLE_SLUGS',
  'SAN_BITMEX_PERPETUAL_OPEN_INTEREST',
  'SAN_BITMEX_PERPETUAL_OPEN_INTEREST_AGGREGATED',
  'SAN_BITMEX_PERPETUAL_OPEN_INTEREST_MULTIPLE_SLUGS',
  'SAN_DAILY_AVG_MARKETCAP',
  'SAN_DAILY_AVG_MARKETCAP_AGGREGATED',
  'SAN_DAILY_AVG_MARKETCAP_MULTIPLE_SLUGS',
  'SAN_DAILY_CLOSING_MARKETCAP',
  'SAN_DAILY_CLOSING_MARKETCAP_AGGREGATED',
  'SAN_DAILY_CLOSING_MARKETCAP_MULTIPLE_SLUGS',
  'SAN_DAILY_CLOSING_PRICE',
  'SAN_DAILY_DEPOSIT_TRANSACTIONS',
  'SAN_DAILY_DEPOSIT_TRANSACTIONS_AGGREGATED',
  'SAN_DAILY_DEPOSIT_TRANSACTIONS_MULTIPLE_SLUGS',
  'SAN_DAILY_WITHDRAWAL_TRANSACTIONS',
  'SAN_DAILY_WITHDRAWAL_TRANSACTIONS_AGGREGATED',
  'SAN_DAILY_WITHDRAWAL_TRANSACTIONS_MULTIPLE_SLUGS',
  'SAN_DEPOSIT_TRANSACTIONS_INTRADAY',
  'SAN_DEPOSIT_TRANSACTIONS_INTRADAY_AGGREGATED',
  'SAN_DEPOSIT_TRANSACTIONS_INTRADAY_MULTIPLE_SLUGS',
  'SAN_DEV_ACTIVITY',
  'SAN_EMERGING_TRENDS',
  'SAN_ERC20_PROJECTS',
  'SAN_ETH_SPENT_OVER_TIME',
  'SAN_ETH_TOP_TRANSACTIONS',
  'SAN_EXCHANGE_BALANCE',
  'SAN_EXCHANGE_BALANCE_AGGREGATED',
  'SAN_EXCHANGE_BALANCE_MULTIPLE_SLUGS',
  'SAN_EXCHANGE_FUNDS_FLOW',
  'SAN_EXCHANGE_INFLOW',
  'SAN_EXCHANGE_INFLOW_AGGREGATED',
  'SAN_EXCHANGE_INFLOW_MULTIPLE_SLUGS',
  'SAN_EXCHANGE_OUTFLOW',
  'SAN_EXCHANGE_OUTFLOW_AGGREGATED',
  'SAN_EXCHANGE_OUTFLOW_MULTIPLE_SLUGS',
  'SAN_EXCHANGE_PERCENT_OF_SUPPLY',
  'SAN_EXCHANGE_PERCENT_OF_SUPPLY_AGGREGATED',
  'SAN_EXCHANGE_PERCENT_OF_SUPPLY_MULTIPLE_SLUGS',
  'SAN_FUNCTIONS',
  'SAN_FUNDING_RATE_BUSD',
  'SAN_FUNDING_RATE_BUSD_AGGREGATED',
  'SAN_FUNDING_RATE_BUSD_MULTIPLE_SLUGS',
  'SAN_FUNDING_RATE_USDT',
  'SAN_FUNDING_RATE_USDT_AGGREGATED',
  'SAN_FUNDING_RATE_USDT_MULTIPLE_SLUGS',
  'SAN_GAS_USED',
  'SAN_GITHUB_ACTIVITY',
  'SAN_HISTORICAL_BALANCE',
  'SAN_HISTORICAL_BALANCE_DEDUP',
  'SAN_HISTORY_TWITTER_DATA',
  'SAN_HOLDERS_DISTRIBUTION',
  'SAN_HOLDERS_DISTRIBUTION_AGGREGATED',
  'SAN_HOLDERS_DISTRIBUTION_COMBINED_BALANCE',
  'SAN_HOLDERS_DISTRIBUTION_COMBINED_BALANCE_AGGREGATED',
  'SAN_HOLDERS_DISTRIBUTION_COMBINED_BALANCE_MULTIPLE_SLUGS',
  'SAN_HOLDERS_DISTRIBUTION_MULTIPLE_SLUGS',
  'SAN_LATEST_PRICE',
  'SAN_MARKETCAP',
  'SAN_MARKETCAP_AGGREGATED',
  'SAN_MARKETCAP_MULTIPLE_SLUGS',
  'SAN_MEAN_AGE',
  'SAN_MEAN_AGE_AGGREGATED',
  'SAN_MEAN_AGE_MULTIPLE_SLUGS',
  'SAN_MEAN_DOLLAR_INVESTED_AGE',
  'SAN_MEAN_DOLLAR_INVESTED_AGE_AGGREGATED',
  'SAN_MEAN_DOLLAR_INVESTED_AGE_MULTIPLE_SLUGS',
  'SAN_MEAN_REALIZED_PRICE',
  'SAN_MEAN_REALIZED_PRICE_AGGREGATED',
  'SAN_MEAN_REALIZED_PRICE_MULTIPLE_SLUGS',
  'SAN_MINERS_BALANCE',
  'SAN_MINING_POOLS_DISTRIBUTION',
  'SAN_MVRV_LONG_SHORT_DIFF',
  'SAN_MVRV_LONG_SHORT_DIFF_AGGREGATED',
  'SAN_MVRV_LONG_SHORT_DIFF_MULTIPLE_SLUGS',
  'SAN_MVRV_RATIO',
  'SAN_MVRV_RATIO_AGGREGATED',
  'SAN_MVRV_RATIO_INTRADAY',
  'SAN_MVRV_RATIO_INTRADAY_AGGREGATED',
  'SAN_MVRV_RATIO_INTRADAY_MULTIPLE_SLUGS',
  'SAN_MVRV_RATIO_MULTIPLE_SLUGS',
  'SAN_NETWORK_GROWTH',
  'SAN_NETWORK_GROWTH_AGGREGATED',
  'SAN_NETWORK_GROWTH_MULTIPLE_SLUGS',
  'SAN_NETWORK_PROFIT_LOSS',
  'SAN_NETWORK_PROFIT_LOSS_AGGREGATED',
  'SAN_NETWORK_PROFIT_LOSS_MULTIPLE_SLUGS',
  'SAN_NVT_RATIO',
  'SAN_NVT_RATIO_AGGREGATED',
  'SAN_NVT_RATIO_MULTIPLE_SLUGS',
  'SAN_OHLC',
  'SAN_PRICE',
  'SAN_PRICE_ABSOLUTE_CHANGE',
  'SAN_PRICE_AGGREGATED',
  'SAN_PRICE_MULTIPLE_SLUGS',
  'SAN_PRICE_PERCENT_CHANGE',
  'SAN_PRICE_VOLUME',
  'SAN_PRICE_VOLUME_DIFF',
  'SAN_PRICES',
  'SAN_PROJECT_FUNDAMENTALS',
  'SAN_PROJECT_SOCIAL_DATA',
  'SAN_REALIZED_VALUE',
  'SAN_REALIZED_VALUE_AGGREGATED',
  'SAN_REALIZED_VALUE_MULTIPLE_SLUGS',
  'SAN_REVERSE',
  'SAN_SOCIAL_DOMINANCE',
  'SAN_SOCIAL_DOMINANCE_AGGREGATED',
  'SAN_SOCIAL_DOMINANCE_MULTIPLE_SLUGS',
  'SAN_SOCIAL_VOLUME',
  'SAN_SOCIAL_VOLUME_AGGREGATED',
  'SAN_SOCIAL_VOLUME_MULTIPLE_SLUGS',
  'SAN_SOCIAL_VOLUME_PROJECTS',
  'SAN_TOKEN_AGE_CONSUMED',
  'SAN_TOKEN_CIRCULATION',
  'SAN_TOKEN_CIRCULATION_AGGREGATED',
  'SAN_TOKEN_CIRCULATION_MULTIPLE_SLUGS',
  'SAN_TOKEN_TOP_TRANSACTIONS',
  'SAN_TOP_HOLDERS_HELD_OFF_EXCHANGE',
  'SAN_TOP_HOLDERS_HELD_ON_EXCHANGE',
  'SAN_TOP_HOLDERS_HELD_OVERALL',
  'SAN_TOP_HOLDERS_PERCENT_OF_TOTAL_SUPPLY',
  'SAN_TRADING_VOLUME',
  'SAN_TRADING_VOLUME_AGGREGATED',
  'SAN_TRADING_VOLUME_MULTIPLE_SLUGS',
  'SAN_TRANSACTION_VOLUME',
  'SAN_TRANSACTION_VOLUME_AGGREGATED',
  'SAN_TRANSACTION_VOLUME_MULTIPLE_SLUGS',
  'SAN_VELOCITY',
  'SAN_VELOCITY_AGGREGATED',
  'SAN_VELOCITY_MULTIPLE_SLUGS',
  'SAN_VOLUME',
  'SAN_VOLUME_AGGREGATED',
  'SAN_VOLUME_MULTIPLE_SLUGS',
  'SAN_WEIGHTED_SOCIAL_SENTIMENT',
  'SAN_WEIGHTED_SOCIAL_SENTIMENT_AGGREGATED',
  'SAN_WEIGHTED_SOCIAL_SENTIMENT_MULTIPLE_SLUGS',
  'SAN_WHALE_TRANSACTION_COUNT',
  'SAN_WHALE_TRANSACTION_COUNT_AGGREGATED',
  'SAN_WHALE_TRANSACTION_COUNT_MULTIPLE_SLUGS',
  'SAN_WITHDRAWAL_TRANSACTIONS_INTRADAY',
  'SAN_WITHDRAWAL_TRANSACTIONS_INTRADAY_AGGREGATED',
  'SAN_WITHDRAWAL_TRANSACTIONS_INTRADAY_MULTIPLE_SLUGS'
]

describe('SAN_FUNCTIONS', () => {
  it('returns all available functions', () => {
    const results = san.SAN_FUNCTIONS()
    expect(results).to.deep.eq(listOfFunctions)
  })
})
