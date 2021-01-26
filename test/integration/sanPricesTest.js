const { testFieldTypes } = require('../support/helper.js')

const {
  testHandlesNullData,
  assertNumberOfRecords
} = require('../support/integrationHelper.js')

const {
  slug,
  from,
  to,
  days,
  numberOfDays,
  numberOfHours,
  formatDate
} = require('../support/setup.js')

describe('SAN_PRICES', () => {
  const expected = {
    date: 'string',
    priceUsd: 'number',
    volume: 'number'
  }

  const response = san.SAN_PRICES(slug, from, to)
  const headers = response[0]
  const prices = response[1]

  testFieldTypes(prices, expected)
  testHandlesNullData('fetchPrices', san.SAN_PRICES, slug, from, to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'USD Price', 'Volume']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const prices = san.SAN_PRICES(slug, from, to)

    assertNumberOfRecords(prices, (numberOfDays + 1)) // Temporary: Added a notice

    for (let [index, day] of days.entries()) {
      expect(prices[index + 1][0]).to.equal(formatDate(day)) // Temporary: Added a notice
    }
  })

  it('returns a record per hour', () => {
    const prices = san.SAN_PRICES(slug, from, to, '1h')

    assertNumberOfRecords(prices, (numberOfHours + 1)) // Temporary: Added a notice
  })
})
