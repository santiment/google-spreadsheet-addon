const assertNumberOfRecords = (records, number) => {
  const includingHeader = number + 1
  const includingHeaderAndLastDay = number + 2

  // HACK: Some queries return the last day, others don't.
  expect(records).to.have.lengthOf.within(includingHeader, includingHeaderAndLastDay)
}

const testHandlesNullData = (stubName, func, ...args) => {
  it('returns a message when there is no data', () => {
    sandbox.stub(san.ApiClient_.prototype, stubName).returns(null)

    const result = func(...args)
    expect(result).to.deep.eq([san.NO_DATA_MSG])
  })
}

const testTimeBound = (metric, slug, from, to, currency, days, numberOfDays, formatDate) => {
  const timeBound = ['', '1d', '7d', '30d', '60d', '90d', '180d', '365d', '2y', '3y', '5y', '10y']
  for (const timeBoundSuffix of timeBound) {
    it(`returns a record per every day ${timeBoundSuffix}`, () => {
      let results = ''
      if (currency !== '') {
        results = metric(slug, from, to, currency, timeBoundSuffix)
      } else {
        results = metric(slug, from, to, timeBoundSuffix)
      }

      testHandlesNullData(
        'fetchGetMetric',
        metric,
        from,
        to,
        currency,
        timeBound
      )

      assertNumberOfRecords(results, numberOfDays)
      for (let [index, day] of days.entries()) {
        expect(results[index + 1][0]).to.equal(formatDate(day))
      }
    })
  }
}

module.exports = {
  assertNumberOfRecords: assertNumberOfRecords,
  testHandlesNullData: testHandlesNullData,
  testTimeBound: testTimeBound
}
