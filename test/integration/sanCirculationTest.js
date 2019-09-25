const chai = require('chai')
const expect = chai.expect

const { testFieldTypes } = require('../helper.js')

const {
  testHandlesNullData,
  testTimeBound
} = require('../integration_helper.js')

const {
  slug,
  from,
  to,
  days,
  numberOfDays,
  formatDate
} = require('../setup.js')

describe('circulation metric', async () => {
  const expected = {
    date: 'string',
    value: 'number'
  }

  const response = san.SAN_CIRCULATION(slug, from, to)
  const headers = response[0]
  const results = response[1]
  testFieldTypes(results, expected)
  testHandlesNullData(
    'fetchGetMetric',
    san.SAN_CIRCULATION,
    slug,
    from,
    to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Value']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  testTimeBound(
    san.SAN_CIRCULATION,
    slug,
    from,
    to,
    days,
    numberOfDays,
    formatDate
  )
})
