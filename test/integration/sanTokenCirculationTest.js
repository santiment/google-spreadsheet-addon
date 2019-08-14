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

describe('SAN_TOKEN_CIRCULATION', () => {
  const expected = {
    date: 'string',
    tokenCirculation: 'number'
  }

  const response = san.SAN_TOKEN_CIRCULATION(slug, from, to)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHistoricDataIsForbidden(
    san.SAN_TOKEN_CIRCULATION,
    ethereumSlug,
    historicDataFrom,
    historicDataTo)
  testHandlesNullData(
    'fetchTokenCirculation',
    san.SAN_TOKEN_CIRCULATION,
    slug,
    from,
    to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Token Circulation']
    expect(headers).to.deep.equal(expectedHeaders)
  })
})
