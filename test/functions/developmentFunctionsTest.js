require('../helper.js')

const slug = 'santiment'
const from = new Date(2019, 7, 21, 0, 0, 0)
const to = new Date(2019, 7, 24, 0, 0, 0)

describe('githubActivity_', () => {
  it('returns github activity', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchGithubActivity').returns(
      [
        {
          datetime: '2019-07-21',
          activity: 7
        },
        {
          datetime: '2019-07-22',
          activity: 122
        },
        {
          datetime: '2019-07-23',
          activity: 122
        },
        {
          datetime: '2019-07-24',
          activity: 101
        }
      ]
    )

    const response = san.githubActivity_(slug, from, to)

    expect(response).to.deep.eq(
      [
        [ 'Date', 'Activity' ],
        [ '2019-07-21', 7 ],
        [ '2019-07-22', 122 ],
        [ '2019-07-23', 122 ],
        [ '2019-07-24', 101 ]
      ]
    )
  })

  it('returns headers only on empty array response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchGithubActivity').returns([])
    const response = san.githubActivity_(slug, from, to)

    expect(response).to.deep.eq(
      [
        [ 'Date', 'Activity' ]
      ]
    )
  })

  it('throws "No data" on null response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchGithubActivity').returns(null)
    expect(() => san.githubActivity_(slug, from, to)).to.throw('No data')
  })
})

describe('devActivity_', () => {
  it('returns dev activity', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchDevActivity').returns(
      [
        {
          datetime: '2019-07-21',
          activity: 7
        },
        {
          datetime: '2019-07-22',
          activity: 121
        },
        {
          datetime: '2019-07-23',
          activity: 120
        },
        {
          datetime: '2019-07-24',
          activity: 91
        }
      ]
    )

    const response = san.devActivity_(slug, from, to)

    expect(response).to.deep.eq(
      [
        [ 'Date', 'Activity' ],
        [ '2019-07-21', 7 ],
        [ '2019-07-22', 121 ],
        [ '2019-07-23', 120 ],
        [ '2019-07-24', 91 ]
      ]
    )
  })

  it('returns headers only on empty array response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchDevActivity').returns([])
    const response = san.devActivity_(slug, from, to)

    expect(response).to.deep.eq(
      [
        [ 'Date', 'Activity' ]
      ]
    )
  })

  it('throws "No data" on null response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchDevActivity').returns(null)
    expect(() => san.devActivity_(slug, from, to)).to.throw('No data')
  })
})
