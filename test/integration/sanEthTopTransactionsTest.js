const { testFieldTypes } = require('../support/helper.js')
const { testHandlesNullData } = require('../support/integrationHelper.js')

const {
  slug
} = require('../support/setup.js')

const from = new Date(2019, 6, 19, 0, 0, 0)
const to = new Date(2019, 6, 30, 0, 0, 0)
const limit = 5
const transactionType = 'ALL'

describe('SAN_ETH_TOP_TRANSACTIONS', () => {
  const expected = {
    date: 'string',
    fromAddress: 'string',
    fromAddressIsExchange: 'boolean',
    toAddress: 'string',
    toAddressIsExchange: 'boolean',
    trxHash: 'string',
    trxValue: 'number'
  }

  const response = san.SAN_ETH_TOP_TRANSACTIONS(slug, from, to, limit, transactionType)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHandlesNullData(
    'fetchEthTopTransactions',
    san.SAN_ETH_TOP_TRANSACTIONS,
    slug,
    from,
    to,
    limit,
    transactionType)

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
