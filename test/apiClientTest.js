/* eslint-disable no-unused-expressions */

require('./helper.js')

describe('fetchCurrentUserPermissions', () => {
  it('returns null when API keys is not present', () => {
    const stub = sinon.stub(san.UrlFetchApp, '_request')
    stub.returns({ body: JSON.stringify({ data: { currentUser: null } }), statusCode: 200 })

    const apiClient = new san.ApiClient_(new san.Connection_())
    const response = apiClient.fetchCurrentUserPermissions()

    expect(response).to.eq(null)
    expect(stub).to.have.been.calledWith('POST', san.SANTIMENT_GRAPHQL_URL, {
      headers: {},
      json: { query: '{currentUser {permissions {spreadsheet}}}' }
    })

    stub.restore()
  })

  it('returns user permissions when an API key is present', () => {
    const apiKey = 'test-api-key'
    san.setUserProperty_('API_KEY', apiKey)

    const stub = sinon.stub(san.UrlFetchApp, '_request')
    stub.returns({ body: JSON.stringify({ data: { currentUser: { permissions: { spreadsheet: true } } } }), statusCode: 200 })

    const apiClient = new san.ApiClient_(new san.Connection_())
    const response = apiClient.fetchCurrentUserPermissions()

    expect(response).to.deep.eq({ permissions: { spreadsheet: true } })
    expect(stub).to.have.been.calledWith('POST', san.SANTIMENT_GRAPHQL_URL, {
      headers: { Authorization: `Apikey ${apiKey}` },
      json: { query: '{currentUser {permissions {spreadsheet}}}' }
    })

    stub.restore()
  })
})

describe('hasValidApiKey', () => {
  it('returns true when the current user can access historic data', () => {
    const apiClient = new san.ApiClient_(new san.Connection_())
    const stub = sinon.stub(apiClient, 'fetchCurrentUserPermissions')
    stub.returns({ permissions: { spreadsheet: true } })

    expect(apiClient.hasValidApiKey()).to.be.true

    stub.restore()
  })

  it("returns false when the current user don't have access to historic data", () => {
    const apiClient = new san.ApiClient_(new san.Connection_())
    const stub = sinon.stub(apiClient, 'fetchCurrentUserPermissions')
    stub.returns(null)

    expect(apiClient.hasValidApiKey()).to.be.false

    stub.restore()
  })
})
