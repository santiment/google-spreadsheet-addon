
const { testFieldTypes } = require('../support/helper.js')
const { testHandlesNullData, assertNumberOfRecords, assertDaysMatch } = require('../support/integrationHelper.js')
const { xrpSlug, from, to, numberOfDays, days, numberOfHours } = require('../support/setup.js')

describe('SAN_DEX_VOLUME_IN_USD_INTRADAY', () => {
  const expected = {
    date: 'string',
    value: 'number'
  }

  const response = san.SAN_DEX_VOLUME_IN_USD_INTRADAY(xrpSlug, from, to)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHandlesNullData('fetchGetMetric', san.SAN_DEX_VOLUME_IN_USD_INTRADAY, xrpSlug, from, to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Value']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const results = san.SAN_DEX_VOLUME_IN_USD_INTRADAY(xrpSlug, from, to)

    assertNumberOfRecords(results, numberOfDays)

    assertDaysMatch(results, days)
  })

  it('returns a record per 5 mins', () => {
    const results = san.SAN_DEX_VOLUME_IN_USD_INTRADAY(xrpSlug, from, to, '5m')

    assertNumberOfRecords(results, numberOfHours * 12 - 1)
  })
})
