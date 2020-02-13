/**
 * Returns the prices for the specified asset, during a given time interval.
 *
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of prices.
 * @customfunction
 */
function SAN_PRICES (projectSlug, from, to) {
  return handleErrors_(prices_)(projectSlug, from, to)
}

/**
 * Returns the absolute price change for the specified asset, during a given time interval.
 *
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {number} absolute price change.
 * @customfunction
 */
function SAN_PRICE_ABSOLUTE_CHANGE (projectSlug, from, to) {
  return handleErrors_(priceAbsoluteChange_)(projectSlug, from, to)
}

/**
 * Returns the percent price change for the specified asset, during a given time interval.
 *
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {number} price change in percent.
 * @customfunction
 */
function SAN_PRICE_PERCENT_CHANGE (projectSlug, from, to) {
  return handleErrors_(pricePercentChange_)(projectSlug, from, to)
}

/**
 * Returns an array of all assets for which Santiment has data.
 * Each asset record includes: ticker, name, slug, price in USD, market cap in USD,
 * volume in USD, USD balance, ETH balance, ETH spent in the last 30 days,
 * ETH spent in the last 7 days, ETH spent in the last day.
 *
 * @returns {Array} of all projects.
 * @customfunction
 */
function SAN_ALL_PROJECTS () {
  return handleErrors_(allProjects_)()
}

/**
 * Returns an array of all ERC20 assets for which Santiment has data.
 * Each asset record includes: ticker, name, slug, price in USD, market cap in USD,
 * volume in USD, USD balance, ETH balance, ETH spent in the last 30 days,
 * ETH spent in the last 7 days, ETH spent in the last day and main contract address.
 * @returns {Array} of all ERC20 projects.
 * @customfunction
 */
function SAN_ERC20_PROJECTS () {
  return handleErrors_(erc20Projects_)()
}

/**
 * Returns the open, high, low, and close price values for the specified asset,
 * during a given time interval.
 *
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of open, high, low, and close price values.
 * @customfunction
 */
function SAN_OHLC (projectSlug, from, to) {
  return handleErrors_(ohlc_)(projectSlug, from, to)
}

/**
 * Returns the price-volume difference technical indicator for a given asset,
 * currency and time interval. This indicator measures the difference in trend between price and volume,
 * specifically when price goes up as volume goes down. Currency can be displayed in either USD or BTC.
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
function SAN_PRICE_VOLUME_DIFF (currency, projectSlug, from, to) {
  return handleErrors_(priceVolumeDiff_)(currency, projectSlug, from, to)
}

/**
 * Returns a list of project slugs for which there is social volume data.
 * @returns {Array} of social volume projects.
 * @customfunction
 */
function SAN_SOCIAL_VOLUME_PROJECTS () {
  return handleErrors_(socialVolumeProjects_)()
}

/**
 * Returns a list of mentions count for a given project and time interval.
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
function SAN_SOCIAL_VOLUME (projectSlug, from, to, socialVolumeType) {
  return handleErrors_(socialVolume_)(projectSlug, from, to, socialVolumeType)
}

/**
 * Returns a list of github activity for a given slug and time interval.
 *
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of github activity.
 * @customfunction
 */
function SAN_GITHUB_ACTIVITY (projectSlug, from, to) {
  return handleErrors_(githubActivity_)(projectSlug, from, to)
}

/**
 * Returns a list of dev activity for a given slug and time interval.
 *
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of dev activity.
 * @customfunction
 */
function SAN_DEV_ACTIVITY (projectSlug, from, to) {
  return handleErrors_(devActivity_)(projectSlug, from, to)
}

/**
 * Returns the number of new addresses being created on the project network
 * for a given slug and time interval.
 *
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of number of new addresses.
 * @customfunction
 */
function SAN_NETWORK_GROWTH (projectSlug, from, to) {
  return handleErrors_(networkGrowth_)(projectSlug, from, to)
}

/**
 * Returns the difference between the tokens that were deposited minus
 * the tokens that were withdrawn from an exchange for a given slug and time interval.
 *
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of token deposit/withdraw differences.
 * @customfunction
 */
function SAN_EXCHANGE_FUNDS_FLOW (projectSlug, from, to) {
  return handleErrors_(exchangeFundsFlow_)(projectSlug, from, to)
}

/**
 * Returns list of emerging trends and their corresponding trend score.
 *
 * @param {number} size An integer showing how many words should be included in the top list (max 100).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of trending words and their score.
 * @customfunction
 */
function SAN_EMERGING_TRENDS (size, from, to) {
  return handleErrors_(emergingTrends_)(size, from, to)
}

/**
 * Fetch fundamentals for a specified project.
 *
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @returns {Array} of project details.
 * @customfunction
 */
function SAN_PROJECT_FUNDAMENTALS (projectSlug) {
  return handleErrors_(fetchProjectFundamentals_)(projectSlug)
}

/**
 * Returns social data for a specified project.
 *
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @returns {Array} of project's social data.
 * @customfunction
 */
function SAN_PROJECT_SOCIAL_DATA (projectSlug) {
  return handleErrors_(projectSocialData_)(projectSlug)
}

/**
 * Returns amount of tokens changing addresses, multiplied by the number of blocks
 * created on the blockchain since they last moved.
 * Spikes are signal of a large amount of tokens moving after being idle for an extended period of time.
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
function SAN_TOKEN_AGE_CONSUMED (projectSlug, from, to) {
  return handleErrors_(tokenAgeConsumed_)(projectSlug, from, to)
}

/**
 * Returns number of unique deposit addresses that have been active for a project.
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of deposit address numbers.
 * @customfunction
 */
