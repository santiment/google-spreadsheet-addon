const { testFieldTypes } = require('../support/helper.js')
const { testHandlesNullData, assertNumberOfRecords, assertDaysMatch } = require('../support/integrationHelper.js')
const { slugsList, from, to, numberOfDays, days } = require('../support/setup.js')

describe('SAN_MVRV_LONG_SHORT_DIFF_MULTIPLE_SLUGS', () => {
  const expected = {
    date: 'string',
    valueSan: 'number',
    valueEth: 'number'
  }

  const response = san.SAN_MVRV_LONG_SHORT_DIFF_MULTIPLE_SLUGS(slugsList, from, to)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHandlesNullData('fetchGetMetricMultipleSlugs', san.SAN_MVRV_LONG_SHORT_DIFF_MULTIPLE_SLUGS, slugsList, from, to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Ethereum', 'Santiment']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const results = san.SAN_MVRV_LONG_SHORT_DIFF_MULTIPLE_SLUGS(slugsList, from, to)

    assertNumberOfRecords(results, numberOfDays)

    assertDaysMatch(results, days)
  })
})
