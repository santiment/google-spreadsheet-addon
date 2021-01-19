const { testFieldTypes } = require('../support/helper.js')
const { testHandlesNullData, assertNumberOfRecords, assertDaysMatch } = require('../support/integrationHelper.js')
const { slug, from, to, numberOfDays, days } = require('../support/setup.js')

describe('SAN_VOLUME', () => {
  const expected = {
    date: 'string',
    volumes: 'number'
  }

  const response = san.SAN_VOLUME(slug, from, to)
  const headers = response[0]
  const volumes = response[1]

  testFieldTypes(volumes, expected)
  testHandlesNullData('fetchGetMetric', san.SAN_VOLUME, slug, from, to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Value']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const volumes = san.SAN_VOLUME(slug, from, to)

    assertNumberOfRecords(volumes, numberOfDays)

    assertDaysMatch(volumes, days)
  })
})
