const fs = require('fs')
const jsdoc2md = require('jsdoc-to-markdown')
const functionsList = require('./functionsList')

const outputFile = './doc/sheet_functions.md'
const academyFile = './doc/academy_sheet_functions.md'

const functions = functionsList.fetch()
const output = jsdoc2md.renderSync({ data: functions })

const typeMap = {
  'projectSlug': '<code>string</code>',
  'from': '<code>date</code>',
  'to': '<code>date</code>',
  'currency': '<code>string</code>',
  'balance': '<code>string</code>',
  'timeBound': '<code>string</code>',
  'interval': '<code>string</code>',
  'aggregation': '<code>string</code>',
  'day': '<code>date</code>',
  'size': '<code>number</code>',
  'transactionType': '<code>string</code>',
  'limit': '<code>number</code>',
  'address': '<code>string</code>',
  'array': '<code>array</code>',
  'source': '<code>string</code>',
  'socialVolumeType': '<code>string</code>',
  'numberOfHolders': '<code>number</code>'
}

const numberFunctions = [
  'SAN_PRICE_PERCENT_CHANGE',
  'SAN_LATEST_PRICE',
  'SAN_DAILY_CLOSING_PRICE',
  'SAN_PRICE_ABSOLUTE_CHANGE'
]

function makeFunctionTemplate (fnInfo) {
  const params = fnInfo.params.map(
    param => param.name
  )
  let returnsType = ''
  if (fnInfo.name.includes('AGGREGATED') || numberFunctions.includes(fnInfo.name)) {
    returnsType = 'number'
  } else {
    returnsType = 'Array'
  }

  // Get the maximum parameter length, so that the whitespaces in the 'Param' column can be adjusted
  let maxParamLength = 0
  if (params.length !== 0) {
    maxParamLength = params.map(paramName => paramName.length).reduce(
      (acc, x) => {
        if (acc > x) { return acc } else { return x }
      }
    )
  }

  const paramInfos = fnInfo.params.map(
    paramObject => {
      const typeLength = 19
      const descriptionLength = 241

      const wsParamName = ' '.repeat(maxParamLength - paramObject.name.length)
      const wsParamType = ' '.repeat(typeLength - typeMap[paramObject.name].length)
      const wsParamDescription = ' '.repeat(descriptionLength - paramObject.description.length)
      return `| ${paramObject.name + wsParamName} | ${typeMap[paramObject.name] + wsParamType} | ${paramObject.description.split('\n').join(' ') + wsParamDescription} |
`
    }
  ).join('')

  if (maxParamLength === 0) {
    return `
## ${fnInfo.name}

##### ${fnInfo.name}() ⇒ <code>${returnsType}</code>

${fnInfo.description}

- **Kind**: global function
- **Returns**: <code>${returnsType}</code> - ${fnInfo.returns[0].description}
- **Customfunction**:    
`
  }

  let paramSpaces = ' '.repeat(1)
  // 5, because 'Param' is 5 chars long
  if (maxParamLength > 5) { paramSpaces = ' '.repeat(maxParamLength - 4) }

  let paramDashes = '-'.repeat(5)
  if (maxParamLength > 5) { paramDashes = '-'.repeat(maxParamLength) }

  return `
## ${fnInfo.name}

##### ${fnInfo.name}(${params.join(', ')}) ⇒ <code>${returnsType}</code>

${fnInfo.description}

- **Kind**: global function
- **Returns**: <code>${returnsType}</code> - ${fnInfo.returns[0].description}
- **Customfunction**:

| Param${paramSpaces}| Type                | Description                                                                                                                                                                            |
| ${paramDashes} | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
${paramInfos}`
}

const today = new Date()
const allFnInfos = `---
title: Functions we offer
author: Santiment Team
date: ${today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()}
---
` + functions.map(fn => makeFunctionTemplate(fn)).reduce(
  (acc, x) => acc + x
)

fs.writeFileSync(outputFile, output)
fs.writeFileSync(academyFile, allFnInfos)
