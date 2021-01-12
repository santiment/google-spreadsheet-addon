const { testFieldTypes } = require('../support/helper.js')
const { testHandlesNullData, assertNumberOfRecords, assertDaysMatch } = require('../support/integrationHelper.js')
const { from, to, numberOfDays, days } = require('../support/setup.js')
const slug = 'bitcoin' // Currently works with only a few main assets

describe('SAN_BITMEX_PERPETUAL_CONTRACT_FUNDING_RATE', () => {
  const expected = {
    date: 'string',
    results: 'number'
  }

  const response = san.SAN_BITMEX_PERPETUAL_CONTRACT_FUNDING_RATE(slug, from, to)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHandlesNullData('fetchGetMetric', san.SAN_BITMEX_PERPETUAL_CONTRACT_FUNDING_RATE, slug, from, to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Value']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const results = san.SAN_BITMEX_PERPETUAL_CONTRACT_FUNDING_RATE(slug, from, to)

    assertNumberOfRecords(results, numberOfDays)

    assertDaysMatch(results, days)
  })
})
