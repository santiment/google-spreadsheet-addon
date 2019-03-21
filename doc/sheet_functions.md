## Functions

<dl>
<dt><a href="#SAN_DAILY_PRICES">SAN_DAILY_PRICES(projectSlug, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>Gets the daily prices for the specified asset, during a given time interval.</p>
</dd>
<dt><a href="#SAN_ALL_PROJECTS">SAN_ALL_PROJECTS()</a> ⇒ <code>Array</code></dt>
<dd><p>Gets an array of all assets for which Santiment has data.
Each asset record includes: ticker, name, slug, price in USD, market cap in USD,
volume in USD, USD balance, ETH balance, ETH spent in the last 30 days,
ETH spent in the last 7 days, ETH spent in the last day.</p>
</dd>
<dt><a href="#SAN_ERC20_PROJECTS">SAN_ERC20_PROJECTS()</a> ⇒ <code>Array</code></dt>
<dd><p>Gets an array of all ERC20 assets for which Santiment has data.
Each asset record includes: ticker, name, slug, price in USD, market cap in USD,
volume in USD, USD balance, ETH balance, ETH spent in the last 30 days,
ETH spent in the last 7 days, ETH spent in the last day and main contract address.</p>
</dd>
<dt><a href="#SAN_DAILY_ACTIVE_ADDRESSES">SAN_DAILY_ACTIVE_ADDRESSES(projectSlug, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>Gets the daily active addresses for the specified asset, during a given time interval.
&quot;Daily Active Addresses&quot; refers to the number of unique addresses that
participated in transactions on a blockchain each day.</p>
</dd>
<dt><a href="#SAN_DAILY_TRANSACTION_VOLUME">SAN_DAILY_TRANSACTION_VOLUME(projectSlug, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>Gets the daily transaction volume for the specified asset, during a given time interval.
&quot;Transaction Volume&quot; refers to the total number of tokens within all
transfers that have occurred on a blockchain.</p>
</dd>
<dt><a href="#SAN_DAILY_OHLC">SAN_DAILY_OHLC(projectSlug, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>Gets the daily open, high, low, and close price values for the specified asset, during a given time interval.</p>
</dd>
<dt><a href="#SAN_DAILY_PRICE_VOLUME_DIFF">SAN_DAILY_PRICE_VOLUME_DIFF(currency, projectSlug, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>Gets the daily price-volume difference technical indicator for a given asset,
currency and time interval. This indicator measures the difference in trend between price and volume,
specifically when price goes up as volume goes down. Currency can be displayed in either USD or BTC.</p>
</dd>
<dt><a href="#SAN_SOCIAL_VOLUME_PROJECTS">SAN_SOCIAL_VOLUME_PROJECTS()</a> ⇒ <code>Array</code></dt>
<dd><p>Returns a list of project slugs for which there is social volume data.</p>
</dd>
<dt><a href="#SAN_DAILY_SOCIAL_VOLUME">SAN_DAILY_SOCIAL_VOLUME(projectSlug, from, to, socialVolumeType)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns a list of mentions count for a given project and time interval.</p>
</dd>
<dt><a href="#SAN_DAILY_GITHUB_ACTIVITY">SAN_DAILY_GITHUB_ACTIVITY(projectSlug, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns a list of github activity for a given slug and time interval.</p>
</dd>
<dt><a href="#SAN_DAILY_DEV_ACTIVITY">SAN_DAILY_DEV_ACTIVITY(projectSlug, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns a list of dev activity for a given slug and time interval.</p>
</dd>
<dt><a href="#SAN_DAILY_NETWORK_GROWTH">SAN_DAILY_NETWORK_GROWTH(projectSlug, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the number of new addresses being created on the project network for a given slug and time interval.</p>
</dd>
<dt><a href="#SAN_DAILY_EXCHANGE_FUNDS_FLOW">SAN_DAILY_EXCHANGE_FUNDS_FLOW(projectSlug, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>Fetches the difference between the tokens that were deposited minus
the tokens that were withdrawn from an exchange for a given slug and time interval.</p>
</dd>
<dt><a href="#SAN_DAILY_TOKEN_CIRCULATION">SAN_DAILY_TOKEN_CIRCULATION(projectSlug, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns token circulation for a given slug and time interval.</p>
</dd>
<dt><a href="#SAN_DAILY_TRENDING_WORDS">SAN_DAILY_TRENDING_WORDS(source, size, hour, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns list of trending words and their corresponding trend score.</p>
</dd>
<dt><a href="#SAN_PROJECT_FUNDAMENTALS">SAN_PROJECT_FUNDAMENTALS(projectSlug)</a> ⇒ <code>Array</code></dt>
<dd><p>Fetch fundamentals for a specified project.</p>
</dd>
<dt><a href="#SAN_PROJECT_SOCIAL_DATA">SAN_PROJECT_SOCIAL_DATA(projectSlug)</a> ⇒ <code>Array</code></dt>
<dd><p>Fetch social data for a specified project.</p>
</dd>
<dt><a href="#SAN_DAILY_TOKEN_AGE_CONSUMED">SAN_DAILY_TOKEN_AGE_CONSUMED(projectSlug, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns amount of tokens changing addresses, multiplied by the number of blocks
created on the blockchain since they last moved.
Spikes are signal of a large amount of tokens moving after being idle for an extended period of time.</p>
<p>Grouping by interval works by summing all records in the interval.</p>
</dd>
<dt><a href="#SAN_MVRV_RATIO">SAN_MVRV_RATIO(projectSlug, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns MVRV(Market-Value-to-Realized-Value)</p>
</dd>
<dt><a href="#SAN_NVT_RATIO">SAN_NVT_RATIO(projectSlug, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns NVT (Network-Value-to-Transactions-Ratio Daily Market Cap / Daily Transaction Volume)
Since Daily Transaction Volume gets rather noisy and easy to manipulate
by transferring the same tokens through couple of addresses over and over again,
it’s not an ideal measure of a network’s economic activity.
That’s why we calculate NVT using Daily Trx Volume, but also by using Daily Token Circulation instead,
which filters out excess transactions and provides a cleaner overview of a blockchain’s daily transaction throughput.</p>
</dd>
<dt><a href="#SAN_DAILY_ACTIVE_DEPOSITS">SAN_DAILY_ACTIVE_DEPOSITS(projectSlug, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns number of unique deposit addresses that have been active for a project.</p>
</dd>
<dt><a href="#SAN_REALIZED_VALUE">SAN_REALIZED_VALUE(projectSlug, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns Realized value - sum of the acquisition costs of an asset located in a wallet.
The realized value across the whole network is computed by summing the realized values
of all wallets holding tokens at the moment.</p>
</dd>
<dt><a href="#SAN_GAS_USED">SAN_GAS_USED(from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns used Gas by a blockchain.
When you send tokens, interact with a contract or do anything else on the blockchain,
you must pay for that computation. That payment is calculated in Gas.</p>
</dd>
</dl>

<a name="SAN_DAILY_PRICES"></a>

## SAN\_DAILY\_PRICES(projectSlug, from, to) ⇒ <code>Array</code>
Gets the daily prices for the specified asset, during a given time interval.

**Kind**: global function  
**Returns**: <code>Array</code> - of daily prices.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

<a name="SAN_ALL_PROJECTS"></a>

## SAN\_ALL\_PROJECTS() ⇒ <code>Array</code>
Gets an array of all assets for which Santiment has data.
Each asset record includes: ticker, name, slug, price in USD, market cap in USD,
volume in USD, USD balance, ETH balance, ETH spent in the last 30 days,
ETH spent in the last 7 days, ETH spent in the last day.

**Kind**: global function  
**Returns**: <code>Array</code> - of all projects.  
**Customfunction**:   
<a name="SAN_ERC20_PROJECTS"></a>

## SAN\_ERC20\_PROJECTS() ⇒ <code>Array</code>
Gets an array of all ERC20 assets for which Santiment has data.
Each asset record includes: ticker, name, slug, price in USD, market cap in USD,
volume in USD, USD balance, ETH balance, ETH spent in the last 30 days,
ETH spent in the last 7 days, ETH spent in the last day and main contract address.

**Kind**: global function  
**Returns**: <code>Array</code> - of all ERC20 projects.  
**Customfunction**:   
<a name="SAN_DAILY_ACTIVE_ADDRESSES"></a>

## SAN\_DAILY\_ACTIVE\_ADDRESSES(projectSlug, from, to) ⇒ <code>Array</code>
Gets the daily active addresses for the specified asset, during a given time interval.
"Daily Active Addresses" refers to the number of unique addresses that
participated in transactions on a blockchain each day.

**Kind**: global function  
**Returns**: <code>Array</code> - of daily active addresses.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

<a name="SAN_DAILY_TRANSACTION_VOLUME"></a>

## SAN\_DAILY\_TRANSACTION\_VOLUME(projectSlug, from, to) ⇒ <code>Array</code>
Gets the daily transaction volume for the specified asset, during a given time interval.
"Transaction Volume" refers to the total number of tokens within all
transfers that have occurred on a blockchain.

**Kind**: global function  
**Returns**: <code>Array</code> - of daily transaction volumes.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

<a name="SAN_DAILY_OHLC"></a>

## SAN\_DAILY\_OHLC(projectSlug, from, to) ⇒ <code>Array</code>
Gets the daily open, high, low, and close price values for the specified asset, during a given time interval.

**Kind**: global function  
**Returns**: <code>Array</code> - of daily open, high, low, and close price values.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

<a name="SAN_DAILY_PRICE_VOLUME_DIFF"></a>

## SAN\_DAILY\_PRICE\_VOLUME\_DIFF(currency, projectSlug, from, to) ⇒ <code>Array</code>
Gets the daily price-volume difference technical indicator for a given asset,
currency and time interval. This indicator measures the difference in trend between price and volume,
specifically when price goes up as volume goes down. Currency can be displayed in either USD or BTC.

**Kind**: global function  
**Returns**: <code>Array</code> - of daily price-volume difference technical indicator.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| currency | <code>string</code> | The currency in which the data should be presented. Either "USD" or "BTC". |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

<a name="SAN_SOCIAL_VOLUME_PROJECTS"></a>

## SAN\_SOCIAL\_VOLUME\_PROJECTS() ⇒ <code>Array</code>
Returns a list of project slugs for which there is social volume data.

**Kind**: global function  
**Returns**: <code>Array</code> - of social volume projects.  
**Customfunction**:   
<a name="SAN_DAILY_SOCIAL_VOLUME"></a>

## SAN\_DAILY\_SOCIAL\_VOLUME(projectSlug, from, to, socialVolumeType) ⇒ <code>Array</code>
Returns a list of mentions count for a given project and time interval.

**Kind**: global function  
**Returns**: <code>Array</code> - of mention counts.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |
| socialVolumeType | <code>string</code> | The source of mention counts, one of the following: "PROFESSIONAL_TRADERS_CHAT_OVERVIEW", "TELEGRAM_CHATS_OVERVIEW", "TELEGRAM_DISCUSSION_OVERVIEW", "DISCORD_DISCUSSION_OVERVIEW" |

<a name="SAN_DAILY_GITHUB_ACTIVITY"></a>

## SAN\_DAILY\_GITHUB\_ACTIVITY(projectSlug, from, to) ⇒ <code>Array</code>
Returns a list of github activity for a given slug and time interval.

**Kind**: global function  
**Returns**: <code>Array</code> - of github activity.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

<a name="SAN_DAILY_DEV_ACTIVITY"></a>

## SAN\_DAILY\_DEV\_ACTIVITY(projectSlug, from, to) ⇒ <code>Array</code>
Returns a list of dev activity for a given slug and time interval.

**Kind**: global function  
**Returns**: <code>Array</code> - of dev activity.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

<a name="SAN_DAILY_NETWORK_GROWTH"></a>

## SAN\_DAILY\_NETWORK\_GROWTH(projectSlug, from, to) ⇒ <code>Array</code>
Returns the number of new addresses being created on the project network for a given slug and time interval.

**Kind**: global function  
**Returns**: <code>Array</code> - of number of new addresses.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

<a name="SAN_DAILY_EXCHANGE_FUNDS_FLOW"></a>

## SAN\_DAILY\_EXCHANGE\_FUNDS\_FLOW(projectSlug, from, to) ⇒ <code>Array</code>
Fetches the difference between the tokens that were deposited minus
the tokens that were withdrawn from an exchange for a given slug and time interval.

**Kind**: global function  
**Returns**: <code>Array</code> - of dev activity.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

<a name="SAN_DAILY_TOKEN_CIRCULATION"></a>

## SAN\_DAILY\_TOKEN\_CIRCULATION(projectSlug, from, to) ⇒ <code>Array</code>
Returns token circulation for a given slug and time interval.

**Kind**: global function  
**Returns**: <code>Array</code> - of token circulation.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

<a name="SAN_DAILY_TRENDING_WORDS"></a>

## SAN\_DAILY\_TRENDING\_WORDS(source, size, hour, from, to) ⇒ <code>Array</code>
Returns list of trending words and their corresponding trend score.

**Kind**: global function  
**Returns**: <code>Array</code> - of trending words and their score.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | One of the following: TELEGRAM PROFESSIONAL_TRADERS_CHAT REDDIT ALL |
| size | <code>number</code> | An integer showing how many words should be included in the top list (max 100). |
| hour | <code>number</code> | An integer showing the hour of the day when the calculation was executed. The trending words are currently generated only 3 times a day - 01:00 UTC, 08:00 UTC and 14:00 UTC. Example: 1 |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

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
Fetch social data for a specified project.

**Kind**: global function  
**Returns**: <code>Array</code> - of project's social data.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |

<a name="SAN_DAILY_TOKEN_AGE_CONSUMED"></a>

## SAN\_DAILY\_TOKEN\_AGE\_CONSUMED(projectSlug, from, to) ⇒ <code>Array</code>
Returns amount of tokens changing addresses, multiplied by the number of blocks
created on the blockchain since they last moved.
Spikes are signal of a large amount of tokens moving after being idle for an extended period of time.

Grouping by interval works by summing all records in the interval.

**Kind**: global function  
**Returns**: <code>Array</code> - of burn rates.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

<a name="SAN_MVRV_RATIO"></a>

## SAN\_MVRV\_RATIO(projectSlug, from, to) ⇒ <code>Array</code>
Returns MVRV(Market-Value-to-Realized-Value)

**Kind**: global function  
**Returns**: <code>Array</code> - of ratios.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

<a name="SAN_NVT_RATIO"></a>

## SAN\_NVT\_RATIO(projectSlug, from, to) ⇒ <code>Array</code>
Returns NVT (Network-Value-to-Transactions-Ratio Daily Market Cap / Daily Transaction Volume)
Since Daily Transaction Volume gets rather noisy and easy to manipulate
by transferring the same tokens through couple of addresses over and over again,
it’s not an ideal measure of a network’s economic activity.
That’s why we calculate NVT using Daily Trx Volume, but also by using Daily Token Circulation instead,
which filters out excess transactions and provides a cleaner overview of a blockchain’s daily transaction throughput.

**Kind**: global function  
**Returns**: <code>Array</code> - of NVT ratios.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

<a name="SAN_DAILY_ACTIVE_DEPOSITS"></a>

## SAN\_DAILY\_ACTIVE\_DEPOSITS(projectSlug, from, to) ⇒ <code>Array</code>
Returns number of unique deposit addresses that have been active for a project.

**Kind**: global function  
**Returns**: <code>Array</code> - of deposit address numbers.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

<a name="SAN_REALIZED_VALUE"></a>

## SAN\_REALIZED\_VALUE(projectSlug, from, to) ⇒ <code>Array</code>
Returns Realized value - sum of the acquisition costs of an asset located in a wallet.
The realized value across the whole network is computed by summing the realized values
of all wallets holding tokens at the moment.

**Kind**: global function  
**Returns**: <code>Array</code> - of realized values.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

<a name="SAN_GAS_USED"></a>

## SAN\_GAS\_USED(from, to) ⇒ <code>Array</code>
Returns used Gas by a blockchain.
When you send tokens, interact with a contract or do anything else on the blockchain,
you must pay for that computation. That payment is calculated in Gas.

**Kind**: global function  
**Returns**: <code>Array</code> - of quantities of gas used.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

