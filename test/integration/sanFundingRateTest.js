
const { testFieldTypes } = require('../support/helper.js')
const { testHandlesNullData, assertNumberOfRecords, assertDaysMatch } = require('../support/integrationHelper.js')
const { ethereumSlug, from, to, numberOfDays, days } = require('../support/setup.js')

describe('SAN_USDT_FUNDING_RATE', () => {
  const expected = {
    date: 'string',
    value: 'number'
  }

  const response = san.SAN_USDT_FUNDING_RATE(ethereumSlug, from, to, 'BITMEX')
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHandlesNullData('fetchGetMetric', san.SAN_USDT_FUNDING_RATE, ethereumSlug, from, to, 'BITMEX')

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Value']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day bitmex', () => {
    const results = san.SAN_USDT_FUNDING_RATE(ethereumSlug, from, to, 'BITMEX')
    assertNumberOfRecords(results, numberOfDays)
    assertDaysMatch(results, days)
  })
})

describe('SAN_BUSD_FUNDING_RATE', () => {
  const expected = {
    date: 'string',
    value: 'number'
  }

  const response = san.SAN_BUSD_FUNDING_RATE(ethereumSlug, from, to, 'BINANCE')
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHandlesNullData('fetchGetMetric', san.SAN_BUSD_FUNDING_RATE, ethereumSlug, from, to, 'BINANCE')

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Value']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day bitmex', () => {
    const results = san.SAN_BUSD_FUNDING_RATE(ethereumSlug, from, to, 'BINANCE')
    assertNumberOfRecords(results, numberOfDays)
    assertDaysMatch(results, days)
  })
})
