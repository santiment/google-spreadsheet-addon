const path = require('path')
const fs = require('fs')
const data = require('./getMetricFunctions.js')
const fsPromises = fs.promises
const fsExtra = require('fs-extra')

async function generateGetMetric () {
  return new Promise((resolve, reject) => {
    try {
      let generatedDoc = ''
      for (const object of data.data) {
        generatedDoc += allTimeBoundTemplates(object)
      }
      let file = path.join(`${__dirname}`, `../src/getMetric.js`)
      if (fs.existsSync(file)) {
        fsExtra.removeSync(file)
      }
      resolve(fsPromises.writeFile(file, generatedDoc))
    } catch (error) {
      reject(error)
    }
  })
}

function allTimeBoundTemplates (object) {
  let generatedString = ''
  if (!('fiatCurrency' in object)) {
    object.fiatCurrency = ''
  }
  generatedString += fillTemplate(object.metric, object.description, object.fiatCurrency)

  return generatedString
}

function fillTemplate (metric, description, fiatCurrency) {
  if (!(fiatCurrency === '')) {
    fiatCurrency = '_' + fiatCurrency
  }

  return `/**
* Gets the ${description}
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens and coins that have moved in the past number of years or days.
* @returns {number} returns ${description}.
* @customfunction
*/
function SAN_${metric.toUpperCase()}${fiatCurrency.toUpperCase()} (projectSlug, from, to, timeBound) {
  return handleErrors_(getMetric_)('${metric}${fiatCurrency}', projectSlug, from, to, timeBound)
}

`
}

for (let i = 0; i < process.argv.length; i++) {
  if (process.argv[i] === 'generateGetMetric') {
    generateGetMetric()
  }
}

module.exports = {
  generateGetMetric: generateGetMetric,
  fillTemplate: fillTemplate
}
