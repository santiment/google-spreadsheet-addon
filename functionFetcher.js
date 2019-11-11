const jsdoc2md = require('jsdoc-to-markdown')

const inputFiles = ['./src/sheetFunctions.js', './src/generatedSheetFunctions.js']

let doc = jsdoc2md.getTemplateDataSync({ files: inputFiles })
  .sort(function (a, b) { return a.name.localeCompare(b.name) })
  .map(x => x.name)

module.exports = {
  doc: doc
}
