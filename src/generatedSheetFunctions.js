/* eslint-disable no-multi-spaces*/
/**
* Returns the daily average marketcap.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated using a currency of choice.
* Available currencies: USD
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of daily average marketcaps.
* @customfunction
*/
function SAN_DAILY_AVG_MARKETCAP (projectSlug, from, to, currency, interval = '1d') {
  return handleErrors_(getMetric_)(
    'daily_avg_marketcap',
    projectSlug,
    from,
    to,
    { currency: currency, interval: interval }
  )
}


/**
* Returns the daily closing marketcap.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated using a currency of choice.
* Available currencies: USD
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of daily closing marketcaps.
* @customfunction
*/
function SAN_DAILY_CLOSING_MARKETCAP (projectSlug, from, to, currency, interval = '1d') {
  return handleErrors_(getMetric_)(
    'daily_closing_marketcap',
    projectSlug,
    from,
    to,
    { currency: currency, interval: interval }
  )
}


/**
* Returns the mean realized price.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated using a currency of choice.
* Available currencies: USD
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens/coins that have moved in the past number of years or days.
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of mean realized prices.
* @customfunction
*/
function SAN_MEAN_REALIZED_PRICE (projectSlug, from, to, currency, timeBound, interval = '1d') {
  return handleErrors_(getMetric_)(
    'mean_realized_price',
    projectSlug,
    from,
    to,
    { currency: currency, timeBound: timeBound, interval: interval }
  )
}


/**
* Returns the difference between MVRV.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated using a currency of choice.
* Available currencies: USD
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of MVRV differences.
* @customfunction
*/
function SAN_MVRV_LONG_SHORT_DIFF (projectSlug, from, to, currency, interval = '1d') {
  return handleErrors_(getMetric_)(
    'mvrv_long_short_diff',
    projectSlug,
    from,
    to,
    { currency: currency, interval: interval }
  )
}


/**
* Returns MVRV(Market-Value-to-Realized-Value).
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated using a currency of choice.
* Available currencies: USD
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens/coins that have moved in the past number of years or days.
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of MVRV ratios.
* @customfunction
*/
function SAN_MVRV_RATIO (projectSlug, from, to, currency, timeBound, interval = '1d') {
  return handleErrors_(getMetric_)(
    'mvrv',
    projectSlug,
    from,
    to,
    { currency: currency, timeBound: timeBound, interval: interval }
  )
}


/**
* Returns token circulation for a given slug and time interval.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens/coins that have moved in the past number of years or days.
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of token circulation values.
* @customfunction
*/
function SAN_TOKEN_CIRCULATION (projectSlug, from, to, timeBound, interval = '1d') {
  return handleErrors_(getMetric_)(
    'circulation',
    projectSlug,
    from,
    to,
    { timeBound: timeBound, interval: interval }
  )
}


