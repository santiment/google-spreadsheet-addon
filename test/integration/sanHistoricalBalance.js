const { testFieldTypes } = require('../support/helper.js')
const { testHandlesNullData, assertNumberOfRecords } = require('../support/integrationHelper.js')

const {
  slug,
  from,
  to,
  days,
  numberOfDays,
  formatDate,
  ethAddress
} = require('../support/setup.js')

describe('SAN_HISTORICAL_BALANCE', () => {
  const expected = { date: 'string', balance: 'number' }

  const response = san.SAN_HISTORICAL_BALANCE(slug, from, to, ethAddress)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHandlesNullData(
    'fetchHistoricalBalance',
    san.SAN_HISTORICAL_BALANCE,
    slug,
    from,
    to,
    ethAddress)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Balance']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('has positive balances', () => {
    const results = san.SAN_HISTORICAL_BALANCE(slug, from, to, ethAddress)
    for (let i = 1; i < results.length; i++) {
      expect(results[i][1]).to.be.within(0, Infinity)
    }
  })

  it('returns a record per every day', () => {
    const results = san.SAN_HISTORICAL_BALANCE(slug, from, to, ethAddress)

    assertNumberOfRecords(results, numberOfDays)

    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })
})
