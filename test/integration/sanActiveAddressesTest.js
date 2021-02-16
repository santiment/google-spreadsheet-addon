
const { testFieldTypes } = require('../support/helper.js')
const { testHandlesNullData, assertNumberOfRecords, assertDaysMatch } = require('../support/integrationHelper.js')
const { slug, from, to, numberOfDays, days } = require('../support/setup.js')

describe('SAN_ACTIVE_ADDRESSES', () => {
  const expected = {
    date: 'string',
    value: 'number'
  }

  const response = san.SAN_ACTIVE_ADDRESSES(slug, from, to)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHandlesNullData('fetchGetMetric', san.SAN_ACTIVE_ADDRESSES, slug, from, to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Value']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const results = san.SAN_ACTIVE_ADDRESSES(slug, from, to)

    assertNumberOfRecords(results, numberOfDays)

    assertDaysMatch(results, days)
  })
})
