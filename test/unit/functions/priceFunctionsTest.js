/* eslint-disable no-unused-expressions */

require('../../support/helper.js')

const slug = 'santiment'
const from = new Date(2019, 0, 1, 0, 0, 0)
const to = new Date(2019, 0, 3, 0, 0, 0)

describe('dailyClosingPrice_', () => {
  const day = new Date(2019, 0, 1, 0, 0, 0)

  it('requests the closing price for the end of the day', () => {
    const beginningOfDaytoEndOfDay = sandbox.stub(san, 'beginningOfDaytoEndOfDay_')
    sandbox.stub(san.ApiClient_.prototype, 'fetchDailyClosingPrice').returns(
      [{ 'closePriceUsd': 100.01 }]
    )

    san.dailyClosingPrice_(slug, day)

    expect(beginningOfDaytoEndOfDay).to.have.been.called
  })

  it('returns the closing price for the given day', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchDailyClosingPrice').returns(
      [{ 'closePriceUsd': 100.01 }]
    )

    const response = san.dailyClosingPrice_(slug, day)
    expect(response).to.eq(100.01)
  })

  it('throws "No data" on empty array response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchDailyClosingPrice').returns([])
    expect(() => san.dailyClosingPrice_(slug, day)).to.throw('No data')
  })

  it('throws "No data" on null response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchDailyClosingPrice').returns(null)
    expect(() => san.dailyClosingPrice_(slug, day)).to.throw('No data')
  })

  it('throws "No data" when closePriceUsd property is missing from first record', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchDailyClosingPrice').returns([{ something: 'here' }])
    expect(() => san.dailyClosingPrice_(slug, day)).to.throw('No data')
  })
})

describe('priceAbsoluteChange_', () => {
  it('includes the last day of the period', () => {
    const beginningOfDaytoEndOfDay = sandbox.stub(san, 'beginningOfDaytoEndOfDay_')
    sandbox.stub(san.ApiClient_.prototype, 'fetchOhlc').returns(
      [
        {
          'openPriceUsd': 100.00,
          'closePriceUsd': 100.01
        }
      ]
    )

    san.priceAbsoluteChange_(slug, from, to)

    expect(beginningOfDaytoEndOfDay).to.have.been.called
  })

  it('returns the absolute change between last close and first open price', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchOhlc').returns(
      [
        {
          'openPriceUsd': 100.00,
          'closePriceUsd': 100.01,
          'datetime': '2019-01-01T00:00:00Z'
        },
        {
          'openPriceUsd': 101.11,
          'closePriceUsd': 102.02,
          'datetime': '2019-01-02T00:00:00Z'
        },
        {
          'openPriceUsd': 104.04,
          'closePriceUsd': 105.05,
          'datetime': '2019-01-03T00:00:00Z'
        }
      ]
    )

    const response = san.priceAbsoluteChange_(slug, from, to)
    expect(response).to.eq(5.049999999999997)
  })

  it('throws "No data" on empty array response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchOhlc').returns([])
    expect(() => san.priceAbsoluteChange_(slug, from, to)).to.throw('No data')
  })

  it('throws "No data" on null response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchOhlc').returns(null)
    expect(() => san.priceAbsoluteChange_(slug, from, to)).to.throw('No data')
  })

  it('throws "No data" when openPriceUsd property is missing from first record', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchOhlc').returns(
      [
        {
          'closePriceUsd': 100.01
        },
        {
          'openPriceUsd': 104.04,
          'closePriceUsd': 105.05
        }
      ]
    )

    expect(() => san.priceAbsoluteChange_(slug, from, to)).to.throw('No data')
  })

  it('throws "No data" when closePriceUsd property is missing from last record', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchOhlc').returns(
      [
        {
          'openPriceUsd': 100.00,
          'closePriceUsd': 100.01
        },
        {
          'openPriceUsd': 104.04
        }
      ]
    )

    expect(() => san.priceAbsoluteChange_(slug, from, to)).to.throw('No data')
  })
})

