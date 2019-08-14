const { testFieldTypes } = require('../helper.js')

const {
  testHandlesNullData,
  assertNumberOfRecords
} = require('../integration_helper.js')

const {
  slug,
  from,
  to,
  days,
  numberOfDays,
  formatDate
} = require('../setup.js')

describe('SAN_DEV_ACTIVITY', () => {
  const expected = {
    date: 'string',
    activity: 'number'
  }

  const response = san.SAN_DEV_ACTIVITY(slug, from, to)
  const headers = response[0]
  const activities = response[1]

  testFieldTypes(activities, expected)
  testHandlesNullData(
    'fetchDevActivity',
    san.SAN_DEV_ACTIVITY,
    slug,
    from,
    to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Activity']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const activities = san.SAN_DEV_ACTIVITY(slug, from, to)

    assertNumberOfRecords(activities, numberOfDays)

    for (let [index, day] of days.entries()) {
      expect(activities[index + 1][0]).to.equal(formatDate(day))
    }
  })
})
