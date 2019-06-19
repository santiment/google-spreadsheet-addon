require('../helper.js')

const {
  testHistoricDataIsForbidden,
  testHandlesNullData
} = require('../integration_helper.js')

const {
  ethereumSlug,
  from,
  to,
  historicDataFrom,
  historicDataTo
} = require('../setup.js')

describe('SAN_PRICE_ABSOLUTE_CHANGE', () => {
  testHistoricDataIsForbidden(
    san.SAN_PRICE_ABSOLUTE_CHANGE,
    historicDataFrom,
    historicDataTo)
  testHandlesNullData(
    'fetchOhlc',
    san.SAN_PRICE_ABSOLUTE_CHANGE,
    ethereumSlug,
    from,
    to)

  it('returns the absolute price change', () => {
    const response = san.SAN_PRICE_ABSOLUTE_CHANGE(ethereumSlug, from, to)
    expect(response).to.be.a('number')
  })
})
