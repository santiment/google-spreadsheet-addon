require('../support/helper.js')
const { ethereumSlug, from } = require('../support/setup.js')

describe('SAN_DAILY_CLOSING_PRICE', () => {
  it('returns the latest price in USD', () => {
    const response = san.SAN_DAILY_CLOSING_PRICE(ethereumSlug, from)
    expect(response).to.be.a('number')
  })
})
