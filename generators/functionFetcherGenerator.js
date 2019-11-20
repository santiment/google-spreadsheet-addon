const functionsList = require('../utils/functionsList')

function generate () {
  const functionNames = functionsList.fetch().map(f => `    '${f.name}'`).join(`,\n`)

  let functionNamesString =
`/**
 * Returns all available functions.
 * @returns {Array} of function names.
 * @customfunction
 */
function SAN_FUNCTIONS () {
  return [
${functionNames}
  ]
}
`
  return functionNamesString
}

module.exports = {
  generate: generate
}
