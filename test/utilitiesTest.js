/* eslint-disable no-unused-expressions */

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

describe('beginningOfDaytoEndOfDay_', () => {
  it('returns datetime at 23:59:59 for a given beginning of day datetime', () => {
    const startOfDay = new Date(2019, 0, 1, 0, 0, 0)
    const endOfDay = new Date(2019, 0, 1, 23, 59, 59)

    expect(san.beginningOfDaytoEndOfDay_(startOfDay)).to.equalTime(endOfDay)
  })
})
