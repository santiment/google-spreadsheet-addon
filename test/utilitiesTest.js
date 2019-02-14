/* eslint-disable no-unused-expressions */

require('./helper.js')

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
