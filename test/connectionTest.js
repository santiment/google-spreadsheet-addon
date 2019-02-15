/* eslint-disable no-unused-expressions */

require('./helper.js')

describe('api key', () => {
  it('sets api key from property when present', () => {
    san.setUserProperty_('API_KEY', 'test-api-key')
    const conn = new san.Connection_()
    expect(conn.apiKey).to.equal('test-api-key')
  })

  it('sets api key from argument', () => {
    const conn = new san.Connection_('api-key-from-argument')
    expect(conn.apiKey).to.equal('api-key-from-argument')
  })

  it("doesn't set api key when none is present", () => {
    const conn = new san.Connection_()
    expect(conn.apiKey).to.be.undefined
  })
})

describe('headers', () => {
  it('sets an API key from user property in headers', () => {
    san.setUserProperty_('API_KEY', 'test-api-key')
    const conn = new san.Connection_()
    const requestOptions = conn.buildRequestOptions('')
    expect(requestOptions['headers']['Authorization']).to.equal('Apikey test-api-key')
  })

  it('sets an API key from a connection argument in headers', () => {
    const conn = new san.Connection_('api-key-from-argument')
    const requestOptions = conn.buildRequestOptions('')
    expect(requestOptions['headers']['Authorization']).to.equal('Apikey api-key-from-argument')
  })

  it("doesn't include API key in headers when it is not present", () => {
    const conn = new san.Connection_()
    const requestOptions = conn.buildRequestOptions('')
    expect(requestOptions['headers']).to.not.exist
  })
})

describe('parsing of response', () => {
  it('returns errors when there are any', () => {
    const stub = sinon.stub(san.UrlFetchApp, '_request')

    stub.returns(
      { body: JSON.stringify({
        'errors': [
          {
            'locations': [
              {
                'column': 0,
                'line': 3
              }
            ],
            'message': 'Cannot query field "marketcapppp" on type "PricePoint". Did you mean "marketcap"?'
          },
          {
            'locations': [
              {
                'column': 0,
                'line': 1
              }
            ],
            'message': 'Argument "from" has invalid value "2018-06-01".'
          }
        ]
      }),
      statusCode: 400 })

    const conn = new san.Connection_()

    const expectedError = 'code: 400, messages: Cannot query field "marketcapppp" on type "PricePoint".' +
                          ' Did you mean "marketcap"?,Argument "from" has invalid value "2018-06-01".'
    expect(() => conn.graphQLQuery('', '')).to.throw(expectedError)

    stub.restore()
  })
})
