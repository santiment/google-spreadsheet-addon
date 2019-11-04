const { testFieldTypes } = require('../helper.js')

const {
  testHandlesNullData,
  assertNumberOfRecords,
  assertDaysMatch
} = require('../integration_helper.js')

const { testGetMetricTimeBound } = require('../getMetricHelper.js')

const { slug, from, to, currency, numberOfDays, days } = require('../setup.js')

describe('SAN_MVRV_RATIO', () => {
  const expected = { date: 'string', ratio: 'number' }

  const response = san.SAN_MVRV_RATIO(slug, from, to, currency)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHandlesNullData('fetchGetMetric', san.SAN_MVRV_RATIO, slug, from, to, currency)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Value']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const response = san.SAN_MVRV_RATIO(slug, from, to, currency)

    assertNumberOfRecords(response, numberOfDays)
    assertDaysMatch(response, days)
  })

  it('old implementation(w/o currency and timeBound) works', () => {
    const response = san.SAN_MVRV_RATIO(slug, from, to)

    assertNumberOfRecords(response, numberOfDays)
    assertDaysMatch(response, days)
  })

  testGetMetricTimeBound(san.SAN_MVRV_RATIO, slug, from, to, currency)
})
