/**
* Gets the the daily average marketcap
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens and coins that have moved in the past number of years or days.
* @returns {number} returns the daily average marketcap.
* @customfunction
*/
function SAN_DAILY_AVG_MARKETCAP_USD (projectSlug, from, to, timeBound) {
  return handleErrors_(getMetric_)('daily_avg_marketcap_usd', projectSlug, from, to, timeBound)
}

/**
* Gets the the daily average price
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens and coins that have moved in the past number of years or days.
* @returns {number} returns the daily average price.
* @customfunction
*/
function SAN_DAILY_AVG_PRICE_USD (projectSlug, from, to, timeBound) {
  return handleErrors_(getMetric_)('daily_avg_price_usd', projectSlug, from, to, timeBound)
}

/**
* Gets the the daily closing marketcap
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens and coins that have moved in the past number of years or days.
* @returns {number} returns the daily closing marketcap.
* @customfunction
*/
function SAN_DAILY_CLOSING_MARKETCAP_USD (projectSlug, from, to, timeBound) {
  return handleErrors_(getMetric_)('daily_closing_marketcap_usd', projectSlug, from, to, timeBound)
}

/**
* Gets the the daily closing price
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens and coins that have moved in the past number of years or days.
* @returns {number} returns the daily closing price.
* @customfunction
*/
function SAN_DAILY_CLOSING_PRICE_USD (projectSlug, from, to, timeBound) {
  return handleErrors_(getMetric_)('daily_closing_price_usd', projectSlug, from, to, timeBound)
}

/**
* Gets the the daily high price
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens and coins that have moved in the past number of years or days.
* @returns {number} returns the daily high price.
* @customfunction
*/
function SAN_DAILY_HIGH_PRICE_USD (projectSlug, from, to, timeBound) {
  return handleErrors_(getMetric_)('daily_high_price_usd', projectSlug, from, to, timeBound)
}

/**
* Gets the the daily low price
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens and coins that have moved in the past number of years or days.
* @returns {number} returns the daily low price.
* @customfunction
*/
function SAN_DAILY_LOW_PRICE_USD (projectSlug, from, to, timeBound) {
  return handleErrors_(getMetric_)('daily_low_price_usd', projectSlug, from, to, timeBound)
}

/**
* Gets the the daily opening price
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens and coins that have moved in the past number of years or days.
* @returns {number} returns the daily opening price.
* @customfunction
*/
function SAN_DAILY_OPENING_PRICE_USD (projectSlug, from, to, timeBound) {
  return handleErrors_(getMetric_)('daily_opening_price_usd', projectSlug, from, to, timeBound)
}

/**
* Gets the the daily trading volume
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens and coins that have moved in the past number of years or days.
* @returns {number} returns the daily trading volume.
* @customfunction
*/
function SAN_DAILY_TRADING_VOLUME_USD (projectSlug, from, to, timeBound) {
  return handleErrors_(getMetric_)('daily_trading_volume_usd', projectSlug, from, to, timeBound)
}

/**
* Gets the the daily active addresses
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens and coins that have moved in the past number of years or days.
* @returns {number} returns the daily active addresses.
* @customfunction
*/
function SAN_DAILY_ACTIVE_ADDRESSES (projectSlug, from, to, timeBound) {
  return handleErrors_(getMetric_)('daily_active_addresses', projectSlug, from, to, timeBound)
}

/**
* Gets the the mean realised price
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens and coins that have moved in the past number of years or days.
* @returns {number} returns the mean realised price.
* @customfunction
*/
function SAN_MEAN_REALIZED_PRICE_USD (projectSlug, from, to, timeBound) {
  return handleErrors_(getMetric_)('mean_realized_price_usd', projectSlug, from, to, timeBound)
}

/**
* Gets the the difference between MVRV
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens and coins that have moved in the past number of years or days.
* @returns {number} returns the difference between MVRV.
* @customfunction
*/
function SAN_MVRV_USD_LONG_SHORT_DIFF (projectSlug, from, to, timeBound) {
  return handleErrors_(getMetric_)('mvrv_usd_long_short_diff', projectSlug, from, to, timeBound)
}

/**
* Gets the the MVRV
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens and coins that have moved in the past number of years or days.
* @returns {number} returns the MVRV.
* @customfunction
*/
function SAN_MVRV_USD (projectSlug, from, to, timeBound) {
  return handleErrors_(getMetric_)('mvrv_usd', projectSlug, from, to, timeBound)
}

