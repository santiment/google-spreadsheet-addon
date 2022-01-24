const { testFieldTypes } = require('../support/helper.js')
const { testHandlesNullData, assertNumberOfRecords, assertDaysMatch } = require('../support/integrationHelper.js')
const { ethereumSlug, from, to, numberOfDays, days, numberOfHours } = require('../support/setup.js')

describe('SAN_DEPOSIT_TRANSACTIONS_INTRADAY', () => {
  const expected = {
    date: 'string',
    value: 'number'
  }

  const response = san.SAN_DEPOSIT_TRANSACTIONS_INTRADAY(ethereumSlug, from, to)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHandlesNullData('fetchGetMetric', san.SAN_DEPOSIT_TRANSACTIONS_INTRADAY, ethereumSlug, from, to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Value']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const results = san.SAN_DEPOSIT_TRANSACTIONS_INTRADAY(ethereumSlug, from, to)

    assertNumberOfRecords(results, numberOfDays)

    assertDaysMatch(results, days)
  })

  it('returns a record per hour', () => {
    const addresses = san.SAN_DEPOSIT_TRANSACTIONS_INTRADAY(ethereumSlug, from, to, '1h')
    assertNumberOfRecords(addresses, numberOfHours)
  })
})
