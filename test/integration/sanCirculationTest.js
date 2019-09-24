const { generateGetMetric } = require('../../generators/getMetric.js')
const chai = require('chai')
const expect = chai.expect

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

describe('circulation metric', async () => {
  await generateGetMetric()
  const expected = {
    date: 'string',
    value: 'number'
  }

  const response = san.SAN_CIRCULATION(slug, from, to)
  const headers = response[0]
  const results = response[1]
  testFieldTypes(results, expected)
  testHandlesNullData(
    'fetchGetMetric',
    san.SAN_CIRCULATION,
    slug,
    from,
    to)

  it('has proper headers', () => {
    const expectedHeaders = ['Date', 'Value']
    expect(headers).to.deep.equal(expectedHeaders)
  })

  it(`returns a record per every day for circulation_10y`, () => {
    const results = san.SAN_CIRCULATION(slug, from, to, '10y')
    assertNumberOfRecords(results, numberOfDays)

    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })
  it(`returns a record per every day for circulation_5y`, () => {
    const results = san.SAN_CIRCULATION(slug, from, to, '5y')
    assertNumberOfRecords(results, numberOfDays)

    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })
  it(`returns a record per every day for circulation_3y`, () => {
    const results = san.SAN_CIRCULATION(slug, from, to, '3y')
    assertNumberOfRecords(results, numberOfDays)

    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })
  it(`returns a record per every day for circulation_2y`, () => {
    const results = san.SAN_CIRCULATION(slug, from, to, '2y')
    assertNumberOfRecords(results, numberOfDays)

    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })
  it(`returns a record per every day for circulation_365d`, () => {
    const results = san.SAN_CIRCULATION(slug, from, to, '365d')
    assertNumberOfRecords(results, numberOfDays)

    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })
  it(`returns a record per every day for circulation_180d`, () => {
    const results = san.SAN_CIRCULATION(slug, from, to, '180d')
    assertNumberOfRecords(results, numberOfDays)

    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })
  it(`returns a record per every day for circulation_90d`, () => {
    const results = san.SAN_CIRCULATION(slug, from, to, '90d')
    assertNumberOfRecords(results, numberOfDays)

    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })
  it(`returns a record per every day for circulation_60d`, () => {
    const results = san.SAN_CIRCULATION(slug, from, to, '60d')
    assertNumberOfRecords(results, numberOfDays)

    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })
  it(`returns a record per every day for circulation_30d`, () => {
    const results = san.SAN_CIRCULATION(slug, from, to, '30d')
    assertNumberOfRecords(results, numberOfDays)

    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })
  it(`returns a record per every day for circulation_7d`, () => {
    const results = san.SAN_CIRCULATION(slug, from, to, '7d')
    assertNumberOfRecords(results, numberOfDays)

    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })
  it(`returns a record per every day for circulation_1d`, () => {
    const results = san.SAN_CIRCULATION(slug, from, to, '1d')
    assertNumberOfRecords(results, numberOfDays)

    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })
  it(`returns a record per every day for circulation`, () => {
    const results = san.SAN_CIRCULATION(slug, from, to)
    assertNumberOfRecords(results, numberOfDays)

    for (let [index, day] of days.entries()) {
      expect(results[index + 1][0]).to.equal(formatDate(day))
    }
  })
})
