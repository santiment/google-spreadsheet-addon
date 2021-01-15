const { testFieldTypes } = require('../support/helper.js')
const { assertNumberOfRecords, assertDaysMatch } = require('../support/integrationHelper.js')
const { slug, from, to, numberOfDays, days } = require('../support/setup.js')

describe('SAN_REVERSE', () => {
  const expected = {
    date: 'string',
    activeAddresses: 'number'
  }

  const array = san.SAN_ACTIVE_ADDRESSES(slug, from, to)
  const reversed = san.SAN_REVERSE(array)
  const headers = reversed[0]
  const addresses = reversed[1]

  testFieldTypes(addresses, expected)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Value']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const array = san.SAN_ACTIVE_ADDRESSES(slug, from, to)
    const reversed = san.SAN_REVERSE(array)
    assertNumberOfRecords(reversed, numberOfDays)

    assertDaysMatch(reversed, days)
  })
})
