const { metricsList } = require('./getMetricFunctions')

const CURRENCY_DESCRIPTION = `
* @param {string} currency The metric is calculated using a currency of choice.
* Available currencies: (currencies)`

const TIMEBOUND_DESCRIPTION = `
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens/coins that have moved in the past number of years or days.`

const INTERVAL_DESCRIPTION = `
* @param {string} interval The resolution with which the data is fetched. Example: "5m"`

function generate () {
  let generatedDoc = '/* eslint-disable no-multi-spaces*/'
  for (const metric of metricsList) {
    generatedDoc += generateFunctionString_(metric)
  }

  return generatedDoc
}

function generateFunctionString_ (metric) {
  metric.supportedCurrencies = metric.supportedCurrencies || []
  metric.sheetMetricName = metric.sheetMetricName || metric.metric
  metric.hasTimeBound = metric.hasTimeBound || false

  let generatedString =
    fillTemplate(
      metric.metric,
      metric.sheetMetricName,
      metric.description,
      metric.returns,
      metric.supportedCurrencies,
      metric.hasTimeBound
    )

  return generatedString
}

function fillTemplate (metric, sheetMetricName, description, returns, currency, timeBound) {
  let [options, bonusDescription, functionArguments] = optionsGenerator_(currency, timeBound)
  description = prepareDescription_(description)

  return `
/**
${description}
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)${bonusDescription}
* @returns {Array} of ${returns}
* @customfunction
*/
function SAN_${sheetMetricName.toUpperCase()} (${functionArguments}) {
  return handleErrors_(getMetric_)(
    '${metric}',
    projectSlug,
    from,
    to,
    { ${options} }
  )
}

`
}

function optionsGenerator_ (supportedCurrencies, hasTimeBound) {
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

  returnedValues.description.push(INTERVAL_DESCRIPTION)
  returnedValues.arguments.push('interval = \'1d\'')
  returnedValues.options.push('interval: interval')

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
