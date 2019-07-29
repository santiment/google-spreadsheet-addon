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

describe('SAN_TOKEN_AGE_CONSUMED', () => {
    const expected = { date: 'string', tokenAgeConsumed: 'number' }

    const response = san.SAN_TOKEN_AGE_CONSUMED(slug, from, to)
    const headers = response[0]
    const activities = response[1]

    testFieldTypes(activities, expected)
    testHistoricDataIsForbidden(
        san.SAN_TOKEN_AGE_CONSUMED,
        ethereumSlug,
        historicDataFrom,
        historicDataTo
    )
    testHandlesNullData(
        'fetchTokenAgeConsumed',
        san.SAN_TOKEN_AGE_CONSUMED,
        slug,
        from,
        to
    )

    it('has proper headers', () => {
        const expectedHeaders = ['Date', 'Token Age Consumed']
        expect(headers).to.deep.equal(expectedHeaders)
    })

    it('returns a record per every day', () => {
        const results = san.SAN_TOKEN_AGE_CONSUMED(slug, from, to)

        assertNumberOfRecords(results, numberOfDays)

        for (let [index, day] of days.entries()) {
            expect(results[index + 1][0]).to.equal(formatDate(day))
        }
    })
})
