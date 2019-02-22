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
<dt><a href="#SAN_DAILY_PRICE_VOLUME_DIFF">SAN_DAILY_PRICE_VOLUME_DIFF(currency, projectTicker, from, to)</a> ⇒ <code>Array</code></dt>
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

## SAN\_DAILY\_PRICE\_VOLUME\_DIFF(currency, projectTicker, from, to) ⇒ <code>Array</code>
Gets the daily price-volume difference technical indicator for a given asset,
currency and time interval. This indicator measures the difference in trend between price and volume,
specifically when price goes up as volume goes down. Currency can be displayed in either USD or BTC.

**Kind**: global function  
**Returns**: <code>Array</code> - of daily price-volume difference technical indicator.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| currency | <code>string</code> | The currency in which the data should be presented. Either "USD" or "BTC". |
| projectTicker | <code>string</code> | The ticker of the asset, spelled in capital letters. Example: "SAN". |
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
