const { formatDate } = require('./setup.js')

const assertNumberOfRecords = (records, number) => {
  const includingHeader = number + 1
  const includingHeaderAndLastDay = number + 2

  // HACK: Some queries return the last day, others don't.
  expect(records).to.have.lengthOf.within(includingHeader, includingHeaderAndLastDay)
}

const assertDaysMatch = (records, days) => {
  for (let [index, day] of days.entries()) {
    expect(records[index + 1][0]).to.equal(formatDate(day))
  }
}

const assertBalanceIntervalsWork = (number, func, ...args) => {
  const intervals = [
    '0-0.001', '0.001-0.01', '0.01-0.1', '0.1-1',
    '1-10', '10-100', '100-1k',
    '1k-10k', '10k-100k', '100k-1M',
    '1M-10M', '10M-inf', 'total'
  ]
  for (let interval of intervals) {
    it(`returns data with interval ${interval}`, () => {
      const results = func(...args, interval)
      assertNumberOfRecords(results, number)
    })
  }
}

const testHandlesNullData = (stubName, func, ...args) => {
  it('returns a message when there is no data', () => {
    sandbox.stub(san.ApiClient_.prototype, stubName).returns(null)

    const result = func(...args)
    expect(result).to.deep.eq([san.NO_DATA_MSG])
  })
}

module.exports = {
  assertNumberOfRecords: assertNumberOfRecords,
  assertDaysMatch: assertDaysMatch,
  assertBalanceIntervalsWork: assertBalanceIntervalsWork,
  testHandlesNullData: testHandlesNullData
}
