const expect = require('chai').expect
const gas = require('gas-local')
const mock = require('../index.js')
const san = gas.require('./src', mock.globalMockDefault)

global.expect = expect
global.gas = gas
global.san = san
