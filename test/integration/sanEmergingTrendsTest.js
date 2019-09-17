const { testFieldTypes } = require('../helper.js')
const { testHandlesNullData } = require('../integration_helper.js')
const { from, to, numberOfDays } = require('../setup.js')

describe('SAN_EMERGING_TRENDS', () => {
  const size = 3

  const expected = {
    date: 'string',
    word: 'string',
    score: 'number'
  }

  const response = san.SAN_EMERGING_TRENDS(size, from, to)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Word', 'Score']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns n records per day', () => {
    const results = san.SAN_EMERGING_TRENDS(size, from, to)

    expect(results.length).to.equal((numberOfDays + 1) * size + 1) // last day + headers
  })

  testHandlesNullData(
    'fetchEmergingTrends',
    san.SAN_EMERGING_TRENDS,
    size,
    from,
    to)

  // TODO: Add a test for ordering of the results(like in the other places)
  // when we have it implemented in the API
})
