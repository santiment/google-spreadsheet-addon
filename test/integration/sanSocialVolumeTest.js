const {
  testHistoricDataIsForbidden,
  testHandlesNullData
} = require('../integration_helper.js')

const {
  slug,
  ethereumSlug,
  from,
  to,
  historicDataFrom,
  historicDataTo
} = require('../setup.js')

describe('SAN_SOCIAL_VOLUME', () => {
  const socialVolumeType = 'TELEGRAM_CHATS_OVERVIEW'

  testHistoricDataIsForbidden(
    san.SAN_SOCIAL_VOLUME,
    ethereumSlug,
    historicDataFrom,
    historicDataTo,
    socialVolumeType)
  testHandlesNullData(
    'fetchSocialVolume',
    san.SAN_SOCIAL_VOLUME,
    slug,
    from,
    to,
    socialVolumeType)

  it('has proper headers', () => {
    const response = san.SAN_SOCIAL_VOLUME(slug, from, to, socialVolumeType)
    const headers = response[0]

    expect(headers).to.deep.equal(['Date', 'Mentions Count'])
  })
})
