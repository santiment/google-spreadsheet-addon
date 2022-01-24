const { testFieldTypes } = require('../support/helper.js')
const { testHandlesNullData, assertNumberOfRecords, assertDaysMatch, testRaisesError } = require('../support/integrationHelper.js')
const { ethereumSlug, from, to, numberOfDays, days, fundingRateExchange } = require('../support/setup.js')

describe('SAN_FUNDING_RATE_BUSD', () => {
  const expected = {
    date: 'string',
    value: 'number'
  }

  const response = san.SAN_FUNDING_RATE_BUSD(ethereumSlug, from, to, fundingRateExchange)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHandlesNullData('fetchGetMetric', san.SAN_FUNDING_RATE_BUSD, ethereumSlug, from, to, fundingRateExchange)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Value']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per day', () => {
    const supportedBusdExchanges = ['BINANCE', 'binance']
    supportedBusdExchanges.forEach(
      exchange => {
        const results = san.SAN_FUNDING_RATE_BUSD(ethereumSlug, from, to, exchange)
        assertNumberOfRecords(results, numberOfDays)
        assertDaysMatch(results, days)
      }
    )
  })

  it('raises error for non-supported exchange types', () => {
    const nonSupportedBusdExchanges = ['BITMEX', 'BITFINEX', 'DYDX', 'DERIBIT', 'FTX']
    nonSupportedBusdExchanges.forEach(
      exchange => {
        const results = san.SAN_FUNDING_RATE_BUSD(ethereumSlug, from, to, exchange)
        testRaisesError(results, `BUSD is not supported for ${exchange.toUpperCase()}!`)
      }
    )
  })
})
