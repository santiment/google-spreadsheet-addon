const { testFieldTypes } = require('../support/helper.js')

const {
  testHandlesNullData
} = require('../support/integrationHelper.js')

const {
  slug,
  from,
  to,
  ethAddress
} = require('../support/setup.js')

describe('SAN_HISTORICAL_BALANCE_DEDUP', () => {
  const expected = { date: 'string', balance: 'number' }

  const response = san.SAN_HISTORICAL_BALANCE_DEDUP(slug, from, to, ethAddress)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHandlesNullData(
    'fetchHistoricalBalance',
    san.SAN_HISTORICAL_BALANCE_DEDUP,
    slug,
    from,
    to,
    ethAddress)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Balance']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('has positive balances', () => {
    const results = san.SAN_HISTORICAL_BALANCE_DEDUP(slug, from, to, ethAddress)
    for (let i = 1; i < results.length; i++) {
      expect(results[i][1]).to.be.within(0, Infinity)
    }
  })

  // Because the first and last result from the interval should always be returned
  it('returns at least two records', () => {
    const results = san.SAN_HISTORICAL_BALANCE_DEDUP(slug, from, to, ethAddress)

    // At least 3, because of the headers
    expect(results.length).to.be.at.least(3)
  })
})
