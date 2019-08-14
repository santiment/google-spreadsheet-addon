const { testFieldTypes } = require('../helper.js')

const {
  testHandlesNullData,
  assertNumberOfRecords
} = require('../integration_helper.js')

const {
  slug,
  from,
  to,
  days,
  numberOfDays,
  formatDate
} = require('../setup.js')

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

    assertNumberOfRecords(prices, numberOfDays)

    for (let [index, day] of days.entries()) {
      expect(prices[index + 1][0]).to.equal(formatDate(day))
    }
  })
})
