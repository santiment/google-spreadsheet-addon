const slug = 'santiment'
const from = new Date(2019, 7, 1, 0, 0, 0)
const to = new Date(2019, 7, 5, 0, 0, 0)
require('../helper.js')

describe('getMetric_ daily_active_addresses', () => {
  it('returns the daily active addresses', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchGetMetric').returns(
      {
        timeseriesData: [
          {
            'datetime': '2019-07-01T00:00:00Z',
            'value': 5
          },
          {
            'datetime': '2019-07-02T00:00:00Z',
            'value': 10
          },
          {
            'datetime': '2019-07-03T00:00:00Z',
            'value': 12
          },
          {
            'datetime': '2019-07-04T00:00:00Z',
            'value': 10
          },
          {
            'datetime': '2019-07-05T00:00:00Z',
            'value': 11
          }
        ]
      }
    )

    const response = san.getMetric_('daily_active_addresses', slug, from, to)

    expect(response).to.deep.eq(
      [
        ['Date', 'Value'],
        ['2019-07-01', 5],
        ['2019-07-02', 10],
        ['2019-07-03', 12],
        ['2019-07-04', 10],
        ['2019-07-05', 11]
      ]
    )
  })

  it('returns headers only on empty array response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchGetMetric').returns({ timeseriesData: [] })
    const response = san.getMetric_('daily_active_addresses', slug, from, to)

    expect(response).to.deep.eq([['Date', 'Value']])
  })

  it('throws "No data" on null response', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchGetMetric').returns(null)
    expect(() => san.getMetric_(slug, from, to)).to.throw('No data')
  })
})
