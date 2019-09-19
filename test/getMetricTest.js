const { generateGetMetric, fillTemplate } = require('../generators/getMetric.js')
const chai = require('chai')
const expect = chai.expect
const fs = require('fs')
const path = require('path')

const { testFieldTypes } = require('./helper.js')

const {
  testHandlesNullData,
  assertNumberOfRecords
} = require('./integration_helper.js')

const {
  slug,
  from,
  to,
  days,
  numberOfDays,
  formatDate
} = require('./setup.js')

describe('getMetric', () => {
  it('returns fills the template accordingly', () => {
    let response = fillTemplate('test_metric', 'test description', 'usd', '1d')
    let expectedResult = `/**
* test description
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @returns {number} absolute price change.
* @customfunction
*/
function SAN_TEST_METRIC_USD_1D (projectSlug, from, to) {
  return handleErrors_(getMetric_)('test_metric_usd_1d', projectSlug, from, to)
}
`
    expect(response).to.deep.eq(expectedResult)
  })

  it('creates and writes to a file', async () => {
    await generateGetMetric()
    const exists = fs.existsSync(path.join(`${__dirname}`, `../src/getMetric.js`))
    expect(exists).to.deep.eq(true)
  })
})

describe('daily active addresses metric', () => {
  generateGetMetric()
  const expected = {
    date: 'string',
    value: 'number'
  }

  const response = san.SAN_DAILY_ACTIVE_ADDRESSES(slug, from, to)
  const headers = response[0]
  const results = response[1]
  testFieldTypes(results, expected)
  testHandlesNullData(
    'fetchGetMetric',
    san.SAN_DAILY_ACTIVE_ADDRESSES,
    slug,
    from,
    to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Value']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const results = san.SAN_DAILY_ACTIVE_ADDRESSES(slug, from, to)

    assertNumberOfRecords(results, numberOfDays)

    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })
})
