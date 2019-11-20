const path = require('path')
const fs = require('fs')
const fsExtra = require('fs-extra')

const OUTPUT_FILE = path.join(`${__dirname}`, '../src/generatedSheetFunctions.js')

const getMetricGenerator = require('./getMetricGenerator')
const functionFetcherGenerator = require('./functionFetcherGenerator')
const generators = [ getMetricGenerator.generate() + functionFetcherGenerator.generate() ]

function generate () {
  if (fs.existsSync(OUTPUT_FILE)) { fsExtra.removeSync(OUTPUT_FILE) }
  for (const generator of generators) { fs.writeFileSync(OUTPUT_FILE, generator) }
}

generate()
