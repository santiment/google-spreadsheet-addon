const { testFieldTypes } = require('../helper.js')
const { testHandlesNullData } = require('../integration_helper.js')
const { slug } = require('../setup.js')

describe('SAN_PROJECT_SOCIAL_DATA', () => {
  const expected = {
    ticker: 'string',
    name: 'string',
    slug: 'string',
    websiteLink: 'string',
    whitepaperLink: 'string',
    facebookLink: 'string',
    blogLink: 'string',
    linkedinLink: 'null',
    githubLink: 'string',
    twitterLink: 'string',
    redditLink: 'string',
    slackLink: 'string'
  }

  const response = san.SAN_PROJECT_SOCIAL_DATA(slug)
  const headers = response[0]
  const results = response[1]

  testFieldTypes(results, expected)
  testHandlesNullData(
    'fetchProjectSocialData',
    san.SAN_PROJECT_SOCIAL_DATA,
    slug
  )

  it('has proper headers', () => {
    const expectedHeaders = [
      'Ticker',
      'Name',
      'Slug',
      'Website Link',
      'Whitepaper Link',
      'Facebook Link',
      'Blog Link',
      'LinkedIn Link',
      'Github Link',
      'Twitter Link',
      'Reddit Link',
      'Chat Link'
    ]

    expect(headers).to.deep.equal(expectedHeaders)
  })
})
