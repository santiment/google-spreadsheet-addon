const { testFieldTypes } = require('../helper.js')
const { testHandlesNullData } = require('../integration_helper.js')

describe('SAN_ERC20_PROJECTS', () => {
    const expected = {
        ticker: 'string',
        name: 'string',
        slug: 'string',
        priceUsd: 'number',
        marketcapUsd: 'number',
        volumeUsd: 'number',
        usdBalance: 'number',
        ethBalance: 'number',
        ethSpent30d: 'number',
        ethSpent7d: 'number',
        ethSpent1d: 'number',
        mainContractAddress: 'string',
    }

    const response = san.SAN_ERC20_PROJECTS()
    const headers = response[0]
    const projects = response[1]

    testFieldTypes(projects, expected)
    testHandlesNullData('fetchErc20Projects', san.SAN_ERC20_PROJECTS)

    it('has proper headers', () => {
        const expectedHeaders = [
            'Ticker',
            'Name',
            'Slug',
            'USD Price',
            'USD Marketcap',
            'USD Volume',
            'USD Balance',
            'ETH Balance',
            'ETH Spent 30D',
            'ETH Spent 7D',
            'ETH Spent 1D',
            'Main Contract Address',
        ]

        expect(headers).to.deep.equal(expectedHeaders)
    })
})
