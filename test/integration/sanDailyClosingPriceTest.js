require('../helper.js')
const { testHistoricDataIsForbidden } = require('../integration_helper.js')
const { ethereumSlug, from, historicDataFrom } = require('../setup.js')

describe('SAN_DAILY_CLOSING_PRICE', () => {
  testHistoricDataIsForbidden(
    san.SAN_DAILY_CLOSING_PRICE,
    ethereumSlug,
    historicDataFrom
  )

  it('returns the latest price in USD', () => {
    const response = san.SAN_DAILY_CLOSING_PRICE(ethereumSlug, from)
    expect(response).to.be.a('number')
  })
})
