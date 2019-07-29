const { testFieldTypes } = require('../helper.js')
const { testHandlesNullData } = require('../integration_helper.js')

describe('SAN_ALL_PROJECTS', () => {
    const expectedFields = {
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
    }

    const response = san.SAN_ALL_PROJECTS()
    const headers = response[0]
    const projects = response[1]

    testFieldTypes(projects, expectedFields)
    testHandlesNullData('fetchAllProjects', san.SAN_ALL_PROJECTS)

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
        ]

        expect(headers).to.deep.equal(expectedHeaders)
    })
})
