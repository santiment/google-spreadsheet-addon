require('../helper.js')

const slug = 'santiment'
const from = new Date(2019, 7, 21, 0, 0, 0)
const to = new Date(2019, 7, 24, 0, 0, 0)
const ethAddress = '0x1f3df0b8390bb8e9e322972c5e75583e87608ec2'

describe('historicalBalance', () => {
  it('returns historical balance of an address', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchHistoricalBalance').returns(
      [
        {
          datetime: '2019-07-21',
          balance: 212664.33000000002
        },
        {
          datetime: '2019-07-22',
          balance: 212664.33000000002
        },
        {
          datetime: '2019-07-23',
          balance: 212664.33000000002
        },
        {
          datetime: '2019-07-24',
          balance: 211664.33
        }
      ]
    )

    const response = san.historicalBalance_(slug, from, to, ethAddress)

    expect(response).to.deep.eq(
      [
        [ 'Date', 'Balance' ],
        [ '2019-07-21', 212664.33000000002 ],
        [ '2019-07-22', 212664.33000000002 ],
        [ '2019-07-23', 212664.33000000002 ],
        [ '2019-07-24', 211664.33 ]
      ]
    )
  })

  it('returns headers only on empty array response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchHistoricalBalance').returns([])
    const response = san.historicalBalance_(slug, from, to, ethAddress)

    expect(response).to.deep.eq(
      [
        ['Date', 'Balance']
      ]
    )
  })

  it('throws "No data" on null response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchHistoricalBalance').returns(null)
    expect(() => san.historicalBalance_(slug, from, to, ethAddress)).to.throw('No data')
  })
})
