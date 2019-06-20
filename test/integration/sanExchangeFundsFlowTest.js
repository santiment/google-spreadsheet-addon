const { testFieldTypes } = require('../helper.js')

const {
  testHistoricDataIsForbidden,
  testHandlesNullData,
  assertNumberOfRecords
} = require('../integration_helper.js')

const {
  slug,
  from,
  to,
  historicDataFrom,
  historicDataTo,
  days,
  numberOfDays,
  formatDate
} = require('../setup.js')

describe('SAN_EXCHANGE_FUNDS_FLOW', () => {
  const expected = {
    date: 'string',
    inOutDifference: 'number'
  }

  const response = san.SAN_EXCHANGE_FUNDS_FLOW(slug, from, to)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHistoricDataIsForbidden(
    san.SAN_EXCHANGE_FUNDS_FLOW,
    slug,
    historicDataFrom,
    historicDataTo)
  testHandlesNullData(
    'fetchExchangeFundsFlow',
    san.SAN_EXCHANGE_FUNDS_FLOW,
    slug,
    from,
    to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'In/Out Difference']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const results = san.SAN_EXCHANGE_FUNDS_FLOW(slug, from, to)

    assertNumberOfRecords(results, numberOfDays)

    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })
})
