const { testFieldTypes } = require('../helper.js')

const { testHandlesNullData, assertNumberOfRecords, assertDaysMatch } = require('../integration_helper.js')

const { slug, from, to, numberOfDays, days } = require('../setup.js')

describe('SAN_VELOCITY', () => {
  const expected = {
    date: 'string',
    value: 'number'
  }

  const response = san.SAN_VELOCITY(slug, from, to)
  const headers = response[0]
  const results = response[1]
  testFieldTypes(results, expected)
  testHandlesNullData(
    'fetchGetMetric',
    san.SAN_VELOCITY,
    slug,
    from,
    to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Value']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const results = san.SAN_VELOCITY(slug, from, to)

    assertNumberOfRecords(results, numberOfDays)

    assertDaysMatch(results, days)
  })
})
