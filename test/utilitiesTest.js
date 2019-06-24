/* eslint-disable no-unused-expressions */

const subDays = require('date-fns/sub_days')
const now = new Date()
const slug = 'santiment'
const ethereumSlug = 'ethereum'

require('./helper.js')

describe('toUTC_', () => {
  it('returns date in ISO8601 format', () => {
    expect(san.toUTC_('2019, 01, 01')).to.equal('2019-01-01T00:00:00Z')
  })
})

describe('userProperties', () => {
  it('gets user property', () => {
    san.setUserProperty_('TEST', 'a test value')
    expect(san.getUserProperty_('TEST')).to.equal('a test value')
  })

  it('deletes user property', () => {
    san.setUserProperty_('TEST', 'a test value')
    expect(san.getUserProperty_('TEST')).to.equal('a test value')

    san.deleteUserProperty_('TEST')
    expect(san.getUserProperty_('TEST')).to.be.null
  })
})

describe('requestedDataIsHistoric_', () => {
  it('returns false when period is less than HISTORIC_DATA_THRESHOLD', () => {
    const from = subDays(now, san.HISTORIC_DATA_THRESHOLD)

    expect(san.requestedDataIsHistoric_(from)).to.be.false
  })

  it('returns true when period is over HISTORIC_DATA_THRESHOLD', () => {
    const from = subDays(now, san.HISTORIC_DATA_THRESHOLD + 1)
    expect(san.requestedDataIsHistoric_(from)).to.be.true
  })
})

describe('assertCanAccessHistoricData_', () => {
  it('throws an error when historic data is requested and api key is not present', () => {
    const from = subDays(now, san.HISTORIC_DATA_THRESHOLD + 1)
    expect(() =>
      san.assertCanAccessHistoricData_(from, ethereumSlug))
      .to.throw('Full historical data is only accessible to premium users. ' +
                'Add your API key to use it.')
  })

  it("doesn't throw an error when requested data is not historic", () => {
    const from = subDays(now, san.HISTORIC_DATA_THRESHOLD)
    expect(() => san.assertCanAccessHistoricData_(from, ethereumSlug)).to.not.throw()
  })

  it("doesn't throw an error when historic data is requested and api key is present", () => {
    san.setUserProperty_('API_KEY', 'test_api_key')
    const from = subDays(now, san.HISTORIC_DATA_THRESHOLD + 1)
    expect(() => san.assertCanAccessHistoricData_(from, ethereumSlug)).to.not.throw()
  })
  it("doesn't throw an error when the data is historic and no api key is present, but the slug is santiment", () => {
    const from = subDays(now, san.HISTORIC_DATA_THRESHOLD + 1)
    expect(() => san.assertCanAccessHistoricData_(from, slug)).to.not.throw()
  })
})

describe('beginningOfDaytoEndOfDay_', () => {
  it('returns datetime at 23:59:59 for a given beginning of day datetime', () => {
    const startOfDay = new Date(2019, 0, 1, 0, 0, 0)
    const endOfDay = new Date(2019, 0, 1, 23, 59, 59)

    expect(san.beginningOfDaytoEndOfDay_(startOfDay)).to.equalTime(endOfDay)
  })
})
