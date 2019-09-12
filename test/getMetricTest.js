const { generateGetMetric, fillTemplate } = require('../generators/getMetric.js')
const chai = require('chai')
const expect = chai.expect
const fs = require('fs')
const path = require('path')

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
function SAN_TEST_METRIC_USD_1D(projectSlug, from, to) {
  return handleErrors_(getMetric)('test_metric_usd_1d', projectSlug, from, to)
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
