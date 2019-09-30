const { fillTemplate } = require('../generators/getMetric.js')
const chai = require('chai')
const expect = chai.expect

describe('getMetric', () => {
  it('returns fills the template accordingly when there is a timebound', () => {
    let response = fillTemplate('test_metric', 'test_metric_sheet_name', 'test description', true, true)
    let expectedResult = `/**
* Gets test description
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated, using a currency of choice.
* Available currencies: USD
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens/coins that have moved in the past number of years or days.
* @returns {number} returns test description.
* @customfunction
*/
function SAN_TEST_METRIC_SHEET_NAME (projectSlug, from, to, currency, timeBound) {
  return handleErrors_(getMetric_)('test_metric', projectSlug, from, to, { currency: currency, timeBound: timeBound })
}

`
    expect(response).to.deep.eq(expectedResult)
  })
  it('returns fills the template accordingly when there is no timebound', () => {
    let response = fillTemplate('test_metric', 'test_metric_sheet_name', 'test description')
    let expectedResult = `/**
* Gets test description
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @returns {number} returns test description.
* @customfunction
*/
function SAN_TEST_METRIC_SHEET_NAME (projectSlug, from, to) {
  return handleErrors_(getMetric_)('test_metric', projectSlug, from, to, {  })
}

`
    expect(response).to.deep.eq(expectedResult)
  })
})
