/* eslint-disable no-unused-expressions */

require('../helper.js')

describe('dailyClosingPrice_', () => {
  const slug = 'santiment'
  const day = new Date(2019, 0, 1, 0, 0, 0)

  beforeEach(() => sandbox.stub(san, 'assertCanAccessHistoricData_').returns(true))

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
