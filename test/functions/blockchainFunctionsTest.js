require('../helper.js')

const slug = 'santiment'
const from = new Date(2019, 7, 21, 0, 0, 0)
const to = new Date(2019, 7, 24, 0, 0, 0)
const ethAddress = '0x1f3df0b8390bb8e9e322972c5e75583e87608ec2'
const limit = 2

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

describe('tokenTopTransactions_', () => {
  it('returns top token transactions', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchTokenTopTransactions').returns(
      {
        tokenTopTransactions: [{
          datetime: '2019-07-23T04:29:16.000000Z',
          fromAddress: {
            address: '0xb0abd4cc5195560209492b6854c666d7cff8c03c',
            isExchange: false
          },
          toAddress: {
            address: '0xbfcc24e6644956c05d03ebef279e26f9c710d6ef',
            isExchange: false
          },
          trxHash: '0xf7cabbc1a635c44de4d8d77c4c07892d8aed1f8239ff63b593612d2bafd64ff7',
          trxValue: 8016.81918049327
        },
        {
          datetime: '2019-07-23T20:51:31.000000Z',
          fromAddress: {
            address: '0x138dd537d56f2f2761a6fc0a2a0ace67d55480fe',
            isExchange: false
          },
          toAddress: {
            address: '0xb2be7cf4aedc03c4cefd6328ad7af72e22b062b2',
            isExchange: false
          },
          trxHash: '0xc76d5c7c6cf8bcd4cf08a4f6d1bbace5e04b0c2be57a93cfa7dc8b2d425370f2',
          trxValue: 2.0e3
        }
        ]
      }
    )

    const response = san.tokenTopTransactions_(slug, from, to, limit)

    expect(response).to.deep.eq(
      [
        [
          'Date',
          'From Address',
          'From Is Exchange',
          'To Address',
          'To Is Exchange',
          'Transaction Hash',
          'Transaction Value'
        ],
        [
          '2019-07-23',
          '0xb0abd4cc5195560209492b6854c666d7cff8c03c',
          false,
          '0xbfcc24e6644956c05d03ebef279e26f9c710d6ef',
          false,
          '0xf7cabbc1a635c44de4d8d77c4c07892d8aed1f8239ff63b593612d2bafd64ff7',
          8016.81918049327
        ],
        [
          '2019-07-23',
          '0x138dd537d56f2f2761a6fc0a2a0ace67d55480fe',
          false,
          '0xb2be7cf4aedc03c4cefd6328ad7af72e22b062b2',
          false,
          '0xc76d5c7c6cf8bcd4cf08a4f6d1bbace5e04b0c2be57a93cfa7dc8b2d425370f2',
          2000
        ]
      ]
    )
  })

  it('returns headers only on empty array response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchTokenTopTransactions').returns(
      {
        tokenTopTransactions: []
      }
    )
    const response = san.tokenTopTransactions_(slug, from, to, limit)
    expect(response).to.deep.eq(
      [
        [
          'Date',
          'From Address',
          'From Is Exchange',
          'To Address',
          'To Is Exchange',
          'Transaction Hash',
          'Transaction Value'
        ]
      ]
    )
  })

  it('throws "No data" on null response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchTokenTopTransactions').returns(null)
    expect(() => san.tokenTopTransactions_(slug, from, to, limit)).to.throw('No data')
  })
})
