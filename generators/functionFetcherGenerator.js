const functionsList = require('../utils/functionsList')

function generate () {
  let listOfFunctions = []
  for (let element of functionNames_()) {
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

function functionNames_ () {
  return functionsList.fetch().map(f => f.name)
}

module.exports = {
  generate: generate
}
