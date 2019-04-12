/* eslint-disable valid-jsdoc */

function useInsteadMessage_ (newFunctionName) {
  return 'DEPRECATED: Use =' + newFunctionName + ' instead.'
}

/**
* DEPRECATED: Use =SAN_PRICES instead.
*
* @param {string} projectSlug Name of the asset at sanbase,
* which can be found at the end of the URL (eg. the Santiment URL is
* https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @returns {Array} of prices.
* @customfunction
*/
function SAN_DAILY_PRICES (projectSlug, from, to) {
  return useInsteadMessage_('SAN_PRICES')
}


/**
 * DEPRECATED: Use =SAN_ACTIVE_ADDRESSES instead.
 *
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of number of active addresses.
 * @customfunction
 */
function SAN_DAILY_ACTIVE_ADDRESSES (projectSlug, from, to) {
  return useInsteadMessage_('SAN_ACTIVE_ADDRESSES')
}

/**
 * DEPRECATED: Use =SAN_TRANSACTION_VOLUME instead.
 *
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of transaction volumes.
 * @customfunction
 */
function SAN_DAILY_TRANSACTION_VOLUME (projectSlug, from, to) {
  return useInsteadMessage_('SAN_TRANSACTION_VOLUME')
}

/**
 * DEPRECATED: Use =SAN_OHLC instead.
 *
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of open, high, low, and close price values.
 * @customfunction
 */
function SAN_DAILY_OHLC (projectSlug, from, to) {
  return useInsteadMessage_('SAN_OHLC')
}

/**
 * DEPRECATED: Use =SAN_PRICE_VOLUME_DIFF instead.
 *
 * @param {string} currency The currency in which the data should be presented. Either "USD" or "BTC".
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of price-volume difference technical indicator.
 * @customfunction
 */
function SAN_DAILY_PRICE_VOLUME_DIFF (currency, projectSlug, from, to) {
  return useInsteadMessage_('SAN_PRICE_VOLUME_DIFF')
}


/**
 * DEPRECATED: Use =SAN_SOCIAL_VOLUME instead.
 *
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @param {string} socialVolumeType The source of mention counts, one of the following:
 * "PROFESSIONAL_TRADERS_CHAT_OVERVIEW",
 * "TELEGRAM_CHATS_OVERVIEW",
 * "TELEGRAM_DISCUSSION_OVERVIEW",
 * "DISCORD_DISCUSSION_OVERVIEW"
 *
 * @returns {Array} of mention counts.
 * @customfunction
 */
function SAN_DAILY_SOCIAL_VOLUME (projectSlug, from, to, socialVolumeType) {
  return useInsteadMessage_('SAN_SOCIAL_VOLUME')
}

/**
 * DEPRECATED: Use =SAN_GITHUB_ACTIVITY instead.
 *
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of github activity.
 * @customfunction
 */
function SAN_DAILY_GITHUB_ACTIVITY (projectSlug, from, to) {
  return useInsteadMessage_('SAN_GITHUB_ACTIVITY')
}

/**
 * DEPRECATED: Use =SAN_DEV_ACTIVITY instead.
 *
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of dev activity.
 * @customfunction
 */
function SAN_DAILY_DEV_ACTIVITY (projectSlug, from, to) {
  return useInsteadMessage_('SAN_DEV_ACTIVITY')
}

/**
 * DEPRECATED: Use =SAN_NETWORK_GROWTH instead.
 *
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of number of new addresses.
 * @customfunction
 */
function SAN_DAILY_NETWORK_GROWTH (projectSlug, from, to) {
  return useInsteadMessage_('SAN_NETWORK_GROWTH')
}

/**
 * DEPRECATED: Use =SAN_EXCHANGE_FUNDS_FLOW instead.
 *
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of token deposit/withdraw differences.
 * @customfunction
 */
function SAN_DAILY_EXCHANGE_FUNDS_FLOW (projectSlug, from, to) {
  return useInsteadMessage_('SAN_EXCHANGE_FUNDS_FLOW')
}

/**
 * DEPRECATED: Use =SAN_TOKEN_CIRCULATION instead.
 *
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of token circulation.
 * @customfunction
 */
function SAN_DAILY_TOKEN_CIRCULATION (projectSlug, from, to) {
  return useInsteadMessage_('SAN_TOKEN_CIRCULATION')
}

/**
 * DEPRECATED: Use =SAN_TRENDING_WORDS instead.
 *
 * @param {string} source One of the following:
 * TELEGRAM
 * PROFESSIONAL_TRADERS_CHAT
 * REDDIT
 * ALL
 * @param {number} size An integer showing how many words should be included in the top list (max 100).
 * @param {number} hour An integer showing the hour of the day when the calculation was executed.
 * The trending words are currently generated only 3 times a day - 01:00 UTC, 08:00 UTC and 14:00 UTC. Example: 1
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of trending words and their score.
 * @customfunction
 */
function SAN_DAILY_TRENDING_WORDS (source, size, hour, from, to) {
  return useInsteadMessage_('SAN_TRENDING_WORDS')
}

/**
 * DEPRECATED: Use =SAN_TOKEN_AGE_CONSUMED instead.
 *
 * Grouping by interval works by summing all records in the interval.
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of token age consumed numbers.
 * @customfunction
 */
function SAN_DAILY_TOKEN_AGE_CONSUMED (projectSlug, from, to) {
  return useInsteadMessage_('SAN_TOKEN_AGE_CONSUMED')
}


/**
 * DEPRECATED: Use =SAN_ACTIVE_DEPOSITS instead.

 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of deposit address numbers.
 * @customfunction
 */
function SAN_DAILY_ACTIVE_DEPOSITS (projectSlug, from, to) {
  return useInsteadMessage_('SAN_ACTIVE_DEPOSITS')
}