/**
* Gets the the token circulation
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens and coins that have moved in the past number of years or days.
* @returns {number} returns the token circulation.
* @customfunction
*/
function SAN_CIRCULATION (projectSlug, from, to, timeBound) {
  return handleErrors_(getMetric_)('circulation', projectSlug, from, to, timeBound)
}

/**
* Gets the the token's mean age
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens and coins that have moved in the past number of years or days.
* @returns {number} returns the token's mean age.
* @customfunction
*/
function SAN_MEAN_AGE (projectSlug, from, to, timeBound) {
  return handleErrors_(getMetric_)('mean_age', projectSlug, from, to, timeBound)
}

/**
* Gets the a token's realised value
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens and coins that have moved in the past number of years or days.
* @returns {number} returns a token's realised value.
* @customfunction
*/
function SAN_REALIZED_VALUE_USD (projectSlug, from, to, timeBound) {
  return handleErrors_(getMetric_)('realized_value_usd', projectSlug, from, to, timeBound)
}

/**
* Gets the the token's velocity
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens and coins that have moved in the past number of years or days.
* @returns {number} returns the token's velocity.
* @customfunction
*/
function SAN_VELOCITY (projectSlug, from, to, timeBound) {
  return handleErrors_(getMetric_)('velocity', projectSlug, from, to, timeBound)
}

/**
* Gets the the transaction volume
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens and coins that have moved in the past number of years or days.
* @returns {number} returns the transaction volume.
* @customfunction
*/
function SAN_TRANSACTION_VOLUME (projectSlug, from, to, timeBound) {
  return handleErrors_(getMetric_)('transaction_volume', projectSlug, from, to, timeBound)
}

/**
* Gets the the transaction volume for every 5 minutes
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens and coins that have moved in the past number of years or days.
* @returns {number} returns the transaction volume for every 5 minutes.
* @customfunction
*/
function SAN_TRANSACTION_VOLUME_5MIN (projectSlug, from, to, timeBound) {
  return handleErrors_(getMetric_)('transaction_volume_5min', projectSlug, from, to, timeBound)
}

/**
* Gets the the exchange inflow
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens and coins that have moved in the past number of years or days.
* @returns {number} returns the exchange inflow.
* @customfunction
*/
function SAN_EXCHANGE_INFLOW (projectSlug, from, to, timeBound) {
  return handleErrors_(getMetric_)('exchange_inflow', projectSlug, from, to, timeBound)
}

/**
* Gets the the exchange outflow
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens and coins that have moved in the past number of years or days.
* @returns {number} returns the exchange outflow.
* @customfunction
*/
function SAN_EXCHANGE_OUTFLOW (projectSlug, from, to, timeBound) {
  return handleErrors_(getMetric_)('exchange_outflow', projectSlug, from, to, timeBound)
}

/**
* Gets the the exchange balance
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens and coins that have moved in the past number of years or days.
* @returns {number} returns the exchange balance.
* @customfunction
*/
function SAN_EXCHANGE_BALANCE (projectSlug, from, to, timeBound) {
  return handleErrors_(getMetric_)('exchange_balance', projectSlug, from, to, timeBound)
}

/**
* Gets the the token's age destroyed
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens and coins that have moved in the past number of years or days.
* @returns {number} returns the token's age destroyed.
* @customfunction
*/
function SAN_AGE_DESTROYED (projectSlug, from, to, timeBound) {
  return handleErrors_(getMetric_)('age_destroyed', projectSlug, from, to, timeBound)
}

/**
* Gets the the token's age destroyed for every 5 minutes
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens and coins that have moved in the past number of years or days.
* @returns {number} returns the token's age destroyed for every 5 minutes.
* @customfunction
*/
function SAN_AGE_DESTROYED_5MIN (projectSlug, from, to, timeBound) {
  return handleErrors_(getMetric_)('age_destroyed_5min', projectSlug, from, to, timeBound)
}

/**
* Gets the the Network Value to Transaction ratio
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens and coins that have moved in the past number of years or days.
* @returns {number} returns the Network Value to Transaction ratio.
* @customfunction
*/
function SAN_NVT (projectSlug, from, to, timeBound) {
  return handleErrors_(getMetric_)('nvt', projectSlug, from, to, timeBound)
}

