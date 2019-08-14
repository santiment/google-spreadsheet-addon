const { testFieldTypes } = require('../helper.js')
const { testHandlesNullData } = require('../integration_helper.js')
const { slug, from, to } = require('../setup.js')

describe('SAN_REALIZED_VALUE', () => {
  const expected = { date: 'string', realizedValue: 'number' }

  const response = san.SAN_REALIZED_VALUE(slug, from, to)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)

  testHandlesNullData(
    'fetchRealizedValue',
    san.SAN_REALIZED_VALUE,
    slug,
    from,
    to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Realized Value']
    expect(headers).to.deep.equal(expectedHeaders)
  })
})
