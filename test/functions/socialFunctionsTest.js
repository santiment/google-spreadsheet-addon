require('../helper.js')

const slug = 'santiment'
const ethereumSlug = 'ethereum'
const from = new Date(2019, 7, 21, 0, 0, 0)
const to = new Date(2019, 7, 24, 0, 0, 0)
const source = 'ALL'

describe('historyTwitterData_', () => {
  it('returns the followers count for the given slug', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchHistoryTwitterData').returns(
      [
        {
          datetime: '2019-07-21',
          followersCount: 10875
        },
        {
          datetime: '2019-07-22',
          followersCount: 10873
        },
        {
          datetime: '2019-07-23',
          followersCount: 10873
        },
        {
          datetime: '2019-07-24',
          followersCount: 10872
        }
      ]
    )
    const response = san.historyTwitterData_(slug, from, to)

    expect(response).to.deep.eq(
      [
        [ 'Date', 'Followers Count' ],
        [ '2019-07-21', 10875 ],
        [ '2019-07-22', 10873 ],
        [ '2019-07-23', 10873 ],
        [ '2019-07-24', 10872 ]
      ]
    )
  })

  it('returns headers only on empty array response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchHistoryTwitterData').returns([])
    const response = san.historyTwitterData_(slug, from, to)

    expect(response).to.deep.eq(
      [
        ['Date', 'Followers Count']
      ]
    )
  })

  it('throws "No data" on null response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchHistoryTwitterData').returns(null)
    expect(() => san.historyTwitterData_(slug, from, to)).to.throw('No data')
  })
})

describe('socialDominance_', () => {
  it('returns the social dominance of a slug', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchSocialDominance').returns(
      [
        {
          datetime: '2019-07-21',
          dominance: 3.8395691557137193
        },
        {
          datetime: '2019-07-22',
          dominance: 3.965835613512608
        },
        {
          datetime: '2019-07-23',
          dominance: 3.7353530673063444
        },
        {
          datetime: '2019-07-24',
          dominance: 4.604002351605143
        }
      ]
    )

    const response = san.socialDominance_(slug, from, to, source)

    expect(response).to.deep.eq(
      [
        [ 'Date', 'Dominance' ],
        [ '2019-07-21', 3.8395691557137193 ],
        [ '2019-07-22', 3.965835613512608 ],
        [ '2019-07-23', 3.7353530673063444 ],
        [ '2019-07-24', 4.604002351605143 ]
      ]
    )
  })

  it('returns headers only on empty array response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchSocialDominance').returns([])
    const response = san.socialDominance_(slug, from, to, source)

    expect(response).to.deep.eq(
      [
        ['Date', 'Dominance']
      ]
    )
  })

  it('throws "No data" on null response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchSocialDominance').returns(null)
    expect(() => san.socialDominance_(slug, from, to, source)).to.throw('No data')
  })
})

describe('socialVolume_', () => {
  it('returns the social volume of a slug', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchSocialVolume').returns(
      [
        {
          datetime: '2019-07-21T00:00:00Z',
          mentionsCount: 138
        },
        {
          datetime: '2019-07-22T00:00:00Z',
          mentionsCount: 185
        },
        {
          datetime: '2019-07-23T00:00:00Z',
          mentionsCount: 175
        }
      ]
    )

    const response = san.socialVolume_(ethereumSlug, from, to, 'TELEGRAM_CHATS_OVERVIEW')

    expect(response).to.deep.eq(
      [
        [ 'Date', 'Mentions Count' ],
        [ '2019-07-21', 138 ],
        [ '2019-07-22', 185 ],
        [ '2019-07-23', 175 ]
      ]
    )
  })

  it('returns headers only on empty array response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchSocialVolume').returns([])
    const response = san.socialVolume_(slug, from, to, 'TELEGRAM_CHATS_OVERVIEW')

    expect(response).to.deep.eq(
      [
        ['Date', 'Mentions Count']
      ]
    )
  })

  it('throws "No data" on null response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchSocialVolume').returns(null)
    expect(() => san.socialVolume_(slug, from, to, 'TELEGRAM_CHATS_OVERVIEW')).to.throw('No data')
  })
})

describe('news_', () => {
  it('returns news for a slug', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchNews').returns(
      [
        {
          datetime: '2019-07-06T23:06:36Z',
          title: 'Santiment Network Token Reaches 1-Day Volume of $17,181.00 (SAN)...',
          description: 'Santiment Network Token Reaches 1-Day Volume of $17,181.00...',
          sourceName: 'Mayfield Recorder',
          url: 'https://mayfieldrecorder.com/2019/07/06/santiment-network-token-re...'
        },
        {
          datetime: '2019-07-07T23:11:03Z',
          title: 'Santiment Network Token 24-Hour Trading Volume Reaches $26,130.0...',
          description: 'Santiment Network Token 24-Hour Trading Volume Reaches $26...',
          sourceName: 'Mayfield Recorder',
          url: 'https://mayfieldrecorder.com/2019/07/07/santiment-network-token-24...'
        }
      ]
    )

    const response = san.news_(ethereumSlug, from, to, 'TELEGRAM_CHATS_OVERVIEW')

    expect(response).to.deep.eq(
      [
        [ 'Date', 'Title', 'Source', 'URL', 'Description' ],
        [ '2019-07-06',
          'Santiment Network Token Reaches 1-Day Volume of $17,181.00 (SAN)...',
          'Mayfield Recorder',
          'https://mayfieldrecorder.com/2019/07/06/santiment-network-token-re...',
          'Santiment Network Token Reaches 1-Day Volume of $17,181.00...'
        ],
        [ '2019-07-07',
          'Santiment Network Token 24-Hour Trading Volume Reaches $26,130.0...',
          'Mayfield Recorder',
          'https://mayfieldrecorder.com/2019/07/07/santiment-network-token-24...',
          'Santiment Network Token 24-Hour Trading Volume Reaches $26...'
        ]
      ]
    )
  })

  it('returns headers only on empty array response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchNews').returns([])
    const response = san.news_(slug, from, to, 'TELEGRAM_CHATS_OVERVIEW')

    expect(response).to.deep.eq(
      [
        [ 'Date', 'Title', 'Source', 'URL', 'Description' ]
      ]
    )
  })

  it('throws "No data" on null response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchNews').returns(null)
    expect(() => san.news_(slug, from, to, 'TELEGRAM_CHATS_OVERVIEW')).to.throw('No data')
  })
})
