
const { testFieldTypes } = require('../support/helper.js')
const { testHandlesNullData, assertNumberOfRecords, assertDaysMatch } = require('../support/integrationHelper.js')
const { slug, from, to, numberOfDays, days, numberOfHours } = require('../support/setup.js')

describe('SAN_TRANSACTION_VOLUME', () => {
  const expected = {
    date: 'string',
    value: 'number'
  }

  const response = san.SAN_TRANSACTION_VOLUME(slug, from, to)
  const headers = response[0]
  const results = response[1]
  const warning = response[response.length - 1]

  testFieldTypes(results, expected)
  testHandlesNullData('fetchGetMetric', san.SAN_TRANSACTION_VOLUME, slug, from, to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Value']
    const expectedWarning = [
      'WARNING! SAN_VOLUME will get deprecated, make sure you\'re using SAN_TRANSACTION_VOLUME instead.'
    ]
    expect(headers).to.deep.equal(expectedHeaders)
    expect(warning).to.deep.equal(expectedWarning)
  })

  it('returns a record per every day', () => {
    const results = san.SAN_TRANSACTION_VOLUME(slug, from, to)

    assertNumberOfRecords(results, numberOfDays + 1)

    assertDaysMatch(results, days)
  })

  it('returns a record per hour', () => {
    const addresses = san.SAN_TRANSACTION_VOLUME(slug, from, to, '1h')
    assertNumberOfRecords(addresses, numberOfHours + 1)
  })
})
