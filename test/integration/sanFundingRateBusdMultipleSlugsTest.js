const { testFieldTypes } = require('../support/helper.js')
const { testHandlesNullData, assertNumberOfRecords, assertDaysMatch, testRaisesError } = require('../support/integrationHelper.js')
const { slugsList, from, to, numberOfDays, days } = require('../support/setup.js')

describe('SAN_FUNDING_RATE_BUSD_MULTIPLE_SLUGS', () => {
  const expected = {
    date: 'string',
    valueSan: 'number',
    valueEth: 'number'
  }

  const response = san.SAN_FUNDING_RATE_BUSD_MULTIPLE_SLUGS(slugsList, from, to)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHandlesNullData('fetchGetMetricMultipleSlugs', san.SAN_FUNDING_RATE_BUSD_MULTIPLE_SLUGS, slugsList, from, to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Ethereum', 'Santiment']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const supportedBusdExchanges = ['BINANCE', 'binance']
    supportedBusdExchanges.forEach(
      exchange => {
        const results = san.SAN_FUNDING_RATE_BUSD_MULTIPLE_SLUGS(slugsList, from, to, exchange)
        assertNumberOfRecords(results, numberOfDays)
        assertDaysMatch(results, days)
      }
    )
  })

  it('raises error for non-supported exchange types', () => {
    const nonSupportedBusdExchanges = ['BITMEX', 'bitmex']
    nonSupportedBusdExchanges.forEach(
      exchange => {
        const results = san.SAN_FUNDING_RATE_BUSD_MULTIPLE_SLUGS(slugsList, from, to, exchange)
        testRaisesError(results, `BUSD is not supported for ${exchange.toUpperCase()}!`)
      }
    )
  })
})
