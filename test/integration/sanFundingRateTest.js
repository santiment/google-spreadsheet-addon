
const { testFieldTypes } = require('../support/helper.js')
const { testHandlesNullData, assertNumberOfRecords, assertDaysMatch } = require('../support/integrationHelper.js')
const { ethereumSlug, from, to, numberOfDays, days } = require('../support/setup.js')

describe('SAN_FUNDING_RATE', () => {
  const expected = {
    date: 'string',
    value: 'number'
  }

  const response = san.SAN_FUNDING_RATE(ethereumSlug, from, to)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHandlesNullData('fetchGetMetric', san.SAN_FUNDING_RATE, ethereumSlug, from, to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Value']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day, per every exchange type, binance', () => {
    const types = ['USDT', 'BUSD']
    types.forEach(
      type => {
        const results = san.SAN_FUNDING_RATE(ethereumSlug, from, to, 'BINANCE', type)
        assertNumberOfRecords(results, numberOfDays)
        assertDaysMatch(results, days)
      }
    )
  })

  it('returns a record per every day bitmex', () => {
    const results = san.SAN_FUNDING_RATE(ethereumSlug, from, to, 'BITMEX')
    assertNumberOfRecords(results, numberOfDays)
    assertDaysMatch(results, days)
  })
})