describe('pricePercentChange_', () => {
  it('includes the last day of the period', () => {
    const beginningOfDaytoEndOfDay = sandbox.stub(san, 'beginningOfDaytoEndOfDay_')
    sandbox.stub(san.ApiClient_.prototype, 'fetchOhlc').returns(
      [
        {
          'openPriceUsd': 100.00,
          'closePriceUsd': 100.01
        }
      ]
    )

    san.pricePercentChange_(slug, from, to)

    expect(beginningOfDaytoEndOfDay).to.have.been.called
  })

  it('returns positive percent price change between last close and first open price', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchOhlc').returns(
      [
        {
          'openPriceUsd': 1000.00,
          'closePriceUsd': 1010.01,
          'datetime': '2019-01-01T00:00:00Z'
        },
        {
          'openPriceUsd': 1010.11,
          'closePriceUsd': 1020.02,
          'datetime': '2019-01-02T00:00:00Z'
        },
        {
          'openPriceUsd': 1020.11,
          'closePriceUsd': 1100.00,
          'datetime': '2019-01-03T00:00:00Z'
        }
      ]
    )

    const response = san.pricePercentChange_(slug, from, to)
    expect(response).to.eq(10.0)
  })

  it('returns negative percent price change between last close and first open price', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchOhlc').returns(
      [
        {
          'openPriceUsd': 1000.00,
          'closePriceUsd': 1010.01,
          'datetime': '2019-01-01T00:00:00Z'
        },
        {
          'openPriceUsd': 1010.11,
          'closePriceUsd': 1020.02,
          'datetime': '2019-01-02T00:00:00Z'
        },
        {
          'openPriceUsd': 1020.11,
          'closePriceUsd': 900.00,
          'datetime': '2019-01-03T00:00:00Z'
        }
      ]
    )

    const response = san.pricePercentChange_(slug, from, to)
    expect(response).to.eq(-10.0)
  })

  it('throws "No data" on empty array response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchOhlc').returns([])
    expect(() => san.pricePercentChange_(slug, from, to)).to.throw('No data')
  })

  it('throws "No data" on null response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchOhlc').returns(null)
    expect(() => san.pricePercentChange_(slug, from, to)).to.throw('No data')
  })

  it('throws "No data" when openPriceUsd property is missing from first record', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchOhlc').returns(
      [
        {
          'closePriceUsd': 100.01
        },
        {
          'openPriceUsd': 104.04,
          'closePriceUsd': 105.05
        }
      ]
    )

    expect(() => san.pricePercentChange_(slug, from, to)).to.throw('No data')
  })

  it('throws "No data" when closePriceUsd property is missing from last record', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchOhlc').returns(
      [
        {
          'openPriceUsd': 100.00,
          'closePriceUsd': 100.01
        },
        {
          'openPriceUsd': 104.04
        }
      ]
    )

    expect(() => san.pricePercentChange_(slug, from, to)).to.throw('No data')
  })
})

describe('prices_', () => {
  it('returns the usd price and the volume of a given slug over a time period', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchPrices').returns(
      [
        {
          datetime: '2019-05-23T00:00:00Z',
          priceUsd: 1.204115,
          volume: 104644
        },
        {
          datetime: '2019-05-24T00:00:00Z',
          priceUsd: 0.854728,
          volume: 129090
        },
        {
          datetime: '2019-05-25T00:00:00Z',
          priceUsd: 0.952423,
          volume: 159908
        },
        {
          datetime: '2019-05-26T00:00:00Z',
          priceUsd: 1.020678,
          volume: 179749
        }
      ]
    )

    const response = san.prices_(slug, from, to)

    expect(response).to.deep.eq(
      [
        ['Date', 'USD Price', 'Volume'],
        ['**Notice** Metric will be renamed to SAN_PRICE_VOLUME'], // Temporary
        ['2019-05-23', 1.204115, 104644],
        ['2019-05-24', 0.854728, 129090],
        ['2019-05-25', 0.952423, 159908],
        ['2019-05-26', 1.020678, 179749]
      ]
    )
  })

  it('returns headers only on empty array response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchPrices').returns([])
    const response = san.prices_(slug, from, to)

    expect(response).to.deep.eq([['Date', 'USD Price', 'Volume'], ['**Notice** Metric will be renamed to SAN_PRICE_VOLUME']]) // Temporary
  })

  it('throws "No data" on null response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchPrices').returns(null)
    expect(() => san.prices_(slug, from, to)).to.throw('No data')
  })
})

describe('priceVolumeDiff_', () => {
  const currency = 'USD'
  it('returns the usd price and the volume of a given slug over a time period', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchPriceVolumeDiff').returns(
      [
        {
          datetime: '2019-05-23T00:00:00Z',
          priceChange: 0.052310,
          priceVolumeDiff: 0.002487,
          volumeChange: -15981.067567
        },
        {
          datetime: '2019-05-24T00:00:00Z',
          priceChange: 0.039116,
          priceVolumeDiff: 0.004328,
          volumeChange: -37709.206172
        },
        {
          datetime: '2019-05-25T00:00:00Z',
          priceChange: 0.031248,
          priceVolumeDiff: 0.008233,
          volumeChange: -93422.205995
        }
      ]
    )

    const response = san.priceVolumeDiff_(slug, from, to, currency)

    expect(response).to.deep.eq(
      [
        ['Date', 'Price Change', 'Price Volume Diff', 'Volume Change'],
        ['2019-05-23', 0.052310, 0.002487, -15981.067567],
        ['2019-05-24', 0.039116, 0.004328, -37709.206172],
        ['2019-05-25', 0.031248, 0.008233, -93422.205995]
      ]
    )
  })

  it('returns headers only on empty array response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchPriceVolumeDiff').returns([])
    const response = san.priceVolumeDiff_(slug, from, to, currency)

    expect(response).to.deep.eq([['Date', 'Price Change', 'Price Volume Diff', 'Volume Change']])
  })

  it('throws "No data" on null response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchPriceVolumeDiff').returns(null)
    expect(() => san.priceVolumeDiff_(slug, from, to, currency)).to.throw('No data')
  })
})
