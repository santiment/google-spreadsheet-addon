## Functions

<dl>
<dt><a href="#SAN_DAILY_PRICES">SAN_DAILY_PRICES(projectSlug, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>DEPRECATED: Use =SAN_PRICES instead.</p>
</dd>
<dt><a href="#SAN_DAILY_ACTIVE_ADDRESSES">SAN_DAILY_ACTIVE_ADDRESSES(projectSlug, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>DEPRECATED: Use =SAN_ACTIVE_ADDRESSES instead.</p>
</dd>
<dt><a href="#SAN_DAILY_TRANSACTION_VOLUME">SAN_DAILY_TRANSACTION_VOLUME(projectSlug, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>DEPRECATED: Use =SAN_TRANSACTION_VOLUME instead.</p>
</dd>
<dt><a href="#SAN_DAILY_OHLC">SAN_DAILY_OHLC(projectSlug, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>DEPRECATED: Use =SAN_OHLC instead.</p>
</dd>
<dt><a href="#SAN_DAILY_PRICE_VOLUME_DIFF">SAN_DAILY_PRICE_VOLUME_DIFF(currency, projectSlug, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>DEPRECATED: Use =SAN_PRICE_VOLUME_DIFF instead.</p>
</dd>
<dt><a href="#SAN_DAILY_SOCIAL_VOLUME">SAN_DAILY_SOCIAL_VOLUME(projectSlug, from, to, socialVolumeType)</a> ⇒ <code>Array</code></dt>
<dd><p>DEPRECATED: Use =SAN_SOCIAL_VOLUME instead.</p>
</dd>
<dt><a href="#SAN_DAILY_GITHUB_ACTIVITY">SAN_DAILY_GITHUB_ACTIVITY(projectSlug, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>DEPRECATED: Use =SAN_GITHUB_ACTIVITY instead.</p>
</dd>
<dt><a href="#SAN_DAILY_DEV_ACTIVITY">SAN_DAILY_DEV_ACTIVITY(projectSlug, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>DEPRECATED: Use =SAN_DEV_ACTIVITY instead.</p>
</dd>
<dt><a href="#SAN_DAILY_NETWORK_GROWTH">SAN_DAILY_NETWORK_GROWTH(projectSlug, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>DEPRECATED: Use =SAN_NETWORK_GROWTH instead.</p>
</dd>
<dt><a href="#SAN_DAILY_EXCHANGE_FUNDS_FLOW">SAN_DAILY_EXCHANGE_FUNDS_FLOW(projectSlug, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>DEPRECATED: Use =SAN_EXCHANGE_FUNDS_FLOW instead.</p>
</dd>
<dt><a href="#SAN_DAILY_TOKEN_CIRCULATION">SAN_DAILY_TOKEN_CIRCULATION(projectSlug, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>DEPRECATED: Use =SAN_TOKEN_CIRCULATION instead.</p>
</dd>
<dt><a href="#SAN_DAILY_TRENDING_WORDS">SAN_DAILY_TRENDING_WORDS(source, size, hour, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>DEPRECATED: Use =SAN_TRENDING_WORDS instead.</p>
</dd>
<dt><a href="#SAN_DAILY_TOKEN_AGE_CONSUMED">SAN_DAILY_TOKEN_AGE_CONSUMED(projectSlug, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>DEPRECATED: Use =SAN_TOKEN_AGE_CONSUMED instead.</p>
<p>Grouping by interval works by summing all records in the interval.</p>
</dd>
<dt><a href="#SAN_DAILY_ACTIVE_DEPOSITS">SAN_DAILY_ACTIVE_DEPOSITS(projectSlug, from, to)</a> ⇒ <code>Array</code></dt>
<dd><p>DEPRECATED: Use =SAN_ACTIVE_DEPOSITS instead.</p>
</dd>
</dl>

<a name="SAN_DAILY_PRICES"></a>

## SAN\_DAILY\_PRICES(projectSlug, from, to) ⇒ <code>Array</code>
DEPRECATED: Use =SAN_PRICES instead.

**Kind**: global function  
**Returns**: <code>Array</code> - of prices.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

<a name="SAN_DAILY_ACTIVE_ADDRESSES"></a>

## SAN\_DAILY\_ACTIVE\_ADDRESSES(projectSlug, from, to) ⇒ <code>Array</code>
DEPRECATED: Use =SAN_ACTIVE_ADDRESSES instead.

**Kind**: global function  
**Returns**: <code>Array</code> - of number of active addresses.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

<a name="SAN_DAILY_TRANSACTION_VOLUME"></a>

## SAN\_DAILY\_TRANSACTION\_VOLUME(projectSlug, from, to) ⇒ <code>Array</code>
DEPRECATED: Use =SAN_TRANSACTION_VOLUME instead.

**Kind**: global function  
**Returns**: <code>Array</code> - of transaction volumes.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

<a name="SAN_DAILY_OHLC"></a>

## SAN\_DAILY\_OHLC(projectSlug, from, to) ⇒ <code>Array</code>
DEPRECATED: Use =SAN_OHLC instead.

**Kind**: global function  
**Returns**: <code>Array</code> - of open, high, low, and close price values.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

<a name="SAN_DAILY_PRICE_VOLUME_DIFF"></a>

## SAN\_DAILY\_PRICE\_VOLUME\_DIFF(currency, projectSlug, from, to) ⇒ <code>Array</code>
DEPRECATED: Use =SAN_PRICE_VOLUME_DIFF instead.

**Kind**: global function  
**Returns**: <code>Array</code> - of price-volume difference technical indicator.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| currency | <code>string</code> | The currency in which the data should be presented. Either "USD" or "BTC". |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

<a name="SAN_DAILY_SOCIAL_VOLUME"></a>

## SAN\_DAILY\_SOCIAL\_VOLUME(projectSlug, from, to, socialVolumeType) ⇒ <code>Array</code>
DEPRECATED: Use =SAN_SOCIAL_VOLUME instead.

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
DEPRECATED: Use =SAN_GITHUB_ACTIVITY instead.

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
DEPRECATED: Use =SAN_DEV_ACTIVITY instead.

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
DEPRECATED: Use =SAN_NETWORK_GROWTH instead.

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
DEPRECATED: Use =SAN_EXCHANGE_FUNDS_FLOW instead.

**Kind**: global function  
**Returns**: <code>Array</code> - of token deposit/withdraw differences.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

<a name="SAN_DAILY_TOKEN_CIRCULATION"></a>

## SAN\_DAILY\_TOKEN\_CIRCULATION(projectSlug, from, to) ⇒ <code>Array</code>
DEPRECATED: Use =SAN_TOKEN_CIRCULATION instead.

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
DEPRECATED: Use =SAN_TRENDING_WORDS instead.

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

<a name="SAN_DAILY_TOKEN_AGE_CONSUMED"></a>

## SAN\_DAILY\_TOKEN\_AGE\_CONSUMED(projectSlug, from, to) ⇒ <code>Array</code>
DEPRECATED: Use =SAN_TOKEN_AGE_CONSUMED instead.

Grouping by interval works by summing all records in the interval.

**Kind**: global function  
**Returns**: <code>Array</code> - of token age consumed numbers.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

<a name="SAN_DAILY_ACTIVE_DEPOSITS"></a>

## SAN\_DAILY\_ACTIVE\_DEPOSITS(projectSlug, from, to) ⇒ <code>Array</code>
DEPRECATED: Use =SAN_ACTIVE_DEPOSITS instead.

**Kind**: global function  
**Returns**: <code>Array</code> - of deposit address numbers.  
**Customfunction**:   

| Param | Type | Description |
| --- | --- | --- |
| projectSlug | <code>string</code> | Name of the asset at sanbase, which can be found at the end of the URL (eg. the Santiment URL is https://app.santiment.net/projects/santiment, so the projectSlug would be santiment). |
| from | <code>date</code> | The starting date to fetch the data. Example: DATE(2018, 9, 20) |
| to | <code>date</code> | The ending date to fetch the data. Example: DATE(2018, 9, 21) |

