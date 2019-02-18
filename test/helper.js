const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const sandbox = sinon.createSandbox()
const chai = require('chai')
const expect = chai.expect
chai.use(sinonChai)

const gas = require('gas-local')
const mock = require('../index.js')
const san = gas.require('./src', mock.globalMockDefault)

global.expect = expect
global.gas = gas
global.san = san
global.sinon = sinon
global.sandbox = sandbox

beforeEach(() => san.PropertiesService.init())
afterEach(() => { sandbox.restore() })
