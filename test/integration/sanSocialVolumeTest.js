require('../support/helper.js')
const { testHandlesNullData } = require('../support/integrationHelper.js')
const { slug, from, to } = require('../support/setup.js')

describe('SAN_SOCIAL_VOLUME', () => {
  const socialVolumeType = 'TELEGRAM_CHATS_OVERVIEW'

  testHandlesNullData(
    'fetchSocialVolume',
    san.SAN_SOCIAL_VOLUME,
    slug,
    from,
    to,
    socialVolumeType)

  it('has proper headers', () => {
    sandbox.stub(san.ApiClient_.prototype, 'fetchCurrentUserPermissions').returns({ 'permissions': { 'spreadsheet': true } })
    const response = san.SAN_SOCIAL_VOLUME(slug, from, to, socialVolumeType)
    const headers = response[0]

    expect(headers).to.deep.equal(['Date', 'Mentions Count'])
  })
})
