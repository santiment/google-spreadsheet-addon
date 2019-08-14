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
  formatDate
} = require('../setup.js')

describe('SAN_ACTIVE_DEPOSITS', () => {
  const expected = { date: 'string', activeDeposits: 'number' }

  const response = san.SAN_ACTIVE_DEPOSITS(slug, from, to)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHandlesNullData(
    'fetchActiveDeposits',
    san.SAN_ACTIVE_DEPOSITS,
    slug,
    from,
    to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Active Deposits']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const results = san.SAN_ACTIVE_DEPOSITS(slug, from, to)

    assertNumberOfRecords(results, numberOfDays)

    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })
})
