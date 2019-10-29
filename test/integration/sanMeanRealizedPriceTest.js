const { testFieldTypes } = require('../helper.js')

const {
  testHandlesNullData,
  testTimeBound
} = require('../integration_helper.js')

const {
  slug,
  from,
  to,
  currency,
  days,
  numberOfDays,
  formatDate
} = require('../setup.js')

describe('SAN_MEAN_REALIZED_PRICE', () => {
  it('works properly when no currency and no timebound suffix are given', () => {
    const expected = {
      date: 'string',
      value: 'number'
    }

    const response = san.SAN_MEAN_REALIZED_PRICE(slug, from, to)
    const headers = response[0]
    const results = response[1]
    testFieldTypes(results, expected)
    testHandlesNullData(
      'fetchGetMetric',
      san.SAN_MEAN_REALIZED_PRICE,
      slug,
      from,
      to)

    it('has proper headers', () => {
      const expectedHeaders = ['Date', 'Value']
      expect(headers).to.deep.equal(expectedHeaders)
    })
  })

  testTimeBound(
    san.SAN_MEAN_REALIZED_PRICE,
    slug,
    from,
    to,
    currency,
    days,
    numberOfDays,
    formatDate
  )
})
