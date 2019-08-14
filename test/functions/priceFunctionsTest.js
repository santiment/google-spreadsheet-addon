/* eslint-disable no-unused-expressions */

require('../helper.js')

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
