const jsdoc2md = require('jsdoc-to-markdown')

const inputFiles = ['./src/sheetFunctions.js', './src/generatedSheetFunctions.js']

function fetch () {
  const doc = jsdoc2md.getTemplateDataSync({ files: inputFiles })
  return doc.sort(function (a, b) { return a.name.localeCompare(b.name) })
}

function fetchOnlyGenerated () {
  const doc = jsdoc2md.getTemplateDataSync({ files: inputFiles[1] })
  return doc.sort(function (a, b) { return a.name.localeCompare(b.name) })
}

module.exports = {
  fetch: fetch,
  fetchOnlyGenerated: fetchOnlyGenerated
}
