
require('../support/helper.js')
const { testHandlesNullData } = require('../support/integrationHelper.js')
const { from, to } = require('../support/setup.js')

const slug = 'bitcoin'

describe('SAN_BITMEX_PERPETUAL_OPEN_INTEREST_AGGREGATED', () => {
  it('returns a number', () => {
    const response = san.SAN_BITMEX_PERPETUAL_OPEN_INTEREST_AGGREGATED(slug, from, to)
    expect(response).to.be.a('number')
  })
  testHandlesNullData('fetchAggregatedGetMetric', san.SAN_BITMEX_PERPETUAL_OPEN_INTEREST_AGGREGATED, slug, from, to)
})
