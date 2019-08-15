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

describe('SAN_ACTIVE_ADDRESSES', () => {
  const expected = {
    date: 'string',
    activeAddresses: 'number'
  }

  const response = san.SAN_ACTIVE_ADDRESSES(slug, from, to)
  const headers = response[0]
  const addresses = response[1]

  testFieldTypes(addresses, expected)
  testHandlesNullData('fetchActiveAddresses', san.SAN_ACTIVE_ADDRESSES, slug, from, to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Active Addresses']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns error when invalid parameters are inputed', () => {
    const response = san.SAN_ACTIVE_ADDRESSES(slug, 5, 6)
    expect(response).to.deep.eq(['Invalid Number! It should be a DATE.'])
  })

  it('returns a record per every day', () => {
    const addresses = san.SAN_ACTIVE_ADDRESSES(slug, from, to)

    assertNumberOfRecords(addresses, numberOfDays)

    for (let [index, day] of days.entries()) {
      if (day in addresses[index + 1]) {
        expect(addresses[index + 1][0]).to.equal(formatDate(day))
      }
    }
  })
})
