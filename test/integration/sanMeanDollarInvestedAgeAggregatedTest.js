
require('../support/helper.js')
const { testHandlesNullData } = require('../support/integrationHelper.js')
const { slug, from, to } = require('../support/setup.js')

describe('SAN_MEAN_DOLLAR_INVESTED_AGE_AGGREGATED', () => {
  it('returns a number', () => {
    const response = san.SAN_MEAN_DOLLAR_INVESTED_AGE_AGGREGATED(slug, from, to)
    expect(response).to.be.a('number')
  })
  testHandlesNullData('fetchAggregatedGetMetric', san.SAN_MEAN_DOLLAR_INVESTED_AGE_AGGREGATED, slug, from, to)
})
