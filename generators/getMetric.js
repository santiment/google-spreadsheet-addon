const path = require('path')
const fs = require('fs')
const metrics = require('./getMetricFunctions.js')
const fsExtra = require('fs-extra')

function generateGetMetric () {
  let generatedDoc = ''
  for (const object of metrics.metricsList) {
    generatedDoc += allTimeBoundTemplates(object)
  }
  let file = path.join(`${__dirname}`, `../src/getMetric.js`)
  if (fs.existsSync(file)) {
    fsExtra.removeSync(file)
  }
  return fs.writeFileSync(file, generatedDoc)
}

function allTimeBoundTemplates (object) {
  let generatedString = ''
  if (!('currency' in object)) {
    object.currency = ''
  }
  generatedString += fillTemplate(object.metric, object.description, object.currency)

  return generatedString
}

function fillTemplate (metric, description, currency) {
  if (currency !== '') {
    metric += ('_' + currency)
  }

  return `/**
* Gets the ${description}
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens/coins that have moved in the past number of years or days.
* @returns {number} returns ${description}.
* @customfunction
*/
function SAN_${metric.toUpperCase()} (projectSlug, from, to, timeBound) {
  return handleErrors_(getMetric_)('${metric}', projectSlug, from, to, timeBound)
}

`
}

module.exports = {
  generateGetMetric: generateGetMetric,
  fillTemplate: fillTemplate
}
