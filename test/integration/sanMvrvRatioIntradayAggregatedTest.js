
require('../support/helper.js')
const { testHandlesNullData } = require('../support/integrationHelper.js')
const { slug, from, to } = require('../support/setup.js')

describe('SAN_MVRV_RATIO_INTRADAY_AGGREGATED', () => {
  it('returns a number', () => {
    const response = san.SAN_MVRV_RATIO_INTRADAY_AGGREGATED(slug, from, to)
    expect(response).to.be.a('number')
  })
  testHandlesNullData('fetchAggregatedGetMetric', san.SAN_MVRV_RATIO_INTRADAY_AGGREGATED, slug, from, to)
})
