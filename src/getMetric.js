/**
* Gets the daily average marketcap
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated, using a currency of choice.
* Available currencies: USD
* @returns {number} returns the daily average marketcap.
* @customfunction
*/
function SAN_DAILY_AVG_MARKETCAP (projectSlug, from, to, currency) {
  return handleErrors_(getMetric_)('daily_avg_marketcap', projectSlug, from, to, { currency: currency })
}

/**
* Gets the daily closing marketcap
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated, using a currency of choice.
* Available currencies: USD
* @returns {number} returns the daily closing marketcap.
* @customfunction
*/
function SAN_DAILY_CLOSING_MARKETCAP (projectSlug, from, to, currency) {
  return handleErrors_(getMetric_)('daily_closing_marketcap', projectSlug, from, to, { currency: currency })
}

/**
* Gets the daily active addresses
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @returns {number} returns the daily active addresses.
* @customfunction
*/
function SAN_ACTIVE_ADDRESSES (projectSlug, from, to) {
  return handleErrors_(getMetric_)('daily_active_addresses', projectSlug, from, to, {  })
}

/**
* Gets the mean realised price
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated, using a currency of choice.
* Available currencies: USD
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens/coins that have moved in the past number of years or days.
* @returns {number} returns the mean realised price.
* @customfunction
*/
function SAN_MEAN_REALIZED_PRICE (projectSlug, from, to, currency, timeBound) {
  return handleErrors_(getMetric_)('mean_realized_price', projectSlug, from, to, { currency: currency, timeBound: timeBound })
}

/**
* Gets the difference between MVRV
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated, using a currency of choice.
* Available currencies: USD
* @returns {number} returns the difference between MVRV.
* @customfunction
*/
function SAN_MVRV_LONG_SHORT_DIFF (projectSlug, from, to, currency) {
  return handleErrors_(getMetric_)('mvrv_long_short_diff', projectSlug, from, to, { currency: currency })
}

/**
* Gets the MVRV
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated, using a currency of choice.
* Available currencies: USD
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens/coins that have moved in the past number of years or days.
* @returns {number} returns the MVRV.
* @customfunction
*/
function SAN_MVRV_RATIO (projectSlug, from, to, currency, timeBound) {
  return handleErrors_(getMetric_)('mvrv', projectSlug, from, to, { currency: currency, timeBound: timeBound })
}

/**
* Gets the token circulation
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens/coins that have moved in the past number of years or days.
* @returns {number} returns the token circulation.
* @customfunction
*/
function SAN_TOKEN_CIRCULATION (projectSlug, from, to, timeBound) {
  return handleErrors_(getMetric_)('circulation', projectSlug, from, to, { timeBound: timeBound })
}

/**
* Gets the token's mean age
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @returns {number} returns the token's mean age.
* @customfunction
*/
function SAN_MEAN_AGE (projectSlug, from, to) {
  return handleErrors_(getMetric_)('mean_age', projectSlug, from, to, {  })
}

/**
* Gets the token's realised value
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated, using a currency of choice.
* Available currencies: USD
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens/coins that have moved in the past number of years or days.
* @returns {number} returns the token's realised value.
* @customfunction
*/
function SAN_REALIZED_VALUE (projectSlug, from, to, currency, timeBound) {
  return handleErrors_(getMetric_)('realized_value', projectSlug, from, to, { currency: currency, timeBound: timeBound })
}

/**
* Gets the token's velocity
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @returns {number} returns the token's velocity.
* @customfunction
*/
function SAN_VELOCITY (projectSlug, from, to) {
  return handleErrors_(getMetric_)('velocity', projectSlug, from, to, {  })
}

/**
* Gets the transaction volume
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @returns {number} returns the transaction volume.
* @customfunction
*/
function SAN_TRANSACTION_VOLUME (projectSlug, from, to) {
  return handleErrors_(getMetric_)('transaction_volume', projectSlug, from, to, {  })
}

/**
* Gets the exchange inflow
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @returns {number} returns the exchange inflow.
* @customfunction
*/
function SAN_EXCHANGE_INFLOW (projectSlug, from, to) {
  return handleErrors_(getMetric_)('exchange_inflow', projectSlug, from, to, {  })
}

/**
* Gets the exchange outflow
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @returns {number} returns the exchange outflow.
* @customfunction
*/
function SAN_EXCHANGE_OUTFLOW (projectSlug, from, to) {
  return handleErrors_(getMetric_)('exchange_outflow', projectSlug, from, to, {  })
}

/**
* Gets the exchange balance
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @returns {number} returns the exchange balance.
* @customfunction
*/
function SAN_EXCHANGE_BALANCE (projectSlug, from, to) {
  return handleErrors_(getMetric_)('exchange_balance', projectSlug, from, to, {  })
}

/**
* Gets the token's age destroyed
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @returns {number} returns the token's age destroyed.
* @customfunction
*/
function SAN_AGE_DESTROYED (projectSlug, from, to) {
  return handleErrors_(getMetric_)('age_destroyed', projectSlug, from, to, {  })
}

/**
* Gets the Network Value to Transaction ratio
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @returns {number} returns the Network Value to Transaction ratio.
* @customfunction
*/
function SAN_NVT_RATIO (projectSlug, from, to) {
  return handleErrors_(getMetric_)('nvt', projectSlug, from, to, {  })
}

