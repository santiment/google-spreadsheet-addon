
/**
* Returns the daily average marketcap.
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated using a currency of choice.
* Available currencies: USD
* @returns {Array} of daily average marketcaps.
* @customfunction
*/
function SAN_DAILY_AVG_MARKETCAP (projectSlug, from, to, currency) {
  return handleErrors_(getMetric_)('daily_avg_marketcap', projectSlug, from, to, { currency: currency })
}


/**
* Returns the daily closing marketcap.
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated using a currency of choice.
* Available currencies: USD
* @returns {Array} of daily closing marketcaps.
* @customfunction
*/
function SAN_DAILY_CLOSING_MARKETCAP (projectSlug, from, to, currency) {
  return handleErrors_(getMetric_)('daily_closing_marketcap', projectSlug, from, to, { currency: currency })
}


/**
* Returns the active addresses for the specified asset, during a given time interval.
* Active Addresses" refers to the number of unique addresses that
* participated in transactions on a blockchain.
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @returns {Array} of daily active addresses numbers.
* @customfunction
*/
function SAN_ACTIVE_ADDRESSES (projectSlug, from, to) {
  return handleErrors_(getMetric_)('daily_active_addresses', projectSlug, from, to, {  })
}


/**
* Returns the mean realized price.
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated using a currency of choice.
* Available currencies: USD
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens/coins that have moved in the past number of years or days.
* @returns {Array} of mean realized prices.
* @customfunction
*/
function SAN_MEAN_REALIZED_PRICE (projectSlug, from, to, currency, timeBound) {
  return handleErrors_(getMetric_)('mean_realized_price', projectSlug, from, to, { currency: currency, timeBound: timeBound })
}


/**
* Returns the difference between MVRV.
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated using a currency of choice.
* Available currencies: USD
* @returns {Array} of MVRV differences.
* @customfunction
*/
function SAN_MVRV_LONG_SHORT_DIFF (projectSlug, from, to, currency) {
  return handleErrors_(getMetric_)('mvrv_long_short_diff', projectSlug, from, to, { currency: currency })
}


/**
* Returns MVRV(Market-Value-to-Realized-Value).
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated using a currency of choice.
* Available currencies: USD
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens/coins that have moved in the past number of years or days.
* @returns {Array} of MVRV ratios.
* @customfunction
*/
function SAN_MVRV_RATIO (projectSlug, from, to, currency, timeBound) {
  return handleErrors_(getMetric_)('mvrv', projectSlug, from, to, { currency: currency, timeBound: timeBound })
}


/**
* Returns token circulation for a given slug and time interval.
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens/coins that have moved in the past number of years or days.
* @returns {Array} of token circulation values.
* @customfunction
*/
function SAN_TOKEN_CIRCULATION (projectSlug, from, to, timeBound) {
  return handleErrors_(getMetric_)('circulation', projectSlug, from, to, { timeBound: timeBound })
}


/**
* Returns the token's mean age.
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @returns {Array} of mean age values.
* @customfunction
*/
function SAN_MEAN_AGE (projectSlug, from, to) {
  return handleErrors_(getMetric_)('mean_age', projectSlug, from, to, {  })
}


/**
* Returns Realized value - sum of the acquisition costs of an asset located in a wallet.
* The realized value across the whole network is computed by summing the realized values
* of all wallets holding tokens at the moment.
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated using a currency of choice.
* Available currencies: USD
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens/coins that have moved in the past number of years or days.
* @returns {Array} of realized values.
* @customfunction
*/
function SAN_REALIZED_VALUE (projectSlug, from, to, currency, timeBound) {
  return handleErrors_(getMetric_)('realized_value', projectSlug, from, to, { currency: currency, timeBound: timeBound })
}


/**
* Returns the token's velocity.
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @returns {Array} of token velocity values.
* @customfunction
*/
function SAN_VELOCITY (projectSlug, from, to) {
  return handleErrors_(getMetric_)('velocity', projectSlug, from, to, {  })
}


/**
* Gets the transaction volume for the specified asset, during a given time interval.
* Transaction Volume" refers to the total number of tokens within all
* transfers that have occurred on a blockchain.
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @returns {Array} of transaction volumes.
* @customfunction
*/
function SAN_TRANSACTION_VOLUME (projectSlug, from, to) {
  return handleErrors_(getMetric_)('transaction_volume', projectSlug, from, to, {  })
}


