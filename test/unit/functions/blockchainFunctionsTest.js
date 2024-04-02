require('../../support/helper.js')

const slug = 'santiment'
const from = new Date(2019, 7, 21, 0, 0, 0)
const to = new Date(2019, 7, 24, 0, 0, 0)
const ethAddress = '0x1f3df0b8390bb8e9e322972c5e75583e87608ec2'
const limit = 2
const transactionType = 'ALL'
const numberOfHolders = 10

describe('historicalBalance_', () => {
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

describe('ethTopTransactions_', () => {
  it('returns top eth transactions', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchEthTopTransactions').returns(
      {
        ethTopTransactions: [{
          datetime: '2019-07-21T17:39:17.000000Z',
          fromAddress: {
            address: '0x6dd5a9f47cfbc44c04a0a4452f0ba792ebfbcc9a',
            isExchange: false
          },
          toAddress: {
            address: '0x55193c0fbf5921d4d91f26cc8cf84f5d72c6e50d',
            isExchange: false
          },
          trxHash: '0x33d89d936fb53761dd9ddc004699e6a2d8d09597b9aeaf294a04f378c712eb53',
          trxValue: 113.64
        },
        {
          datetime: '2019-07-24T15:11:34.000000Z',
          fromAddress: {
            address: '0x6a1517622feb74a242e68a26f423ae38e020a0b1',
            isExchange: false
          },
          toAddress: {
            address: '0x1f3df0b8390bb8e9e322972c5e75583e87608ec2',
            isExchange: false
          },
          trxHash: '0x17b0284721c6f8c0dcff763aedd2c3713f678630bc8a1f91a4520ad1d323040f',
          trxValue: 3.36511
        }
        ]
      }
    )

    const response = san.ethTopTransactions_(slug, from, to, limit, transactionType)

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
          '2019-07-21',
          '0x6dd5a9f47cfbc44c04a0a4452f0ba792ebfbcc9a',
          false,
          '0x55193c0fbf5921d4d91f26cc8cf84f5d72c6e50d',
          false,
          '0x33d89d936fb53761dd9ddc004699e6a2d8d09597b9aeaf294a04f378c712eb53',
          113.64
        ],
        [
          '2019-07-24',
          '0x6a1517622feb74a242e68a26f423ae38e020a0b1',
          false,
          '0x1f3df0b8390bb8e9e322972c5e75583e87608ec2',
          false,
          '0x17b0284721c6f8c0dcff763aedd2c3713f678630bc8a1f91a4520ad1d323040f',
          3.36511
        ]
      ]
    )
  })

  it('returns headers only on empty array response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchEthTopTransactions').returns(
      {
        ethTopTransactions: []
      }
    )
    const response = san.ethTopTransactions_(slug, from, to, limit, transactionType)
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
    sandbox.stub(san.ApiClient_.prototype, 'fetchEthTopTransactions').returns(null)
    expect(() => san.ethTopTransactions_(slug, from, to, limit, transactionType)).to.throw('No data')
  })
})

describe('ethSpentOverTime_', () => {
  it('returns eth spent over a given time course', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchEthSpentOverTime').returns(
      {
        ethSpentOverTime: [{
          datetime: '2019-07-21T12:40:34.000000Z',
          ethSpent: 113.6400629999956
        },
        {
          datetime: '2019-07-22T12:40:34.000000Z',
          ethSpent: 0
        },
        {
          datetime: '2019-07-23T12:40:34.000000Z',
          ethSpent: 0
        },
        {
          datetime: '2019-07-24T12:40:34.000000Z',
          ethSpent: 0
        }
        ]
      }
    )

    const response = san.ethSpentOverTime_(slug, from, to)

    expect(response).to.deep.eq(
      [
        [ 'Date', 'ETH Spent' ],
        [ '2019-07-21', 113.6400629999956 ],
        [ '2019-07-22', 0 ],
        [ '2019-07-23', 0 ],
        [ '2019-07-24', 0 ]
      ]
    )
  })

  it('returns headers only on empty array response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchEthSpentOverTime').returns(
      {
        ethSpentOverTime: []
      }
    )
    const response = san.ethSpentOverTime_(slug, from, to)
    expect(response).to.deep.eq(
      [
        ['Date', 'ETH Spent']
      ]
    )
  })

  it('throws "No data" on null response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchEthSpentOverTime').returns(null)
    expect(() => san.ethSpentOverTime_(slug, from, to)).to.throw('No data')
  })
})

