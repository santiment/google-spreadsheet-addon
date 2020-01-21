const { testFieldTypes } = require('../helper.js')

const {
  testHandlesNullData,
  assertNumberOfRecords
} = require('../integration_helper.js')

const {
  slug,
  from,
  to,
  days,
  numberOfDays,
  formatDate
} = require('../setup.js')

describe('SAN_SOCIAL_DOMINANCE', () => {
  const expected = {
    date: 'string',
    dominance: 'number'
  }

  const source = 'ALL'
  const response = san.SAN_SOCIAL_DOMINANCE(slug, from, to, source)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)

  testHandlesNullData(
    'fetchSocialDominance',
    san.SAN_SOCIAL_DOMINANCE,
    slug,
    from,
    to,
    source)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Dominance']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day according to the given source', () => {
    const results = san.SAN_SOCIAL_DOMINANCE(slug, from, to, source)
    assertNumberOfRecords(results, numberOfDays)

    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })

  it('returns a record per every day according to the default source', () => {
    const results = san.SAN_SOCIAL_DOMINANCE(slug, from, to)
    assertNumberOfRecords(results, numberOfDays)

    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })
})
