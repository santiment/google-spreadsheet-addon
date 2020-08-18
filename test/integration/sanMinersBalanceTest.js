const { testFieldTypes } = require('../support/helper.js')

const {
  testHandlesNullData,
  assertNumberOfRecords
} = require('../support/integrationHelper.js')

const {
  ethereumSlug,
  from,
  to,
  days,
  numberOfDays,
  formatDate
} = require('../support/setup.js')

describe('SAN_MINERS_BALANCE', () => {
  const expected = { date: 'string', balance: 'number' }
  sandbox.stub(san.ApiClient_.prototype, 'fetchCurrentUserPermissions').returns({ 'data': { 'currentUser': { 'permissions': { 'spreadsheet': true } } } })

  const response = san.SAN_MINERS_BALANCE(ethereumSlug, from, to)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHandlesNullData(
    'fetchMinersBalance',
    san.SAN_MINERS_BALANCE,
    ethereumSlug,
    from,
    to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Balance']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const results = san.SAN_MINERS_BALANCE(ethereumSlug, from, to)

    assertNumberOfRecords(results, numberOfDays)

    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })
})
