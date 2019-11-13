
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
* Returns NVT (Network-Value-to-Transactions-Ratio Daily Market Cap / Daily Token Circulation)
* Since Daily Transaction Volume gets rather noisy and easy to manipulate
* by transferring the same tokens through a couple of addresses repeatedly,
* it’s not an ideal measure of a network’s economic activity. That’s why we also
* offer another way to calculate NVT by using Daily Token Circulation.
* This method filters out excess transactions and provides a cleaner overview of a blockchain’s
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

