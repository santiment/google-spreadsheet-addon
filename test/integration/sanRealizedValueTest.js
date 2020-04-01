const { testFieldTypes } = require('../support/helper.js')
const { testHandlesNullData } = require('../support/integrationHelper.js')
const { testGetMetricTimeBound } = require('../support/getMetricHelper.js')
const { slug, from, to, currency } = require('../support/setup.js')

describe('SAN_REALIZED_VALUE', () => {
  const expected = { date: 'string', realizedValue: 'number' }

  const response = san.SAN_REALIZED_VALUE(slug, from, to)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)

  testHandlesNullData(
    'fetchGetMetric',
    san.SAN_REALIZED_VALUE,
    slug,
    from,
    to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Value']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  testGetMetricTimeBound(san.SAN_REALIZED_VALUE, slug, from, to, currency)
})
