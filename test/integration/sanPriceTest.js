const { testFieldTypes } = require('../support/helper.js')
const { testHandlesNullData, assertNumberOfRecords, assertDaysMatch } = require('../support/integrationHelper.js')
const { slug, from, to, numberOfDays, days } = require('../support/setup.js')

describe('SAN_PRICE', () => {
  const expected = {
    date: 'string',
    prices: 'number'
  }

  const response = san.SAN_PRICE(slug, from, to)
  const headers = response[0]
  const prices = response[1]

  testFieldTypes(prices, expected)
  testHandlesNullData('fetchGetMetric', san.SAN_PRICE, slug, from, to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Value']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const prices = san.SAN_PRICE(slug, from, to)

    assertNumberOfRecords(prices, numberOfDays)

    assertDaysMatch(prices, days)
  })
})
