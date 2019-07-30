require('../helper.js')

const slug = 'santiment'
const from = new Date(2019, 7, 21, 0, 0, 0)
const to = new Date(2019, 7, 24, 0, 0, 0)

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
