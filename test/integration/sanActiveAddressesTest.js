
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
  const addresses = response[1]

  testFieldTypes(addresses, expected)
  testHandlesNullData('fetchGetMetric', san.SAN_ACTIVE_ADDRESSES, slug, from, to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Value']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const addresses = san.SAN_ACTIVE_ADDRESSES(slug, from, to)

    assertNumberOfRecords(addresses, numberOfDays)

    assertDaysMatch(addresses, days)
  })
})
