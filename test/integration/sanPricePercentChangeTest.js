require('../helper.js')

const {
  testHistoricDataIsForbidden,
  testHandlesNullData
} = require('../integration_helper.js')

const {
  slug,
  ethereumSlug,
  from,
  to,
  historicDataFrom,
  historicDataTo
} = require('../setup.js')

describe('SAN_PRICE_PERCENT_CHANGE', () => {
  testHistoricDataIsForbidden(
    san.SAN_PRICE_PERCENT_CHANGE,
    ethereumSlug,
    historicDataFrom,
    historicDataTo)
  testHandlesNullData(
    'fetchOhlc',
    san.SAN_PRICE_PERCENT_CHANGE,
    slug,
    from,
    to)

  it('returns the absolute price change', () => {
    const response = san.SAN_PRICE_PERCENT_CHANGE(slug, from, to)
    expect(response).to.be.a('number')
  })
})
