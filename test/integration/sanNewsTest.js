const { testFieldTypes } = require('../helper.js')

const {
  testHistoricDataIsForbidden,
  testHandlesNullData
} = require('../integration_helper.js')

const {
  slug,
  ethereumSlug,
  historicDataFrom,
  historicDataTo
} = require('../setup.js')

/*
It is not certain that there would be news
between the two dates, that's why the dates
are not dynamically produced
*/
const from = new Date(2019, 6, 15, 0, 0, 0)
const to = new Date(2019, 6, 31, 0, 0, 0)

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
