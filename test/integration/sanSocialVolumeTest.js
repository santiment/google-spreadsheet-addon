const { testFieldTypes } = require('../helper.js')

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

  const expected = {
    date: 'string',
    mentionsCount: 'number'
  }

  const response = san.SAN_SOCIAL_VOLUME(slug, from, to, socialVolumeType)
  const headers = response[0]
  const volumes = response[1]

  testFieldTypes(volumes, expected)
  testHistoricDataIsForbidden(
    san.SAN_SOCIAL_VOLUME,
    ethereumSlug,
    historicDataFrom,
    historicDataTo,
    socialVolumeType
  )
  testHandlesNullData(
    'fetchSocialVolume',
    san.SAN_SOCIAL_VOLUME,
    slug,
    from,
    to,
    socialVolumeType
  )

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Mentions Count']
    expect(headers).to.deep.equal(expectedHeaders)
  })
})
