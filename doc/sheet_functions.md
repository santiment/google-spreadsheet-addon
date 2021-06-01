## Functions

<dl>
<dt><a href="#SAN_ACTIVE_ADDRESSES">SAN_ACTIVE_ADDRESSES(projectSlug, from, to, interval)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the active addresses for the specified asset, during a given time interval.
Active Addresses&quot; refers to the number of unique addresses that
participated in transactions on a blockchain.</p>
</dd>
<dt><a href="#SAN_ACTIVE_ADDRESSES_24H">SAN_ACTIVE_ADDRESSES_24H(projectSlug, from, to, interval)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the active addresses for the specified asset, during a given time interval.
Active Addresses&quot; refers to the number of unique addresses that
participated in transactions on a blockchain.</p>
</dd>
<dt><a href="#SAN_ACTIVE_ADDRESSES_24H_AGGREGATED">SAN_ACTIVE_ADDRESSES_24H_AGGREGATED(projectSlug, from, to, aggregation)</a> ⇒ <code>number</code></dt>
<dd><p>Returns the active addresses for the specified asset, during a given time interval.
Active Addresses&quot; refers to the number of unique addresses that
participated in transactions on a blockchain.</p>
</dd>
<dt><a href="#SAN_ACTIVE_ADDRESSES_AGGREGATED">SAN_ACTIVE_ADDRESSES_AGGREGATED(projectSlug, from, to, aggregation)</a> ⇒ <code>number</code></dt>
<dd><p>Returns the active addresses for the specified asset, during a given time interval.
Active Addresses&quot; refers to the number of unique addresses that
participated in transactions on a blockchain.</p>
</dd>
<dt><a href="#SAN_ACTIVE_DEPOSITS">SAN_ACTIVE_DEPOSITS(projectSlug, from, to, interval)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns number of unique deposit addresses that have been active for a project.</p>
</dd>
<dt><a href="#SAN_ACTIVE_DEPOSITS_AGGREGATED">SAN_ACTIVE_DEPOSITS_AGGREGATED(projectSlug, from, to, aggregation)</a> ⇒ <code>number</code></dt>
<dd><p>Returns number of unique deposit addresses that have been active for a project.</p>
</dd>
<dt><a href="#SAN_AGE_DESTROYED">SAN_AGE_DESTROYED(projectSlug, from, to, interval)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the token&#39;s age destroyed</p>
</dd>
<dt><a href="#SAN_AGE_DESTROYED_AGGREGATED">SAN_AGE_DESTROYED_AGGREGATED(projectSlug, from, to, aggregation)</a> ⇒ <code>number</code></dt>
<dd><p>Returns the token&#39;s age destroyed</p>
</dd>
<dt><a href="#SAN_ALL_PROJECTS">SAN_ALL_PROJECTS()</a> ⇒ <code>Array</code></dt>
<dd><p>Returns an array of all assets for which Santiment has data.
Each asset record includes: ticker, name, slug, price in USD, market cap in USD,
volume in USD, USD balance, ETH balance, ETH spent in the last 30 days,
ETH spent in the last 7 days, ETH spent in the last day.</p>
</dd>
<dt><a href="#SAN_BITMEX_PERPETUAL_CONTRACT_FUNDING_RATE">SAN_BITMEX_PERPETUAL_CONTRACT_FUNDING_RATE(projectSlug, from, to, interval)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the funding rates that are paid by one of the sides of the perpetual contract to the other</p>
</dd>
<dt><a href="#SAN_BITMEX_PERPETUAL_CONTRACT_FUNDING_RATE_AGGREGATED">SAN_BITMEX_PERPETUAL_CONTRACT_FUNDING_RATE_AGGREGATED(projectSlug, from, to, aggregation)</a> ⇒ <code>number</code></dt>
<dd><p>Returns the funding rates that are paid by one of the sides of the perpetual contract to the other</p>
</dd>
<dt><a href="#SAN_BITMEX_PERPETUAL_OPEN_INTEREST">SAN_BITMEX_PERPETUAL_OPEN_INTEREST(projectSlug, from, to, interval)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the amount of open perpetual contracts currently on Bitmex&#39;s
Project Ticker / USD trading pairs. When open interest reaches unusually high numbers,
it can precede increased volatility in the coin’s price.</p>
</dd>
<dt><a href="#SAN_BITMEX_PERPETUAL_OPEN_INTEREST_AGGREGATED">SAN_BITMEX_PERPETUAL_OPEN_INTEREST_AGGREGATED(projectSlug, from, to, aggregation)</a> ⇒ <code>number</code></dt>
<dd><p>Returns the amount of open perpetual contracts currently on Bitmex&#39;s
Project Ticker / USD trading pairs. When open interest reaches unusually high numbers,
it can precede increased volatility in the coin’s price.</p>
</dd>
<dt><a href="#SAN_DAILY_AVG_MARKETCAP">SAN_DAILY_AVG_MARKETCAP(projectSlug, from, to, currency, interval)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the daily average marketcap.</p>
</dd>
<dt><a href="#SAN_DAILY_AVG_MARKETCAP_AGGREGATED">SAN_DAILY_AVG_MARKETCAP_AGGREGATED(projectSlug, from, to, currency, aggregation)</a> ⇒ <code>number</code></dt>
<dd><p>Returns the daily average marketcap.</p>
</dd>
<dt><a href="#SAN_DAILY_CLOSING_MARKETCAP">SAN_DAILY_CLOSING_MARKETCAP(projectSlug, from, to, currency, interval)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the daily closing marketcap.</p>
</dd>
<dt><a href="#SAN_DAILY_CLOSING_MARKETCAP_AGGREGATED">SAN_DAILY_CLOSING_MARKETCAP_AGGREGATED(projectSlug, from, to, currency, aggregation)</a> ⇒ <code>number</code></dt>
<dd><p>Returns the daily closing marketcap.</p>
</dd>
<dt><a href="#SAN_DAILY_CLOSING_PRICE">SAN_DAILY_CLOSING_PRICE(projectSlug, day)</a> ⇒ <code>number</code></dt>
<dd><p>Returns the closing price for a given day.</p>
</dd>
<dt><a href="#SAN_DEV_ACTIVITY">SAN_DEV_ACTIVITY(projectSlug, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns a list of dev activity for a given slug and time interval.</p>
</dd>
<dt><a href="#SAN_EMERGING_TRENDS">SAN_EMERGING_TRENDS(size, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns list of emerging trends and their corresponding trend score.</p>
</dd>
<dt><a href="#SAN_ERC20_PROJECTS">SAN_ERC20_PROJECTS()</a> ⇒ <code>Array</code></dt>
<dd><p>Returns an array of all ERC20 assets for which Santiment has data.
Each asset record includes: ticker, name, slug, price in USD, market cap in USD,
volume in USD, USD balance, ETH balance, ETH spent in the last 30 days,
ETH spent in the last 7 days, ETH spent in the last day and main contract address.</p>
</dd>
<dt><a href="#SAN_ETH_SPENT_OVER_TIME">SAN_ETH_SPENT_OVER_TIME(projectSlug, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns ETH spent for each interval from the project&#39;s team wallet and time period</p>
</dd>
<dt><a href="#SAN_ETH_TOP_TRANSACTIONS">SAN_ETH_TOP_TRANSACTIONS(projectSlug, from, to, limit, transactionType)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns top ETH transactions for project&#39;s team wallets.</p>
</dd>
<dt><a href="#SAN_EXCHANGE_BALANCE">SAN_EXCHANGE_BALANCE(projectSlug, from, to, interval)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the exchange balance.</p>
</dd>
<dt><a href="#SAN_EXCHANGE_BALANCE_AGGREGATED">SAN_EXCHANGE_BALANCE_AGGREGATED(projectSlug, from, to, aggregation)</a> ⇒ <code>number</code></dt>
<dd><p>Returns the exchange balance.</p>
</dd>
<dt><a href="#SAN_EXCHANGE_FUNDS_FLOW">SAN_EXCHANGE_FUNDS_FLOW(projectSlug, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the difference between the tokens that were deposited minus
the tokens that were withdrawn from an exchange for a given slug and time interval.</p>
</dd>
<dt><a href="#SAN_EXCHANGE_INFLOW">SAN_EXCHANGE_INFLOW(projectSlug, from, to, interval)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the exchange inflow.</p>
</dd>
<dt><a href="#SAN_EXCHANGE_INFLOW_AGGREGATED">SAN_EXCHANGE_INFLOW_AGGREGATED(projectSlug, from, to, aggregation)</a> ⇒ <code>number</code></dt>
<dd><p>Returns the exchange inflow.</p>
</dd>
<dt><a href="#SAN_EXCHANGE_OUTFLOW">SAN_EXCHANGE_OUTFLOW(projectSlug, from, to, interval)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the exchange outflow.</p>
</dd>
<dt><a href="#SAN_EXCHANGE_OUTFLOW_AGGREGATED">SAN_EXCHANGE_OUTFLOW_AGGREGATED(projectSlug, from, to, aggregation)</a> ⇒ <code>number</code></dt>
<dd><p>Returns the exchange outflow.</p>
</dd>
<dt><a href="#SAN_EXCHANGE_PERCENT_OF_SUPPLY">SAN_EXCHANGE_PERCENT_OF_SUPPLY(projectSlug, from, to, interval)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns exchange percent of total supply.</p>
</dd>
<dt><a href="#SAN_EXCHANGE_PERCENT_OF_SUPPLY_AGGREGATED">SAN_EXCHANGE_PERCENT_OF_SUPPLY_AGGREGATED(projectSlug, from, to, aggregation)</a> ⇒ <code>number</code></dt>
<dd><p>Returns exchange percent of total supply.</p>
</dd>
<dt><a href="#SAN_FUNCTIONS">SAN_FUNCTIONS()</a> ⇒ <code>Array</code></dt>
<dd><p>Returns all available functions.</p>
</dd>
<dt><a href="#SAN_GAS_USED">SAN_GAS_USED(projectSlug, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns used Gas by a blockchain.
When you send tokens, interact with a contract or do anything else on the blockchain,
you must pay for that computation. That payment is calculated in Gas.</p>
</dd>
<dt><a href="#SAN_GITHUB_ACTIVITY">SAN_GITHUB_ACTIVITY(projectSlug, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns a list of github activity for a given slug and time interval.</p>
</dd>
<dt><a href="#SAN_HISTORICAL_BALANCE">SAN_HISTORICAL_BALANCE(projectSlug, from, to, address)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the historical balance for a given ERC20 or ETH address.</p>
</dd>
<dt><a href="#SAN_HISTORICAL_BALANCE_DEDUP">SAN_HISTORICAL_BALANCE_DEDUP(projectSlug, from, to, address)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the historical balance for a given ERC20 or ETH address.</p>
</dd>
<dt><a href="#SAN_HISTORY_TWITTER_DATA">SAN_HISTORY_TWITTER_DATA(projectSlug, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the historical count of twitter followers.</p>
</dd>
<dt><a href="#SAN_HOLDERS_DISTRIBUTION">SAN_HOLDERS_DISTRIBUTION(projectSlug, from, to, balance, interval)</a> ⇒ <code>Array</code></dt>
<dd><p>Represents the total number of addresses holding the given amount of tokens.</p>
</dd>
<dt><a href="#SAN_HOLDERS_DISTRIBUTION_AGGREGATED">SAN_HOLDERS_DISTRIBUTION_AGGREGATED(projectSlug, from, to, balance, aggregation)</a> ⇒ <code>number</code></dt>
<dd><p>Represents the total number of addresses holding the given amount of tokens.</p>
</dd>
<dt><a href="#SAN_HOLDERS_DISTRIBUTION_COMBINED_BALANCE">SAN_HOLDERS_DISTRIBUTION_COMBINED_BALANCE(projectSlug, from, to, balance, interval)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the number of tokens in a specific bucket.</p>
</dd>
<dt><a href="#SAN_HOLDERS_DISTRIBUTION_COMBINED_BALANCE_AGGREGATED">SAN_HOLDERS_DISTRIBUTION_COMBINED_BALANCE_AGGREGATED(projectSlug, from, to, balance, aggregation)</a> ⇒ <code>number</code></dt>
<dd><p>Returns the number of tokens in a specific bucket.</p>
</dd>
<dt><a href="#SAN_LATEST_PRICE">SAN_LATEST_PRICE(projectSlug, currency)</a> ⇒ <code>number</code></dt>
<dd><p>Returns the latest price for a given asset in a desired currency.</p>
</dd>
<dt><a href="#SAN_MARKETCAP">SAN_MARKETCAP(projectSlug, from, to, currency, interval)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the marketcap for a slug.</p>
</dd>
<dt><a href="#SAN_MARKETCAP_AGGREGATED">SAN_MARKETCAP_AGGREGATED(projectSlug, from, to, currency, aggregation)</a> ⇒ <code>number</code></dt>
<dd><p>Returns the marketcap for a slug.</p>
</dd>
<dt><a href="#SAN_MEAN_AGE">SAN_MEAN_AGE(projectSlug, from, to, interval)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the token&#39;s mean age.</p>
</dd>
<dt><a href="#SAN_MEAN_AGE_AGGREGATED">SAN_MEAN_AGE_AGGREGATED(projectSlug, from, to, aggregation)</a> ⇒ <code>number</code></dt>
<dd><p>Returns the token&#39;s mean age.</p>
</dd>
<dt><a href="#SAN_MEAN_DOLLAR_INVESTED_AGE">SAN_MEAN_DOLLAR_INVESTED_AGE(projectSlug, from, to, interval)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the token&#39;s mean dollar invested age.</p>
</dd>
<dt><a href="#SAN_MEAN_DOLLAR_INVESTED_AGE_AGGREGATED">SAN_MEAN_DOLLAR_INVESTED_AGE_AGGREGATED(projectSlug, from, to, aggregation)</a> ⇒ <code>number</code></dt>
<dd><p>Returns the token&#39;s mean dollar invested age.</p>
</dd>
<dt><a href="#SAN_MEAN_REALIZED_PRICE">SAN_MEAN_REALIZED_PRICE(projectSlug, from, to, currency, timeBound, interval)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the mean realized price.</p>
</dd>
<dt><a href="#SAN_MEAN_REALIZED_PRICE_AGGREGATED">SAN_MEAN_REALIZED_PRICE_AGGREGATED(projectSlug, from, to, currency, timeBound, aggregation)</a> ⇒ <code>number</code></dt>
<dd><p>Returns the mean realized price.</p>
</dd>
<dt><a href="#SAN_MINERS_BALANCE">SAN_MINERS_BALANCE(projectSlug, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns miners balances over time
Currently only ETH is supported.</p>
</dd>
<dt><a href="#SAN_MINING_POOLS_DISTRIBUTION">SAN_MINING_POOLS_DISTRIBUTION(projectSlug, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the distribution of miners between mining pools.
What part of the miners are using top3, top10 and all the other pools.
Currently only ETH is supported.</p>
</dd>
<dt><a href="#SAN_MVRV_LONG_SHORT_DIFF">SAN_MVRV_LONG_SHORT_DIFF(projectSlug, from, to, currency, interval)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the difference between MVRV.</p>
</dd>
<dt><a href="#SAN_MVRV_LONG_SHORT_DIFF_AGGREGATED">SAN_MVRV_LONG_SHORT_DIFF_AGGREGATED(projectSlug, from, to, currency, aggregation)</a> ⇒ <code>number</code></dt>
<dd><p>Returns the difference between MVRV.</p>
</dd>
<dt><a href="#SAN_MVRV_RATIO">SAN_MVRV_RATIO(projectSlug, from, to, currency, timeBound, interval)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns MVRV(Market-Value-to-Realized-Value).</p>
</dd>
<dt><a href="#SAN_MVRV_RATIO_AGGREGATED">SAN_MVRV_RATIO_AGGREGATED(projectSlug, from, to, currency, timeBound, aggregation)</a> ⇒ <code>number</code></dt>
<dd><p>Returns MVRV(Market-Value-to-Realized-Value).</p>
</dd>
<dt><a href="#SAN_NETWORK_GROWTH">SAN_NETWORK_GROWTH(projectSlug, from, to, interval)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the token&#39;s network growth</p>
</dd>
<dt><a href="#SAN_NETWORK_GROWTH_AGGREGATED">SAN_NETWORK_GROWTH_AGGREGATED(projectSlug, from, to, aggregation)</a> ⇒ <code>number</code></dt>
<dd><p>Returns the token&#39;s network growth</p>
</dd>
<dt><a href="#SAN_NETWORK_PROFIT_LOSS">SAN_NETWORK_PROFIT_LOSS(projectSlug, from, to, interval)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the network&#39;s profit/loss.</p>
</dd>
<dt><a href="#SAN_NETWORK_PROFIT_LOSS_AGGREGATED">SAN_NETWORK_PROFIT_LOSS_AGGREGATED(projectSlug, from, to, aggregation)</a> ⇒ <code>number</code></dt>
<dd><p>Returns the network&#39;s profit/loss.</p>
</dd>
<dt><a href="#SAN_NVT_RATIO">SAN_NVT_RATIO(projectSlug, from, to, interval)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns NVT (Network-Value-to-Transactions-Ratio Daily Market Cap / Daily Token Circulation)
Since Daily Transaction Volume gets rather noisy and easy to manipulate
by transferring the same tokens through a couple of addresses repeatedly,
it’s not an ideal measure of a network’s economic activity. That’s why we also
offer another way to calculate NVT by using Daily Token Circulation.
This method filters out excess transactions and provides a cleaner overview of a blockchain’s
daily transaction throughput.</p>
</dd>
<dt><a href="#SAN_NVT_RATIO_AGGREGATED">SAN_NVT_RATIO_AGGREGATED(projectSlug, from, to, aggregation)</a> ⇒ <code>number</code></dt>
<dd><p>Returns NVT (Network-Value-to-Transactions-Ratio Daily Market Cap / Daily Token Circulation)
Since Daily Transaction Volume gets rather noisy and easy to manipulate
by transferring the same tokens through a couple of addresses repeatedly,
it’s not an ideal measure of a network’s economic activity. That’s why we also
offer another way to calculate NVT by using Daily Token Circulation.
This method filters out excess transactions and provides a cleaner overview of a blockchain’s
daily transaction throughput.</p>
</dd>
<dt><a href="#SAN_OHLC">SAN_OHLC(projectSlug, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the open, high, low, and close price values for the specified asset,
during a given time interval.</p>
</dd>
<dt><a href="#SAN_PRICE">SAN_PRICE(projectSlug, from, to, currency, interval)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the prices for the slug in the given time period.</p>
</dd>
<dt><a href="#SAN_PRICE_ABSOLUTE_CHANGE">SAN_PRICE_ABSOLUTE_CHANGE(projectSlug, from, to)</a> ⇒ <code>number</code></dt>
<dd><p>Returns the absolute price change for the specified asset, during a given time interval.</p>
</dd>
<dt><a href="#SAN_PRICE_AGGREGATED">SAN_PRICE_AGGREGATED(projectSlug, from, to, currency, aggregation)</a> ⇒ <code>number</code></dt>
<dd><p>Returns the prices for the slug in the given time period.</p>
</dd>
<dt><a href="#SAN_PRICE_PERCENT_CHANGE">SAN_PRICE_PERCENT_CHANGE(projectSlug, from, to)</a> ⇒ <code>number</code></dt>
<dd><p>Returns the percent price change for the specified asset, during a given time interval.</p>
</dd>
<dt><a href="#SAN_PRICE_VOLUME">SAN_PRICE_VOLUME(projectSlug, from, to, interval)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the prices for the specified asset, during a given time interval.</p>
</dd>
<dt><a href="#SAN_PRICE_VOLUME_DIFF">SAN_PRICE_VOLUME_DIFF(currency, projectSlug, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the price-volume difference technical indicator for a given asset,
currency and time interval. This indicator measures the difference in trend between price and volume,
specifically when price goes up as volume goes down. Currency can be displayed in either USD or BTC.</p>
</dd>
<dt><a href="#SAN_PRICES">SAN_PRICES(projectSlug, from, to, interval)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the prices for the specified asset, during a given time interval.</p>
</dd>
<dt><a href="#SAN_PROJECT_FUNDAMENTALS">SAN_PROJECT_FUNDAMENTALS(projectSlug)</a> ⇒ <code>Array</code></dt>
<dd><p>Fetch fundamentals for a specified project.</p>
</dd>
<dt><a href="#SAN_PROJECT_SOCIAL_DATA">SAN_PROJECT_SOCIAL_DATA(projectSlug)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns social data for a specified project.</p>
</dd>
<dt><a href="#SAN_REALIZED_VALUE">SAN_REALIZED_VALUE(projectSlug, from, to, currency, timeBound, interval)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns Realized value - sum of the acquisition costs of an asset located in a wallet.
The realized value across the whole network is computed by summing the realized values
of all wallets holding tokens at the moment.</p>
</dd>
<dt><a href="#SAN_REALIZED_VALUE_AGGREGATED">SAN_REALIZED_VALUE_AGGREGATED(projectSlug, from, to, currency, timeBound, aggregation)</a> ⇒ <code>number</code></dt>
<dd><p>Returns Realized value - sum of the acquisition costs of an asset located in a wallet.
The realized value across the whole network is computed by summing the realized values
of all wallets holding tokens at the moment.</p>
</dd>
<dt><a href="#SAN_REVERSE">SAN_REVERSE(array)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the reversed array of the results</p>
</dd>
<dt><a href="#SAN_SOCIAL_DOMINANCE">SAN_SOCIAL_DOMINANCE(projectSlug, from, to, source)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the % of the social dominance a given project has over time in a given social channel.</p>
</dd>
<dt><a href="#SAN_SOCIAL_VOLUME">SAN_SOCIAL_VOLUME(projectSlug, from, to, source, interval)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the social volume for a slug.</p>
</dd>
<dt><a href="#SAN_SOCIAL_VOLUME_AGGREGATED">SAN_SOCIAL_VOLUME_AGGREGATED(projectSlug, from, to, source, aggregation)</a> ⇒ <code>number</code></dt>
<dd><p>Returns the social volume for a slug.</p>
</dd>
<dt><a href="#SAN_SOCIAL_VOLUME_PROJECTS">SAN_SOCIAL_VOLUME_PROJECTS()</a> ⇒ <code>Array</code></dt>
<dd><p>Returns a list of project slugs for which there is social volume data.</p>
</dd>
<dt><a href="#SAN_TOKEN_AGE_CONSUMED">SAN_TOKEN_AGE_CONSUMED(projectSlug, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns amount of tokens changing addresses, multiplied by the number of blocks
created on the blockchain since they last moved.
Spikes are signal of a large amount of tokens moving after being idle for an extended period of time.</p>
<p>Grouping by interval works by summing all records in the interval.</p>
</dd>
<dt><a href="#SAN_TOKEN_CIRCULATION">SAN_TOKEN_CIRCULATION(projectSlug, from, to, timeBound, interval)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns token circulation for a given slug and time interval.</p>
</dd>
<dt><a href="#SAN_TOKEN_CIRCULATION_AGGREGATED">SAN_TOKEN_CIRCULATION_AGGREGATED(projectSlug, from, to, timeBound, aggregation)</a> ⇒ <code>number</code></dt>
<dd><p>Returns token circulation for a given slug and time interval.</p>
</dd>
<dt><a href="#SAN_TOKEN_TOP_TRANSACTIONS">SAN_TOKEN_TOP_TRANSACTIONS(projectSlug, from, to, limit)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns top token transactions for a given slug</p>
</dd>
<dt><a href="#SAN_TOP_HOLDERS_HELD_OFF_EXCHANGE">SAN_TOP_HOLDERS_HELD_OFF_EXCHANGE(projectSlug, from, to, interval)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the amount of coins/tokens held only by the non exchange top holders.</p>
</dd>
<dt><a href="#SAN_TOP_HOLDERS_HELD_ON_EXCHANGE">SAN_TOP_HOLDERS_HELD_ON_EXCHANGE(projectSlug, from, to, interval)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the amount of coins/tokens held only by the exchange top holders.</p>
</dd>
<dt><a href="#SAN_TOP_HOLDERS_HELD_OVERALL">SAN_TOP_HOLDERS_HELD_OVERALL(projectSlug, from, to, interval)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the amount of coins/tokens held by the top holders.</p>
</dd>
<dt><a href="#SAN_TOP_HOLDERS_PERCENT_OF_TOTAL_SUPPLY">SAN_TOP_HOLDERS_PERCENT_OF_TOTAL_SUPPLY(projectSlug, from, to, numberOfHolders)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the top holders&#39; percent of total supply - in exchanges, outside exchanges and combined.</p>
</dd>
<dt><a href="#SAN_TRANSACTION_VOLUME">SAN_TRANSACTION_VOLUME(projectSlug, from, to, interval)</a> ⇒ <code>Array</code></dt>
<dd><p>Gets the transaction volume for the specified asset, during a given time interval.
Transaction Volume&quot; refers to the total number of tokens within all
transfers that have occurred on a blockchain.</p>
</dd>
<dt><a href="#SAN_TRANSACTION_VOLUME_AGGREGATED">SAN_TRANSACTION_VOLUME_AGGREGATED(projectSlug, from, to, aggregation)</a> ⇒ <code>number</code></dt>
<dd><p>Gets the transaction volume for the specified asset, during a given time interval.
Transaction Volume&quot; refers to the total number of tokens within all
transfers that have occurred on a blockchain.</p>
</dd>
<dt><a href="#SAN_VELOCITY">SAN_VELOCITY(projectSlug, from, to, interval)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the token&#39;s velocity.</p>
</dd>
<dt><a href="#SAN_VELOCITY_AGGREGATED">SAN_VELOCITY_AGGREGATED(projectSlug, from, to, aggregation)</a> ⇒ <code>number</code></dt>
<dd><p>Returns the token&#39;s velocity.</p>
</dd>
<dt><a href="#SAN_VOLUME">SAN_VOLUME(projectSlug, from, to, interval)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the slug&#39;s trading volume.</p>
</dd>
<dt><a href="#SAN_VOLUME_AGGREGATED">SAN_VOLUME_AGGREGATED(projectSlug, from, to, aggregation)</a> ⇒ <code>number</code></dt>
<dd><p>Returns the slug&#39;s trading volume.</p>
</dd>
<dt><a href="#SAN_WEIGHTED_SOCIAL_SENTIMENT">SAN_WEIGHTED_SOCIAL_SENTIMENT(projectSlug, from, to, source, interval)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the weighted social sentiment for a slug.</p>
</dd>
<dt><a href="#SAN_WEIGHTED_SOCIAL_SENTIMENT_AGGREGATED">SAN_WEIGHTED_SOCIAL_SENTIMENT_AGGREGATED(projectSlug, from, to, source, aggregation)</a> ⇒ <code>number</code></dt>
<dd><p>Returns the weighted social sentiment for a slug.</p>
</dd>
<dt><a href="#SAN_WHALE_TRANSACTION_COUNT">SAN_WHALE_TRANSACTION_COUNT(projectSlug, from, to, interval)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the number of transactions transferring more than 100k USD.</p>
</dd>
<dt><a href="#SAN_WHALE_TRANSACTION_COUNT_AGGREGATED">SAN_WHALE_TRANSACTION_COUNT_AGGREGATED(projectSlug, from, to, aggregation)</a> ⇒ <code>number</code></dt>
<dd><p>Returns the number of transactions transferring more than 100k USD.</p>
</dd>
</dl>

<a name="SAN_ACTIVE_ADDRESSES"></a>

## SAN\_ACTIVE\_ADDRESSES(projectSlug, from, to, interval) ⇒ <code>Array</code>
Returns the active addresses for the specified asset, during a given time interval.
Active Addresses" refers to the number of unique addresses that
participated in transactions on a blockchain.

**Kind**: global function  
**Returns**: <code>Array</code> - of active addresses.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| interval | <code>string</code> | <code>&quot;1d&quot;</code> | The resolution with which the data is fetched. Example: "5m" |

<a name="SAN_ACTIVE_ADDRESSES_24H"></a>

## SAN\_ACTIVE\_ADDRESSES\_24H(projectSlug, from, to, interval) ⇒ <code>Array</code>
Returns the active addresses for the specified asset, during a given time interval.
Active Addresses" refers to the number of unique addresses that
participated in transactions on a blockchain.

**Kind**: global function  
**Returns**: <code>Array</code> - of active addresses for the last 24 hours.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| interval | <code>string</code> | <code>&quot;1d&quot;</code> | The resolution with which the data is fetched. Example: "5m" |

<a name="SAN_ACTIVE_ADDRESSES_24H_AGGREGATED"></a>

## SAN\_ACTIVE\_ADDRESSES\_24H\_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>
Returns the active addresses for the specified asset, during a given time interval.
Active Addresses" refers to the number of unique addresses that
participated in transactions on a blockchain.

**Kind**: global function  
**Returns**: <code>number</code> - of aggregated active addresses for the last 24 hours.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| aggregation | <code>string</code> | <code>&quot;null&quot;</code> | Aggregation for the timeseries metrics. Example: "LAST" |

<a name="SAN_ACTIVE_ADDRESSES_AGGREGATED"></a>

## SAN\_ACTIVE\_ADDRESSES\_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>
Returns the active addresses for the specified asset, during a given time interval.
Active Addresses" refers to the number of unique addresses that
participated in transactions on a blockchain.

**Kind**: global function  
**Returns**: <code>number</code> - of aggregated active addresses.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| aggregation | <code>string</code> | <code>&quot;null&quot;</code> | Aggregation for the timeseries metrics. Example: "LAST" |

<a name="SAN_ACTIVE_DEPOSITS"></a>

## SAN\_ACTIVE\_DEPOSITS(projectSlug, from, to, interval) ⇒ <code>Array</code>
Returns number of unique deposit addresses that have been active for a project.

**Kind**: global function  
**Returns**: <code>Array</code> - of deposit address numbers.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| interval | <code>string</code> | <code>&quot;1d&quot;</code> | The resolution with which the data is fetched. Example: "5m" |

<a name="SAN_ACTIVE_DEPOSITS_AGGREGATED"></a>

## SAN\_ACTIVE\_DEPOSITS\_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>
Returns number of unique deposit addresses that have been active for a project.

**Kind**: global function  
**Returns**: <code>number</code> - of aggregated deposit address numbers.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| aggregation | <code>string</code> | <code>&quot;null&quot;</code> | Aggregation for the timeseries metrics. Example: "LAST" |

<a name="SAN_AGE_DESTROYED"></a>

## SAN\_AGE\_DESTROYED(projectSlug, from, to, interval) ⇒ <code>Array</code>
Returns the token's age destroyed

**Kind**: global function  
**Returns**: <code>Array</code> - of age destroyed values.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| interval | <code>string</code> | <code>&quot;1d&quot;</code> | The resolution with which the data is fetched. Example: "5m" |

<a name="SAN_AGE_DESTROYED_AGGREGATED"></a>

## SAN\_AGE\_DESTROYED\_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>
Returns the token's age destroyed

**Kind**: global function  
**Returns**: <code>number</code> - of aggregated age destroyed values.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| aggregation | <code>string</code> | <code>&quot;null&quot;</code> | Aggregation for the timeseries metrics. Example: "LAST" |

<a name="SAN_ALL_PROJECTS"></a>

## SAN\_ALL\_PROJECTS() ⇒ <code>Array</code>
Returns an array of all assets for which Santiment has data.
Each asset record includes: ticker, name, slug, price in USD, market cap in USD,
volume in USD, USD balance, ETH balance, ETH spent in the last 30 days,
ETH spent in the last 7 days, ETH spent in the last day.

**Kind**: global function  
**Returns**: <code>Array</code> - of all projects.  
**Customfunction**:   
<a name="SAN_BITMEX_PERPETUAL_CONTRACT_FUNDING_RATE"></a>

## SAN\_BITMEX\_PERPETUAL\_CONTRACT\_FUNDING\_RATE(projectSlug, from, to, interval) ⇒ <code>Array</code>
Returns the funding rates that are paid by one of the sides of the perpetual contract to the other

**Kind**: global function  
**Returns**: <code>Array</code> - of the funding rates that are paid by one of the sides of the perpetual contract to the other  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| interval | <code>string</code> | <code>&quot;1d&quot;</code> | The resolution with which the data is fetched. Example: "5m" |

<a name="SAN_BITMEX_PERPETUAL_CONTRACT_FUNDING_RATE_AGGREGATED"></a>

## SAN\_BITMEX\_PERPETUAL\_CONTRACT\_FUNDING\_RATE\_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>
Returns the funding rates that are paid by one of the sides of the perpetual contract to the other

**Kind**: global function  
**Returns**: <code>number</code> - of aggregated the funding rates that are paid by one of the sides of the perpetual contract to the other  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| aggregation | <code>string</code> | <code>&quot;null&quot;</code> | Aggregation for the timeseries metrics. Example: "LAST" |

<a name="SAN_BITMEX_PERPETUAL_OPEN_INTEREST"></a>

## SAN\_BITMEX\_PERPETUAL\_OPEN\_INTEREST(projectSlug, from, to, interval) ⇒ <code>Array</code>
Returns the amount of open perpetual contracts currently on Bitmex's
Project Ticker / USD trading pairs. When open interest reaches unusually high numbers,
it can precede increased volatility in the coin’s price.

**Kind**: global function  
**Returns**: <code>Array</code> - of the amount of open perpetual contracts.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| interval | <code>string</code> | <code>&quot;1d&quot;</code> | The resolution with which the data is fetched. Example: "5m" |

<a name="SAN_BITMEX_PERPETUAL_OPEN_INTEREST_AGGREGATED"></a>

## SAN\_BITMEX\_PERPETUAL\_OPEN\_INTEREST\_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>
Returns the amount of open perpetual contracts currently on Bitmex's
Project Ticker / USD trading pairs. When open interest reaches unusually high numbers,
it can precede increased volatility in the coin’s price.

**Kind**: global function  
**Returns**: <code>number</code> - of aggregated the amount of open perpetual contracts.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| aggregation | <code>string</code> | <code>&quot;null&quot;</code> | Aggregation for the timeseries metrics. Example: "LAST" |

<a name="SAN_DAILY_AVG_MARKETCAP"></a>

## SAN\_DAILY\_AVG\_MARKETCAP(projectSlug, from, to, currency, interval) ⇒ <code>Array</code>
Returns the daily average marketcap.

**Kind**: global function  
**Returns**: <code>Array</code> - of daily average marketcaps.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| currency | <code>string</code> |  | The metric is calculated using a currency of choice. Available currencies: USD |
| interval | <code>string</code> | <code>&quot;1d&quot;</code> | The resolution with which the data is fetched. Example: "5m" |

<a name="SAN_DAILY_AVG_MARKETCAP_AGGREGATED"></a>

## SAN\_DAILY\_AVG\_MARKETCAP\_AGGREGATED(projectSlug, from, to, currency, aggregation) ⇒ <code>number</code>
Returns the daily average marketcap.

**Kind**: global function  
**Returns**: <code>number</code> - of aggregated daily average marketcaps.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| currency | <code>string</code> |  | The metric is calculated using a currency of choice. Available currencies: USD |
| aggregation | <code>string</code> | <code>&quot;null&quot;</code> | Aggregation for the timeseries metrics. Example: "LAST" |

<a name="SAN_DAILY_CLOSING_MARKETCAP"></a>

## SAN\_DAILY\_CLOSING\_MARKETCAP(projectSlug, from, to, currency, interval) ⇒ <code>Array</code>
Returns the daily closing marketcap.

**Kind**: global function  
**Returns**: <code>Array</code> - of daily closing marketcaps.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| currency | <code>string</code> |  | The metric is calculated using a currency of choice. Available currencies: USD |
| interval | <code>string</code> | <code>&quot;1d&quot;</code> | The resolution with which the data is fetched. Example: "5m" |

<a name="SAN_DAILY_CLOSING_MARKETCAP_AGGREGATED"></a>

## SAN\_DAILY\_CLOSING\_MARKETCAP\_AGGREGATED(projectSlug, from, to, currency, aggregation) ⇒ <code>number</code>
Returns the daily closing marketcap.

**Kind**: global function  
**Returns**: <code>number</code> - of aggregated daily closing marketcaps.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| currency | <code>string</code> |  | The metric is calculated using a currency of choice. Available currencies: USD |
| aggregation | <code>string</code> | <code>&quot;null&quot;</code> | Aggregation for the timeseries metrics. Example: "LAST" |

<a name="SAN_DAILY_CLOSING_PRICE"></a>

## SAN\_DAILY\_CLOSING\_PRICE(projectSlug, day) ⇒ <code>number</code>
Returns the closing price for a given day.

**Kind**: global function  
**Returns**: <code>number</code> - closing price.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| day | <code>date</code> | The date to fetch the data. Example: DATE(2018, 9, 20) |

<a name="SAN_DEV_ACTIVITY"></a>

## SAN\_DEV\_ACTIVITY(projectSlug, from, to) ⇒ <code>Array</code>
Returns a list of dev activity for a given slug and time interval.

**Kind**: global function  
**Returns**: <code>Array</code> - of dev activity.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

<a name="SAN_EMERGING_TRENDS"></a>

## SAN\_EMERGING\_TRENDS(size, from, to) ⇒ <code>Array</code>
Returns list of emerging trends and their corresponding trend score.

**Kind**: global function  
**Returns**: <code>Array</code> - of trending words and their score.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| size | <code>number</code> | An integer showing how many words should be included in the top list (max 100). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

<a name="SAN_ERC20_PROJECTS"></a>

## SAN\_ERC20\_PROJECTS() ⇒ <code>Array</code>
Returns an array of all ERC20 assets for which Santiment has data.
Each asset record includes: ticker, name, slug, price in USD, market cap in USD,
volume in USD, USD balance, ETH balance, ETH spent in the last 30 days,
ETH spent in the last 7 days, ETH spent in the last day and main contract address.

**Kind**: global function  
**Returns**: <code>Array</code> - of all ERC20 projects.  
**Customfunction**:   
<a name="SAN_ETH_SPENT_OVER_TIME"></a>

## SAN\_ETH\_SPENT\_OVER\_TIME(projectSlug, from, to) ⇒ <code>Array</code>
Returns ETH spent for each interval from the project's team wallet and time period

**Kind**: global function  
**Returns**: <code>Array</code> - of the ETH, that was spent over a given period of time  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

<a name="SAN_ETH_TOP_TRANSACTIONS"></a>

## SAN\_ETH\_TOP\_TRANSACTIONS(projectSlug, from, to, limit, transactionType) ⇒ <code>Array</code>
Returns top ETH transactions for project's team wallets.

**Kind**: global function  
**Returns**: <code>Array</code> - of top transactions  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| limit | <code>number</code> | The limit of transactions to be shown. |
| transactionType | <code>string</code> | Available transaction types: ALL, IN, OUT |

<a name="SAN_EXCHANGE_BALANCE"></a>

## SAN\_EXCHANGE\_BALANCE(projectSlug, from, to, interval) ⇒ <code>Array</code>
Returns the exchange balance.

**Kind**: global function  
**Returns**: <code>Array</code> - of exchange balances.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| interval | <code>string</code> | <code>&quot;1d&quot;</code> | The resolution with which the data is fetched. Example: "5m" |

<a name="SAN_EXCHANGE_BALANCE_AGGREGATED"></a>

## SAN\_EXCHANGE\_BALANCE\_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>
Returns the exchange balance.

**Kind**: global function  
**Returns**: <code>number</code> - of aggregated exchange balances.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| aggregation | <code>string</code> | <code>&quot;null&quot;</code> | Aggregation for the timeseries metrics. Example: "LAST" |

<a name="SAN_EXCHANGE_FUNDS_FLOW"></a>

## SAN\_EXCHANGE\_FUNDS\_FLOW(projectSlug, from, to) ⇒ <code>Array</code>
Returns the difference between the tokens that were deposited minus
the tokens that were withdrawn from an exchange for a given slug and time interval.

**Kind**: global function  
**Returns**: <code>Array</code> - of token deposit/withdraw differences.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

<a name="SAN_EXCHANGE_INFLOW"></a>

## SAN\_EXCHANGE\_INFLOW(projectSlug, from, to, interval) ⇒ <code>Array</code>
Returns the exchange inflow.

**Kind**: global function  
**Returns**: <code>Array</code> - of exchange inflows.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| interval | <code>string</code> | <code>&quot;1d&quot;</code> | The resolution with which the data is fetched. Example: "5m" |

<a name="SAN_EXCHANGE_INFLOW_AGGREGATED"></a>

## SAN\_EXCHANGE\_INFLOW\_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>
Returns the exchange inflow.

**Kind**: global function  
**Returns**: <code>number</code> - of aggregated exchange inflows.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| aggregation | <code>string</code> | <code>&quot;null&quot;</code> | Aggregation for the timeseries metrics. Example: "LAST" |

<a name="SAN_EXCHANGE_OUTFLOW"></a>

## SAN\_EXCHANGE\_OUTFLOW(projectSlug, from, to, interval) ⇒ <code>Array</code>
Returns the exchange outflow.

**Kind**: global function  
**Returns**: <code>Array</code> - of exchange outflows.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| interval | <code>string</code> | <code>&quot;1d&quot;</code> | The resolution with which the data is fetched. Example: "5m" |

<a name="SAN_EXCHANGE_OUTFLOW_AGGREGATED"></a>

## SAN\_EXCHANGE\_OUTFLOW\_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>
Returns the exchange outflow.

**Kind**: global function  
**Returns**: <code>number</code> - of aggregated exchange outflows.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| aggregation | <code>string</code> | <code>&quot;null&quot;</code> | Aggregation for the timeseries metrics. Example: "LAST" |

<a name="SAN_EXCHANGE_PERCENT_OF_SUPPLY"></a>

## SAN\_EXCHANGE\_PERCENT\_OF\_SUPPLY(projectSlug, from, to, interval) ⇒ <code>Array</code>
Returns exchange percent of total supply.

**Kind**: global function  
**Returns**: <code>Array</code> - of exchange percent of total supply.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| interval | <code>string</code> | <code>&quot;1d&quot;</code> | The resolution with which the data is fetched. Example: "5m" |

<a name="SAN_EXCHANGE_PERCENT_OF_SUPPLY_AGGREGATED"></a>

## SAN\_EXCHANGE\_PERCENT\_OF\_SUPPLY\_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>
Returns exchange percent of total supply.

**Kind**: global function  
**Returns**: <code>number</code> - of aggregated exchange percent of total supply.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| aggregation | <code>string</code> | <code>&quot;null&quot;</code> | Aggregation for the timeseries metrics. Example: "LAST" |

<a name="SAN_FUNCTIONS"></a>

## SAN\_FUNCTIONS() ⇒ <code>Array</code>
Returns all available functions.

**Kind**: global function  
**Returns**: <code>Array</code> - of function names.  
**Customfunction**:   
<a name="SAN_GAS_USED"></a>

## SAN\_GAS\_USED(projectSlug, from, to) ⇒ <code>Array</code>
Returns used Gas by a blockchain.
When you send tokens, interact with a contract or do anything else on the blockchain,
you must pay for that computation. That payment is calculated in Gas.

**Kind**: global function  
**Returns**: <code>Array</code> - of quantities of gas used.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

<a name="SAN_GITHUB_ACTIVITY"></a>

## SAN\_GITHUB\_ACTIVITY(projectSlug, from, to) ⇒ <code>Array</code>
Returns a list of github activity for a given slug and time interval.

**Kind**: global function  
**Returns**: <code>Array</code> - of github activity.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

<a name="SAN_HISTORICAL_BALANCE"></a>

## SAN\_HISTORICAL\_BALANCE(projectSlug, from, to, address) ⇒ <code>Array</code>
Returns the historical balance for a given ERC20 or ETH address.

**Kind**: global function  
**Returns**: <code>Array</code> - of balances.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| address | <code>string</code> | ERC20 or ETH address. |

<a name="SAN_HISTORICAL_BALANCE_DEDUP"></a>

## SAN\_HISTORICAL\_BALANCE\_DEDUP(projectSlug, from, to, address) ⇒ <code>Array</code>
Returns the historical balance for a given ERC20 or ETH address.

**Kind**: global function  
**Returns**: <code>Array</code> - of balances.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| address | <code>string</code> | ERC20 or ETH address. |

<a name="SAN_HISTORY_TWITTER_DATA"></a>

## SAN\_HISTORY\_TWITTER\_DATA(projectSlug, from, to) ⇒ <code>Array</code>
Returns the historical count of twitter followers.

**Kind**: global function  
**Returns**: <code>Array</code> - followers count over time.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

<a name="SAN_HOLDERS_DISTRIBUTION"></a>

## SAN\_HOLDERS\_DISTRIBUTION(projectSlug, from, to, balance, interval) ⇒ <code>Array</code>
Represents the total number of addresses holding the given amount of tokens.

**Kind**: global function  
**Returns**: <code>Array</code> - of total number of addresses holding the given amount of tokens.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| balance | <code>string</code> | <code>&quot;total&quot;</code> | Interval of amount of tokens. Available balance intervals are: "0-0.001", "0.001-0.01", "0.01-0.1", "0.1-1", "1-10", "10-100", "100-1k", "1k-10k", "10k-100k", "100k-1M", "1M-10M", "10M-inf", "total" |
| interval | <code>string</code> | <code>&quot;1d&quot;</code> | The resolution with which the data is fetched. Example: "5m" |

<a name="SAN_HOLDERS_DISTRIBUTION_AGGREGATED"></a>

## SAN\_HOLDERS\_DISTRIBUTION\_AGGREGATED(projectSlug, from, to, balance, aggregation) ⇒ <code>number</code>
Represents the total number of addresses holding the given amount of tokens.

**Kind**: global function  
**Returns**: <code>number</code> - of aggregated total number of addresses holding the given amount of tokens.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| balance | <code>string</code> | <code>&quot;total&quot;</code> | Interval of amount of tokens. Available balance intervals are: "0-0.001", "0.001-0.01", "0.01-0.1", "0.1-1", "1-10", "10-100", "100-1k", "1k-10k", "10k-100k", "100k-1M", "1M-10M", "10M-inf", "total" |
| aggregation | <code>string</code> | <code>&quot;null&quot;</code> | Aggregation for the timeseries metrics. Example: "LAST" |

<a name="SAN_HOLDERS_DISTRIBUTION_COMBINED_BALANCE"></a>

## SAN\_HOLDERS\_DISTRIBUTION\_COMBINED\_BALANCE(projectSlug, from, to, balance, interval) ⇒ <code>Array</code>
Returns the number of tokens in a specific bucket.

**Kind**: global function  
**Returns**: <code>Array</code> - of the number of tokens in a specific bucket.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| balance | <code>string</code> | <code>&quot;total&quot;</code> | Interval of amount of tokens. Available balance intervals are: "0-0.001", "0.001-0.01", "0.01-0.1", "0.1-1", "1-10", "10-100", "100-1k", "1k-10k", "10k-100k", "100k-1M", "1M-10M", "10M-inf", "total" |
| interval | <code>string</code> | <code>&quot;1d&quot;</code> | The resolution with which the data is fetched. Example: "5m" |

<a name="SAN_HOLDERS_DISTRIBUTION_COMBINED_BALANCE_AGGREGATED"></a>

## SAN\_HOLDERS\_DISTRIBUTION\_COMBINED\_BALANCE\_AGGREGATED(projectSlug, from, to, balance, aggregation) ⇒ <code>number</code>
Returns the number of tokens in a specific bucket.

**Kind**: global function  
**Returns**: <code>number</code> - of aggregated the number of tokens in a specific bucket.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| balance | <code>string</code> | <code>&quot;total&quot;</code> | Interval of amount of tokens. Available balance intervals are: "0-0.001", "0.001-0.01", "0.01-0.1", "0.1-1", "1-10", "10-100", "100-1k", "1k-10k", "10k-100k", "100k-1M", "1M-10M", "10M-inf", "total" |
| aggregation | <code>string</code> | <code>&quot;null&quot;</code> | Aggregation for the timeseries metrics. Example: "LAST" |

<a name="SAN_LATEST_PRICE"></a>

## SAN\_LATEST\_PRICE(projectSlug, currency) ⇒ <code>number</code>
Returns the latest price for a given asset in a desired currency.

**Kind**: global function  
**Returns**: <code>number</code> - latest price.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| currency | <code>string</code> | The currency in which the data should be presented. Either "USD" or "BTC". |

<a name="SAN_MARKETCAP"></a>

## SAN\_MARKETCAP(projectSlug, from, to, currency, interval) ⇒ <code>Array</code>
Returns the marketcap for a slug.

**Kind**: global function  
**Returns**: <code>Array</code> - of the slug's marketcap.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| currency | <code>string</code> |  | The metric is calculated using a currency of choice. Available currencies: USD |
| interval | <code>string</code> | <code>&quot;1d&quot;</code> | The resolution with which the data is fetched. Example: "5m" |

<a name="SAN_MARKETCAP_AGGREGATED"></a>

## SAN\_MARKETCAP\_AGGREGATED(projectSlug, from, to, currency, aggregation) ⇒ <code>number</code>
Returns the marketcap for a slug.

**Kind**: global function  
**Returns**: <code>number</code> - of aggregated the slug's marketcap.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| currency | <code>string</code> |  | The metric is calculated using a currency of choice. Available currencies: USD |
| aggregation | <code>string</code> | <code>&quot;null&quot;</code> | Aggregation for the timeseries metrics. Example: "LAST" |

<a name="SAN_MEAN_AGE"></a>

## SAN\_MEAN\_AGE(projectSlug, from, to, interval) ⇒ <code>Array</code>
Returns the token's mean age.

**Kind**: global function  
**Returns**: <code>Array</code> - of mean age values.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| interval | <code>string</code> | <code>&quot;1d&quot;</code> | The resolution with which the data is fetched. Example: "5m" |

<a name="SAN_MEAN_AGE_AGGREGATED"></a>

## SAN\_MEAN\_AGE\_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>
Returns the token's mean age.

**Kind**: global function  
**Returns**: <code>number</code> - of aggregated mean age values.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| aggregation | <code>string</code> | <code>&quot;null&quot;</code> | Aggregation for the timeseries metrics. Example: "LAST" |

<a name="SAN_MEAN_DOLLAR_INVESTED_AGE"></a>

## SAN\_MEAN\_DOLLAR\_INVESTED\_AGE(projectSlug, from, to, interval) ⇒ <code>Array</code>
Returns the token's mean dollar invested age.

**Kind**: global function  
**Returns**: <code>Array</code> - of mean dollar invested age values.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| interval | <code>string</code> | <code>&quot;1d&quot;</code> | The resolution with which the data is fetched. Example: "5m" |

<a name="SAN_MEAN_DOLLAR_INVESTED_AGE_AGGREGATED"></a>

## SAN\_MEAN\_DOLLAR\_INVESTED\_AGE\_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>
Returns the token's mean dollar invested age.

**Kind**: global function  
**Returns**: <code>number</code> - of aggregated mean dollar invested age values.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| aggregation | <code>string</code> | <code>&quot;null&quot;</code> | Aggregation for the timeseries metrics. Example: "LAST" |

<a name="SAN_MEAN_REALIZED_PRICE"></a>

## SAN\_MEAN\_REALIZED\_PRICE(projectSlug, from, to, currency, timeBound, interval) ⇒ <code>Array</code>
Returns the mean realized price.

**Kind**: global function  
**Returns**: <code>Array</code> - of mean realized prices.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| currency | <code>string</code> |  | The metric is calculated using a currency of choice. Available currencies: USD |
| timeBound | <code>string</code> |  | The metric is calculated only by taking into account the tokens/coins that have moved in the past number of years or days. |
| interval | <code>string</code> | <code>&quot;1d&quot;</code> | The resolution with which the data is fetched. Example: "5m" |

<a name="SAN_MEAN_REALIZED_PRICE_AGGREGATED"></a>

## SAN\_MEAN\_REALIZED\_PRICE\_AGGREGATED(projectSlug, from, to, currency, timeBound, aggregation) ⇒ <code>number</code>
Returns the mean realized price.

**Kind**: global function  
**Returns**: <code>number</code> - of aggregated mean realized prices.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| currency | <code>string</code> |  | The metric is calculated using a currency of choice. Available currencies: USD |
| timeBound | <code>string</code> |  | The metric is calculated only by taking into account the tokens/coins that have moved in the past number of years/days. |
| aggregation | <code>string</code> | <code>&quot;null&quot;</code> | Aggregation for the timeseries metrics. Example: "LAST" |

<a name="SAN_MINERS_BALANCE"></a>

## SAN\_MINERS\_BALANCE(projectSlug, from, to) ⇒ <code>Array</code>
Returns miners balances over time
Currently only ETH is supported.

**Kind**: global function  
**Returns**: <code>Array</code> - of balances.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

<a name="SAN_MINING_POOLS_DISTRIBUTION"></a>

## SAN\_MINING\_POOLS\_DISTRIBUTION(projectSlug, from, to) ⇒ <code>Array</code>
Returns the distribution of miners between mining pools.
What part of the miners are using top3, top10 and all the other pools.
Currently only ETH is supported.

**Kind**: global function  
**Returns**: <code>Array</code> - of distribution ratios.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

<a name="SAN_MVRV_LONG_SHORT_DIFF"></a>

## SAN\_MVRV\_LONG\_SHORT\_DIFF(projectSlug, from, to, currency, interval) ⇒ <code>Array</code>
Returns the difference between MVRV.

**Kind**: global function  
**Returns**: <code>Array</code> - of MVRV differences.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| currency | <code>string</code> |  | The metric is calculated using a currency of choice. Available currencies: USD |
| interval | <code>string</code> | <code>&quot;1d&quot;</code> | The resolution with which the data is fetched. Example: "5m" |

<a name="SAN_MVRV_LONG_SHORT_DIFF_AGGREGATED"></a>

## SAN\_MVRV\_LONG\_SHORT\_DIFF\_AGGREGATED(projectSlug, from, to, currency, aggregation) ⇒ <code>number</code>
Returns the difference between MVRV.

**Kind**: global function  
**Returns**: <code>number</code> - of aggregated MVRV differences.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| currency | <code>string</code> |  | The metric is calculated using a currency of choice. Available currencies: USD |
| aggregation | <code>string</code> | <code>&quot;null&quot;</code> | Aggregation for the timeseries metrics. Example: "LAST" |

<a name="SAN_MVRV_RATIO"></a>

## SAN\_MVRV\_RATIO(projectSlug, from, to, currency, timeBound, interval) ⇒ <code>Array</code>
Returns MVRV(Market-Value-to-Realized-Value).

**Kind**: global function  
**Returns**: <code>Array</code> - of MVRV ratios.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| currency | <code>string</code> |  | The metric is calculated using a currency of choice. Available currencies: USD |
| timeBound | <code>string</code> |  | The metric is calculated only by taking into account the tokens/coins that have moved in the past number of years or days. |
| interval | <code>string</code> | <code>&quot;1d&quot;</code> | The resolution with which the data is fetched. Example: "5m" |

<a name="SAN_MVRV_RATIO_AGGREGATED"></a>

## SAN\_MVRV\_RATIO\_AGGREGATED(projectSlug, from, to, currency, timeBound, aggregation) ⇒ <code>number</code>
Returns MVRV(Market-Value-to-Realized-Value).

**Kind**: global function  
**Returns**: <code>number</code> - of aggregated MVRV ratios.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| currency | <code>string</code> |  | The metric is calculated using a currency of choice. Available currencies: USD |
| timeBound | <code>string</code> |  | The metric is calculated only by taking into account the tokens/coins that have moved in the past number of years/days. |
| aggregation | <code>string</code> | <code>&quot;null&quot;</code> | Aggregation for the timeseries metrics. Example: "LAST" |

<a name="SAN_NETWORK_GROWTH"></a>

## SAN\_NETWORK\_GROWTH(projectSlug, from, to, interval) ⇒ <code>Array</code>
Returns the token's network growth

**Kind**: global function  
**Returns**: <code>Array</code> - of network growth.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| interval | <code>string</code> | <code>&quot;1d&quot;</code> | The resolution with which the data is fetched. Example: "5m" |

<a name="SAN_NETWORK_GROWTH_AGGREGATED"></a>

## SAN\_NETWORK\_GROWTH\_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>
Returns the token's network growth

**Kind**: global function  
**Returns**: <code>number</code> - of aggregated network growth.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| aggregation | <code>string</code> | <code>&quot;null&quot;</code> | Aggregation for the timeseries metrics. Example: "LAST" |

<a name="SAN_NETWORK_PROFIT_LOSS"></a>

## SAN\_NETWORK\_PROFIT\_LOSS(projectSlug, from, to, interval) ⇒ <code>Array</code>
Returns the network's profit/loss.

**Kind**: global function  
**Returns**: <code>Array</code> - of the network's profit/loss.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| interval | <code>string</code> | <code>&quot;1d&quot;</code> | The resolution with which the data is fetched. Example: "5m" |

<a name="SAN_NETWORK_PROFIT_LOSS_AGGREGATED"></a>

## SAN\_NETWORK\_PROFIT\_LOSS\_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>
Returns the network's profit/loss.

**Kind**: global function  
**Returns**: <code>number</code> - of aggregated the network's profit/loss.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| aggregation | <code>string</code> | <code>&quot;null&quot;</code> | Aggregation for the timeseries metrics. Example: "LAST" |

<a name="SAN_NVT_RATIO"></a>

## SAN\_NVT\_RATIO(projectSlug, from, to, interval) ⇒ <code>Array</code>
Returns NVT (Network-Value-to-Transactions-Ratio Daily Market Cap / Daily Token Circulation)
Since Daily Transaction Volume gets rather noisy and easy to manipulate
by transferring the same tokens through a couple of addresses repeatedly,
it’s not an ideal measure of a network’s economic activity. That’s why we also
offer another way to calculate NVT by using Daily Token Circulation.
This method filters out excess transactions and provides a cleaner overview of a blockchain’s
daily transaction throughput.

**Kind**: global function  
**Returns**: <code>Array</code> - of NVT ratios  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| interval | <code>string</code> | <code>&quot;1d&quot;</code> | The resolution with which the data is fetched. Example: "5m" |

<a name="SAN_NVT_RATIO_AGGREGATED"></a>

## SAN\_NVT\_RATIO\_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>
Returns NVT (Network-Value-to-Transactions-Ratio Daily Market Cap / Daily Token Circulation)
Since Daily Transaction Volume gets rather noisy and easy to manipulate
by transferring the same tokens through a couple of addresses repeatedly,
it’s not an ideal measure of a network’s economic activity. That’s why we also
offer another way to calculate NVT by using Daily Token Circulation.
This method filters out excess transactions and provides a cleaner overview of a blockchain’s
daily transaction throughput.

**Kind**: global function  
**Returns**: <code>number</code> - of aggregated NVT ratios  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| aggregation | <code>string</code> | <code>&quot;null&quot;</code> | Aggregation for the timeseries metrics. Example: "LAST" |

<a name="SAN_OHLC"></a>

## SAN\_OHLC(projectSlug, from, to) ⇒ <code>Array</code>
Returns the open, high, low, and close price values for the specified asset,
during a given time interval.

**Kind**: global function  
**Returns**: <code>Array</code> - of open, high, low, and close price values.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

<a name="SAN_PRICE"></a>

## SAN\_PRICE(projectSlug, from, to, currency, interval) ⇒ <code>Array</code>
Returns the prices for the slug in the given time period.

**Kind**: global function  
**Returns**: <code>Array</code> - of the prices for the slug in the given time period.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| currency | <code>string</code> |  | The metric is calculated using a currency of choice. Available currencies: USD |
| interval | <code>string</code> | <code>&quot;1d&quot;</code> | The resolution with which the data is fetched. Example: "5m" |

<a name="SAN_PRICE_ABSOLUTE_CHANGE"></a>

## SAN\_PRICE\_ABSOLUTE\_CHANGE(projectSlug, from, to) ⇒ <code>number</code>
Returns the absolute price change for the specified asset, during a given time interval.

**Kind**: global function  
**Returns**: <code>number</code> - absolute price change.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

<a name="SAN_PRICE_AGGREGATED"></a>

## SAN\_PRICE\_AGGREGATED(projectSlug, from, to, currency, aggregation) ⇒ <code>number</code>
Returns the prices for the slug in the given time period.

**Kind**: global function  
**Returns**: <code>number</code> - of aggregated the prices for the slug in the given time period.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| currency | <code>string</code> |  | The metric is calculated using a currency of choice. Available currencies: USD |
| aggregation | <code>string</code> | <code>&quot;null&quot;</code> | Aggregation for the timeseries metrics. Example: "LAST" |

<a name="SAN_PRICE_PERCENT_CHANGE"></a>

## SAN\_PRICE\_PERCENT\_CHANGE(projectSlug, from, to) ⇒ <code>number</code>
Returns the percent price change for the specified asset, during a given time interval.

**Kind**: global function  
**Returns**: <code>number</code> - price change in percent.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

<a name="SAN_PRICE_VOLUME"></a>

## SAN\_PRICE\_VOLUME(projectSlug, from, to, interval) ⇒ <code>Array</code>
Returns the prices for the specified asset, during a given time interval.

**Kind**: global function  
**Returns**: <code>Array</code> - of prices.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| interval | <code>string</code> | <code>&quot;1d&quot;</code> | The resolution with which the data is fetched. Example: "5m" |

<a name="SAN_PRICE_VOLUME_DIFF"></a>

## SAN\_PRICE\_VOLUME\_DIFF(currency, projectSlug, from, to) ⇒ <code>Array</code>
Returns the price-volume difference technical indicator for a given asset,
currency and time interval. This indicator measures the difference in trend between price and volume,
specifically when price goes up as volume goes down. Currency can be displayed in either USD or BTC.

**Kind**: global function  
**Returns**: <code>Array</code> - of price-volume difference technical indicator.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| currency | <code>string</code> | The currency in which the data should be presented. Either "USD" or "BTC". |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

<a name="SAN_PRICES"></a>

## SAN\_PRICES(projectSlug, from, to, interval) ⇒ <code>Array</code>
Returns the prices for the specified asset, during a given time interval.

**Kind**: global function  
**Returns**: <code>Array</code> - of prices.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| interval | <code>string</code> | <code>&quot;1d&quot;</code> | The resolution with which the data is fetched. Example: "5m" |

<a name="SAN_PROJECT_FUNDAMENTALS"></a>

## SAN\_PROJECT\_FUNDAMENTALS(projectSlug) ⇒ <code>Array</code>
Fetch fundamentals for a specified project.

**Kind**: global function  
**Returns**: <code>Array</code> - of project details.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |

<a name="SAN_PROJECT_SOCIAL_DATA"></a>

## SAN\_PROJECT\_SOCIAL\_DATA(projectSlug) ⇒ <code>Array</code>
Returns social data for a specified project.

**Kind**: global function  
**Returns**: <code>Array</code> - of project's social data.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |

<a name="SAN_REALIZED_VALUE"></a>

## SAN\_REALIZED\_VALUE(projectSlug, from, to, currency, timeBound, interval) ⇒ <code>Array</code>
Returns Realized value - sum of the acquisition costs of an asset located in a wallet.
The realized value across the whole network is computed by summing the realized values
of all wallets holding tokens at the moment.

**Kind**: global function  
**Returns**: <code>Array</code> - of realized values.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| currency | <code>string</code> |  | The metric is calculated using a currency of choice. Available currencies: USD |
| timeBound | <code>string</code> |  | The metric is calculated only by taking into account the tokens/coins that have moved in the past number of years or days. |
| interval | <code>string</code> | <code>&quot;1d&quot;</code> | The resolution with which the data is fetched. Example: "5m" |

<a name="SAN_REALIZED_VALUE_AGGREGATED"></a>

## SAN\_REALIZED\_VALUE\_AGGREGATED(projectSlug, from, to, currency, timeBound, aggregation) ⇒ <code>number</code>
Returns Realized value - sum of the acquisition costs of an asset located in a wallet.
The realized value across the whole network is computed by summing the realized values
of all wallets holding tokens at the moment.

**Kind**: global function  
**Returns**: <code>number</code> - of aggregated realized values.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| currency | <code>string</code> |  | The metric is calculated using a currency of choice. Available currencies: USD |
| timeBound | <code>string</code> |  | The metric is calculated only by taking into account the tokens/coins that have moved in the past number of years/days. |
| aggregation | <code>string</code> | <code>&quot;null&quot;</code> | Aggregation for the timeseries metrics. Example: "LAST" |

<a name="SAN_REVERSE"></a>

## SAN\_REVERSE(array) ⇒ <code>Array</code>
Returns the reversed array of the results

**Kind**: global function  
**Returns**: <code>Array</code> - of reversed results  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The array of results |

<a name="SAN_SOCIAL_DOMINANCE"></a>

## SAN\_SOCIAL\_DOMINANCE(projectSlug, from, to, source) ⇒ <code>Array</code>
Returns the % of the social dominance a given project has over time in a given social channel.

**Kind**: global function  
**Returns**: <code>Array</code> - of dominance.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| source | <code>string</code> | The source, which the dominance is calculated from. Sources are: ALL, TELEGRAM, REDDIT, DISCORD, PROFESSIONAL_TRADERS_CHAT |

<a name="SAN_SOCIAL_VOLUME"></a>

## SAN\_SOCIAL\_VOLUME(projectSlug, from, to, source, interval) ⇒ <code>Array</code>
Returns the social volume for a slug.

**Kind**: global function  
**Returns**: <code>Array</code> - of the slug's social volume.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| source | <code>string</code> |  | The source of mention counts, one of the following: "PROFESSIONAL_TRADERS_CHAT_OVERVIEW", "TELEGRAM_CHATS_OVERVIEW", "TELEGRAM_DISCUSSION_OVERVIEW", "DISCORD_DISCUSSION_OVERVIEW", "TWITTER_CHATS_OVERVIEW", "REDDIT_COMMENTS_OVERVIEW", "TOTAL" |
| interval | <code>string</code> | <code>&quot;1d&quot;</code> | The resolution with which the data is fetched. Example: "5m" |

<a name="SAN_SOCIAL_VOLUME_AGGREGATED"></a>

## SAN\_SOCIAL\_VOLUME\_AGGREGATED(projectSlug, from, to, source, aggregation) ⇒ <code>number</code>
Returns the social volume for a slug.

**Kind**: global function  
**Returns**: <code>number</code> - of aggregated the slug's social volume.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| source | <code>string</code> |  | The source of mention counts, one of the following: "PROFESSIONAL_TRADERS_CHAT_OVERVIEW", "TELEGRAM_CHATS_OVERVIEW", "TELEGRAM_DISCUSSION_OVERVIEW", "DISCORD_DISCUSSION_OVERVIEW", "TWITTER_CHATS_OVERVIEW", "REDDIT_COMMENTS_OVERVIEW", "TOTAL" |
| aggregation | <code>string</code> | <code>&quot;null&quot;</code> | Aggregation for the timeseries metrics. Example: "LAST" |

<a name="SAN_SOCIAL_VOLUME_PROJECTS"></a>

## SAN\_SOCIAL\_VOLUME\_PROJECTS() ⇒ <code>Array</code>
Returns a list of project slugs for which there is social volume data.

**Kind**: global function  
**Returns**: <code>Array</code> - of social volume projects.  
**Customfunction**:   
<a name="SAN_TOKEN_AGE_CONSUMED"></a>

## SAN\_TOKEN\_AGE\_CONSUMED(projectSlug, from, to) ⇒ <code>Array</code>
Returns amount of tokens changing addresses, multiplied by the number of blocks
created on the blockchain since they last moved.
Spikes are signal of a large amount of tokens moving after being idle for an extended period of time.

Grouping by interval works by summing all records in the interval.

**Kind**: global function  
**Returns**: <code>Array</code> - of token age consumed numbers.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

<a name="SAN_TOKEN_CIRCULATION"></a>

## SAN\_TOKEN\_CIRCULATION(projectSlug, from, to, timeBound, interval) ⇒ <code>Array</code>
Returns token circulation for a given slug and time interval.

**Kind**: global function  
**Returns**: <code>Array</code> - of token circulation values.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| timeBound | <code>string</code> |  | The metric is calculated only by taking into account the tokens/coins that have moved in the past number of years or days. |
| interval | <code>string</code> | <code>&quot;1d&quot;</code> | The resolution with which the data is fetched. Example: "5m" |

<a name="SAN_TOKEN_CIRCULATION_AGGREGATED"></a>

## SAN\_TOKEN\_CIRCULATION\_AGGREGATED(projectSlug, from, to, timeBound, aggregation) ⇒ <code>number</code>
Returns token circulation for a given slug and time interval.

**Kind**: global function  
**Returns**: <code>number</code> - of aggregated token circulation values.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| timeBound | <code>string</code> |  | The metric is calculated only by taking into account the tokens/coins that have moved in the past number of years/days. |
| aggregation | <code>string</code> | <code>&quot;null&quot;</code> | Aggregation for the timeseries metrics. Example: "LAST" |

<a name="SAN_TOKEN_TOP_TRANSACTIONS"></a>

## SAN\_TOKEN\_TOP\_TRANSACTIONS(projectSlug, from, to, limit) ⇒ <code>Array</code>
Returns top token transactions for a given slug

**Kind**: global function  
**Returns**: <code>Array</code> - of top transactions  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| limit | <code>number</code> | The limit of transactions to be shown. |

<a name="SAN_TOP_HOLDERS_HELD_OFF_EXCHANGE"></a>

## SAN\_TOP\_HOLDERS\_HELD\_OFF\_EXCHANGE(projectSlug, from, to, interval) ⇒ <code>Array</code>
Returns the amount of coins/tokens held only by the non exchange top holders.

**Kind**: global function  
**Returns**: <code>Array</code> - of amount of coins/tokens held only by the top holders.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| interval | <code>string</code> | <code>&quot;1d&quot;</code> | The resolution with which the data is fetched. Example: "5m" |

<a name="SAN_TOP_HOLDERS_HELD_ON_EXCHANGE"></a>

## SAN\_TOP\_HOLDERS\_HELD\_ON\_EXCHANGE(projectSlug, from, to, interval) ⇒ <code>Array</code>
Returns the amount of coins/tokens held only by the exchange top holders.

**Kind**: global function  
**Returns**: <code>Array</code> - of amount of coins/tokens held only by the top holders.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| interval | <code>string</code> | <code>&quot;1d&quot;</code> | The resolution with which the data is fetched. Example: "5m" |

<a name="SAN_TOP_HOLDERS_HELD_OVERALL"></a>

## SAN\_TOP\_HOLDERS\_HELD\_OVERALL(projectSlug, from, to, interval) ⇒ <code>Array</code>
Returns the amount of coins/tokens held by the top holders.

**Kind**: global function  
**Returns**: <code>Array</code> - of amount of coins/tokens held by the top holders.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| interval | <code>string</code> | <code>&quot;1d&quot;</code> | The resolution with which the data is fetched. Example: "5m" |

<a name="SAN_TOP_HOLDERS_PERCENT_OF_TOTAL_SUPPLY"></a>

## SAN\_TOP\_HOLDERS\_PERCENT\_OF\_TOTAL\_SUPPLY(projectSlug, from, to, numberOfHolders) ⇒ <code>Array</code>
Returns the top holders' percent of total supply - in exchanges, outside exchanges and combined.

**Kind**: global function  
**Returns**: <code>Array</code> - followers count over time.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| numberOfHolders | <code>number</code> | Take top number of holders into account when calculating. |

<a name="SAN_TRANSACTION_VOLUME"></a>

## SAN\_TRANSACTION\_VOLUME(projectSlug, from, to, interval) ⇒ <code>Array</code>
Gets the transaction volume for the specified asset, during a given time interval.
Transaction Volume" refers to the total number of tokens within all
transfers that have occurred on a blockchain.

**Kind**: global function  
**Returns**: <code>Array</code> - of transaction volumes.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| interval | <code>string</code> | <code>&quot;1d&quot;</code> | The resolution with which the data is fetched. Example: "5m" |

<a name="SAN_TRANSACTION_VOLUME_AGGREGATED"></a>

## SAN\_TRANSACTION\_VOLUME\_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>
Gets the transaction volume for the specified asset, during a given time interval.
Transaction Volume" refers to the total number of tokens within all
transfers that have occurred on a blockchain.

**Kind**: global function  
**Returns**: <code>number</code> - of aggregated transaction volumes.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| aggregation | <code>string</code> | <code>&quot;null&quot;</code> | Aggregation for the timeseries metrics. Example: "LAST" |

<a name="SAN_VELOCITY"></a>

## SAN\_VELOCITY(projectSlug, from, to, interval) ⇒ <code>Array</code>
Returns the token's velocity.

**Kind**: global function  
**Returns**: <code>Array</code> - of token velocity values.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| interval | <code>string</code> | <code>&quot;1d&quot;</code> | The resolution with which the data is fetched. Example: "5m" |

<a name="SAN_VELOCITY_AGGREGATED"></a>

## SAN\_VELOCITY\_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>
Returns the token's velocity.

**Kind**: global function  
**Returns**: <code>number</code> - of aggregated token velocity values.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| aggregation | <code>string</code> | <code>&quot;null&quot;</code> | Aggregation for the timeseries metrics. Example: "LAST" |

<a name="SAN_VOLUME"></a>

## SAN\_VOLUME(projectSlug, from, to, interval) ⇒ <code>Array</code>
Returns the slug's trading volume.

**Kind**: global function  
**Returns**: <code>Array</code> - of the slug's trading volume.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| interval | <code>string</code> | <code>&quot;1d&quot;</code> | The resolution with which the data is fetched. Example: "5m" |

<a name="SAN_VOLUME_AGGREGATED"></a>

## SAN\_VOLUME\_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>
Returns the slug's trading volume.

**Kind**: global function  
**Returns**: <code>number</code> - of aggregated the slug's trading volume.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| aggregation | <code>string</code> | <code>&quot;null&quot;</code> | Aggregation for the timeseries metrics. Example: "LAST" |

<a name="SAN_WEIGHTED_SOCIAL_SENTIMENT"></a>

## SAN\_WEIGHTED\_SOCIAL\_SENTIMENT(projectSlug, from, to, source, interval) ⇒ <code>Array</code>
Returns the weighted social sentiment for a slug.

**Kind**: global function  
**Returns**: <code>Array</code> - of the slug's weighted social sentiment.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| source | <code>string</code> |  | The source of mention counts, one of the following: "PROFESSIONAL_TRADERS_CHAT_OVERVIEW", "TELEGRAM_CHATS_OVERVIEW", "TELEGRAM_DISCUSSION_OVERVIEW", "DISCORD_DISCUSSION_OVERVIEW", "TWITTER_CHATS_OVERVIEW", "REDDIT_COMMENTS_OVERVIEW", "TOTAL" |
| interval | <code>string</code> | <code>&quot;1d&quot;</code> | The resolution with which the data is fetched. Example: "5m" |

<a name="SAN_WEIGHTED_SOCIAL_SENTIMENT_AGGREGATED"></a>

## SAN\_WEIGHTED\_SOCIAL\_SENTIMENT\_AGGREGATED(projectSlug, from, to, source, aggregation) ⇒ <code>number</code>
Returns the weighted social sentiment for a slug.

**Kind**: global function  
**Returns**: <code>number</code> - of aggregated the slug's weighted social sentiment.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| source | <code>string</code> |  | The source of mention counts, one of the following: "PROFESSIONAL_TRADERS_CHAT_OVERVIEW", "TELEGRAM_CHATS_OVERVIEW", "TELEGRAM_DISCUSSION_OVERVIEW", "DISCORD_DISCUSSION_OVERVIEW", "TWITTER_CHATS_OVERVIEW", "REDDIT_COMMENTS_OVERVIEW", "TOTAL" |
| aggregation | <code>string</code> | <code>&quot;null&quot;</code> | Aggregation for the timeseries metrics. Example: "LAST" |

<a name="SAN_WHALE_TRANSACTION_COUNT"></a>

## SAN\_WHALE\_TRANSACTION\_COUNT(projectSlug, from, to, interval) ⇒ <code>Array</code>
Returns the number of transactions transferring more than 100k USD.

**Kind**: global function  
**Returns**: <code>Array</code> - of the number of transactions transferring more than 100k USD.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| interval | <code>string</code> | <code>&quot;1d&quot;</code> | The resolution with which the data is fetched. Example: "5m" |

<a name="SAN_WHALE_TRANSACTION_COUNT_AGGREGATED"></a>

## SAN\_WHALE\_TRANSACTION\_COUNT\_AGGREGATED(projectSlug, from, to, aggregation) ⇒ <code>number</code>
Returns the number of transactions transferring more than 100k USD.

**Kind**: global function  
**Returns**: <code>number</code> - of aggregated the number of transactions transferring more than 100k USD.  
**Customfunction**:   

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| projectSlug | <code>string</code> |  | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> |  | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> |  | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| aggregation | <code>string</code> | <code>&quot;null&quot;</code> | Aggregation for the timeseries metrics. Example: "LAST" |

