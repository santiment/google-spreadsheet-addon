const { expect } = require('chai')
const { testFieldTypes } = require('../support/helper.js')
const { testHandlesNullData, assertNumberOfRecords, assertDaysMatch } = require('../support/integrationHelper.js')
const { slugsList, from, to, numberOfDays, days } = require('../support/setup.js')

describe('SAN_SOCIAL_VOLUME_MULTIPLE_SLUGS', () => {
  const expected = {
    date: 'string',
    valueSan: 'number',
    valueEth: 'number'
  }

  const response = san.SAN_SOCIAL_VOLUME_MULTIPLE_SLUGS(slugsList, from, to)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHandlesNullData('fetchGetMetricMultipleSlugs', san.SAN_SOCIAL_VOLUME_MULTIPLE_SLUGS, slugsList, from, to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Ethereum', 'Santiment']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns an exception', () => {
    const sources = ['TELEGRAM_DISCUSSION_OVERVIEW'] // community social volume doesnt work with multiple slugs
    sources.forEach((source) => {
      const results = san.SAN_SOCIAL_VOLUME_MULTIPLE_SLUGS(slugsList, from, to, source)
      const expected = ['TELEGRAM_DISCUSSION_OVERVIEW is not supported for multiple slugs social metrics...']
      expect(results).to.deep.equal(expected)
    })
  })

  it('returns a record per every day', () => {
    const sources = [
      'TELEGRAM_CHATS_OVERVIEW',
      'REDDIT_COMMENTS_OVERVIEW',
      'TWITTER_CHATS_OVERVIEW'
    ]
    sources.forEach((source) => {
      const results = san.SAN_SOCIAL_VOLUME_MULTIPLE_SLUGS(slugsList, from, to, source)
      assertNumberOfRecords(results, numberOfDays)
      assertDaysMatch(results, days)
    })
  })
})