/**
* Returns the exchange inflow.
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @returns {Array} of exchange inflows.
* @customfunction
*/
function SAN_EXCHANGE_INFLOW (projectSlug, from, to) {
  return handleErrors_(getMetric_)('exchange_inflow', projectSlug, from, to, {  })
}


/**
* Returns the exchange outflow.
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @returns {Array} of exchange outflows.
* @customfunction
*/
function SAN_EXCHANGE_OUTFLOW (projectSlug, from, to) {
  return handleErrors_(getMetric_)('exchange_outflow', projectSlug, from, to, {  })
}


/**
* Returns the exchange balance.
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @returns {Array} of exchange balances.
* @customfunction
*/
function SAN_EXCHANGE_BALANCE (projectSlug, from, to) {
  return handleErrors_(getMetric_)('exchange_balance', projectSlug, from, to, {  })
}


/**
* Returns the token's age destroyed
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @returns {Array} of age destroyed values.
* @customfunction
*/
function SAN_AGE_DESTROYED (projectSlug, from, to) {
  return handleErrors_(getMetric_)('age_destroyed', projectSlug, from, to, {  })
}


/**
* Returns NVT (Network-Value-to-Transactions-Ratio Daily Market Cap / Daily Transaction Volume)
* Since Daily Transaction Volume gets rather noisy and easy to manipulate
* by transferring the same tokens through couple of addresses over and over again,
* it’s not an ideal measure of a network’s economic activity.
* That’s why we calculate NVT using Daily Trx Volume, but also by using Daily Token Circulation instead,
* which filters out excess transactions and provides a cleaner overview of a blockchain’s
* daily transaction throughput.
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @returns {Array} of NVT ratios
* @customfunction
*/
function SAN_NVT_RATIO (projectSlug, from, to) {
  return handleErrors_(getMetric_)('nvt', projectSlug, from, to, {  })
}

/**
 * Returns all of the available functions, which SanSheets has to offer.
 * @returns {Array} all functions in the addon.
 * @customfunction
 */
function SAN_FUNCTIONS () {
  var listOfFunctions = [
    'SAN_ACTIVE_ADDRESSES',
    'SAN_ACTIVE_DEPOSITS',
    'SAN_AGE_DESTROYED',
    'SAN_ALL_PROJECTS',
    'SAN_DAILY_AVG_MARKETCAP',
    'SAN_DAILY_CLOSING_MARKETCAP',
    'SAN_DAILY_CLOSING_PRICE',
    'SAN_DEV_ACTIVITY',
    'SAN_EMERGING_TRENDS',
    'SAN_ERC20_PROJECTS',
    'SAN_ETH_SPENT_OVER_TIME',
    'SAN_ETH_TOP_TRANSACTIONS',
    'SAN_EXCHANGE_BALANCE',
    'SAN_EXCHANGE_FUNDS_FLOW',
    'SAN_EXCHANGE_INFLOW',
    'SAN_EXCHANGE_OUTFLOW',
    'SAN_FUNCTIONS',
    'SAN_GAS_USED',
    'SAN_GITHUB_ACTIVITY',
    'SAN_HISTORICAL_BALANCE',
    'SAN_HISTORY_TWITTER_DATA',
    'SAN_LATEST_PRICE',
    'SAN_MEAN_AGE',
    'SAN_MEAN_REALIZED_PRICE',
    'SAN_MINERS_BALANCE',
    'SAN_MINING_POOLS_DISTRIBUTION',
    'SAN_MVRV_LONG_SHORT_DIFF',
    'SAN_MVRV_RATIO',
    'SAN_NETWORK_GROWTH',
    'SAN_NEWS',
    'SAN_NVT_RATIO',
    'SAN_OHLC',
    'SAN_PRICE_ABSOLUTE_CHANGE',
    'SAN_PRICE_PERCENT_CHANGE',
    'SAN_PRICE_VOLUME_DIFF',
    'SAN_PRICES',
    'SAN_PROJECT_FUNDAMENTALS',
    'SAN_PROJECT_SOCIAL_DATA',
    'SAN_REALIZED_VALUE',
    'SAN_SOCIAL_DOMINANCE',
    'SAN_SOCIAL_VOLUME',
    'SAN_SOCIAL_VOLUME_PROJECTS',
    'SAN_TOKEN_AGE_CONSUMED',
    'SAN_TOKEN_CIRCULATION',
    'SAN_TOKEN_TOP_TRANSACTIONS',
    'SAN_TOP_HOLDERS_PERCENT_OF_TOTAL_SUPPLY',
    'SAN_TRANSACTION_VOLUME',
    'SAN_VELOCITY'
  ]
  return listOfFunctions
}
