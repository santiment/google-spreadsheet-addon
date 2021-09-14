require('../../support/helper.js')

const { generate } = require('../../../generators/functionFetcherGenerator.js')

describe('functionFetcher', () => {
  it('fills the template accordingly', () => {
    let expectedResult = `/**
 * Returns all available functions.
 * @returns {Array} of function names.
 * @customfunction
 */
function SAN_FUNCTIONS () {
  return [
    'SAN_ACTIVE_ADDRESSES',
    'SAN_ACTIVE_ADDRESSES_24H',
    'SAN_ACTIVE_ADDRESSES_24H_AGGREGATED',
    'SAN_ACTIVE_ADDRESSES_AGGREGATED',
    'SAN_ACTIVE_DEPOSITS',
    'SAN_ACTIVE_DEPOSITS_AGGREGATED',
    'SAN_AGE_DESTROYED',
    'SAN_AGE_DESTROYED_AGGREGATED',
    'SAN_ALL_PROJECTS',
    'SAN_BITMEX_PERPETUAL_CONTRACT_FUNDING_RATE',
    'SAN_BITMEX_PERPETUAL_CONTRACT_FUNDING_RATE_AGGREGATED',
    'SAN_BITMEX_PERPETUAL_OPEN_INTEREST',
    'SAN_BITMEX_PERPETUAL_OPEN_INTEREST_AGGREGATED',
    'SAN_BUSD_FUNDING_RATE',
    'SAN_BUSD_FUNDING_RATE_AGGREGATED',
    'SAN_DAILY_AVG_MARKETCAP',
    'SAN_DAILY_AVG_MARKETCAP_AGGREGATED',
    'SAN_DAILY_CLOSING_MARKETCAP',
    'SAN_DAILY_CLOSING_MARKETCAP_AGGREGATED',
    'SAN_DAILY_CLOSING_PRICE',
    'SAN_DEV_ACTIVITY',
    'SAN_EMERGING_TRENDS',
    'SAN_ERC20_PROJECTS',
    'SAN_ETH_SPENT_OVER_TIME',
    'SAN_ETH_TOP_TRANSACTIONS',
    'SAN_EXCHANGE_BALANCE',
    'SAN_EXCHANGE_BALANCE_AGGREGATED',
    'SAN_EXCHANGE_FUNDS_FLOW',
    'SAN_EXCHANGE_INFLOW',
    'SAN_EXCHANGE_INFLOW_AGGREGATED',
    'SAN_EXCHANGE_OUTFLOW',
    'SAN_EXCHANGE_OUTFLOW_AGGREGATED',
    'SAN_EXCHANGE_PERCENT_OF_SUPPLY',
    'SAN_EXCHANGE_PERCENT_OF_SUPPLY_AGGREGATED',
    'SAN_FUNCTIONS',
    'SAN_GAS_USED',
    'SAN_GITHUB_ACTIVITY',
    'SAN_HISTORICAL_BALANCE',
    'SAN_HISTORICAL_BALANCE_DEDUP',
    'SAN_HISTORY_TWITTER_DATA',
    'SAN_HOLDERS_DISTRIBUTION',
    'SAN_HOLDERS_DISTRIBUTION_AGGREGATED',
    'SAN_HOLDERS_DISTRIBUTION_COMBINED_BALANCE',
    'SAN_HOLDERS_DISTRIBUTION_COMBINED_BALANCE_AGGREGATED',
    'SAN_LATEST_PRICE',
    'SAN_MARKETCAP',
    'SAN_MARKETCAP_AGGREGATED',
    'SAN_MEAN_AGE',
    'SAN_MEAN_AGE_AGGREGATED',
    'SAN_MEAN_DOLLAR_INVESTED_AGE',
    'SAN_MEAN_DOLLAR_INVESTED_AGE_AGGREGATED',
    'SAN_MEAN_REALIZED_PRICE',
    'SAN_MEAN_REALIZED_PRICE_AGGREGATED',
    'SAN_MINERS_BALANCE',
    'SAN_MINING_POOLS_DISTRIBUTION',
    'SAN_MVRV_LONG_SHORT_DIFF',
    'SAN_MVRV_LONG_SHORT_DIFF_AGGREGATED',
    'SAN_MVRV_RATIO',
    'SAN_MVRV_RATIO_AGGREGATED',
    'SAN_NETWORK_GROWTH',
    'SAN_NETWORK_GROWTH_AGGREGATED',
    'SAN_NETWORK_PROFIT_LOSS',
    'SAN_NETWORK_PROFIT_LOSS_AGGREGATED',
    'SAN_NVT_RATIO',
    'SAN_NVT_RATIO_AGGREGATED',
    'SAN_OHLC',
    'SAN_PRICE',
    'SAN_PRICE_ABSOLUTE_CHANGE',
    'SAN_PRICE_AGGREGATED',
    'SAN_PRICE_PERCENT_CHANGE',
    'SAN_PRICE_VOLUME',
    'SAN_PRICE_VOLUME_DIFF',
    'SAN_PRICES',
    'SAN_PROJECT_FUNDAMENTALS',
    'SAN_PROJECT_SOCIAL_DATA',
    'SAN_REALIZED_VALUE',
    'SAN_REALIZED_VALUE_AGGREGATED',
    'SAN_REVERSE',
    'SAN_SOCIAL_DOMINANCE',
    'SAN_SOCIAL_DOMINANCE_AGGREGATED',
    'SAN_SOCIAL_VOLUME',
    'SAN_SOCIAL_VOLUME_AGGREGATED',
    'SAN_SOCIAL_VOLUME_PROJECTS',
    'SAN_TOKEN_AGE_CONSUMED',
    'SAN_TOKEN_CIRCULATION',
    'SAN_TOKEN_CIRCULATION_AGGREGATED',
    'SAN_TOKEN_TOP_TRANSACTIONS',
    'SAN_TOP_HOLDERS_HELD_OFF_EXCHANGE',
    'SAN_TOP_HOLDERS_HELD_ON_EXCHANGE',
    'SAN_TOP_HOLDERS_HELD_OVERALL',
    'SAN_TOP_HOLDERS_PERCENT_OF_TOTAL_SUPPLY',
    'SAN_TRANSACTION_VOLUME',
    'SAN_TRANSACTION_VOLUME_AGGREGATED',
    'SAN_USDT_FUNDING_RATE',
    'SAN_USDT_FUNDING_RATE_AGGREGATED',
    'SAN_VELOCITY',
    'SAN_VELOCITY_AGGREGATED',
    'SAN_VOLUME',
    'SAN_VOLUME_AGGREGATED',
    'SAN_WEIGHTED_SOCIAL_SENTIMENT',
    'SAN_WEIGHTED_SOCIAL_SENTIMENT_AGGREGATED',
    'SAN_WHALE_TRANSACTION_COUNT',
    'SAN_WHALE_TRANSACTION_COUNT_AGGREGATED'
  ]
}
`
    expect(generate()).to.eq(expectedResult)
  })
})
