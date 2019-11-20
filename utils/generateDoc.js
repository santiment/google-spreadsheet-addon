const fs = require('fs')
const jsdoc2md = require('jsdoc-to-markdown')
const functionsList = require('./functionsList')

const outputFile = './doc/sheet_functions.md'

const functions = functionsList.fetch()
const output = jsdoc2md.renderSync({ data: functions })

fs.writeFileSync(outputFile, output)
