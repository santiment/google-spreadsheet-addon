require('../support/helper.js')
const { slug, from, to } = require('../support/setup.js')
const { testHandlesNullData } = require('../support/integrationHelper.js')

describe('SAN_TOTAL_OPEN_INTEREST_AGGREGATED', () => {
  it('returns a number', () => {
    const response = san.SAN_TOTAL_OPEN_INTEREST_AGGREGATED(slug, from, to)
    expect(response).to.be.a('number')
  })
  testHandlesNullData('fetchAggregatedGetMetric', san.SAN_TOTAL_OPEN_INTEREST_AGGREGATED, slug, from, to)
})
