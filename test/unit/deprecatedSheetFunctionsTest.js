/* eslint-disable no-unused-vars */

require('../support/helper.js')

const testDeprecationMessage = (oldFunctionName, oldFunctionArgs, newFunctionName) => {
  it(`returns deprecation message for ${oldFunctionName}`, () => {
    const response = san[oldFunctionName].call(null, oldFunctionArgs)
    expect(response).to.eq(`DEPRECATED: Use =${newFunctionName} instead.`)
  })

  it(`logs when ${oldFunctionName} has been used`, () => {
    const logInfo = sandbox.stub(san, 'logInfo_').returns(null)

    san[oldFunctionName].call(null, oldFunctionArgs)

    expect(logInfo).to.have.been.calledWith({
      type: 'Deprecated',
      message: `Deprecated function ${oldFunctionName} has been used.`
    })
  })
}