describe('topHoldersPercentOfTotalSupply_', () => {
  it('returns top holders percentages of total supply', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchTopHoldersPercentOfTotalSupply').returns(
      [
        {
          datetime: '2019-07-21',
          inExchanges: 62.37616015165964,
          outsideExchanges: 25.214394751057107,
          inTopHoldersTotal: 87.59055490271675
        },
        {
          datetime: '2019-07-22',
          inExchanges: 62.37739334423916,
          outsideExchanges: 25.214394751057107,
          inTopHoldersTotal: 87.59178809529627
        },
        {
          datetime: '2019-07-23',
          inExchanges: 62.376443970234895,
          outsideExchanges: 25.214394751057107,
          inTopHoldersTotal: 87.590838721292
        },
        {
          datetime: '2019-07-24',
          inExchanges: 62.376443970234895,
          outsideExchanges: 25.214394751057107,
          inTopHoldersTotal: 87.590838721292
        }
      ]
    )

    const response = san.topHoldersPercentOfTotalSupply_(slug, from, to, numberOfHolders)

    expect(response).to.deep.eq(
      [
        [
          'Date',
          'In Exchanges',
          'Outside Exchanges',
          'In Top Holders Total'
        ],
        [
          '2019-07-21',
          62.37616015165964,
          25.214394751057107,
          87.59055490271675
        ],
        [
          '2019-07-22',
          62.37739334423916,
          25.214394751057107,
          87.59178809529627
        ],
        [
          '2019-07-23',
          62.376443970234895,
          25.214394751057107,
          87.590838721292
        ],
        [
          '2019-07-24',
          62.376443970234895,
          25.214394751057107,
          87.590838721292
        ]
      ]
    )
  })

  it('returns headers only on empty array response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchTopHoldersPercentOfTotalSupply').returns([])
    const response = san.topHoldersPercentOfTotalSupply_(slug, from, to, numberOfHolders)

    expect(response).to.deep.eq(
      [
        [
          'Date',
          'In Exchanges',
          'Outside Exchanges',
          'In Top Holders Total'
        ]
      ]
    )
  })

  it('throws "No data" on null response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchTopHoldersPercentOfTotalSupply').returns(null)
    expect(() => san.topHoldersPercentOfTotalSupply_(slug, from, to, numberOfHolders)).to.throw('No data')
  })
})

describe('tokenAgeConsumed_', () => {
  it('returns the consumed token age', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchTokenAgeConsumed').returns(
      [
        {
          datetime: '2019-05-23T00:00:00Z',
          tokenAgeConsumed: 1.712301e+10
        },
        {
          datetime: '2019-05-24T00:00:00Z',
          tokenAgeConsumed: 4.848616e+09
        },
        {
          datetime: '2019-05-25T00:00:00Z',
          tokenAgeConsumed: 4.767649e+10
        },
        {
          datetime: '2019-05-26T00:00:00Z',
          tokenAgeConsumed: 4.910034e+10
        }
      ]
    )

    const response = san.tokenAgeConsumed_(slug, from, to)

    expect(response).to.deep.eq(
      [
        ['Date', 'Token Age Consumed'],
        ['2019-05-23', 1.712301e+10],
        ['2019-05-24', 4.848616e+09],
        ['2019-05-25', 4.767649e+10],
        ['2019-05-26', 4.910034e+10]
      ]
    )
  })

  it('returns headers only on empty array response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchTokenAgeConsumed').returns([])
    const response = san.tokenAgeConsumed_(slug, from, to)

    expect(response).to.deep.eq([['Date', 'Token Age Consumed']])
  })

  it('throws "No data" on null response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchTokenAgeConsumed').returns(null)
    expect(() => san.tokenAgeConsumed_(slug, from, to)).to.throw('No data')
  })
})
