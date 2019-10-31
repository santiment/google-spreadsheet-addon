const { testFieldTypes } = require('../helper.js')
const { testHandlesNullData } = require('../integration_helper.js')
const { testGetMetricTimeBound } = require('../getMetricHelper.js')

const { slug, from, to } = require('../setup.js')

describe('SAN_TOKEN_CIRCULATION', () => {
  const expected = { date: 'string', tokenCirculation: 'number' }

  const response = san.SAN_TOKEN_CIRCULATION(slug, from, to)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHandlesNullData('fetchGetMetric', san.SAN_TOKEN_CIRCULATION, slug, from, to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Value']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  testGetMetricTimeBound(san.SAN_TOKEN_CIRCULATION, slug, from, to)
})
