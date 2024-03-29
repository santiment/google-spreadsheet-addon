const { metricsList } = require('./getMetricFunctions')

const CURRENCY_DESCRIPTION = `
* @param {string} currency The metric is calculated using a currency of choice.
* Available currencies: (currencies)`

const TIMEBOUND_DESCRIPTION = `
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens/coins that have moved in the past number of years/days.`

const BALANCES_DESCRIPTION = `
* @param {string} balance Interval of amount of tokens. Available balance intervals are:
* "0-0.001",
* "0.001-0.01",
* "0.01-0.1",
* "0.1-1",
* "1-10",
* "10-100",
* "100-1k",
* "1k-10k",
* "10k-100k",
* "100k-1M",
* "1M-10M",
* "10M-100M",
* "100M-1B",
* "1B-inf",
* "total"`

const AGGREGATION_DESCRIPTION = `
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"`

const SOURCE_DESCRIPTION = `
* @param {string} source The source of mention counts, one of the following:
* "TELEGRAM_CHATS_OVERVIEW",
* "TELEGRAM_DISCUSSION_OVERVIEW",
* "TWITTER_CHATS_OVERVIEW",
* "REDDIT_COMMENTS_OVERVIEW",
* "TOTAL"`

const FUNDING_RATE_EXCHANGE_DESCRIPTION = `
* @param {string} fundingRateExchange The exchange platform, from which funding rates are fetched, BITMEX by default:
* "BITMEX"
* "BINANCE"`

const IGNORED_METRICS = [ // Aggregated not implemented for these metrics
  'amount_in_non_exchange_top_holders',
  'amount_in_exchange_top_holders',
  'amount_in_top_holders'
]

function generate () {
  let generatedDoc = '/* eslint-disable no-multi-spaces*/'
  for (const metric of metricsList) {
    if (IGNORED_METRICS.includes(metric.metric)) {
      continue
    }
    generatedDoc += generateFunctionString_(metric)
  }

  return generatedDoc
}

function generateFunctionString_ (metric) {
  metric.supportedCurrencies = metric.supportedCurrencies || []
  metric.sheetMetricName = metric.sheetMetricName || metric.metric
  metric.hasTimeBound = metric.hasTimeBound || false
  metric.supportedBalances = metric.supportedBalances || []
  metric.hasSource = metric.hasSource || false
  metric.hasFundingRatesExchange = metric.hasFundingRatesExchange || false

  let generatedString =
    fillTemplate(
      metric.metric,
      metric.sheetMetricName,
      metric.description,
      metric.returns,
      metric.supportedCurrencies,
      metric.hasTimeBound,
      metric.supportedBalances,
      metric.hasSource,
      metric.hasFundingRatesExchange
    )

  return generatedString
}

function fillTemplate (
  metric,
  sheetMetricName,
  description,
  returns,
  currency,
  timeBound,
  balance,
  source,
  hasFundingRatesExchange) {
  let [options, bonusDescription, functionArguments] = optionsGenerator_(currency, timeBound, balance, source, hasFundingRatesExchange)
  description = prepareDescription_(description)

  return `
/**
${description}
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)${bonusDescription}
* @returns {number} of aggregated ${returns}
* @customfunction
*/
function SAN_${sheetMetricName.toUpperCase()}_AGGREGATED (${functionArguments}) {
  return handleErrors_(aggregatedGetMetric_)(
    '${metric}',
    projectSlug,
    from,
    to,
    { ${options} }
  )
}

`
}

function optionsGenerator_ (supportedCurrencies, hasTimeBound, supportedBalances, hasSource, hasFundingRatesExchange) {
  let returnedValues = {
    description: [],
    arguments: ['projectSlug', 'from', 'to'],
    options: []
  }
  if (supportedCurrencies.length > 0) {
    returnedValues.description.push(
      CURRENCY_DESCRIPTION.replace('(currencies)', supportedCurrencies.join(', '))
    )
    returnedValues.arguments.push('currency')
    returnedValues.options.push('currency: currency')
  }

  if (hasTimeBound === true) {
    returnedValues.description.push(TIMEBOUND_DESCRIPTION)
    returnedValues.arguments.push('timeBound')
    returnedValues.options.push('timeBound: timeBound')
  }

  if (supportedBalances.length > 0) {
    returnedValues.description.push(BALANCES_DESCRIPTION)
    returnedValues.arguments.push('balance = \'total\'')
    returnedValues.options.push('balance: balance')
  }

  if (hasSource === true) {
    returnedValues.description.push(SOURCE_DESCRIPTION)
    returnedValues.arguments.push('source')
    returnedValues.options.push('source: source')
  }

  if (hasFundingRatesExchange === true) {
    returnedValues.description.push(FUNDING_RATE_EXCHANGE_DESCRIPTION)
    returnedValues.arguments.push('fundingRateExchange')
    returnedValues.options.push('fundingRateExchange: fundingRateExchange')
  }

  returnedValues.description.push(AGGREGATION_DESCRIPTION)
  returnedValues.arguments.push('aggregation = \'null\'')
  returnedValues.options.push('aggregation: aggregation')

  return [
    returnedValues.options.join(', '),
    returnedValues.description.join(''),
    returnedValues.arguments.join(', ')
  ]
}

function prepareDescription_ (description) {
  return description.map((el) => '* '.concat(el)).join('\n')
}

module.exports = {
  generate: generate,
  fillTemplate: fillTemplate
}
