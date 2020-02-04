const { testFieldTypes } = require('../helper.js')

const {
  testHandlesNullData
} = require('../integration_helper.js')

const {
  slug,
  from,
  to,
  days,
  formatDate
} = require('../setup.js')

const numberOfHolders = 5

describe('SAN_TOP_HOLDERS_PERCENT_OF_TOTAL_SUPPLY', () => {
  const expected = { date: 'string', inExchanges: 'number', inTopHoldersTotal: 'number', outsideExchanges: 'number' }

  const response = san.SAN_TOP_HOLDERS_PERCENT_OF_TOTAL_SUPPLY(slug, from, to, numberOfHolders)
  const headers = response[0]
  const results = response[1]

  if (response.length > 1) {
    testFieldTypes(results, expected)
  }

  testHandlesNullData(
    'fetchTopHoldersPercentOfTotalSupply',
    san.SAN_TOP_HOLDERS_PERCENT_OF_TOTAL_SUPPLY,
    slug,
    from,
    to,
    numberOfHolders)

  it('has proper headers', () => {
    const expectedHeaders = [
      'Date',
      'In Exchanges',
      'Outside Exchanges',
      'In Top Holders Total'
    ]
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('has positive balances', () => {
    const results = san.SAN_TOP_HOLDERS_PERCENT_OF_TOTAL_SUPPLY(slug, from, to, numberOfHolders)
    for (let i = 1; i < results.length; i++) {
      expect(results[i][1]).to.be.within(0, Infinity)
    }
  })

  it('returns a record per every day according to the given number of holders', () => {
    const results = san.SAN_TOP_HOLDERS_PERCENT_OF_TOTAL_SUPPLY(slug, from, to, numberOfHolders)
    if (results.length > 1) {
      for (let [index, day] of days.entries()) {
        expect(results[index + 1][0]).to.equal(formatDate(day))
      }
    }
  })

  it('returns a record per every day according to the default number of holders', () => {
    const results = san.SAN_TOP_HOLDERS_PERCENT_OF_TOTAL_SUPPLY(slug, from, to)
    if (results.length > 1) {
      for (let [index, day] of days.entries()) {
        expect(results[index + 1][0]).to.equal(formatDate(day))
      }
    }
  })
})
