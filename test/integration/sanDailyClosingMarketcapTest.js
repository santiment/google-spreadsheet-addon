const { testFieldTypes } = require('../helper.js')

const {
  testHandlesNullData,
  assertNumberOfRecords,
  assertDaysMatch
} = require('../integration_helper.js')

const {
  slug,
  from,
  to,
  currency,
  numberOfDays,
  days
} = require('../setup.js')

describe('SAN_DAILY_CLOSING_MARKETCAP', () => {
  const expected = {
    date: 'string',
    value: 'number'
  }

  const response = san.SAN_DAILY_CLOSING_MARKETCAP(slug, from, to)
  const headers = response[0]
  const results = response[1]
  testFieldTypes(results, expected)
  testHandlesNullData(
    'fetchGetMetric',
    san.SAN_DAILY_CLOSING_MARKETCAP,
    slug,
    from,
    to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Value']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const results = san.SAN_DAILY_CLOSING_MARKETCAP(slug, from, to)

    assertNumberOfRecords(results, numberOfDays)

    assertDaysMatch(results, days)
  })

  it('returns a record per every day with currency argument', () => {
    const results = san.SAN_DAILY_CLOSING_MARKETCAP(slug, from, to, currency)

    assertNumberOfRecords(results, numberOfDays)

    assertDaysMatch(results, days)
  })
})
