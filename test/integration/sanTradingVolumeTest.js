
const { testFieldTypes } = require('../support/helper.js')
const { testHandlesNullData, assertNumberOfRecords, assertDaysMatch } = require('../support/integrationHelper.js')
const { slug, from, to, numberOfDays, days, currency, numberOfHours } = require('../support/setup.js')

describe('SAN_TRADING_VOLUME', () => {
  const expected = {
    date: 'string',
    value: 'number'
  }

  const response = san.SAN_TRADING_VOLUME(slug, from, to)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHandlesNullData('fetchGetMetric', san.SAN_TRADING_VOLUME, slug, from, to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Value']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const results = san.SAN_TRADING_VOLUME(slug, from, to)

    assertNumberOfRecords(results, numberOfDays)

    assertDaysMatch(results, days)
  })

  it('returns a record per hour', () => {
    const addresses = san.SAN_TRADING_VOLUME(slug, from, to, currency, '1h')
    assertNumberOfRecords(addresses, numberOfHours)
  })
})