/**
* Returns the token's mean age.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of mean age values.
* @customfunction
*/
function SAN_MEAN_AGE (projectSlug, from, to, interval = '1d') {
  return handleErrors_(getMetric_)(
    'mean_age',
    projectSlug,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns the token's mean dollar invested age.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of mean dollar invested age values.
* @customfunction
*/
function SAN_MEAN_DOLLAR_INVESTED_AGE (projectSlug, from, to, interval = '1d') {
  return handleErrors_(getMetric_)(
    'mean_dollar_invested_age',
    projectSlug,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns Realized value - sum of the acquisition costs of an asset located in a wallet.
* The realized value across the whole network is computed by summing the realized values
* of all wallets holding tokens at the moment.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated using a currency of choice.
* Available currencies: USD
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens/coins that have moved in the past number of years or days.
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of realized values.
* @customfunction
*/
function SAN_REALIZED_VALUE (projectSlug, from, to, currency, timeBound, interval = '1d') {
  return handleErrors_(getMetric_)(
    'realized_value',
    projectSlug,
    from,
    to,
    { currency: currency, timeBound: timeBound, interval: interval }
  )
}


/**
* Returns the token's velocity.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of token velocity values.
* @customfunction
*/
function SAN_VELOCITY (projectSlug, from, to, interval = '1d') {
  return handleErrors_(getMetric_)(
    'velocity',
    projectSlug,
    from,
    to,
    { interval: interval }
  )
}


/**
* Gets the transaction volume for the specified asset, during a given time interval.
* Transaction Volume" refers to the total number of tokens within all
* transfers that have occurred on a blockchain.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of transaction volumes.
* @customfunction
*/
function SAN_TRANSACTION_VOLUME (projectSlug, from, to, interval = '1d') {
  return handleErrors_(getMetric_)(
    'transaction_volume',
    projectSlug,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns the exchange inflow.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of exchange inflows.
* @customfunction
*/
function SAN_EXCHANGE_INFLOW (projectSlug, from, to, interval = '1d') {
  return handleErrors_(getMetric_)(
    'exchange_inflow',
    projectSlug,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns the exchange outflow.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of exchange outflows.
* @customfunction
*/
function SAN_EXCHANGE_OUTFLOW (projectSlug, from, to, interval = '1d') {
  return handleErrors_(getMetric_)(
    'exchange_outflow',
    projectSlug,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns the exchange balance.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of exchange balances.
* @customfunction
*/
function SAN_EXCHANGE_BALANCE (projectSlug, from, to, interval = '1d') {
  return handleErrors_(getMetric_)(
    'exchange_balance',
    projectSlug,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns the token's age destroyed
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of age destroyed values.
* @customfunction
*/
function SAN_AGE_DESTROYED (projectSlug, from, to, interval = '1d') {
  return handleErrors_(getMetric_)(
    'age_destroyed',
    projectSlug,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns NVT (Network-Value-to-Transactions-Ratio Daily Market Cap / Daily Token Circulation)
* Since Daily Transaction Volume gets rather noisy and easy to manipulate
* by transferring the same tokens through a couple of addresses repeatedly,
* it’s not an ideal measure of a network’s economic activity. That’s why we also
* offer another way to calculate NVT by using Daily Token Circulation.
* This method filters out excess transactions and provides a cleaner overview of a blockchain’s
* daily transaction throughput.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of NVT ratios
* @customfunction
*/
function SAN_NVT_RATIO (projectSlug, from, to, interval = '1d') {
  return handleErrors_(getMetric_)(
    'nvt',
    projectSlug,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns the token's network growth
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of network growth.
* @customfunction
*/
function SAN_NETWORK_GROWTH (projectSlug, from, to, interval = '1d') {
  return handleErrors_(getMetric_)(
    'network_growth',
    projectSlug,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns number of unique deposit addresses that have been active for a project.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of deposit address numbers.
* @customfunction
*/
function SAN_ACTIVE_DEPOSITS (projectSlug, from, to, interval = '1d') {
  return handleErrors_(getMetric_)(
    'active_deposits',
    projectSlug,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns the active addresses for the specified asset, during a given time interval.
* Active Addresses" refers to the number of unique addresses that
* participated in transactions on a blockchain.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of active addresses.
* @customfunction
*/
function SAN_ACTIVE_ADDRESSES (projectSlug, from, to, interval = '1d') {
  return handleErrors_(getMetric_)(
    'daily_active_addresses',
    projectSlug,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns the active addresses for the specified asset, during a given time interval.
* Active Addresses" refers to the number of unique addresses that
* participated in transactions on a blockchain.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of active addresses for the last 24 hours.
* @customfunction
*/
function SAN_ACTIVE_ADDRESSES_24H (projectSlug, from, to, interval = '1d') {
  return handleErrors_(getMetric_)(
    'active_addresses_24h',
    projectSlug,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns the amount of coins/tokens held by the top holders.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of amount of coins/tokens held by the top holders.
* @customfunction
*/
function SAN_TOP_HOLDERS_HELD_OVERALL (projectSlug, from, to, interval = '1d') {
  return handleErrors_(getMetric_)(
    'amount_in_top_holders',
    projectSlug,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns the amount of coins/tokens held only by the exchange top holders.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of amount of coins/tokens held only by the top holders.
* @customfunction
*/
function SAN_TOP_HOLDERS_HELD_ON_EXCHANGE (projectSlug, from, to, interval = '1d') {
  return handleErrors_(getMetric_)(
    'amount_in_exchange_top_holders',
    projectSlug,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns the amount of coins/tokens held only by the non exchange top holders.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of amount of coins/tokens held only by the top holders.
* @customfunction
*/
function SAN_TOP_HOLDERS_HELD_OFF_EXCHANGE (projectSlug, from, to, interval = '1d') {
  return handleErrors_(getMetric_)(
    'amount_in_non_exchange_top_holders',
    projectSlug,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns exchange percent of total supply.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of exchange percent of total supply.
* @customfunction
*/
function SAN_EXCHANGE_PERCENT_OF_SUPPLY (projectSlug, from, to, interval = '1d') {
  return handleErrors_(getMetric_)(
    'percent_of_total_supply_on_exchanges',
    projectSlug,
    from,
    to,
    { interval: interval }
  )
}


/**
* Represents the total number of addresses holding the given amount of tokens.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
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
* "10M-inf",
* "total"
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of total number of addresses holding the given amount of tokens.
* @customfunction
*/
function SAN_HOLDERS_DISTRIBUTION (projectSlug, from, to, balance = 'total', interval = '1d') {
  return handleErrors_(getMetric_)(
    'holders_distribution',
    projectSlug,
    from,
    to,
    { balance: balance, interval: interval }
  )
}


/**
* Returns the funding rates that are paid by one of the sides of the perpetual contract to the other
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of the funding rates that are paid by one of the sides of the perpetual contract to the other
* @customfunction
*/
function SAN_BITMEX_PERPETUAL_CONTRACT_FUNDING_RATE (projectSlug, from, to, interval = '1d') {
  return handleErrors_(getMetric_)(
    'bitmex_perpetual_funding_rate',
    projectSlug,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns the network's profit/loss.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of the network's profit/loss.
* @customfunction
*/
function SAN_NETWORK_PROFIT_LOSS (projectSlug, from, to, interval = '1d') {
  return handleErrors_(getMetric_)(
    'network_profit_loss',
    projectSlug,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns the prices for the slug in the given time period.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated using a currency of choice.
* Available currencies: USD
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of the prices for the slug in the given time period.
* @customfunction
*/
function SAN_PRICE (projectSlug, from, to, currency, interval = '1d') {
  return handleErrors_(getMetric_)(
    'price',
    projectSlug,
    from,
    to,
    { currency: currency, interval: interval }
  )
}


/**
* Returns the slug's transaction volume.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of the slug's transaction volume.
* @customfunction
*/
function SAN_VOLUME (projectSlug, from, to, interval = '1d') {
  return handleErrors_(getMetric_)(
    'transaction_volume',
    projectSlug,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns the social volume for a slug.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} source The source of mention counts, one of the following:
* "TELEGRAM_CHATS_OVERVIEW",
* "TELEGRAM_DISCUSSION_OVERVIEW",
* "TWITTER_CHATS_OVERVIEW",
* "REDDIT_COMMENTS_OVERVIEW",
* "TOTAL"
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of the slug's social volume.
* @customfunction
*/
function SAN_SOCIAL_VOLUME (projectSlug, from, to, source, interval = '1d') {
  return handleErrors_(getMetric_)(
    'social_volume',
    projectSlug,
    from,
    to,
    { source: source, interval: interval }
  )
}


/**
* Returns the marketcap for a slug.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated using a currency of choice.
* Available currencies: USD
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of the slug's marketcap.
* @customfunction
*/
function SAN_MARKETCAP (projectSlug, from, to, currency, interval = '1d') {
  return handleErrors_(getMetric_)(
    'marketcap',
    projectSlug,
    from,
    to,
    { currency: currency, interval: interval }
  )
}


/**
* Returns the number of transactions transferring more than 100k USD.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of the number of transactions transferring more than 100k USD.
* @customfunction
*/
function SAN_WHALE_TRANSACTION_COUNT (projectSlug, from, to, interval = '1d') {
  return handleErrors_(getMetric_)(
    'whale_transaction_count_100k_usd_to_inf',
    projectSlug,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns the number of tokens in a specific bucket.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
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
* "10M-inf",
* "total"
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of the number of tokens in a specific bucket.
* @customfunction
*/
function SAN_HOLDERS_DISTRIBUTION_COMBINED_BALANCE (projectSlug, from, to, balance = 'total', interval = '1d') {
  return handleErrors_(getMetric_)(
    'holders_distribution_combined_balance',
    projectSlug,
    from,
    to,
    { balance: balance, interval: interval }
  )
}


/**
* Returns the weighted social sentiment for a slug.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} source The source of mention counts, one of the following:
* "TELEGRAM_CHATS_OVERVIEW",
* "TELEGRAM_DISCUSSION_OVERVIEW",
* "TWITTER_CHATS_OVERVIEW",
* "REDDIT_COMMENTS_OVERVIEW",
* "TOTAL"
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of the slug's weighted social sentiment.
* @customfunction
*/
function SAN_WEIGHTED_SOCIAL_SENTIMENT (projectSlug, from, to, source, interval = '1d') {
  return handleErrors_(getMetric_)(
    'sentiment_volume_consumed',
    projectSlug,
    from,
    to,
    { source: source, interval: interval }
  )
}


/**
* Returns the amount of open perpetual contracts currently on Bitmex's
* Project Ticker / USD trading pairs. When open interest reaches unusually high numbers,
* it can precede increased volatility in the coin’s price.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of the amount of open perpetual contracts.
* @customfunction
*/
function SAN_BITMEX_PERPETUAL_OPEN_INTEREST (projectSlug, from, to, interval = '1d') {
  return handleErrors_(getMetric_)(
    'bitmex_perpetual_open_interest',
    projectSlug,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns the social dominance for a slug.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} source The source of mention counts, one of the following:
* "TELEGRAM_CHATS_OVERVIEW",
* "TELEGRAM_DISCUSSION_OVERVIEW",
* "TWITTER_CHATS_OVERVIEW",
* "REDDIT_COMMENTS_OVERVIEW",
* "TOTAL"
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of the slug's social dominance.
* @customfunction
*/
function SAN_SOCIAL_DOMINANCE (projectSlug, from, to, source, interval = '1d') {
  return handleErrors_(getMetric_)(
    'social_dominance',
    projectSlug,
    from,
    to,
    { source: source, interval: interval }
  )
}


/**
* Returns the funding rates that are paid by one of the sides of the perpetual contract to the other (USDT).
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} fundingRateExchange The exchange platform, from which funding rates are fetched, BITMEX by default:
* "BITMEX"
* "BINANCE"
* "FTX"
* "DYDX"
* "BITFINEX"
* "DERIBIT"
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of the funding rates that are paid by one of the sides of the perpetual contract to the other (USDT).
* @customfunction
*/
function SAN_FUNDING_RATE_USDT (projectSlug, from, to, fundingRateExchange, interval = '1d') {
  return handleErrors_(getMetric_)(
    'usdt_funding_rate',
    projectSlug,
    from,
    to,
    { fundingRateExchange: fundingRateExchange, interval: interval }
  )
}


/**
* Returns the funding rates that are paid by one of the sides of the perpetual contract to the other (BUSD).
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} fundingRateExchange The exchange platform, from which funding rates are fetched, BITMEX by default:
* "BITMEX"
* "BINANCE"
* "FTX"
* "DYDX"
* "BITFINEX"
* "DERIBIT"
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of the funding rates that are paid by one of the sides of the perpetual contract to the other (BUSD).
* @customfunction
*/
function SAN_FUNDING_RATE_BUSD (projectSlug, from, to, fundingRateExchange, interval = '1d') {
  return handleErrors_(getMetric_)(
    'busd_funding_rate',
    projectSlug,
    from,
    to,
    { fundingRateExchange: fundingRateExchange, interval: interval }
  )
}


/**
* Returns the slug's trading volume.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated using a currency of choice.
* Available currencies: USD
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of the slugs's trading volume.
* @customfunction
*/
function SAN_TRADING_VOLUME (projectSlug, from, to, currency, interval = '1d') {
  return handleErrors_(getMetric_)(
    'volume',
    projectSlug,
    from,
    to,
    { currency: currency, interval: interval }
  )
}


/**
* Returns MVRV(Market-Value-to-Realized-Value) with the option of smaller intervals.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens/coins that have moved in the past number of years or days.
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of MVRV ratios with the option of smaller intervals.
* @customfunction
*/
function SAN_MVRV_RATIO_INTRADAY (projectSlug, from, to, timeBound, interval = '1d') {
  return handleErrors_(getMetric_)(
    'mvrv_usd_intraday',
    projectSlug,
    from,
    to,
    { timeBound: timeBound, interval: interval }
  )
}


/**
* Returns number of withdrawal transactions.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of number of withdrawal transactions.
* @customfunction
*/
function SAN_DAILY_WITHDRAWAL_TRANSACTIONS (projectSlug, from, to, interval = '1d') {
  return handleErrors_(getMetric_)(
    'withdrawal_transactions',
    projectSlug,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns number of withdrawal transactions with the option of smaller intervals.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of number of withdrawal transactions with the option of smaller intervals.
* @customfunction
*/
function SAN_WITHDRAWAL_TRANSACTIONS_INTRADAY (projectSlug, from, to, interval = '1d') {
  return handleErrors_(getMetric_)(
    'withdrawal_transactions_5m',
    projectSlug,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns number of withdrawal transactions.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of number of withdrawal transactions.
* @customfunction
*/
function SAN_DAILY_DEPOSIT_TRANSACTIONS (projectSlug, from, to, interval = '1d') {
  return handleErrors_(getMetric_)(
    'deposit_transactions',
    projectSlug,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns number of withdrawal transactions with the option of smaller intervals.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {Array} of number of withdrawal transactions with the option of smaller intervals.
* @customfunction
*/
function SAN_DEPOSIT_TRANSACTIONS_INTRADAY (projectSlug, from, to, interval = '1d') {
  return handleErrors_(getMetric_)(
    'deposit_transactions_5m',
    projectSlug,
    from,
    to,
    { interval: interval }
  )
}

/**
 * Returns all available functions.
 * @returns {Array} of function names.
 * @customfunction
 */
function SAN_FUNCTIONS () {
  return [
    'SAN_ACTIVE_ADDRESSES',
    'SAN_ACTIVE_ADDRESSES_24H',
    'SAN_ACTIVE_ADDRESSES_24H_AGGREGATED',
    'SAN_ACTIVE_ADDRESSES_24H_MULTIPLE_SLUGS',
    'SAN_ACTIVE_ADDRESSES_AGGREGATED',
    'SAN_ACTIVE_ADDRESSES_MULTIPLE_SLUGS',
    'SAN_ACTIVE_DEPOSITS',
    'SAN_ACTIVE_DEPOSITS_AGGREGATED',
    'SAN_ACTIVE_DEPOSITS_MULTIPLE_SLUGS',
    'SAN_AGE_DESTROYED',
    'SAN_AGE_DESTROYED_AGGREGATED',
    'SAN_AGE_DESTROYED_MULTIPLE_SLUGS',
    'SAN_ALL_PROJECTS',
    'SAN_BITMEX_PERPETUAL_CONTRACT_FUNDING_RATE',
    'SAN_BITMEX_PERPETUAL_CONTRACT_FUNDING_RATE_AGGREGATED',
    'SAN_BITMEX_PERPETUAL_CONTRACT_FUNDING_RATE_MULTIPLE_SLUGS',
    'SAN_BITMEX_PERPETUAL_OPEN_INTEREST',
    'SAN_BITMEX_PERPETUAL_OPEN_INTEREST_AGGREGATED',
    'SAN_BITMEX_PERPETUAL_OPEN_INTEREST_MULTIPLE_SLUGS',
    'SAN_DAILY_AVG_MARKETCAP',
    'SAN_DAILY_AVG_MARKETCAP_AGGREGATED',
    'SAN_DAILY_AVG_MARKETCAP_MULTIPLE_SLUGS',
    'SAN_DAILY_CLOSING_MARKETCAP',
    'SAN_DAILY_CLOSING_MARKETCAP_AGGREGATED',
    'SAN_DAILY_CLOSING_MARKETCAP_MULTIPLE_SLUGS',
    'SAN_DAILY_CLOSING_PRICE',
    'SAN_DAILY_DEPOSIT_TRANSACTIONS',
    'SAN_DAILY_DEPOSIT_TRANSACTIONS_AGGREGATED',
    'SAN_DAILY_DEPOSIT_TRANSACTIONS_MULTIPLE_SLUGS',
    'SAN_DAILY_WITHDRAWAL_TRANSACTIONS',
    'SAN_DAILY_WITHDRAWAL_TRANSACTIONS_AGGREGATED',
    'SAN_DAILY_WITHDRAWAL_TRANSACTIONS_MULTIPLE_SLUGS',
    'SAN_DEPOSIT_TRANSACTIONS_INTRADAY',
    'SAN_DEPOSIT_TRANSACTIONS_INTRADAY_AGGREGATED',
    'SAN_DEPOSIT_TRANSACTIONS_INTRADAY_MULTIPLE_SLUGS',
    'SAN_DEV_ACTIVITY',
    'SAN_EMERGING_TRENDS',
    'SAN_ERC20_PROJECTS',
    'SAN_ETH_SPENT_OVER_TIME',
    'SAN_ETH_TOP_TRANSACTIONS',
    'SAN_EXCHANGE_BALANCE',
    'SAN_EXCHANGE_BALANCE_AGGREGATED',
    'SAN_EXCHANGE_BALANCE_MULTIPLE_SLUGS',
    'SAN_EXCHANGE_FUNDS_FLOW',
    'SAN_EXCHANGE_INFLOW',
    'SAN_EXCHANGE_INFLOW_AGGREGATED',
    'SAN_EXCHANGE_INFLOW_MULTIPLE_SLUGS',
    'SAN_EXCHANGE_OUTFLOW',
    'SAN_EXCHANGE_OUTFLOW_AGGREGATED',
    'SAN_EXCHANGE_OUTFLOW_MULTIPLE_SLUGS',
    'SAN_EXCHANGE_PERCENT_OF_SUPPLY',
    'SAN_EXCHANGE_PERCENT_OF_SUPPLY_AGGREGATED',
    'SAN_EXCHANGE_PERCENT_OF_SUPPLY_MULTIPLE_SLUGS',
    'SAN_FUNCTIONS',
    'SAN_FUNDING_RATE_BUSD',
    'SAN_FUNDING_RATE_BUSD_AGGREGATED',
    'SAN_FUNDING_RATE_BUSD_MULTIPLE_SLUGS',
    'SAN_FUNDING_RATE_USDT',
    'SAN_FUNDING_RATE_USDT_AGGREGATED',
    'SAN_FUNDING_RATE_USDT_MULTIPLE_SLUGS',
    'SAN_GAS_USED',
    'SAN_GITHUB_ACTIVITY',
    'SAN_HISTORICAL_BALANCE',
    'SAN_HISTORICAL_BALANCE_DEDUP',
    'SAN_HISTORY_TWITTER_DATA',
    'SAN_HOLDERS_DISTRIBUTION',
    'SAN_HOLDERS_DISTRIBUTION_AGGREGATED',
    'SAN_HOLDERS_DISTRIBUTION_COMBINED_BALANCE',
    'SAN_HOLDERS_DISTRIBUTION_COMBINED_BALANCE_AGGREGATED',
    'SAN_HOLDERS_DISTRIBUTION_COMBINED_BALANCE_MULTIPLE_SLUGS',
    'SAN_HOLDERS_DISTRIBUTION_MULTIPLE_SLUGS',
    'SAN_LATEST_PRICE',
    'SAN_MARKETCAP',
    'SAN_MARKETCAP_AGGREGATED',
    'SAN_MARKETCAP_MULTIPLE_SLUGS',
    'SAN_MEAN_AGE',
    'SAN_MEAN_AGE_AGGREGATED',
    'SAN_MEAN_AGE_MULTIPLE_SLUGS',
    'SAN_MEAN_DOLLAR_INVESTED_AGE',
    'SAN_MEAN_DOLLAR_INVESTED_AGE_AGGREGATED',
    'SAN_MEAN_DOLLAR_INVESTED_AGE_MULTIPLE_SLUGS',
    'SAN_MEAN_REALIZED_PRICE',
    'SAN_MEAN_REALIZED_PRICE_AGGREGATED',
    'SAN_MEAN_REALIZED_PRICE_MULTIPLE_SLUGS',
    'SAN_MINERS_BALANCE',
    'SAN_MINING_POOLS_DISTRIBUTION',
    'SAN_MVRV_LONG_SHORT_DIFF',
    'SAN_MVRV_LONG_SHORT_DIFF_AGGREGATED',
    'SAN_MVRV_LONG_SHORT_DIFF_MULTIPLE_SLUGS',
    'SAN_MVRV_RATIO',
    'SAN_MVRV_RATIO_AGGREGATED',
    'SAN_MVRV_RATIO_INTRADAY',
    'SAN_MVRV_RATIO_INTRADAY_AGGREGATED',
    'SAN_MVRV_RATIO_INTRADAY_MULTIPLE_SLUGS',
    'SAN_MVRV_RATIO_MULTIPLE_SLUGS',
    'SAN_NETWORK_GROWTH',
    'SAN_NETWORK_GROWTH_AGGREGATED',
    'SAN_NETWORK_GROWTH_MULTIPLE_SLUGS',
    'SAN_NETWORK_PROFIT_LOSS',
    'SAN_NETWORK_PROFIT_LOSS_AGGREGATED',
    'SAN_NETWORK_PROFIT_LOSS_MULTIPLE_SLUGS',
    'SAN_NVT_RATIO',
    'SAN_NVT_RATIO_AGGREGATED',
    'SAN_NVT_RATIO_MULTIPLE_SLUGS',
    'SAN_OHLC',
    'SAN_PRICE',
    'SAN_PRICE_ABSOLUTE_CHANGE',
    'SAN_PRICE_AGGREGATED',
    'SAN_PRICE_MULTIPLE_SLUGS',
    'SAN_PRICE_PERCENT_CHANGE',
    'SAN_PRICE_VOLUME',
    'SAN_PRICE_VOLUME_DIFF',
    'SAN_PRICES',
    'SAN_PROJECT_FUNDAMENTALS',
    'SAN_PROJECT_SOCIAL_DATA',
    'SAN_REALIZED_VALUE',
    'SAN_REALIZED_VALUE_AGGREGATED',
    'SAN_REALIZED_VALUE_MULTIPLE_SLUGS',
    'SAN_REVERSE',
    'SAN_SOCIAL_DOMINANCE',
    'SAN_SOCIAL_DOMINANCE_AGGREGATED',
    'SAN_SOCIAL_DOMINANCE_MULTIPLE_SLUGS',
    'SAN_SOCIAL_VOLUME',
    'SAN_SOCIAL_VOLUME_AGGREGATED',
    'SAN_SOCIAL_VOLUME_MULTIPLE_SLUGS',
    'SAN_SOCIAL_VOLUME_PROJECTS',
    'SAN_TOKEN_AGE_CONSUMED',
    'SAN_TOKEN_CIRCULATION',
    'SAN_TOKEN_CIRCULATION_AGGREGATED',
    'SAN_TOKEN_CIRCULATION_MULTIPLE_SLUGS',
    'SAN_TOKEN_TOP_TRANSACTIONS',
    'SAN_TOP_HOLDERS_HELD_OFF_EXCHANGE',
    'SAN_TOP_HOLDERS_HELD_ON_EXCHANGE',
    'SAN_TOP_HOLDERS_HELD_OVERALL',
    'SAN_TOP_HOLDERS_PERCENT_OF_TOTAL_SUPPLY',
    'SAN_TRADING_VOLUME',
    'SAN_TRADING_VOLUME_AGGREGATED',
    'SAN_TRADING_VOLUME_MULTIPLE_SLUGS',
    'SAN_TRANSACTION_VOLUME',
    'SAN_TRANSACTION_VOLUME_AGGREGATED',
    'SAN_TRANSACTION_VOLUME_MULTIPLE_SLUGS',
    'SAN_VELOCITY',
    'SAN_VELOCITY_AGGREGATED',
    'SAN_VELOCITY_MULTIPLE_SLUGS',
    'SAN_VOLUME',
    'SAN_VOLUME_AGGREGATED',
    'SAN_VOLUME_MULTIPLE_SLUGS',
    'SAN_WEIGHTED_SOCIAL_SENTIMENT',
    'SAN_WEIGHTED_SOCIAL_SENTIMENT_AGGREGATED',
    'SAN_WEIGHTED_SOCIAL_SENTIMENT_MULTIPLE_SLUGS',
    'SAN_WHALE_TRANSACTION_COUNT',
    'SAN_WHALE_TRANSACTION_COUNT_AGGREGATED',
    'SAN_WHALE_TRANSACTION_COUNT_MULTIPLE_SLUGS',
    'SAN_WITHDRAWAL_TRANSACTIONS_INTRADAY',
    'SAN_WITHDRAWAL_TRANSACTIONS_INTRADAY_AGGREGATED',
    'SAN_WITHDRAWAL_TRANSACTIONS_INTRADAY_MULTIPLE_SLUGS'
  ]
}
/* eslint-disable no-multi-spaces*/
/**
* Returns the daily average marketcap.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated using a currency of choice.
* Available currencies: USD
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated daily average marketcaps.
* @customfunction
*/
function SAN_DAILY_AVG_MARKETCAP_AGGREGATED (projectSlug, from, to, currency, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'daily_avg_marketcap',
    projectSlug,
    from,
    to,
    { currency: currency, aggregation: aggregation }
  )
}


/**
* Returns the daily closing marketcap.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated using a currency of choice.
* Available currencies: USD
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated daily closing marketcaps.
* @customfunction
*/
function SAN_DAILY_CLOSING_MARKETCAP_AGGREGATED (projectSlug, from, to, currency, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'daily_closing_marketcap',
    projectSlug,
    from,
    to,
    { currency: currency, aggregation: aggregation }
  )
}


/**
* Returns the mean realized price.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated using a currency of choice.
* Available currencies: USD
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens/coins that have moved in the past number of years/days.
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated mean realized prices.
* @customfunction
*/
function SAN_MEAN_REALIZED_PRICE_AGGREGATED (projectSlug, from, to, currency, timeBound, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'mean_realized_price',
    projectSlug,
    from,
    to,
    { currency: currency, timeBound: timeBound, aggregation: aggregation }
  )
}


/**
* Returns the difference between MVRV.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated using a currency of choice.
* Available currencies: USD
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated MVRV differences.
* @customfunction
*/
function SAN_MVRV_LONG_SHORT_DIFF_AGGREGATED (projectSlug, from, to, currency, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'mvrv_long_short_diff',
    projectSlug,
    from,
    to,
    { currency: currency, aggregation: aggregation }
  )
}


/**
* Returns MVRV(Market-Value-to-Realized-Value).
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated using a currency of choice.
* Available currencies: USD
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens/coins that have moved in the past number of years/days.
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated MVRV ratios.
* @customfunction
*/
function SAN_MVRV_RATIO_AGGREGATED (projectSlug, from, to, currency, timeBound, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'mvrv',
    projectSlug,
    from,
    to,
    { currency: currency, timeBound: timeBound, aggregation: aggregation }
  )
}


/**
* Returns token circulation for a given slug and time interval.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens/coins that have moved in the past number of years/days.
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated token circulation values.
* @customfunction
*/
function SAN_TOKEN_CIRCULATION_AGGREGATED (projectSlug, from, to, timeBound, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'circulation',
    projectSlug,
    from,
    to,
    { timeBound: timeBound, aggregation: aggregation }
  )
}


/**
* Returns the token's mean age.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated mean age values.
* @customfunction
*/
function SAN_MEAN_AGE_AGGREGATED (projectSlug, from, to, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'mean_age',
    projectSlug,
    from,
    to,
    { aggregation: aggregation }
  )
}


/**
* Returns the token's mean dollar invested age.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated mean dollar invested age values.
* @customfunction
*/
function SAN_MEAN_DOLLAR_INVESTED_AGE_AGGREGATED (projectSlug, from, to, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'mean_dollar_invested_age',
    projectSlug,
    from,
    to,
    { aggregation: aggregation }
  )
}


/**
* Returns Realized value - sum of the acquisition costs of an asset located in a wallet.
* The realized value across the whole network is computed by summing the realized values
* of all wallets holding tokens at the moment.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated using a currency of choice.
* Available currencies: USD
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens/coins that have moved in the past number of years/days.
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated realized values.
* @customfunction
*/
function SAN_REALIZED_VALUE_AGGREGATED (projectSlug, from, to, currency, timeBound, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'realized_value',
    projectSlug,
    from,
    to,
    { currency: currency, timeBound: timeBound, aggregation: aggregation }
  )
}


/**
* Returns the token's velocity.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated token velocity values.
* @customfunction
*/
function SAN_VELOCITY_AGGREGATED (projectSlug, from, to, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'velocity',
    projectSlug,
    from,
    to,
    { aggregation: aggregation }
  )
}


/**
* Gets the transaction volume for the specified asset, during a given time interval.
* Transaction Volume" refers to the total number of tokens within all
* transfers that have occurred on a blockchain.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated transaction volumes.
* @customfunction
*/
function SAN_TRANSACTION_VOLUME_AGGREGATED (projectSlug, from, to, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'transaction_volume',
    projectSlug,
    from,
    to,
    { aggregation: aggregation }
  )
}


/**
* Returns the exchange inflow.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated exchange inflows.
* @customfunction
*/
function SAN_EXCHANGE_INFLOW_AGGREGATED (projectSlug, from, to, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'exchange_inflow',
    projectSlug,
    from,
    to,
    { aggregation: aggregation }
  )
}


/**
* Returns the exchange outflow.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated exchange outflows.
* @customfunction
*/
function SAN_EXCHANGE_OUTFLOW_AGGREGATED (projectSlug, from, to, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'exchange_outflow',
    projectSlug,
    from,
    to,
    { aggregation: aggregation }
  )
}


/**
* Returns the exchange balance.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated exchange balances.
* @customfunction
*/
function SAN_EXCHANGE_BALANCE_AGGREGATED (projectSlug, from, to, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'exchange_balance',
    projectSlug,
    from,
    to,
    { aggregation: aggregation }
  )
}


/**
* Returns the token's age destroyed
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated age destroyed values.
* @customfunction
*/
function SAN_AGE_DESTROYED_AGGREGATED (projectSlug, from, to, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'age_destroyed',
    projectSlug,
    from,
    to,
    { aggregation: aggregation }
  )
}


/**
* Returns NVT (Network-Value-to-Transactions-Ratio Daily Market Cap / Daily Token Circulation)
* Since Daily Transaction Volume gets rather noisy and easy to manipulate
* by transferring the same tokens through a couple of addresses repeatedly,
* it’s not an ideal measure of a network’s economic activity. That’s why we also
* offer another way to calculate NVT by using Daily Token Circulation.
* This method filters out excess transactions and provides a cleaner overview of a blockchain’s
* daily transaction throughput.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated NVT ratios
* @customfunction
*/
function SAN_NVT_RATIO_AGGREGATED (projectSlug, from, to, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'nvt',
    projectSlug,
    from,
    to,
    { aggregation: aggregation }
  )
}


/**
* Returns the token's network growth
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated network growth.
* @customfunction
*/
function SAN_NETWORK_GROWTH_AGGREGATED (projectSlug, from, to, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'network_growth',
    projectSlug,
    from,
    to,
    { aggregation: aggregation }
  )
}


/**
* Returns number of unique deposit addresses that have been active for a project.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated deposit address numbers.
* @customfunction
*/
function SAN_ACTIVE_DEPOSITS_AGGREGATED (projectSlug, from, to, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'active_deposits',
    projectSlug,
    from,
    to,
    { aggregation: aggregation }
  )
}


/**
* Returns the active addresses for the specified asset, during a given time interval.
* Active Addresses" refers to the number of unique addresses that
* participated in transactions on a blockchain.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated active addresses.
* @customfunction
*/
function SAN_ACTIVE_ADDRESSES_AGGREGATED (projectSlug, from, to, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'daily_active_addresses',
    projectSlug,
    from,
    to,
    { aggregation: aggregation }
  )
}


/**
* Returns the active addresses for the specified asset, during a given time interval.
* Active Addresses" refers to the number of unique addresses that
* participated in transactions on a blockchain.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated active addresses for the last 24 hours.
* @customfunction
*/
function SAN_ACTIVE_ADDRESSES_24H_AGGREGATED (projectSlug, from, to, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'active_addresses_24h',
    projectSlug,
    from,
    to,
    { aggregation: aggregation }
  )
}


/**
* Returns exchange percent of total supply.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated exchange percent of total supply.
* @customfunction
*/
function SAN_EXCHANGE_PERCENT_OF_SUPPLY_AGGREGATED (projectSlug, from, to, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'percent_of_total_supply_on_exchanges',
    projectSlug,
    from,
    to,
    { aggregation: aggregation }
  )
}


/**
* Represents the total number of addresses holding the given amount of tokens.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
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
* "10M-inf",
* "total"
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated total number of addresses holding the given amount of tokens.
* @customfunction
*/
function SAN_HOLDERS_DISTRIBUTION_AGGREGATED (projectSlug, from, to, balance = 'total', aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'holders_distribution',
    projectSlug,
    from,
    to,
    { balance: balance, aggregation: aggregation }
  )
}


/**
* Returns the funding rates that are paid by one of the sides of the perpetual contract to the other
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated the funding rates that are paid by one of the sides of the perpetual contract to the other
* @customfunction
*/
function SAN_BITMEX_PERPETUAL_CONTRACT_FUNDING_RATE_AGGREGATED (projectSlug, from, to, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'bitmex_perpetual_funding_rate',
    projectSlug,
    from,
    to,
    { aggregation: aggregation }
  )
}


/**
* Returns the network's profit/loss.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated the network's profit/loss.
* @customfunction
*/
function SAN_NETWORK_PROFIT_LOSS_AGGREGATED (projectSlug, from, to, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'network_profit_loss',
    projectSlug,
    from,
    to,
    { aggregation: aggregation }
  )
}


/**
* Returns the prices for the slug in the given time period.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated using a currency of choice.
* Available currencies: USD
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated the prices for the slug in the given time period.
* @customfunction
*/
function SAN_PRICE_AGGREGATED (projectSlug, from, to, currency, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'price',
    projectSlug,
    from,
    to,
    { currency: currency, aggregation: aggregation }
  )
}


/**
* Returns the slug's transaction volume.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated the slug's transaction volume.
* @customfunction
*/
function SAN_VOLUME_AGGREGATED (projectSlug, from, to, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'transaction_volume',
    projectSlug,
    from,
    to,
    { aggregation: aggregation }
  )
}


/**
* Returns the social volume for a slug.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} source The source of mention counts, one of the following:
* "TELEGRAM_CHATS_OVERVIEW",
* "TELEGRAM_DISCUSSION_OVERVIEW",
* "TWITTER_CHATS_OVERVIEW",
* "REDDIT_COMMENTS_OVERVIEW",
* "TOTAL"
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated the slug's social volume.
* @customfunction
*/
function SAN_SOCIAL_VOLUME_AGGREGATED (projectSlug, from, to, source, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'social_volume',
    projectSlug,
    from,
    to,
    { source: source, aggregation: aggregation }
  )
}


/**
* Returns the marketcap for a slug.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated using a currency of choice.
* Available currencies: USD
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated the slug's marketcap.
* @customfunction
*/
function SAN_MARKETCAP_AGGREGATED (projectSlug, from, to, currency, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'marketcap',
    projectSlug,
    from,
    to,
    { currency: currency, aggregation: aggregation }
  )
}


/**
* Returns the number of transactions transferring more than 100k USD.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated the number of transactions transferring more than 100k USD.
* @customfunction
*/
function SAN_WHALE_TRANSACTION_COUNT_AGGREGATED (projectSlug, from, to, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'whale_transaction_count_100k_usd_to_inf',
    projectSlug,
    from,
    to,
    { aggregation: aggregation }
  )
}


/**
* Returns the number of tokens in a specific bucket.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
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
* "10M-inf",
* "total"
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated the number of tokens in a specific bucket.
* @customfunction
*/
function SAN_HOLDERS_DISTRIBUTION_COMBINED_BALANCE_AGGREGATED (projectSlug, from, to, balance = 'total', aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'holders_distribution_combined_balance',
    projectSlug,
    from,
    to,
    { balance: balance, aggregation: aggregation }
  )
}


/**
* Returns the weighted social sentiment for a slug.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} source The source of mention counts, one of the following:
* "TELEGRAM_CHATS_OVERVIEW",
* "TELEGRAM_DISCUSSION_OVERVIEW",
* "TWITTER_CHATS_OVERVIEW",
* "REDDIT_COMMENTS_OVERVIEW",
* "TOTAL"
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated the slug's weighted social sentiment.
* @customfunction
*/
function SAN_WEIGHTED_SOCIAL_SENTIMENT_AGGREGATED (projectSlug, from, to, source, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'sentiment_volume_consumed',
    projectSlug,
    from,
    to,
    { source: source, aggregation: aggregation }
  )
}


/**
* Returns the amount of open perpetual contracts currently on Bitmex's
* Project Ticker / USD trading pairs. When open interest reaches unusually high numbers,
* it can precede increased volatility in the coin’s price.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated the amount of open perpetual contracts.
* @customfunction
*/
function SAN_BITMEX_PERPETUAL_OPEN_INTEREST_AGGREGATED (projectSlug, from, to, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'bitmex_perpetual_open_interest',
    projectSlug,
    from,
    to,
    { aggregation: aggregation }
  )
}


/**
* Returns the social dominance for a slug.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} source The source of mention counts, one of the following:
* "TELEGRAM_CHATS_OVERVIEW",
* "TELEGRAM_DISCUSSION_OVERVIEW",
* "TWITTER_CHATS_OVERVIEW",
* "REDDIT_COMMENTS_OVERVIEW",
* "TOTAL"
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated the slug's social dominance.
* @customfunction
*/
function SAN_SOCIAL_DOMINANCE_AGGREGATED (projectSlug, from, to, source, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'social_dominance',
    projectSlug,
    from,
    to,
    { source: source, aggregation: aggregation }
  )
}


/**
* Returns the funding rates that are paid by one of the sides of the perpetual contract to the other (USDT).
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} fundingRateExchange The exchange platform, from which funding rates are fetched, BITMEX by default:
* "BITMEX"
* "BINANCE"
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated the funding rates that are paid by one of the sides of the perpetual contract to the other (USDT).
* @customfunction
*/
function SAN_FUNDING_RATE_USDT_AGGREGATED (projectSlug, from, to, fundingRateExchange, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'usdt_funding_rate',
    projectSlug,
    from,
    to,
    { fundingRateExchange: fundingRateExchange, aggregation: aggregation }
  )
}


/**
* Returns the funding rates that are paid by one of the sides of the perpetual contract to the other (BUSD).
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} fundingRateExchange The exchange platform, from which funding rates are fetched, BITMEX by default:
* "BITMEX"
* "BINANCE"
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated the funding rates that are paid by one of the sides of the perpetual contract to the other (BUSD).
* @customfunction
*/
function SAN_FUNDING_RATE_BUSD_AGGREGATED (projectSlug, from, to, fundingRateExchange, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'busd_funding_rate',
    projectSlug,
    from,
    to,
    { fundingRateExchange: fundingRateExchange, aggregation: aggregation }
  )
}


/**
* Returns the slug's trading volume.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated using a currency of choice.
* Available currencies: USD
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated the slugs's trading volume.
* @customfunction
*/
function SAN_TRADING_VOLUME_AGGREGATED (projectSlug, from, to, currency, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'volume',
    projectSlug,
    from,
    to,
    { currency: currency, aggregation: aggregation }
  )
}


/**
* Returns MVRV(Market-Value-to-Realized-Value) with the option of smaller intervals.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens/coins that have moved in the past number of years/days.
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated MVRV ratios with the option of smaller intervals.
* @customfunction
*/
function SAN_MVRV_RATIO_INTRADAY_AGGREGATED (projectSlug, from, to, timeBound, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'mvrv_usd_intraday',
    projectSlug,
    from,
    to,
    { timeBound: timeBound, aggregation: aggregation }
  )
}


/**
* Returns number of withdrawal transactions.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated number of withdrawal transactions.
* @customfunction
*/
function SAN_DAILY_WITHDRAWAL_TRANSACTIONS_AGGREGATED (projectSlug, from, to, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'withdrawal_transactions',
    projectSlug,
    from,
    to,
    { aggregation: aggregation }
  )
}


/**
* Returns number of withdrawal transactions with the option of smaller intervals.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated number of withdrawal transactions with the option of smaller intervals.
* @customfunction
*/
function SAN_WITHDRAWAL_TRANSACTIONS_INTRADAY_AGGREGATED (projectSlug, from, to, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'withdrawal_transactions_5m',
    projectSlug,
    from,
    to,
    { aggregation: aggregation }
  )
}


/**
* Returns number of withdrawal transactions.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated number of withdrawal transactions.
* @customfunction
*/
function SAN_DAILY_DEPOSIT_TRANSACTIONS_AGGREGATED (projectSlug, from, to, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'deposit_transactions',
    projectSlug,
    from,
    to,
    { aggregation: aggregation }
  )
}


/**
* Returns number of withdrawal transactions with the option of smaller intervals.
* @param {string} projectSlug Name of the asset,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} aggregation Aggregation for the timeseries metrics. Example: "LAST"
* @returns {number} of aggregated number of withdrawal transactions with the option of smaller intervals.
* @customfunction
*/
function SAN_DEPOSIT_TRANSACTIONS_INTRADAY_AGGREGATED (projectSlug, from, to, aggregation = 'null') {
  return handleErrors_(aggregatedGetMetric_)(
    'deposit_transactions_5m',
    projectSlug,
    from,
    to,
    { aggregation: aggregation }
  )
}

/* eslint-disable no-multi-spaces*/
/**
* Returns the daily average marketcap.
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated using a currency of choice.
* Available currencies: USD
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* daily average marketcaps.
* @customfunction
*/
function SAN_DAILY_AVG_MARKETCAP_MULTIPLE_SLUGS (projectSlugsList, from, to, currency, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'daily_avg_marketcap',
    projectSlugsList,
    from,
    to,
    { currency: currency, interval: interval }
  )
}


/**
* Returns the daily closing marketcap.
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated using a currency of choice.
* Available currencies: USD
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* daily closing marketcaps.
* @customfunction
*/
function SAN_DAILY_CLOSING_MARKETCAP_MULTIPLE_SLUGS (projectSlugsList, from, to, currency, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'daily_closing_marketcap',
    projectSlugsList,
    from,
    to,
    { currency: currency, interval: interval }
  )
}


/**
* Returns the mean realized price.
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated using a currency of choice.
* Available currencies: USD
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens/coins that have moved in the past number of years/days.
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* mean realized prices.
* @customfunction
*/
function SAN_MEAN_REALIZED_PRICE_MULTIPLE_SLUGS (projectSlugsList, from, to, currency, timeBound, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'mean_realized_price',
    projectSlugsList,
    from,
    to,
    { currency: currency, timeBound: timeBound, interval: interval }
  )
}


/**
* Returns the difference between MVRV.
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated using a currency of choice.
* Available currencies: USD
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* MVRV differences.
* @customfunction
*/
function SAN_MVRV_LONG_SHORT_DIFF_MULTIPLE_SLUGS (projectSlugsList, from, to, currency, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'mvrv_long_short_diff',
    projectSlugsList,
    from,
    to,
    { currency: currency, interval: interval }
  )
}


