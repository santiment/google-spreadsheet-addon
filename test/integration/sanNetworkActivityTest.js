const { testFieldTypes } = require('../helper.js')

const {
  testHandlesNullData,
  assertNumberOfRecords
} = require('../integration_helper.js')

const {
  slug,
  from,
  to,
  days,
  numberOfDays,
  formatDate
} = require('../setup.js')

describe('SAN_NETWORK_GROWTH', () => {
  const expected = {
    date: 'string',
    newAddresses: 'number'
  }

  const response = san.SAN_NETWORK_GROWTH(slug, from, to)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHandlesNullData('fetchNetworkGrowth', san.SAN_NETWORK_GROWTH, slug, from, to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'New Addresses']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const results = san.SAN_NETWORK_GROWTH(slug, from, to)

    assertNumberOfRecords(results, numberOfDays)

    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })
})
