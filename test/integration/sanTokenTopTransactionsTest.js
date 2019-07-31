const { testFieldTypes } = require('../helper.js')

const {
  testHandlesNullData
} = require('../integration_helper.js')

const {
  slug,
  from,
  to
} = require('../setup.js')

describe('SAN_TOKEN_TOP_TRANSACTIONS', () => {
  const expected = {
    date: 'string',
    fromAddress: 'string',
    fromAddressIsExchange: 'boolean',
    toAddress: 'string',
    toAddressIsExchange: 'boolean',
    trxHash: 'string',
    trxValue: 'number'
  }

  const response = san.SAN_TOKEN_TOP_TRANSACTIONS(slug, from, to, 5)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHandlesNullData(
    'fetchTokenTopTransactions',
    san.SAN_TOKEN_TOP_TRANSACTIONS,
    slug,
    from,
    to,
    5)

  it('has proper headers', () => {
    const expectedHeaders = [
      'Date',
      'From Address',
      'From Is Exchange',
      'To Address',
      'To Is Exchange',
      'Transaction Hash',
      'Transaction Value'
    ]
    expect(headers).to.deep.equal(expectedHeaders)
  })
})
