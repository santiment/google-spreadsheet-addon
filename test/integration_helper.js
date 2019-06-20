const assertNumberOfRecords = (records, number) => {
  const includingHeader = number + 1
  const includingHeaderAndLastDay = number + 2

  // HACK: Some queries return the last day, others don't.
  expect(records).to.have.lengthOf.within(includingHeader, includingHeaderAndLastDay)
}

const testHistoricDataIsForbidden = (func, ...args) => {
  it('returns a message when requested data is historic and no api key is present', () => {
    const result = func(...args)
    expect(result).to.deep.eq([san.HISTORIC_DATA_FORBIDDEN_MSG])
  })
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
  testHistoricDataIsForbidden: testHistoricDataIsForbidden,
  testHandlesNullData: testHandlesNullData
}
