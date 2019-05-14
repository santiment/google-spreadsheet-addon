/* eslint-disable no-unused-expressions */

require('./helper.js')

describe('hasApiKeyProperty_', () => {
  it('returns true when an API key property is present', () => {
    san.setUserProperty_('API_KEY', 'test_api_key')
    expect(san.hasApiKeyProperty_()).to.be.true
  })

  it('returns false when an API key property is not present', () => {
    expect(san.hasApiKeyProperty_()).to.be.false
  })
})

describe('validateApiKey_', () => {
  it('returns true when the user is recognised from the API key', () => {
    const response = { permissions: { spreadsheet: false } }
    expect(san.validateApiKey_(response)).to.be.true
  })

  it("returns false when the user can't be recognised from the API key", () => {
    expect(san.validateApiKey_(null)).to.be.false
  })
})

describe('validateCanAccessHistoricData_', () => {
  it('returns true when the user can access spreadsheets historic data', () => {
    const response = { permissions: { spreadsheet: true } }
    expect(san.validateCanAccessHistoricData_(response)).to.be.true
  })

  it("returns false when the user can't access spreadsheets historic data", () => {
    const response = { permissions: { spreadsheet: false } }
    expect(san.validateCanAccessHistoricData_(response)).to.be.false
  })

  it('returns false when the supplied response is null', () => {
    expect(san.validateCanAccessHistoricData_(null)).to.be.false
  })
})

describe('addApiKey_', () => {
  describe('when API key is invalid', () => {
    it('returns proper message', () => {
      const message = san.addApiKey_('example_api_key', null)
      expect(message).to.eq('API key is not valid and has not been saved!')
    })

    it('logs the event', () => {
      const logWarning = sandbox.stub(san, 'logWarning_').returns(null)

      san.addApiKey_('example_api_key', null)

      expect(logWarning).to.have.been.calledWith({
        type: 'ApiKeyLog',
        message: 'An attempt to add invalid API key has been made.'
      })
    })
  })

  describe('when API key is valid and user has permissions', () => {
    const permissions = { permissions: { spreadsheet: true } }

    it('returns proper message', () => {
      const message = san.addApiKey_('example_api_key', permissions)
      expect(message).to.eq('API key is valid and has been saved')
    })

    it('logs the event', () => {
      const logInfo = sandbox.stub(san, 'logInfo_').returns(null)

      san.addApiKey_('example_api_key', permissions)

      expect(logInfo).to.have.been.calledWith({
        type: 'ApiKeyLog',
        message: 'Valid API key has been added.' })
    })

    it('saves the API key', () => {
      const setApiKeyProperty = sandbox.stub(san, 'setApiKeyProperty_').returns(null)

      san.addApiKey_('example_api_key', permissions)
      expect(setApiKeyProperty).to.have.been.calledWith('example_api_key')
    })
  })

  describe("when API key is valid but user doesn't have permissions", () => {
    const permissions = { permissions: { spreadsheet: false } }

    it('returns proper message', () => {
      const message = san.addApiKey_('example_api_key', permissions)
      expect(message).to.eq("API key is valid and has been saved but you don't have needed permissions to access historic data!")
    })

    it('logs the event', () => {
      const logWarning = sandbox.stub(san, 'logWarning_').returns(null)

      san.addApiKey_('example_api_key', permissions)

      expect(logWarning).to.have.been.calledWith({
        type: 'ApiKeyLog',
        message: "Valid API key has been added but user doesn't have needed permissions."
      })
    })

    it('saves the API key', () => {
      const setApiKeyProperty = sandbox.stub(san, 'setApiKeyProperty_').returns(null)

      san.addApiKey_('example_api_key', permissions)
      expect(setApiKeyProperty).to.have.been.calledWith('example_api_key')
    })
  })
})
