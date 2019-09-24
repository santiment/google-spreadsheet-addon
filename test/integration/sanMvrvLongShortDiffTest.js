const { generateGetMetric } = require('../../generators/getMetric.js')
const chai = require('chai')
const expect = chai.expect

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

describe('mvrv_long_short_diff metric', async () => {
  await generateGetMetric()
  const expected = {
    date: 'string',
    value: 'number'
  }

  const response = san.SAN_MVRV_USD_LONG_SHORT_DIFF(slug, from, to)
  const headers = response[0]
  const results = response[1]
  testFieldTypes(results, expected)
  testHandlesNullData(
    'fetchGetMetric',
    san.SAN_MVRV_USD_LONG_SHORT_DIFF,
    slug,
    from,
    to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Value']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const results = san.SAN_MVRV_USD_LONG_SHORT_DIFF(slug, from, to)

    assertNumberOfRecords(results, numberOfDays)

    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })
})
