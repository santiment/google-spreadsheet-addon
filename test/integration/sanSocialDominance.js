const { testFieldTypes } = require('../helper.js')

const {
  testHistoricDataIsForbidden,
  testHandlesNullData,
  assertNumberOfRecords
} = require('../integration_helper.js')

const {
  ethereumSlug,
  from,
  to,
  source,
  historicDataFrom,
  historicDataTo,
  days,
  numberOfDays,
  formatDate
} = require('../setup.js')

describe('SAN_SOCIAL_DOMINANCE', () => {
  const expected = {
    date: 'string',
    dominance: 'number'
  }

  const response = san.SAN_SOCIAL_DOMINANCE(ethereumSlug, from, to, source)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHistoricDataIsForbidden(
    san.SAN_SOCIAL_DOMINANCE,
    ethereumSlug,
    historicDataFrom,
    historicDataTo,
    source)
  testHandlesNullData(
    'fetchSocialDominance',
    san.SAN_SOCIAL_DOMINANCE,
    ethereumSlug,
    from,
    to,
    source)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Dominance']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const results = san.SAN_SOCIAL_DOMINANCE(ethereumSlug, from, to, source)
    assertNumberOfRecords(results, numberOfDays)

    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })
})
