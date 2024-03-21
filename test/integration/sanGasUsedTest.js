const { testFieldTypes } = require('../support/helper.js')
const { testHandlesNullData, assertNumberOfRecords } = require('../support/integrationHelper.js')

const {
  ethereumSlug,
  from,
  to,
  days,
  numberOfDays,
  formatDate
} = require('../support/setup.js')

describe('SAN_GAS_USED', () => {
  const expected = { date: 'string', gasUsed: 'number' }

  const response = san.SAN_GAS_USED(ethereumSlug, from, to)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHandlesNullData('fetchGasUsed', san.SAN_GAS_USED, ethereumSlug, from, to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Gas Used']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const results = san.SAN_GAS_USED(ethereumSlug, from, to)

    assertNumberOfRecords(results, numberOfDays)

    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })
})