function SAN_ACTIVE_DEPOSITS (projectSlug, from, to) {
  return handleErrors_(activeDeposits_)(projectSlug, from, to)
}

/**
 * Returns used Gas by a blockchain.
 * When you send tokens, interact with a contract or do anything else on the blockchain,
 * you must pay for that computation. That payment is calculated in Gas.
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of quantities of gas used.
 * @customfunction
 */
function SAN_GAS_USED (projectSlug, from, to) {
  return handleErrors_(gasUsed_)(projectSlug, from, to)
}

/**
 * Returns the distribution of miners between mining pools.
 * What part of the miners are using top3, top10 and all the other pools.
 * Currently only ETH is supported.
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of distribution ratios.
 * @customfunction
 */
function SAN_MINING_POOLS_DISTRIBUTION (projectSlug, from, to) {
  return handleErrors_(miningPoolsDistribution_)(projectSlug, from, to)
}

/**
 * Returns miners balances over time
 * Currently only ETH is supported.
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of balances.
 * @customfunction
 */
function SAN_MINERS_BALANCE (projectSlug, from, to) {
  return handleErrors_(minersBalance_)(projectSlug, from, to)
}

/**
 * Returns the latest price for a given asset in a desired currency.
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {string} currency The currency in which the data should be presented. Either "USD" or "BTC".
 * @returns {number} latest price.
 * @customfunction
 */
function SAN_LATEST_PRICE (projectSlug, currency) {
  return handleErrors_(latestPrice_)(projectSlug, currency)
}

/**
 * Returns the closing price for a given day.
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} day The date to fetch the data. Example: DATE(2018, 9, 20)
 * @returns {number} closing price.
 * @customfunction
 */
function SAN_DAILY_CLOSING_PRICE (projectSlug, day) {
  return handleErrors_(dailyClosingPrice_)(projectSlug, day)
}

/**
 * Returns the historical balance for a given ERC20 or ETH address.
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @param {string} address ERC20 or ETH address.
 * @returns {Array} of balances.
 * @customfunction
 */
function SAN_HISTORICAL_BALANCE (projectSlug, from, to, address) {
  return handleErrors_(historicalBalance_)(projectSlug, from, to, address)
}

/**
 * Returns the historical count of twitter followers.
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} followers count over time.
 * @customfunction
 */
function SAN_HISTORY_TWITTER_DATA (projectSlug, from, to) {
  return handleErrors_(historyTwitterData_)(projectSlug, from, to)
}

/**
 * Returns the % of the social dominance a given project has over time in a given social channel.
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @param {string} source The source, which the dominance is calculated from. Sources are: ALL, TELEGRAM, REDDIT, DISCORD, PROFESSIONAL_TRADERS_CHAT
 * @returns {Array} of dominance.
 * @customfunction
 */
function SAN_SOCIAL_DOMINANCE (projectSlug, from, to, source) {
  return handleErrors_(socialDominance_)(projectSlug, from, to, source)
}

/**
 * Returns top token transactions for a given slug
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @param {number} limit The limit of transactions to be shown.
 * @returns {Array} of top transactions
 * @customfunction
 */
function SAN_TOKEN_TOP_TRANSACTIONS (projectSlug, from, to, limit) {
  return handleErrors_(tokenTopTransactions_)(projectSlug, from, to, limit)
}

/**
 * Returns top ETH transactions for project's team wallets.
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @param {number} limit The limit of transactions to be shown.
 * @param {string} transactionType Available transaction types: ALL, IN, OUT
 * @returns {Array} of top transactions
 * @customfunction
 */
function SAN_ETH_TOP_TRANSACTIONS (projectSlug, from, to, limit, transactionType) {
  return handleErrors_(ethTopTransactions_)(projectSlug, from, to, limit, transactionType)
}

/**
 * Returns ETH spent for each interval from the project's team wallet and time period
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @returns {Array} of the ETH, that was spent over a given period of time
 * @customfunction
 */
function SAN_ETH_SPENT_OVER_TIME (projectSlug, from, to) {
  return handleErrors_(ethSpentOverTime_)(projectSlug, from, to)
}

/**
 * Returns the top holders' percent of total supply - in exchanges, outside exchanges and combined.
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @param {number} numberOfHolders Take top number of holders into account when calculating.
 * @returns {Array} followers count over time.
 * @customfunction
 */
function SAN_TOP_HOLDERS_PERCENT_OF_TOTAL_SUPPLY (projectSlug, from, to, numberOfHolders) {
  return handleErrors_(topHoldersPercentOfTotalSupply_)(projectSlug, from, to, numberOfHolders)
}

/**
 * Returns the historical balance for a given ERC20 or ETH address.
 * @param {string} projectSlug Name of the asset at sanbase,
 * which can be found at the end of the URL (eg. the Santiment URL is
 * https://app.santiment.net/projects/santiment, so the projectSlug would be santiment).
 * @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
 * @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
 * @param {string} address ERC20 or ETH address.
 * @returns {Array} of balances.
 * @customfunction
 */
function SAN_HISTORICAL_BALANCE_DEDUP (projectSlug, from, to, address) {
  return handleErrors_(historicalBalanceDedup_)(projectSlug, from, to, address)
}
