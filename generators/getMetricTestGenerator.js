const path = require('path')
const fs = require('fs')
const fsExtra = require('fs-extra')
const functionsList = require('../utils/functionsList')

const LIST_OF_DAILY_METRICS = [
  'SAN_ACTIVE_ADDRESSES',
  'SAN_ACTIVE_DEPOSITS',
  'SAN_DAILY_AVG_MARKETCAP',
  'SAN_DAILY_CLOSING_MARKETCAP',
  'SAN_EXCHANGE_PERCENT_OF_SUPPLY',
  'SAN_MARKETCAP',
  'SAN_MEAN_AGE',
  'SAN_MEAN_DOLLAR_INVESTED_AGE',
  'SAN_MEAN_REALIZED_PRICE',
  'SAN_MVRV_LONG_SHORT_DIFF',
  'SAN_MVRV_RATIO',
  'SAN_NETWORK_GROWTH',
  'SAN_NVT_RATIO',
  'SAN_PRICE',
  'SAN_REALIZED_VALUE',
  'SAN_TOKEN_CIRCULATION',
  'SAN_TOP_HOLDERS_HELD_OFF_EXCHANGE',
  'SAN_TOP_HOLDERS_HELD_ON_EXCHANGE',
  'SAN_TOP_HOLDERS_HELD_OVERALL',
  'SAN_VELOCITY',
  'SAN_WEIGHTED_SOCIAL_SENTIMENT',
  'SAN_WHALE_TRANSACTION_COUNT'
]

function buildGetMetricTestTemplate (functionName) {
  if (functionName.name.includes('AGGREGATED')) {
    return `
require('../support/helper.js')
const { testHandlesNullData } = require('../support/integrationHelper.js')
const { slug, from, to } = require('../support/setup.js')

describe('${functionName.name}', () => {
  it('returns a number', () => {
    const response = san.${functionName.name}(slug, from, to)
    expect(response).to.be.a('number')
  })
  testHandlesNullData('fetchAggregatedGetMetric', san.${functionName.name}, slug, from, to)
})
`
  }
  let hourTest = ``
  let numberOfHours = ``
  if (!LIST_OF_DAILY_METRICS.includes(functionName.name)) {
    numberOfHours = `, numberOfHours`
    hourTest = `

  it('returns a record per hour', () => {
    const addresses = san.${functionName.name}(slug, from, to, '1h')
    assertNumberOfRecords(addresses, numberOfHours)
  })`
  }

  return `
const { testFieldTypes } = require('../support/helper.js')
const { testHandlesNullData, assertNumberOfRecords, assertDaysMatch } = require('../support/integrationHelper.js')
const { slug, from, to, numberOfDays, days${numberOfHours} } = require('../support/setup.js')

describe('${functionName.name}', () => {
  const expected = {
    date: 'string',
    value: 'number'
  }

  const response = san.${functionName.name}(slug, from, to)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHandlesNullData('fetchGetMetric', san.${functionName.name}, slug, from, to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Value']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const results = san.${functionName.name}(slug, from, to)

    assertNumberOfRecords(results, numberOfDays)

    assertDaysMatch(results, days)
  })${hourTest}
})
`
}

function generateFileName (functionName) {
  const newName = functionName.name.split('_').map(
    function (str) {
      str = str.toLowerCase()
      str = str[0].toUpperCase() + str.substr(1)
      return str
    }
  )
  newName.shift()

  return newName.join('')
}

const IGNORED_METRICS = [
  'SAN_FUNCTIONS',
  'SAN_BITMEX_PERPETUAL_OPEN_INTEREST',
  'SAN_BITMEX_PERPETUAL_CONTRACT_FUNDING_RATE',
  'SAN_SOCIAL_VOLUME',
  'SAN_HOLDERS_DISTRIBUTION',
  'SAN_HOLDERS_DISTRIBUTION_COMBINED_BALANCE'
]

function generate () {
  const functions = functionsList.fetchOnlyGenerated()
  functions.forEach(
    function (fn) {
      if (IGNORED_METRICS.includes(fn.name)) {
        return
      }
      const template = buildGetMetricTestTemplate(fn)
      const fileName = generateFileName(fn)
      const OUTPUT_FILE = path.join(`${__dirname}`, `../test/integration/san${fileName}Test.js`)
      if (fs.existsSync(OUTPUT_FILE)) { fsExtra.removeSync(OUTPUT_FILE) }
      fs.writeFileSync(OUTPUT_FILE, template)
    }
  )
}

generate()
