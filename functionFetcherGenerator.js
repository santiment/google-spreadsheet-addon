const jsdoc2md = require('jsdoc-to-markdown')
const inputFiles = ['./src/sheetFunctions.js']

function generate () {
  let listOfFunctions = []
  for (let element of functions_()) {
    listOfFunctions.push(`    '${element}'`)
  }
  let generatedListOfFunctions = `[\n` + listOfFunctions.join(`,\n`) + `\n  ]`
  let functionString =
`/**
 * Returns all of the available functions, which SanSheets has to offer.
 * @returns {Array} all functions in the addon.
 * @customfunction
 */
function SAN_FUNCTIONS () {
  var listOfFunctions = ${generatedListOfFunctions}
  return listOfFunctions
}
`
  return functionString
}

function functions_ () {
  let doc = jsdoc2md.getTemplateDataSync({ files: inputFiles })
    .sort(function (a, b) { return a.name.localeCompare(b.name) })
    .map(x => x.name)

  return doc
}

module.exports = {
  generate: generate
}
