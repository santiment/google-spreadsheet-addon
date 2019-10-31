const jsdoc2md = require('jsdoc-to-markdown')
const fs = require('fs')

const inputFiles = ['./src/sheetFunctions.js', './src/generatedSheetFunctions.js']
const outputFile = './doc/sheet_functions.md'

const doc = jsdoc2md.getTemplateDataSync({ files: inputFiles })
doc.sort(function(a, b) { return a.name.localeCompare(b.name) })
const output = jsdoc2md.renderSync({ data: doc })

fs.writeFileSync(outputFile, output)
