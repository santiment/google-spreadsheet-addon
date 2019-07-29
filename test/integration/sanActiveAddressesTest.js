const { testFieldTypes } = require('../helper.js')

const {
    testHistoricDataIsForbidden,
    testHandlesNullData,
    assertNumberOfRecords,
} = require('../integration_helper.js')

const {
    slug,
    ethereumSlug,
    from,
    to,
    historicDataFrom,
    historicDataTo,
    days,
    numberOfDays,
    formatDate,
} = require('../setup.js')

describe('SAN_ACTIVE_ADDRESSES', () => {
    const expected = {
        date: 'string',
        activeAddresses: 'number',
    }

    const response = san.SAN_ACTIVE_ADDRESSES(slug, from, to)
    const headers = response[0]
    const addresses = response[1]

    testFieldTypes(addresses, expected)
    testHistoricDataIsForbidden(
        san.SAN_ACTIVE_ADDRESSES,
        ethereumSlug,
        historicDataFrom,
        historicDataTo
    )
    testHandlesNullData(
        'fetchActiveAddresses',
        san.SAN_ACTIVE_ADDRESSES,
        slug,
        from,
        to
    )

    it('has proper headers', () => {
        const expectedHeaders = ['Date', 'Active Addresses']
        expect(headers).to.deep.equal(expectedHeaders)
    })

    it('returns a record per every day', () => {
        const addresses = san.SAN_ACTIVE_ADDRESSES(slug, from, to)

        assertNumberOfRecords(addresses, numberOfDays)

        for (let [index, day] of days.entries()) {
            expect(addresses[index + 1][0]).to.equal(formatDate(day))
        }
    })
})
