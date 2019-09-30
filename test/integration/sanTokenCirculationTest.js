const { testFieldTypes } = require('../helper.js')
const { testHandlesNullData, testTimeBound } = require('../integration_helper.js')
const { slug, from, to, days, numberOfDays, formatDate } = require('../setup.js')
const currency = ''

describe('SAN_TOKEN_CIRCULATION', () => {
  const expected = {
    date: 'string',
    tokenCirculation: 'number'
  }

  const response = san.SAN_TOKEN_CIRCULATION(slug, from, to)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)

  testHandlesNullData(
    'fetchGetMetric',
    san.SAN_TOKEN_CIRCULATION,
    slug,
    from,
    to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Value']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  testTimeBound(
    san.SAN_TOKEN_CIRCULATION,
    slug,
    from,
    to,
    currency,
    days,
    numberOfDays,
    formatDate
  )
})
