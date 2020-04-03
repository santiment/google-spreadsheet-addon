const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const sandbox = sinon.createSandbox()
const chai = require('chai')
const expect = chai.expect
chai.use(sinonChai)
chai.use(require('chai-datetime'))

const gas = require('gas-local')
const mock = require('../../index.js')
const san = gas.require('./src', mock.globalMockDefault)

const testFieldTypes = (resources, expected) => {
  Object.entries(expected).forEach(([attr, type], index) => {
    it(`returns ${attr} attribute`, () => {
      expect(resources[index]).to.be.a(type)
    })
  })
}

const testThrowsNoDataError = (stubName, func, ...args) => {
  it('throws NoDataError_ when there is no data', () => {
    sandbox.stub(san.ApiClient_.prototype, stubName).returns(null)

    expect(() => func(...args)).to.throw('No data')
  })
}

global.expect = expect
global.gas = gas
global.san = san
global.sinon = sinon
global.sandbox = sandbox

beforeEach(() => san.PropertiesService.init())
afterEach(() => { sandbox.restore() })

module.exports = {
  testFieldTypes: testFieldTypes,
  testThrowsNoDataError: testThrowsNoDataError
}
