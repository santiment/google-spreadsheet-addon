/* eslint-disable no-unused-expressions */

require('../../support/helper.js')

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
    expect(requestOptions['headers']['Authorization']).to.not.exist
  })

  it('always sets User-Agent header', () => {
    const conn = new san.Connection_()
    const requestOptions = conn.buildRequestOptions('')
    expect(requestOptions['headers']['User-Agent']).to.equal('Sansheets/1.0 (Google-Apps-Script)')
  })

  it('sets User-Agent header along with Authorization when API key is present', () => {
    const conn = new san.Connection_('test-api-key')
    const requestOptions = conn.buildRequestOptions('')
    expect(requestOptions['headers']['User-Agent']).to.equal('Sansheets/1.0 (Google-Apps-Script)')
    expect(requestOptions['headers']['Authorization']).to.equal('Apikey test-api-key')
  })
})

describe('error handling', () => {
  it('can handle known server errors with errors array', () => {
    const stub = sandbox.stub(san.UrlFetchApp, '_request')
    const logStub = sandbox.stub(san, 'logError_').returns(null)

    const body = {
      errors: [
        {
          locations: [{ column: 0, line: 3 }],
          message: 'message 1'
        },
        {
          locations: [{ column: 0, line: 1 }],
          message: 'message 2'
        }
      ]
    }

    stub.returns({ body: JSON.stringify(body), statusCode: 400 })

    const conn = new san.Connection_()

    const expectedError = 'Server error! message 1, message 2'
    const expectedLogMessage = {
      message: expectedError,
      query: '',
      queryName: '',
      responseCode: 400,
      responseBody: JSON.stringify(body)
    }

    expect(() => conn.graphQLQuery('', '')).to.throw(expectedError)
    expect(logStub).to.have.been.calledWith(sinon.match(expectedLogMessage))
  })

  it('can handle known server errors with details key', () => {
    const stub = sandbox.stub(san.UrlFetchApp, '_request')
    const logStub = sandbox.stub(san, 'logError_').returns(null)

    const body = {
      errors: {
        details: 'Bad authorization header'
      }
    }

    stub.returns({ body: JSON.stringify(body), statusCode: 400 })

    const conn = new san.Connection_()

    const expectedError = 'Server error!'
    const expectedLogMessage = {
      message: expectedError + ' ' + 'Bad authorization header',
      query: '',
      queryName: '',
      responseCode: 400,
      responseBody: JSON.stringify(body) }

    expect(() => conn.graphQLQuery('', '')).to.throw(expectedError)
    expect(logStub).to.have.been.calledWith(sinon.match(expectedLogMessage))
  })

  it('can handle unknown server errors', () => {
    const stub = sandbox.stub(san.UrlFetchApp, '_request')
    const logStub = sandbox.stub(san, 'logError_').returns(null)

    const body = { some: 'json' }

    stub.returns({ body: JSON.stringify(body), statusCode: 400 })

    const conn = new san.Connection_()

    const expectedError = 'Server error!'
    const expectedLogMessage = {
      message: expectedError,
      query: '',
      queryName: '',
      responseCode: 400,
      responseBody: JSON.stringify(body) }

    expect(() => conn.graphQLQuery('', '')).to.throw(expectedError)
    expect(logStub).to.have.been.calledWith(sinon.match(expectedLogMessage))
  })

  it('can handle internal server error', () => {
    const stub = sandbox.stub(san.UrlFetchApp, '_request')
    const logStub = sandbox.stub(san, 'logError_').returns(null)

    const body = {
      errors: {
        details: 'Internal server error'
      }
    }

    stub.returns({ body: JSON.stringify(body), statusCode: 500 })

    const conn = new san.Connection_()

    const expectedError = 'Internal server error!'
    const expectedLogMessage = {
      message: expectedError,
      query: '',
      queryName: '',
      responseCode: 500,
      responseBody: JSON.stringify(body) }

    expect(() => conn.graphQLQuery('', '')).to.throw(expectedError)
    expect(logStub).to.have.been.calledWith(sinon.match(expectedLogMessage))
  })

  it('can handle JSON parsing error', () => {
    const stub = sandbox.stub(san.UrlFetchApp, '_request')
    const body = 'json'

    stub.returns({ body: body, statusCode: 200 })

    const conn = new san.Connection_()
    const expectedError = 'Unexpected token \'j\', "json" is not valid JSON'

    expect(() => conn.fetchQuery('', '')).to.throw(expectedError)
  })
})
