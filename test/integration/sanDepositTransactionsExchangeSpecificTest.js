const { testFieldTypes } = require('../support/helper.js')
const { testHandlesNullData, assertNumberOfRecords } = require('../support/integrationHelper.js')

const {
  ethereumSlug,
  from,
  to,
  days,
  numberOfDays,
  formatDate,
  fundingRateExchange
} = require('../support/setup.js')

describe('SAN_DEPOSIT_TRANSACTIONS_EXCHANGE_SPECIFIC', () => {
  const expected = {
    date: 'string',
    value: 'number'
  }

  const response = san.SAN_DEPOSIT_TRANSACTIONS_EXCHANGE_SPECIFIC(ethereumSlug, from, to, fundingRateExchange)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHandlesNullData(
    'fetchExchangeSpecific',
    san.SAN_DEPOSIT_TRANSACTIONS_EXCHANGE_SPECIFIC,
    ethereumSlug,
    from,
    to,
    fundingRateExchange)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Value']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const results = san.SAN_DEPOSIT_TRANSACTIONS_EXCHANGE_SPECIFIC(ethereumSlug, from, to, fundingRateExchange)

    assertNumberOfRecords(results, numberOfDays)

    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })
})
