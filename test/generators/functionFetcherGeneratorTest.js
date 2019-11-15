require('../helper.js')
const { generate } = require('../../functionFetcherGenerator.js')

describe('functionFetcher', () => {
  it('fills the template accordingly', () => {
    let expectedResult = `/**
 * Returns all of the available functions, which SanSheets has to offer.
 * @returns {Array} all functions in the addon.
 * @customfunction
 */
function SAN_FUNCTIONS () {
  var listOfFunctions = [
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
  return listOfFunctions
}
`
    expect(generate()).to.eq(expectedResult)
  })
})
