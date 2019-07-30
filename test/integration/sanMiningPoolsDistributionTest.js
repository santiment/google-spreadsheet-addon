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
  historicDataFrom,
  historicDataTo,
  days,
  numberOfDays,
  formatDate
} = require('../setup.js')

describe('SAN_MINING_POOLS_DISTRIBUTION', () => {
  const expected = {
    date: 'string',
    top3: 'number',
    top10: 'number',
    other: 'number'
  }

  const response = san.SAN_MINING_POOLS_DISTRIBUTION(ethereumSlug, from, to)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHistoricDataIsForbidden(
    san.SAN_MINING_POOLS_DISTRIBUTION,
    historicDataFrom,
    historicDataTo
  )
  testHandlesNullData(
    'fetchMiningPoolsDistribution',
    san.SAN_MINING_POOLS_DISTRIBUTION,
    ethereumSlug,
    from,
    to
  )

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Top 3', 'Top 10', 'Other']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const results = san.SAN_MINING_POOLS_DISTRIBUTION(ethereumSlug, from, to)

    assertNumberOfRecords(results, numberOfDays)

    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })
})
