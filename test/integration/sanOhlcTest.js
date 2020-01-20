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
    openPriceUsd: 'number',
    highPriceUsd: 'number',
    lowPriceUsd: 'number',
    closePriceUsd: 'number'
  }

  const response = san.SAN_OHLC(slug, from, to)
  const warning = response[0]
  const headers = response[1]
  const ohlc = response[2]

  expect(warning).to.deep.eq(['WARNING! The order has changed from close->high->low->open to open->high->low->close'])
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
      expect(ohlc[index + 2][0]).to.equal(formatDate(day))
    }
  })
})
