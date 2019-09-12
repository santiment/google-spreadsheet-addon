const path = require('path')
const fs = require('fs')
const { data, timeBound } = require('./generatorHelper.js')
const fsPromises = fs.promises

async function generateGetMetric () {
  return new Promise((resolve, reject) => {
    try {
      let generatedDoc = ''
      for (const object of data) {
        generatedDoc += allTimeBoundTemplates(object)
      }
      let file = path.join(`${__dirname}`, `../src/getMetric.js`)
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
  if (!('timeBoundSuffix' in object)) {
    object.timeBound = ['']
  }
  for (const timeBoundSuffix of timeBound) {
    generatedString += fillTemplate(object.metric, object.description, object.fiatCurrency, timeBoundSuffix)
  }
  return generatedString
}

function fillTemplate (metric, description, fiatCurrency, timeBoundSuffix) {
  if (!(fiatCurrency === '')) {
    fiatCurrency = '_' + fiatCurrency
  }
  if (!(timeBoundSuffix === '')) {
    timeBoundSuffix = '_' + timeBoundSuffix
  }

  return `/**
* ${description}
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @returns {number} absolute price change.
* @customfunction
*/
function SAN_${metric.toUpperCase()}${fiatCurrency.toUpperCase()}${timeBoundSuffix.toUpperCase()}(projectSlug, from, to) {
  return handleErrors_(getMetric)('${metric}${fiatCurrency}${timeBoundSuffix}', projectSlug, from, to)
}
`
}

module.exports = {
  generateGetMetric: generateGetMetric,
  fillTemplate: fillTemplate
}
