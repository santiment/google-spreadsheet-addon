require('../support/helper.js')

const { testHandlesNullData } = require('../support/integrationHelper.js')
const { slug, from, to } = require('../support/setup.js')

describe('SAN_PRICE_ABSOLUTE_CHANGE', () => {
  testHandlesNullData(
    'fetchOhlc',
    san.SAN_PRICE_ABSOLUTE_CHANGE,
    slug,
    from,
    to)

  it('returns the absolute price change', () => {
    const response = san.SAN_PRICE_ABSOLUTE_CHANGE(slug, from, to)
    expect(response).to.be.a('number')
  })
})
