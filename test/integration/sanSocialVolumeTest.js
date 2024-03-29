
const { testFieldTypes } = require('../support/helper.js')
const { testHandlesNullData, assertNumberOfRecords, assertDaysMatch } = require('../support/integrationHelper.js')
const { slug, from, to, numberOfDays, days } = require('../support/setup.js')

describe('SAN_SOCIAL_VOLUME', () => {
  const expected = {
    date: 'string',
    value: 'number'
  }

  const response = san.SAN_SOCIAL_VOLUME(slug, from, to)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHandlesNullData('fetchGetMetric', san.SAN_SOCIAL_VOLUME, slug, from, to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Value']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const results = san.SAN_SOCIAL_VOLUME(slug, from, to)

    assertNumberOfRecords(results, numberOfDays)

    assertDaysMatch(results, days)
  })

  it('returns a record per every day, per every source', () => {
    const sources = [
      'TELEGRAM_DISCUSSION_OVERVIEW',
      'TELEGRAM_CHATS_OVERVIEW',
      'REDDIT_COMMENTS_OVERVIEW',
      'TWITTER_CHATS_OVERVIEW'
    ]
    sources.forEach(
      source => {
        const results = san.SAN_SOCIAL_VOLUME(slug, from, to, source)
        assertNumberOfRecords(results, numberOfDays)
        assertDaysMatch(results, days)
      }
    )
  })
})
