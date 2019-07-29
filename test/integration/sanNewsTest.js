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

describe('SAN_NEWS', () => {
  const size = 5

  const expected = {
    date: 'string',
    title: 'string',
    source: 'string',
    url: 'string',
    description: 'string'
  }

  const response = san.SAN_NEWS(slug, from, to, size)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHistoricDataIsForbidden(
    san.SAN_NEWS,
    ethereumSlug,
    historicDataFrom,
    historicDataTo,
    size)
  testHandlesNullData(
    'fetchNews',
    san.SAN_NEWS,
    slug,
    from,
    to,
    size)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Title', 'Source', 'URL', 'Description']
    expect(headers).to.deep.equal(expectedHeaders)
  })
})
