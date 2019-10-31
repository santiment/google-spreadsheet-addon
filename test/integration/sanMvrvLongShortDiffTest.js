const { testFieldTypes } = require('../helper.js')

const { testHandlesNullData, assertNumberOfRecords, assertDaysMatch } = require('../integration_helper.js')

const { slug, from, to, currency, numberOfDays, days } = require('../setup.js')

describe('SAN_MVRV_LONG_SHORT_DIFF', () => {
  const expected = {
    date: 'string',
    value: 'number'
  }

  const response = san.SAN_MVRV_LONG_SHORT_DIFF(slug, from, to, currency)
  const headers = response[0]
  const results = response[1]
  testFieldTypes(results, expected)
  testHandlesNullData(
    'fetchGetMetric',
    san.SAN_MVRV_LONG_SHORT_DIFF,
    slug,
    from,
    to,
    currency)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Value']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const results = san.SAN_MVRV_LONG_SHORT_DIFF(slug, from, to, currency)
    assertNumberOfRecords(results, numberOfDays)

    assertDaysMatch(results, days)
  })
})
