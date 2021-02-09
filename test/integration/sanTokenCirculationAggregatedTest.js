
require('../support/helper.js')
const { testHandlesNullData } = require('../support/integrationHelper.js')
const { slug, from, to } = require('../support/setup.js')

describe('SAN_TOKEN_CIRCULATION_AGGREGATED', () => {
  it('returns a number', () => {
    const response = san.SAN_TOKEN_CIRCULATION_AGGREGATED(slug, from, to)
    expect(response).to.be.a('number')
  })
  testHandlesNullData('fetchAggregatedGetMetric', san.SAN_TOKEN_CIRCULATION_AGGREGATED, slug, from, to)
})
