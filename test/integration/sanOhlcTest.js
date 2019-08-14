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

describe('SAN_OHLC', () => {
  const expected = {
    date: 'string',
    closePriceUsd: 'number',
    highPriceUsd: 'number',
    lowPriceUsd: 'number',
    openPriceUsd: 'number'
  }

  const response = san.SAN_OHLC(slug, from, to)
  const headers = response[0]
  const ohlc = response[1]

  testFieldTypes(ohlc, expected)
  testHandlesNullData('fetchOhlc', san.SAN_OHLC, slug, from, to)

  it('has proper headers', () => {
    const expectedHeaders = [
      'Date',
      'Close Price USD',
      'High Price USD',
      'Low Price USD',
      'Open Price USD'
    ]

    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const ohlc = san.SAN_OHLC(slug, from, to)

    assertNumberOfRecords(ohlc, numberOfDays)

    for (let [index, day] of days.entries()) {
      expect(ohlc[index + 1][0]).to.equal(formatDate(day))
    }
  })
})
