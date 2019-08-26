require('../helper.js')

const slug = 'santiment'

describe('allProjects_', () => {
  it('returns list of all projects', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchAllProjects').returns(
      [
        {
          'ethBalance': 0,
          'ethSpent1d': 0,
          'ethSpent30d': 0,
          'ethSpent7d': 0,
          'marketcapUsd': 2093847.7682393144,
          'name': '0chain',
          'priceUsd': 0.05219461322,
          'slug': '0chain',
          'ticker': 'ZCN',
          'usdBalance': 0,
          'volumeUsd': 1256.94376462815
        },
        {
          'ethBalance': 12217.678594594596,
          'ethSpent1d': 0,
          'ethSpent30d': 0,
          'ethSpent7d': 0,
          'marketcapUsd': 107460158.1554692,
          'name': '0x',
          'priceUsd': 0.178958333705,
          'slug': '0x',
          'ticker': 'ZRX',
          'usdBalance': 2319334.639906516,
          'volumeUsd': 14141933.4691686
        }
      ]
    )
    const response = san.allProjects_()

    expect(response).to.deep.eq(
      [
        [ 'Ticker', 'Name', 'Slug', 'USD Price', 'USD Marketcap', 'USD Volume', 'USD Balance', 'ETH Balance', 'ETH Spent 30D', 'ETH Spent 7D', 'ETH Spent 1D' ],
        [ 'ZCN', '0chain', '0chain', 0.05219461322, 2093847.7682393144, 1256.94376462815, 0, 0, 0, 0, 0 ],
        [ 'ZRX', '0x', '0x', 0.178958333705, 107460158.1554692, 14141933.4691686, 2319334.639906516, 12217.678594594596, 0, 0, 0 ]
      ]
    )
  })
})

describe('erc20Projects_', () => {
  it('returns list of all projects', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchErc20Projects').returns(
      [
        {
          'ethBalance': 0,
          'ethSpent1d': 0,
          'ethSpent30d': 0,
          'ethSpent7d': 0,
          'mainContractAddress': '0xb9ef770b6a5e12e45983c5d80545258aa38f3b78',
          'marketcapUsd': 2099417.35727895,
          'name': '0chain',
          'priceUsd': 0.0523334497439,
          'slug': '0chain',
          'ticker': 'ZCN',
          'usdBalance': 0,
          'volumeUsd': 1260.18004977532
        },
        {
          'ethBalance': 12217.678594594596,
          'ethSpent1d': 0,
          'ethSpent30d': 0,
          'ethSpent7d': 0,
          'mainContractAddress': '0xe41d2489571d322189246dafa5ebde1f4699f498',
          'marketcapUsd': 108249640.37455656,
          'name': '0x',
          'priceUsd': 0.180273094681,
          'slug': '0x',
          'ticker': 'ZRX',
          'usdBalance': 2327365.1751939454,
          'volumeUsd': 14263628.1570071
        }
      ]
    )
    const response = san.erc20Projects_()

    expect(response).to.deep.eq(
      [
        [ 'Ticker', 'Name', 'Slug', 'USD Price', 'USD Marketcap', 'USD Volume', 'USD Balance', 'ETH Balance', 'ETH Spent 30D', 'ETH Spent 7D', 'ETH Spent 1D', 'Main Contract Address' ],
        [ 'ZCN', '0chain', '0chain', 0.0523334497439, 2099417.35727895, 1260.18004977532, 0, 0, 0, 0, 0, '0xb9ef770b6a5e12e45983c5d80545258aa38f3b78' ],
        [ 'ZRX', '0x', '0x', 0.180273094681, 108249640.37455656, 14263628.1570071, 2327365.1751939454, 12217.678594594596, 0, 0, 0, '0xe41d2489571d322189246dafa5ebde1f4699f498' ]
      ]
    )
  })
})

describe('fetchProjectFundamentals_', () => {
  it('returns list of all project\'s fundamentals', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchProjectFundamentals').returns(
      {
        'availableSupply': '62660370.9569795',
        'averageDevActivity': 71.5,
        'ethBalance': 29583.389448238777,
        'ethSpent30d': 0,
        'fundsRaisedUsdIcoEndPrice': 9155789.4,
        'marketcapUsd': 29554961.588902876,
        'name': 'Santiment',
        'percentChange24h': '0.319887',
        'percentChange7d': '-10.7174',
        'priceUsd': 0.47166911299,
        'slug': 'santiment',
        'ticker': 'SAN',
        'usdBalance': 5635387.2655066,
        'volumeChange24h': 21.95,
        'volumeUsd': 15310.6778037951
      }
    )
    const response = san.fetchProjectFundamentals_(slug)

    expect(response).to.deep.eq(
      [
        [
          'Ticker',
          'Name',
          'Slug',
          'Funds Raised From ICO In USD',
          'ETH Spent 30D',
          'ETH Balance',
          'USD Balance',
          'USD Price',
          'USD Volume',
          'USD Marketcap',
          'Percent Change 24H',
          'Percent Change 7D',
          'Volume Change 24H',
          'Available Supply',
          'Average Dev Activity 30D'
        ],
        [ 'SAN', 'Santiment', 'santiment', 9155789.4, 0, 29583.389448238777, 5635387.2655066, 0.47166911299, 15310.6778037951, 29554961.588902876, 0.319887, -10.7174, 21.95, 62660370.9569795, 71.5 ]
      ]
    )
  })
})

describe('projectSocialData_', () => {
  it('returns the social data for a given project', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchProjectSocialData').returns(
      {
        'blogLink': 'https://santiment.net/blog/',
        'facebookLink': 'https://www.facebook.com/santimentfeed/',
        'githubLink': 'https://github.com/santiment',
        'linkedinLink': null,
        'name': 'Santiment',
        'redditLink': 'https://www.reddit.com/r/santiment/',
        'slackLink': 'https://discord.gg/6fMxk82',
        'slug': 'santiment',
        'ticker': 'SAN',
        'twitterLink': 'https://twitter.com/santimentfeed',
        'websiteLink': 'https://santiment.net/',
        'whitepaperLink': 'https://docs.google.com/document/d/1hHmJQWrPrObSgCA8kTbk-4LgqGbYzukQAjtg5b8jwc0/view'
      }
    )
    const response = san.projectSocialData_(slug)

    expect(response).to.deep.eq(
      [
        [
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
        ],
        [ 'SAN', 'Santiment', 'santiment', 'https://santiment.net/', 'https://docs.google.com/document/d/1hHmJQWrPrObSgCA8kTbk-4LgqGbYzukQAjtg5b8jwc0/view', 'https://www.facebook.com/santimentfeed/', 'https://santiment.net/blog/', null, 'https://github.com/santiment', 'https://twitter.com/santimentfeed', 'https://www.reddit.com/r/santiment/', 'https://discord.gg/6fMxk82' ]
      ]
    )
  })
})
