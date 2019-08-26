require('../helper.js')

const slug = 'ethereum'
const from = new Date(2019, 7, 21, 0, 0, 0)
const to = new Date(2019, 7, 24, 0, 0, 0)

describe('gasUsed_', () => {
  it('returns gas used for a given time period ', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchGasUsed').returns(
      [
        {
          datetime: '2019-07-21',
          gasUsed: 34648121160
        },
        {
          datetime: '2019-07-22',
          gasUsed: 38019129426
        },
        {
          datetime: '2019-07-23',
          gasUsed: 37811798834
        }
      ]
    )
    const response = san.gasUsed_(slug, from, to)

    expect(response).to.deep.eq(
      [
        [ 'Date', 'Gas Used' ],
        [ '2019-07-21', 34648121160 ],
        [ '2019-07-22', 38019129426 ],
        [ '2019-07-23', 37811798834 ]
      ]
    )
  })

  it('returns headers only on empty array response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchGasUsed').returns([])
    const response = san.gasUsed_(slug, from, to)

    expect(response).to.deep.eq(
      [
        ['Date', 'Gas Used']
      ]
    )
  })
  it('throws "No data" on null response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchGasUsed').returns(null)
    expect(() => san.gasUsed_(slug, from, to)).to.throw('No data')
  })
})

describe('miningPoolsDistribution_', () => {
  it('returns mining pools\' distribution ', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchMiningPoolsDistribution').returns(
      [
        {
          datetime: '2019-07-21',
          other: 0.13616857598339047,
          top10: 0.2611268676083488,
          top3: 0.6027045564082607
        },
        {
          datetime: '2019-07-22',
          other: 0.13882537998646483,
          top10: 0.2593464781519212,
          top3: 0.6018281418616139
        },
        {
          datetime: '2019-07-23',
          other: 0.13128370250776358,
          top10: 0.25920572994086155,
          top3: 0.6095105675513748
        },
        {
          datetime: '2019-07-24',
          other: 0.12192901806338845,
          top10: 0.26144571148893697,
          top3: 0.6166252704476746
        }
      ]
    )
    const response = san.miningPoolsDistribution_(slug, from, to)

    expect(response).to.deep.eq(
      [
        [ 'Date', 'Top 3', 'Top 10', 'Other' ],
        [ '2019-07-21', 0.6027045564082607, 0.2611268676083488, 0.13616857598339047 ],
        [ '2019-07-22', 0.6018281418616139, 0.2593464781519212, 0.13882537998646483 ],
        [ '2019-07-23', 0.6095105675513748, 0.25920572994086155, 0.13128370250776358 ],
        [ '2019-07-24', 0.6166252704476746, 0.26144571148893697, 0.12192901806338845 ]
      ]
    )
  })

  it('returns headers only on empty array response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchMiningPoolsDistribution').returns([])
    const response = san.miningPoolsDistribution_(slug, from, to)

    expect(response).to.deep.eq(
      [
        [ 'Date', 'Top 3', 'Top 10', 'Other' ]
      ]
    )
  })
  it('throws "No data" on null response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchMiningPoolsDistribution').returns(null)
    expect(() => san.miningPoolsDistribution_(slug, from, to)).to.throw('No data')
  })
})

describe('minersBalance_', () => {
  it('returns miners\' balance ', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchMinersBalance').returns(
      [
        {
          datetime: '2019-07-21',
          balance: 1412628.735416455
        },
        {
          datetime: '2019-07-22',
          balance: 1414411.0214646028
        },
        {
          datetime: '2019-07-23',
          balance: 1414950.397734732
        },
        {
          datetime: '2019-07-24',
          balance: 1417370.2671043198
        }
      ]
    )
    const response = san.minersBalance_(slug, from, to)

    expect(response).to.deep.eq(
      [
        [ 'Date', 'Balance' ],
        [ '2019-07-21', 1412628.735416455 ],
        [ '2019-07-22', 1414411.0214646028 ],
        [ '2019-07-23', 1414950.397734732 ],
        [ '2019-07-24', 1417370.2671043198 ]
      ]
    )
  })

  it('returns headers only on empty array response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchMinersBalance').returns([])
    const response = san.minersBalance_(slug, from, to)

    expect(response).to.deep.eq(
      [
        [ 'Date', 'Balance' ]
      ]
    )
  })
  it('throws "No data" on null response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchMinersBalance').returns(null)
    expect(() => san.minersBalance_(slug, from, to)).to.throw('No data')
  })
})
