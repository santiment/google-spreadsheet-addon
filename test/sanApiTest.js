/* eslint-disable no-unused-expressions */

require('./helper.js')

beforeEach(() => san.PropertiesService.init())

describe('building of request options', () => {
  it('headers include an API key when it is present', () => {
    san.setUserProperty_('API_KEY', 'test-api-key')
    const requestOptions = san.buildRequestOptions_('')
    expect(requestOptions['headers']['Authorization']).to.equal('Apikey test-api-key')
  })

  it("headers doesn't exist when API key is not present", () => {
    const requestOptions = san.buildRequestOptions_('')
    expect(requestOptions['headers']).to.not.exist
  })
})
