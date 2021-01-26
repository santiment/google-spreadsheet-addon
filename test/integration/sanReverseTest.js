const { testFieldTypes } = require('../support/helper.js')
const { slug, from, to } = require('../support/setup.js')

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
})
