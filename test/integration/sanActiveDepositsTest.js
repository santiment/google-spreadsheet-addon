const { testFieldTypes } = require('../helper.js')

const {
  testHistoricDataIsForbidden,
  testHandlesNullData,
  assertNumberOfRecords
} = require('../integration_helper.js')

const {
  ethereumSlug,
  from,
  to,
  historicDataFrom,
  historicDataTo,
  days,
  numberOfDays,
  formatDate
} = require('../setup.js')

describe('SAN_ACTIVE_DEPOSITS', () => {
  const expected = { date: 'string', activeDeposits: 'number' }

  const response = san.SAN_ACTIVE_DEPOSITS(ethereumSlug, from, to)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHistoricDataIsForbidden(
    san.SAN_ACTIVE_DEPOSITS,
    ethereumSlug,
    historicDataFrom,
    historicDataTo)
  testHandlesNullData(
    'fetchActiveDeposits',
    san.SAN_ACTIVE_DEPOSITS,
    ethereumSlug,
    from,
    to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Active Deposits']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const results = san.SAN_ACTIVE_DEPOSITS(ethereumSlug, from, to)

    assertNumberOfRecords(results, numberOfDays)

    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })
})
