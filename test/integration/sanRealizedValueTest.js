const { testFieldTypes } = require('../helper.js')

const {
  testHistoricDataIsForbidden,
  testHandlesNullData
} = require('../integration_helper.js')

const {
  slug,
  ethereumSlug,
  from,
  to,
  historicDataFrom,
  historicDataTo
} = require('../setup.js')

describe('SAN_REALIZED_VALUE', () => {
  const expected = { date: 'string', realizedValue: 'number' }

  const response = san.SAN_REALIZED_VALUE(slug, from, to)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHistoricDataIsForbidden(
    san.SAN_REALIZED_VALUE,
    ethereumSlug,
    historicDataFrom,
    historicDataTo)
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
