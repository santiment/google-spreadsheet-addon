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
  formatDate
} = require('../support/setup.js')

describe('SAN_OHLC', () => {
  const expected = {
    date: 'string',
    openPriceUsd: 'number',
    highPriceUsd: 'number',
    lowPriceUsd: 'number',
    closePriceUsd: 'number'
  }

  const response = san.SAN_OHLC(slug, from, to)
  const headers = response[0]
  const ohlc = response[1]

  testFieldTypes(ohlc, expected)
  testHandlesNullData('fetchOhlc', san.SAN_OHLC, slug, from, to)

  it('has proper headers', () => {
    const expectedHeaders = [
      'Date',
      'Open Price USD',
      'High Price USD',
      'Low Price USD',
      'Close Price USD'
    ]

    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const ohlc = san.SAN_OHLC(slug, from, to)

    assertNumberOfRecords(ohlc, numberOfDays + 1)

    for (let [index, day] of days.entries()) {
      expect(ohlc[index + 1][0]).to.equal(formatDate(day))
    }
  })
})
