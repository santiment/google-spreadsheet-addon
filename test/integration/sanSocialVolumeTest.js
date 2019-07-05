const { testFieldTypes } = require('../helper.js')

const {
  testHistoricDataIsForbidden,
  testHandlesNullData,
  assertNumberOfRecords
} = require('../integration_helper.js')

const {
  ethereumSlug,
  from,
  to,
  historicDataFrom,
  historicDataTo,
  days,
  numberOfDays,
  formatDate
} = require('../setup.js')

describe('SAN_SOCIAL_VOLUME', () => {
  const socialVolumeType = 'TELEGRAM_CHATS_OVERVIEW'

  const expected = {
    date: 'string',
    mentionsCount: 'number'
  }

  const response = san.SAN_SOCIAL_VOLUME(ethereumSlug, from, to, socialVolumeType)
  const headers = response[0]
  const volumes = response[1]

  testFieldTypes(volumes, expected)
  testHistoricDataIsForbidden(
    san.SAN_SOCIAL_VOLUME,
    ethereumSlug,
    historicDataFrom,
    historicDataTo,
    socialVolumeType)
  testHandlesNullData(
    'fetchSocialVolume',
    san.SAN_SOCIAL_VOLUME,
    ethereumSlug,
    from,
    to,
    socialVolumeType)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Mentions Count']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const volumes = san.SAN_SOCIAL_VOLUME(ethereumSlug, from, to, socialVolumeType)

    assertNumberOfRecords(volumes, numberOfDays)

    for (let [index, day] of days.entries()) {
      expect(volumes[index + 1][0]).to.equal(formatDate(day))
    }
  })
})
