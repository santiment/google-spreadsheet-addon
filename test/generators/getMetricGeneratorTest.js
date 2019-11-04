require('../helper.js')
const { fillTemplate } = require('../../generators/getMetricGenerator.js')

describe('getMetric', () => {
  it('fills the template when there is a currency and timebound', () => {
    let response =
      fillTemplate(
        'test_metric',
        'test_metric_sheet_name',
        ['Returns test description.'],
        'of test returns.',
        ['USD'],
        true
      )

    let expectedResult =
`
/**
* Returns test description.
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated using a currency of choice.
* Available currencies: USD
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens/coins that have moved in the past number of years or days.
* @returns {Array} of test returns.
* @customfunction
*/
function SAN_TEST_METRIC_SHEET_NAME (projectSlug, from, to, currency, timeBound) {
  return handleErrors_(getMetric_)('test_metric', projectSlug, from, to, { currency: currency, timeBound: timeBound })
}

`
    expect(response).to.eq(expectedResult)
  })
  it('fills the template when there is no currency and no timebound', () => {
    let response =
      fillTemplate(
        'test_metric',
        'test_metric_sheet_name',
        ['Returns test description.'],
        'of test returns.',
        [],
        false
      )

    let expectedResult =
`
/**
* Returns test description.
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @returns {Array} of test returns.
* @customfunction
*/
function SAN_TEST_METRIC_SHEET_NAME (projectSlug, from, to) {
  return handleErrors_(getMetric_)('test_metric', projectSlug, from, to, {  })
}

`
    expect(response).to.deep.eq(expectedResult)
  })

  it('fills the template when there is a currency, but no timebound', () => {
    let response =
      fillTemplate(
        'test_metric',
        'test_metric_sheet_name',
        ['Returns test description.'],
        'of test returns.',
        ['USD'],
        false
      )

    let expectedResult =
`
/**
* Returns test description.
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated using a currency of choice.
* Available currencies: USD
* @returns {Array} of test returns.
* @customfunction
*/
function SAN_TEST_METRIC_SHEET_NAME (projectSlug, from, to, currency) {
  return handleErrors_(getMetric_)('test_metric', projectSlug, from, to, { currency: currency })
}

`
    expect(response).to.deep.eq(expectedResult)
  })
  it('fills the template when there is a timebound, but no currency', () => {
    let response =
      fillTemplate(
        'test_metric',
        'test_metric_sheet_name',
        ['Returns test description.'],
        'of test returns.',
        [],
        true
      )

    let expectedResult =
`
/**
* Returns test description.
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens/coins that have moved in the past number of years or days.
* @returns {Array} of test returns.
* @customfunction
*/
function SAN_TEST_METRIC_SHEET_NAME (projectSlug, from, to, timeBound) {
  return handleErrors_(getMetric_)('test_metric', projectSlug, from, to, { timeBound: timeBound })
}

`
    expect(response).to.deep.eq(expectedResult)
  })
})
