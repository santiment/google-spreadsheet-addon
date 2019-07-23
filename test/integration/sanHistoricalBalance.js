const { testFieldTypes } = require('../helper.js')

const {
  testHandlesNullData,
  assertNumberOfRecords
} = require('../integration_helper.js')

const {
  slug,
  from,
  to,
  days,
  numberOfDays,
  formatDate,
  address
} = require('../setup.js')

describe('SAN_HISTORICAL_BALANCE', () => {
  const expected = { date: 'string', balance: 'number' }

  const response = san.SAN_HISTORICAL_BALANCE(slug, from, to, address)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHandlesNullData(
    'fetchHistoricalBalance',
    san.SAN_HISTORICAL_BALANCE,
    slug,
    from,
    to,
    address)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Balance']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const results = san.SAN_HISTORICAL_BALANCE(slug, from, to, address)

    assertNumberOfRecords(results, numberOfDays)

    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })
})
