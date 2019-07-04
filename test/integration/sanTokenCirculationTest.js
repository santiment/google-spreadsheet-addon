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

describe('SAN_TOKEN_CIRCULATION', () => {
  const expected = {
    date: 'string',
    tokenCirculation: 'number'
  }

  const response = san.SAN_TOKEN_CIRCULATION(ethereumSlug, from, to)
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
    ethereumSlug,
    from,
    to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Token Circulation']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const results = san.SAN_TOKEN_CIRCULATION(ethereumSlug, from, to)
    assertNumberOfRecords(results, numberOfDays)

    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })
})
