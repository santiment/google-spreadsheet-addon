require('../helper.js')
const { testHistoricDataIsForbidden } = require('../integration_helper.js')
const { slug, from, historicDataFrom } = require('../setup.js')

describe('SAN_DAILY_CLOSING_PRICE', () => {
  testHistoricDataIsForbidden(
    san.SAN_DAILY_CLOSING_PRICE,
    slug,
    historicDataFrom)

  it('returns the latest price in USD', () => {
    const response = san.SAN_DAILY_CLOSING_PRICE(slug, from)
    expect(response).to.be.a('number')
  })
})
