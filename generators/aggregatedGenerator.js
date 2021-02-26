const { metricsList } = require('./getMetricFunctions')

const CURRENCY_DESCRIPTION = `
* @param {string} currency The metric is calculated using a currency of choice.
* Available currencies: (currencies)`

const TIMEBOUND_DESCRIPTION = `
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens/coins that have moved in the past number of years/days.`

const BALANCES_DESCRIPTION = `
* @param {string} balance An interval of amount of tokens, which the holders behold. Example: "0-0.001"`

const AGGREGATION_DESCRIPTION = `
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
`

const IGNORED_METRICS = [ // Aggregated not implemented for these metrics
  'amount_in_non_exchange_top_holders',
  'amount_in_exchange_top_holders',
  'amount_in_top_holders'
]

function generate () {
  let generatedDoc = '/* eslint-disable no-multi-spaces*/'
  for (const metric of metricsList) {
    if (IGNORED_METRICS.includes(metric.metric)) {
      continue
    }
    generatedDoc += generateFunctionString_(metric)
  }

  return generatedDoc
}

function generateFunctionString_ (metric) {
  metric.supportedCurrencies = metric.supportedCurrencies || []
  metric.sheetMetricName = metric.sheetMetricName || metric.metric
  metric.hasTimeBound = metric.hasTimeBound || false
  metric.supportedBalances = metric.supportedBalances || []

  let generatedString =
    fillTemplate(
      metric.metric,
      metric.sheetMetricName,
      metric.description,
      metric.returns,
      metric.supportedCurrencies,
      metric.hasTimeBound,
      metric.supportedBalances
    )

  return generatedString
}

function fillTemplate (metric, sheetMetricName, description, returns, currency, timeBound, balance) {
  let [options, bonusDescription, functionArguments] = optionsGenerator_(currency, timeBound, balance)
  description = prepareDescription_(description)

  return `
/**
${description}
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)${bonusDescription}
* @returns {number} of ${returns}
* This number represents an aggregation of the timeseries data for the same metric.
* @customfunction
*/
function SAN_${sheetMetricName.toUpperCase()}_AGGREGATED (${functionArguments}) {
  return handleErrors_(aggregatedGetMetric_)(
    '${metric}',
    projectSlug,
    from,
    to,
    { ${options} }
  )
}

`
}

function optionsGenerator_ (supportedCurrencies, hasTimeBound, supportedBalances) {
  let returnedValues = {
    description: [],
    arguments: ['projectSlug', 'from', 'to'],
    options: []
  }
  if (supportedCurrencies.length > 0) {
    returnedValues.description.push(
      CURRENCY_DESCRIPTION.replace('(currencies)', supportedCurrencies.join(', '))
    )
    returnedValues.arguments.push('currency')
    returnedValues.options.push('currency: currency')
  }

  if (hasTimeBound === true) {
    returnedValues.description.push(TIMEBOUND_DESCRIPTION)
    returnedValues.arguments.push('timeBound')
    returnedValues.options.push('timeBound: timeBound')
  }

  if (supportedBalances.length > 0) {
    returnedValues.description.push(BALANCES_DESCRIPTION)
    returnedValues.arguments.push('balance = \'total\'')
    returnedValues.options.push('balance: balance')
  }

  returnedValues.description.push(AGGREGATION_DESCRIPTION)
  returnedValues.arguments.push('aggregation = \'null\'')
  returnedValues.options.push('aggregation: aggregation')

  return [
    returnedValues.options.join(', '),
    returnedValues.description.join(''),
    returnedValues.arguments.join(', ')
  ]
}

function prepareDescription_ (description) {
  return description.map((el) => '* '.concat(el)).join('\n')
}

module.exports = {
  generate: generate,
  fillTemplate: fillTemplate
}
