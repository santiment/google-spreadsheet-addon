/* eslint-disable no-unused-expressions */

require('./helper.js')

const subDays = require('date-fns/sub_days')
const now = new Date()

beforeEach(() => san.PropertiesService.init())

describe('toUTC_', () => {
  it('returns date in ISO8601 format', () => {
    expect(san.toUTC_('2019, 01, 01')).to.equal('2019-01-01T00:00:00Z')
  })
})

describe('userProperties', () => {
  it('sets and gets user properties', () => {
    san.setUserProperty_('TEST', 'a test value')
    expect(san.getUserProperty_('TEST')).to.equal('a test value')
  })
})

describe('hasApiKey_', () => {
  it('returns true when an API key is present', () => {
    san.setUserProperty_('API_KEY', 'test_api_key')
    expect(san.hasApiKey_()).to.be.true
  })

  it('returns false when an API key is not present', () => {
    expect(san.hasApiKey_()).to.be.false
  })
})

describe('dataIsHistoric_', () => {
  it('returns false when period is less than HISTORIC_DATA_THRESHOLD', () => {
    const from = subDays(now, san.HISTORIC_DATA_THRESHOLD - 1)

    expect(san.dataIsHistoric_(from)).to.be.false
  })

  it('returns true when period is over HISTORIC_DATA_THRESHOLD', () => {
    const from = subDays(now, san.HISTORIC_DATA_THRESHOLD)

    expect(san.dataIsHistoric_(from)).to.be.true
  })
})

describe('checkForHistoricData_', () => {
  it('throws an error when historic data is requested and api key is not present', () => {
    const from = subDays(now, san.HISTORIC_DATA_THRESHOLD)
    expect(() => san.checkForHistoricData_(from)).to.throw("You can't use the add-on for historic data at the moment. Please select a starting date within three months in the past.")
  })

  it("doesn't throw an error when requested data is not historic", () => {
    const from = subDays(now, san.HISTORIC_DATA_THRESHOLD - 1)
    expect(() => san.checkForHistoricData_(from)).to.not.throw()
  })

  it("doesn't throw an error when historic data is requested and api key is present", () => {
    san.setUserProperty_('API_KEY', 'test_api_key')
    const from = subDays(now, san.HISTORIC_DATA_THRESHOLD)
    expect(() => san.checkForHistoricData_(from)).to.not.throw()
  })
})
