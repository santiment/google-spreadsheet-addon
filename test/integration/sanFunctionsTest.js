const { testFieldTypes } = require('../helper.js')
const listOfFunctions = [
  'SAN_ACTIVE_DEPOSITS',
  'SAN_ALL_PROJECTS',
  'SAN_DAILY_CLOSING_PRICE',
  'SAN_DEV_ACTIVITY',
  'SAN_EMERGING_TRENDS',
  'SAN_ERC20_PROJECTS',
  'SAN_ETH_SPENT_OVER_TIME',
  'SAN_ETH_TOP_TRANSACTIONS',
  'SAN_EXCHANGE_FUNDS_FLOW',
  'SAN_GAS_USED',
  'SAN_GITHUB_ACTIVITY',
  'SAN_HISTORICAL_BALANCE',
  'SAN_HISTORY_TWITTER_DATA',
  'SAN_LATEST_PRICE',
  'SAN_MINERS_BALANCE',
  'SAN_MINING_POOLS_DISTRIBUTION',
  'SAN_NETWORK_GROWTH',
  'SAN_NEWS',
  'SAN_OHLC',
  'SAN_PRICE_ABSOLUTE_CHANGE',
  'SAN_PRICE_PERCENT_CHANGE',
  'SAN_PRICE_VOLUME_DIFF',
  'SAN_PRICES',
  'SAN_PROJECT_FUNDAMENTALS',
  'SAN_PROJECT_SOCIAL_DATA',
  'SAN_SOCIAL_DOMINANCE',
  'SAN_SOCIAL_VOLUME',
  'SAN_SOCIAL_VOLUME_PROJECTS',
  'SAN_TOKEN_AGE_CONSUMED',
  'SAN_TOKEN_TOP_TRANSACTIONS',
  'SAN_TOP_HOLDERS_PERCENT_OF_TOTAL_SUPPLY'
]

describe('SAN_FUNCTIONS', () => {
  const expected = {
    function: 'string'
  }

  const response = san.SAN_FUNCTIONS()
  const header = response[0]

  testFieldTypes(header, expected)

  it('returns the needed functions', () => {
    const results = san.SAN_FUNCTIONS()
    expect(results).to.deep.eq(listOfFunctions)
  })
})