/**
* Returns MVRV(Market-Value-to-Realized-Value).
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated using a currency of choice.
* Available currencies: USD
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens/coins that have moved in the past number of years/days.
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* MVRV ratios.
* @customfunction
*/
function SAN_MVRV_RATIO_MULTIPLE_SLUGS (projectSlugsList, from, to, currency, timeBound, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'mvrv',
    projectSlugsList,
    from,
    to,
    { currency: currency, timeBound: timeBound, interval: interval }
  )
}


/**
* Returns token circulation for a given slug and time interval.
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens/coins that have moved in the past number of years/days.
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* token circulation values.
* @customfunction
*/
function SAN_TOKEN_CIRCULATION_MULTIPLE_SLUGS (projectSlugsList, from, to, timeBound, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'circulation',
    projectSlugsList,
    from,
    to,
    { timeBound: timeBound, interval: interval }
  )
}


/**
* Returns the token's mean age.
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* mean age values.
* @customfunction
*/
function SAN_MEAN_AGE_MULTIPLE_SLUGS (projectSlugsList, from, to, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'mean_age',
    projectSlugsList,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns the token's mean dollar invested age.
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* mean dollar invested age values.
* @customfunction
*/
function SAN_MEAN_DOLLAR_INVESTED_AGE_MULTIPLE_SLUGS (projectSlugsList, from, to, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'mean_dollar_invested_age',
    projectSlugsList,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns Realized value - sum of the acquisition costs of an asset located in a wallet.
* The realized value across the whole network is computed by summing the realized values
* of all wallets holding tokens at the moment.
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated using a currency of choice.
* Available currencies: USD
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens/coins that have moved in the past number of years/days.
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* realized values.
* @customfunction
*/
function SAN_REALIZED_VALUE_MULTIPLE_SLUGS (projectSlugsList, from, to, currency, timeBound, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'realized_value',
    projectSlugsList,
    from,
    to,
    { currency: currency, timeBound: timeBound, interval: interval }
  )
}


/**
* Returns the token's velocity.
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* token velocity values.
* @customfunction
*/
function SAN_VELOCITY_MULTIPLE_SLUGS (projectSlugsList, from, to, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'velocity',
    projectSlugsList,
    from,
    to,
    { interval: interval }
  )
}


