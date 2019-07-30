const { testFieldTypes } = require('../helper.js')

const {
  testHistoricDataIsForbidden,
  testHandlesNullData
} = require('../integration_helper.js')

const {
  from,
  to,
  historicDataFrom,
  historicDataTo,
  numberOfDays
} = require('../setup.js')

describe('SAN_TRENDING_WORDS', () => {
  const sources = ['TELEGRAM', 'PROFESSIONAL_TRADERS_CHAT', 'REDDIT', 'ALL']

  const size = 3
  const hour = 1

  sources.forEach(source => {
    describe(`using source: ${source}`, () => {
      const expected = {
        date: 'string',
        word: 'string',
        score: 'number'
      }

      const response = san.SAN_TRENDING_WORDS(source, size, hour, from, to)

      const headers = response[0]
      const results = response[1]

      testFieldTypes(results, expected)

      it('has proper headers', () => {
        const expectedHeaders = ['Date', 'Word', 'Score']
        expect(headers).to.deep.equal(expectedHeaders)
      })
    })
  })

  it('returns n records per day', () => {
    const source = 'ALL'
    const results = san.SAN_TRENDING_WORDS(source, size, hour, from, to)

    expect(results.length).to.equal((numberOfDays + 1) * size + 1) // last day + headers
  })

  testHistoricDataIsForbidden(
    san.SAN_TRENDING_WORDS,
    'ALL',
    size,
    hour,
    historicDataFrom,
    historicDataTo
  )
  testHandlesNullData(
    'fetchTrendingWords',
    san.SAN_TRENDING_WORDS,
    'ALL',
    size,
    hour,
    from,
    to
  )

  // TODO: Add a test for ordering of the results(like in the other places)
  // when we have it implemented in the API
})
