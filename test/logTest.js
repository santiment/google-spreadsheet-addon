require('./helper.js')

it('logs HistoricDataForbiddenError as warning', () => {
    const logWarning = sandbox.stub(san, 'logWarning_').returns(null)
    san.logWarning_({})
    expect(logWarning).to.have.been.calledWith({})
})
