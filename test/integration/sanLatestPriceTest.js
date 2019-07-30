require('../helper.js')
const { testHandlesNullData } = require('../integration_helper.js')
const { slug, fiatCurrency } = require('../setup.js')

describe('SAN_LATEST_PRICE', () => {
  testHandlesNullData(
    'fetchLatestPrice',
    san.SAN_LATEST_PRICE,
    slug,
    fiatCurrency
  )

  it('returns the latest price in USD', () => {
    const response = san.SAN_LATEST_PRICE(slug, 'USD')
    expect(response).to.be.a('number')
  })

  it('returns the latest price in BTC', () => {
    const response = san.SAN_LATEST_PRICE(slug, 'BTC')
    expect(response).to.be.a('number')
  })

  it('returns error when the requested currency is not USD or BTC', () => {
    const response = san.SAN_LATEST_PRICE(slug, 'EUR')
    expect(response).to.deep.eq(['EUR is not supported! Use any of: USD/BTC'])
  })
})