/**
* Gets the transaction volume for the specified asset, during a given time interval.
* Transaction Volume" refers to the total number of tokens within all
* transfers that have occurred on a blockchain.
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* transaction volumes.
* @customfunction
*/
function SAN_TRANSACTION_VOLUME_MULTIPLE_SLUGS (projectSlugsList, from, to, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'transaction_volume',
    projectSlugsList,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns the exchange inflow.
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* exchange inflows.
* @customfunction
*/
function SAN_EXCHANGE_INFLOW_MULTIPLE_SLUGS (projectSlugsList, from, to, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'exchange_inflow',
    projectSlugsList,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns the exchange outflow.
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* exchange outflows.
* @customfunction
*/
function SAN_EXCHANGE_OUTFLOW_MULTIPLE_SLUGS (projectSlugsList, from, to, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'exchange_outflow',
    projectSlugsList,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns the exchange balance.
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* exchange balances.
* @customfunction
*/
function SAN_EXCHANGE_BALANCE_MULTIPLE_SLUGS (projectSlugsList, from, to, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'exchange_balance',
    projectSlugsList,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns the token's age destroyed
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* age destroyed values.
* @customfunction
*/
function SAN_AGE_DESTROYED_MULTIPLE_SLUGS (projectSlugsList, from, to, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'age_destroyed',
    projectSlugsList,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns NVT (Network-Value-to-Transactions-Ratio Daily Market Cap / Daily Token Circulation)
* Since Daily Transaction Volume gets rather noisy and easy to manipulate
* by transferring the same tokens through a couple of addresses repeatedly,
* it’s not an ideal measure of a network’s economic activity. That’s why we also
* offer another way to calculate NVT by using Daily Token Circulation.
* This method filters out excess transactions and provides a cleaner overview of a blockchain’s
* daily transaction throughput.
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* NVT ratios
* @customfunction
*/
function SAN_NVT_RATIO_MULTIPLE_SLUGS (projectSlugsList, from, to, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'nvt',
    projectSlugsList,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns the token's network growth
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* network growth.
* @customfunction
*/
function SAN_NETWORK_GROWTH_MULTIPLE_SLUGS (projectSlugsList, from, to, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'network_growth',
    projectSlugsList,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns number of unique deposit addresses that have been active for a project.
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* deposit address numbers.
* @customfunction
*/
function SAN_ACTIVE_DEPOSITS_MULTIPLE_SLUGS (projectSlugsList, from, to, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'active_deposits',
    projectSlugsList,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns the active addresses for the specified asset, during a given time interval.
* Active Addresses" refers to the number of unique addresses that
* participated in transactions on a blockchain.
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* active addresses.
* @customfunction
*/
function SAN_ACTIVE_ADDRESSES_MULTIPLE_SLUGS (projectSlugsList, from, to, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'daily_active_addresses',
    projectSlugsList,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns the active addresses for the specified asset, during a given time interval.
* Active Addresses" refers to the number of unique addresses that
* participated in transactions on a blockchain.
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* active addresses for the last 24 hours.
* @customfunction
*/
function SAN_ACTIVE_ADDRESSES_24H_MULTIPLE_SLUGS (projectSlugsList, from, to, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'active_addresses_24h',
    projectSlugsList,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns exchange percent of total supply.
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* exchange percent of total supply.
* @customfunction
*/
function SAN_EXCHANGE_PERCENT_OF_SUPPLY_MULTIPLE_SLUGS (projectSlugsList, from, to, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'percent_of_total_supply_on_exchanges',
    projectSlugsList,
    from,
    to,
    { interval: interval }
  )
}


/**
* Represents the total number of addresses holding the given amount of tokens.
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
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
* "10M-inf",
* "total"
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* total number of addresses holding the given amount of tokens.
* @customfunction
*/
function SAN_HOLDERS_DISTRIBUTION_MULTIPLE_SLUGS (projectSlugsList, from, to, balance = 'total', interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'holders_distribution',
    projectSlugsList,
    from,
    to,
    { balance: balance, interval: interval }
  )
}


/**
* Returns the funding rates that are paid by one of the sides of the perpetual contract to the other
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* the funding rates that are paid by one of the sides of the perpetual contract to the other
* @customfunction
*/
function SAN_BITMEX_PERPETUAL_CONTRACT_FUNDING_RATE_MULTIPLE_SLUGS (projectSlugsList, from, to, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'bitmex_perpetual_funding_rate',
    projectSlugsList,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns the network's profit/loss.
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* the network's profit/loss.
* @customfunction
*/
function SAN_NETWORK_PROFIT_LOSS_MULTIPLE_SLUGS (projectSlugsList, from, to, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'network_profit_loss',
    projectSlugsList,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns the prices for the slug in the given time period.
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated using a currency of choice.
* Available currencies: USD
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* the prices for the slug in the given time period.
* @customfunction
*/
function SAN_PRICE_MULTIPLE_SLUGS (projectSlugsList, from, to, currency, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'price',
    projectSlugsList,
    from,
    to,
    { currency: currency, interval: interval }
  )
}


/**
* Returns the slug's transaction volume.
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* the slug's transaction volume.
* @customfunction
*/
function SAN_VOLUME_MULTIPLE_SLUGS (projectSlugsList, from, to, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'transaction_volume',
    projectSlugsList,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns the social volume for a slug.
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} source The source of mention counts, one of the following:
* "TELEGRAM_CHATS_OVERVIEW",
* "TELEGRAM_DISCUSSION_OVERVIEW",
* "TWITTER_CHATS_OVERVIEW",
* "REDDIT_COMMENTS_OVERVIEW",
* "TOTAL"
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* the slug's social volume.
* @customfunction
*/
function SAN_SOCIAL_VOLUME_MULTIPLE_SLUGS (projectSlugsList, from, to, source, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'social_volume',
    projectSlugsList,
    from,
    to,
    { source: source, interval: interval }
  )
}


/**
* Returns the marketcap for a slug.
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated using a currency of choice.
* Available currencies: USD
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* the slug's marketcap.
* @customfunction
*/
function SAN_MARKETCAP_MULTIPLE_SLUGS (projectSlugsList, from, to, currency, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'marketcap',
    projectSlugsList,
    from,
    to,
    { currency: currency, interval: interval }
  )
}


/**
* Returns the number of transactions transferring more than 100k USD.
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* the number of transactions transferring more than 100k USD.
* @customfunction
*/
function SAN_WHALE_TRANSACTION_COUNT_MULTIPLE_SLUGS (projectSlugsList, from, to, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'whale_transaction_count_100k_usd_to_inf',
    projectSlugsList,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns the number of tokens in a specific bucket.
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
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
* "10M-inf",
* "total"
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* the number of tokens in a specific bucket.
* @customfunction
*/
function SAN_HOLDERS_DISTRIBUTION_COMBINED_BALANCE_MULTIPLE_SLUGS (projectSlugsList, from, to, balance = 'total', interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'holders_distribution_combined_balance',
    projectSlugsList,
    from,
    to,
    { balance: balance, interval: interval }
  )
}


/**
* Returns the weighted social sentiment for a slug.
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} source The source of mention counts, one of the following:
* "TELEGRAM_CHATS_OVERVIEW",
* "TELEGRAM_DISCUSSION_OVERVIEW",
* "TWITTER_CHATS_OVERVIEW",
* "REDDIT_COMMENTS_OVERVIEW",
* "TOTAL"
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* the slug's weighted social sentiment.
* @customfunction
*/
function SAN_WEIGHTED_SOCIAL_SENTIMENT_MULTIPLE_SLUGS (projectSlugsList, from, to, source, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'sentiment_volume_consumed',
    projectSlugsList,
    from,
    to,
    { source: source, interval: interval }
  )
}


/**
* Returns the amount of open perpetual contracts currently on Bitmex's
* Project Ticker / USD trading pairs. When open interest reaches unusually high numbers,
* it can precede increased volatility in the coin’s price.
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* the amount of open perpetual contracts.
* @customfunction
*/
function SAN_BITMEX_PERPETUAL_OPEN_INTEREST_MULTIPLE_SLUGS (projectSlugsList, from, to, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'bitmex_perpetual_open_interest',
    projectSlugsList,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns the social dominance for a slug.
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} source The source of mention counts, one of the following:
* "TELEGRAM_CHATS_OVERVIEW",
* "TELEGRAM_DISCUSSION_OVERVIEW",
* "TWITTER_CHATS_OVERVIEW",
* "REDDIT_COMMENTS_OVERVIEW",
* "TOTAL"
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* the slug's social dominance.
* @customfunction
*/
function SAN_SOCIAL_DOMINANCE_MULTIPLE_SLUGS (projectSlugsList, from, to, source, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'social_dominance',
    projectSlugsList,
    from,
    to,
    { source: source, interval: interval }
  )
}


/**
* Returns the funding rates that are paid by one of the sides of the perpetual contract to the other (USDT).
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} fundingRateExchange The exchange platform, from which funding rates are fetched, BITMEX by default:
* "BITMEX"
* "BINANCE"
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* the funding rates that are paid by one of the sides of the perpetual contract to the other (USDT).
* @customfunction
*/
function SAN_FUNDING_RATE_USDT_MULTIPLE_SLUGS (projectSlugsList, from, to, fundingRateExchange, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'usdt_funding_rate',
    projectSlugsList,
    from,
    to,
    { fundingRateExchange: fundingRateExchange, interval: interval }
  )
}


/**
* Returns the funding rates that are paid by one of the sides of the perpetual contract to the other (BUSD).
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} fundingRateExchange The exchange platform, from which funding rates are fetched, BITMEX by default:
* "BITMEX"
* "BINANCE"
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* the funding rates that are paid by one of the sides of the perpetual contract to the other (BUSD).
* @customfunction
*/
function SAN_FUNDING_RATE_BUSD_MULTIPLE_SLUGS (projectSlugsList, from, to, fundingRateExchange, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'busd_funding_rate',
    projectSlugsList,
    from,
    to,
    { fundingRateExchange: fundingRateExchange, interval: interval }
  )
}


/**
* Returns the slug's trading volume.
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} currency The metric is calculated using a currency of choice.
* Available currencies: USD
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* the slugs's trading volume.
* @customfunction
*/
function SAN_TRADING_VOLUME_MULTIPLE_SLUGS (projectSlugsList, from, to, currency, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'volume',
    projectSlugsList,
    from,
    to,
    { currency: currency, interval: interval }
  )
}


/**
* Returns MVRV(Market-Value-to-Realized-Value) with the option of smaller intervals.
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} timeBound The metric is calculated only by taking into account the
* tokens/coins that have moved in the past number of years/days.
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* MVRV ratios with the option of smaller intervals.
* @customfunction
*/
function SAN_MVRV_RATIO_INTRADAY_MULTIPLE_SLUGS (projectSlugsList, from, to, timeBound, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'mvrv_usd_intraday',
    projectSlugsList,
    from,
    to,
    { timeBound: timeBound, interval: interval }
  )
}


/**
* Returns number of withdrawal transactions.
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* number of withdrawal transactions.
* @customfunction
*/
function SAN_DAILY_WITHDRAWAL_TRANSACTIONS_MULTIPLE_SLUGS (projectSlugsList, from, to, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'withdrawal_transactions',
    projectSlugsList,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns number of withdrawal transactions with the option of smaller intervals.
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* number of withdrawal transactions with the option of smaller intervals.
* @customfunction
*/
function SAN_WITHDRAWAL_TRANSACTIONS_INTRADAY_MULTIPLE_SLUGS (projectSlugsList, from, to, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'withdrawal_transactions_5m',
    projectSlugsList,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns number of withdrawal transactions.
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* number of withdrawal transactions.
* @customfunction
*/
function SAN_DAILY_DEPOSIT_TRANSACTIONS_MULTIPLE_SLUGS (projectSlugsList, from, to, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'deposit_transactions',
    projectSlugsList,
    from,
    to,
    { interval: interval }
  )
}


/**
* Returns number of withdrawal transactions with the option of smaller intervals.
* @param {string} projectSlugsList Comma-separated names of the assets,
* more info at https://academy.santiment.net/glossary/#slug. Example: "santiment,bitcoin".
* @param {date} from The starting date to fetch the data. Example: DATE(2018, 9, 20)
* @param {date} to The ending date to fetch the data. Example: DATE(2018, 9, 21)
* @param {string} interval The resolution with which the data is fetched. Example: "5m"
* @returns {number} of results for multiple slugs
* number of withdrawal transactions with the option of smaller intervals.
* @customfunction
*/
function SAN_DEPOSIT_TRANSACTIONS_INTRADAY_MULTIPLE_SLUGS (projectSlugsList, from, to, interval = '1d') {
  return handleErrors_(getMetricMultipleSlugs_)(
    'deposit_transactions_5m',
    projectSlugsList,
    from,
    to,
    { interval: interval }
  )
}

