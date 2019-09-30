const path = require('path')
const fs = require('fs')
const { metricsList } = require('./getMetricFunctions')
const fsExtra = require('fs-extra')

const CURRENCY_DESCRIPTION = `
* @param {string} currency The metric is calculated, using a currency of choice.
* Available currencies: USD`

const TIMEBOUND_DESCRIPTION = `
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens/coins that have moved in the past number of years or days.`

function generateGetMetric () {
  let generatedDoc = ''
  for (const metric of metricsList) {
    generatedDoc += generateFunctionString(metric)
  }
  let file = path.join(`${__dirname}`, `../src/getMetric.js`)
  if (fs.existsSync(file)) {
    fsExtra.removeSync(file)
  }
  return fs.writeFileSync(file, generatedDoc)
}

function generateFunctionString (metric) {
  metric.hasCurrency = metric.hasCurrency || false
  metric.sheetMetricName = metric.sheetMetricName || metric.metric
  metric.hasTimeBound = metric.hasTimeBound || false
  let generatedString =
    fillTemplate(metric.metric, metric.sheetMetricName, metric.description, metric.hasCurrency, metric.hasTimeBound)

  return generatedString
}

function fillTemplate (metric, sheetMetricName, description, currency, timeBound) {
  let [options, bonusDescription, functionArguments] =
    optionsGenerator(currency, timeBound)

  return `/**
* Gets ${description}
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)${bonusDescription}
* @returns {number} returns ${description}.
* @customfunction
*/
function SAN_${sheetMetricName.toUpperCase()} (${functionArguments}) {
  return handleErrors_(getMetric_)('${metric}', projectSlug, from, to, { ${options} })
}

`
}

function optionsGenerator (hasCurrency, hasTimeBound) {
  let returnedValues = {
    description: [],
    arguments: ['projectSlug', 'from', 'to'],
    options: []
  }
  if (hasCurrency === true) {
    returnedValues.description.push(CURRENCY_DESCRIPTION)
    returnedValues.arguments.push('currency')
    returnedValues.options.push('currency: currency')
  }

  if (hasTimeBound === true) {
    returnedValues.description.push(TIMEBOUND_DESCRIPTION)
    returnedValues.arguments.push('timeBound')
    returnedValues.options.push('timeBound: timeBound')
  }

  return [
    returnedValues.options.join(', '),
    returnedValues.description.join(''),
    returnedValues.arguments.join(', ')
  ]
}

module.exports = {
  generateGetMetric: generateGetMetric,
  fillTemplate: fillTemplate
}
