/* eslint-disable no-unused-expressions */

require('../helper.js')

describe('hasApiKeyProperty_', () => {
    it('returns true when an API key property is present', () => {
        san.setUserProperty_('API_KEY', 'test_api_key')
        expect(san.hasApiKeyProperty_()).to.be.true
    })

    it('returns false when an API key property is not present', () => {
        expect(san.hasApiKeyProperty_()).to.be.false
    })
})

describe('deleteApiKeyProperty_', () => {
    it('deletes API_KEY property', () => {
        san.setUserProperty_('API_KEY', 'test_api_key')
        expect(san.getUserProperty_('API_KEY')).to.equal('test_api_key')

        san.deleteApiKeyProperty_()
        expect(san.getUserProperty_('API_KEY')).to.be.null
    })
})

describe('setApiKeyProperty_', () => {
    it('saves API_KEY property', () => {
        san.setApiKeyProperty_('test_api_key')
        expect(san.getUserProperty_('API_KEY')).to.equal('test_api_key')
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

describe('obfuscateApiKey_', () => {
    it('obfuscates a string', () => {
        const key =
            '3c5vakw2vbtfys5cennei7oialmjdpev_n3o4lldsm2srak7fpuioygb2alxhq5vy'
        const obfuscatedKey = san.obfuscateApiKey_(key)

        expect(obfuscatedKey).to.equal(
            '3c5**********************************************************5vy'
        )
    })
})

describe('addApiKey_', () => {
    describe('when API key is invalid', () => {
        it('returns proper message', () => {
            const message = san.addApiKey_('example_api_key', null)
            expect(message).to.eq(
                'API key is not valid and has not been saved!'
            )
        })

        it('logs the event', () => {
            const logWarning = sandbox.stub(san, 'logWarning_').returns(null)

            san.addApiKey_('example_api_key', null)

            expect(logWarning).to.have.been.calledWith({
                type: 'ApiKeyLog',
                action: 'AddApiKey',
                message: 'An attempt to add invalid API key has been made.',
            })
        })
    })

    describe('when API key is valid and user has permissions', () => {
        const permissions = { permissions: { spreadsheet: true } }

        it('returns proper message', () => {
            const message = san.addApiKey_('example_api_key', permissions)
            expect(message).to.eq('API key is valid and has been saved.')
        })

        it('logs the event', () => {
            const logInfo = sandbox.stub(san, 'logInfo_').returns(null)

            san.addApiKey_('example_api_key', permissions)

            expect(logInfo).to.have.been.calledWith({
                type: 'ApiKeyLog',
                action: 'AddApiKey',
                message: 'Valid API key has been added.',
            })
        })

        it('saves the API key', () => {
            const setApiKeyProperty = sandbox
                .stub(san, 'setApiKeyProperty_')
                .returns(null)

            san.addApiKey_('example_api_key', permissions)
            expect(setApiKeyProperty).to.have.been.calledWith('example_api_key')
        })
    })

    describe("when API key is valid but user doesn't have permissions", () => {
        const permissions = { permissions: { spreadsheet: false } }

        it('returns proper message', () => {
            const message = san.addApiKey_('example_api_key', permissions)
            expect(message).to.eq(
                "API key is valid and has been saved but you don't have needed permissions to access historic data!"
            )
        })

        it('logs the event', () => {
            const logWarning = sandbox.stub(san, 'logWarning_').returns(null)

            san.addApiKey_('example_api_key', permissions)

            expect(logWarning).to.have.been.calledWith({
                type: 'ApiKeyLog',
                action: 'AddApiKey',
                message:
                    "Valid API key has been added but user doesn't have needed permissions.",
            })
        })

        it('saves the API key', () => {
            const setApiKeyProperty = sandbox
                .stub(san, 'setApiKeyProperty_')
                .returns(null)

            san.addApiKey_('example_api_key', permissions)
            expect(setApiKeyProperty).to.have.been.calledWith('example_api_key')
        })
    })
})

describe('checkApiKeyStillValid_', () => {
    describe('when API key is invalid', () => {
        it('returns proper message', () => {
            const message = san.checkApiKeyStillValid_('example_api_key', null)
            expect(message).to.eq('API key is not valid!')
        })

        it('logs the event', () => {
            const logWarning = sandbox.stub(san, 'logWarning_').returns(null)

            san.checkApiKeyStillValid_('example_api_key', null)

            expect(logWarning).to.have.been.calledWith({
                type: 'ApiKeyLog',
                action: 'ValidateApiKey',
                message: 'User has invalid API key.',
            })
        })
    })

    describe('when API key is valid and user has permissions', () => {
        const permissions = { permissions: { spreadsheet: true } }

        it('returns proper message', () => {
            const message = san.checkApiKeyStillValid_(
                'example_api_key',
                permissions
            )
            expect(message).to.eq('API key is valid.')
        })
    })

    describe("when API key is valid but user doesn't have permissions", () => {
        const permissions = { permissions: { spreadsheet: false } }

        it('returns proper message', () => {
            const message = san.checkApiKeyStillValid_(
                'example_api_key',
                permissions
            )
            expect(message).to.eq(
                "API key is valid but you don't have needed permissions to access historic data!"
            )
        })

        it('logs the event', () => {
            const logWarning = sandbox.stub(san, 'logWarning_').returns(null)

            san.checkApiKeyStillValid_('example_api_key', permissions)

            expect(logWarning).to.have.been.calledWith({
                type: 'ApiKeyLog',
                action: 'ValidateApiKey',
                message:
                    "User has valid API key but doesn't have needed permissions.",
            })
        })
    })
})

describe('removeApiKey_', () => {
    it('removes the API key', () => {
        const deleteApiKeyProperty = sandbox
            .stub(san, 'deleteApiKeyProperty_')
            .returns(null)

        san.removeApiKey_()
        expect(deleteApiKeyProperty).to.have.been.called
    })

    it('returns proper message', () => {
        const message = san.removeApiKey_()
        expect(message).to.eq('API key has been removed!')
    })

    it('logs the event', () => {
        const logInfo = sandbox.stub(san, 'logInfo_').returns(null)

        san.removeApiKey_()

        expect(logInfo).to.have.been.calledWith({
            type: 'ApiKeyLog',
            action: 'RemoveApiKey',
            message: 'API key has been removed.',
        })
    })
})
