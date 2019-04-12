require('./helper.js')

const slug = 'santiment'
const from = 'from'
const to = 'to'

const testDeprecationMessage = (oldFunctionName, oldFunctionArgs, newFunctionName) => {
  it(`returns deprecation message for ${oldFunctionName}`, () => {
    const response = san[oldFunctionName].call(null, oldFunctionArgs)
    expect(response).to.eq(`DEPRECATED: Use =${newFunctionName} instead.`)
  })
}

testDeprecationMessage('SAN_DAILY_PRICES', [slug, from, to], 'SAN_PRICES')
testDeprecationMessage('SAN_DAILY_ACTIVE_ADDRESSES', [slug, from, to], 'SAN_ACTIVE_ADDRESSES')
testDeprecationMessage('SAN_DAILY_TRANSACTION_VOLUME', [slug, from, to], 'SAN_TRANSACTION_VOLUME')
testDeprecationMessage('SAN_DAILY_OHLC', [slug, from, to], 'SAN_OHLC')
testDeprecationMessage('SAN_DAILY_PRICE_VOLUME_DIFF', ['USD', slug, from, to], 'SAN_PRICE_VOLUME_DIFF')
testDeprecationMessage('SAN_DAILY_SOCIAL_VOLUME', [slug, from, to, 'socialVolumeType'], 'SAN_SOCIAL_VOLUME')
testDeprecationMessage('SAN_DAILY_GITHUB_ACTIVITY', [slug, from, to], 'SAN_GITHUB_ACTIVITY')
testDeprecationMessage('SAN_DAILY_DEV_ACTIVITY', [slug, from, to], 'SAN_DEV_ACTIVITY')
testDeprecationMessage('SAN_DAILY_NETWORK_GROWTH', [slug, from, to], 'SAN_NETWORK_GROWTH')
testDeprecationMessage('SAN_DAILY_EXCHANGE_FUNDS_FLOW', [slug, from, to], 'SAN_EXCHANGE_FUNDS_FLOW')
testDeprecationMessage('SAN_DAILY_TOKEN_CIRCULATION', [slug, from, to], 'SAN_TOKEN_CIRCULATION')
testDeprecationMessage('SAN_DAILY_TRENDING_WORDS', ['ALL', 100, 1, from, to], 'SAN_TRENDING_WORDS')
testDeprecationMessage('SAN_DAILY_TOKEN_AGE_CONSUMED', [slug, from, to], 'SAN_TOKEN_AGE_CONSUMED')
testDeprecationMessage('SAN_DAILY_ACTIVE_DEPOSITS', [slug, from, to], 'SAN_ACTIVE_DEPOSITS')
