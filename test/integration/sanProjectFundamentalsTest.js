const { testFieldTypes } = require('../helper.js')
const { testHandlesNullData } = require('../integration_helper.js')
const { slug } = require('../setup.js')

describe('SAN_PROJECT_FUNDAMENTALS', () => {
    const expected = {
        ticker: 'string',
        name: 'string',
        slug: 'string',
        fundsRaisedUsdIcoEndPrice: 'number',
        ethSpent: 'number',
        ethBalance: 'number',
        usdBalance: 'number',
        priceUsd: 'number',
        volumeUsd: 'number',
        marketcapUsd: 'number',
        percentChange24h: 'number',
        percentChange7d: 'number',
        volumeChange24h: 'number',
        availableSupply: 'number',
        averageDevActivity: 'number',
    }

    const response = san.SAN_PROJECT_FUNDAMENTALS(slug)
    const headers = response[0]
    const results = response[1]

    testFieldTypes(results, expected)
    testHandlesNullData(
        'fetchProjectFundamentals',
        san.SAN_PROJECT_FUNDAMENTALS,
        slug
    )

    it('has proper headers', () => {
        const expectedHeaders = [
            'Ticker',
            'Name',
            'Slug',
            'Funds Raised From ICO In USD',
            'ETH Spent 30D',
            'ETH Balance',
            'USD Balance',
            'USD Price',
            'USD Volume',
            'USD Marketcap',
            'Percent Change 24H',
            'Percent Change 7D',
            'Volume Change 24H',
            'Available Supply',
            'Average Dev Activity 30D',
        ]

        expect(headers).to.deep.equal(expectedHeaders)
    })
})
