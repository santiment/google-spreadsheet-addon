const { testFieldTypes } = require('../support/helper.js')
const { testHandlesNullData, assertNumberOfRecords } = require('../support/integrationHelper.js')

const {
  slug,
  from,
  to,
  days,
  numberOfDays,
  formatDate
} = require('../support/setup.js')

describe('SAN_ACTIVE_DEPOSITS', () => {
  const expected = { date: 'string', activeDeposits: 'number' }

  const response = san.SAN_ACTIVE_DEPOSITS(slug, from, to)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHandlesNullData(
    'fetchGetMetric',
    san.SAN_ACTIVE_DEPOSITS,
    slug,
    from,
    to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Value']
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
