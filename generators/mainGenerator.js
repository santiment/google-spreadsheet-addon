const path = require('path')
const fs = require('fs')
const fsExtra = require('fs-extra')

const OUTPUT_FILE = path.join(`${__dirname}`, '../src/generatedSheetFunctions.js')

const getMetricGenerator = require('./getMetricGenerator')
const generators = [ getMetricGenerator.generate() ]

function generate () {
  for (const generator of generators) { writeOutputFile_(generator) }
}

function writeOutputFile_ (content) {
  if (fs.existsSync(OUTPUT_FILE)) { fsExtra.removeSync(OUTPUT_FILE) }
  return fs.writeFileSync(OUTPUT_FILE, content)
}

generate()
