const { testFieldTypes } = require('../helper.js')

const {
  testHandlesNullData,
  assertNumberOfRecords
} = require('../integration_helper.js')

const {
  slug,
  from,
  to,
  days,
  numberOfDays,
  formatDate
} = require('../setup.js')

describe('SAN_TRANSACTION_VOLUME', () => {
  const expected = {
    date: 'string',
    transactionVolume: 'number'
  }

  const response = san.SAN_TRANSACTION_VOLUME(slug, from, to)
  const headers = response[0]
  const volumes = response[1]

  testFieldTypes(volumes, expected)

  testHandlesNullData('fetchTransactionVolume', san.SAN_TRANSACTION_VOLUME, slug, from, to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Transaction Volume']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it('returns a record per every day', () => {
    const transcationVolumes = san.SAN_TRANSACTION_VOLUME(slug, from, to)

    assertNumberOfRecords(transcationVolumes, numberOfDays)

    for (let [index, day] of days.entries()) {
      expect(transcationVolumes[index + 1][0]).to.equal(formatDate(day))
    }
  })
})
