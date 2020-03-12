/* eslint-disable no-unused-expressions */

require('../helper.js')

describe('fetchCurrentUserPermissions', () => {
  it('returns null when API keys is not present', () => {
    const stub = sandbox.stub(san.UrlFetchApp, '_request')
    stub.returns({ body: JSON.stringify({ data: { currentUser: null } }), statusCode: 200 })

    const apiClient = new san.ApiClient_(new san.Connection_())
    const response = apiClient.fetchCurrentUserPermissions()

    expect(response).to.eq(null)
    expect(stub).to.have.been.calledWith('POST', san.SANTIMENT_GRAPHQL_URL, {
      headers: {},
      json: { query: '{currentUser {permissions {spreadsheet}}}' }
    })
  })

  it('returns user permissions when an API key is present', () => {
    const apiKey = 'test-api-key'
    san._setUserProperty_('API_KEY', apiKey)

    const stub = sandbox.stub(san.UrlFetchApp, '_request')
    stub.returns({ body: JSON.stringify({ data: { currentUser: { permissions: { spreadsheet: true } } } }), statusCode: 200 })

    const apiClient = new san.ApiClient_(new san.Connection_())
    const response = apiClient.fetchCurrentUserPermissions()

    expect(response).to.deep.eq({ permissions: { spreadsheet: true } })
    expect(stub).to.have.been.calledWith('POST', san.SANTIMENT_GRAPHQL_URL, {
      headers: { Authorization: `Apikey ${apiKey}` },
      json: { query: '{currentUser {permissions {spreadsheet}}}' }
    })
  })
})
