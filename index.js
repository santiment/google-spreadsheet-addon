var gas = require('gas-local');
var Sugar = require('sugar');
var path = require('path');

var urlfetchapp = require('./gas_mock/UrlFetchApp');
var response = require('./gas_mock/HTTPResponse');

function gasMock() {
  var defaultMock = gas.globalMockDefault;

  var customMock = {
    HTTPResponse: response.getMock(),
    __proto__: defaultMock
  };

  var addMock = {
    UrlFetchApp: urlfetchapp.getMock(customMock['HTTPResponse'])
  };

  return Sugar.Object.merge(customMock, addMock);
}

module.exports = {
  globalMockDefault: gasMock(),
  require: function(folderPath, globalObject, options) {
    if(globalObject == null) globalObject = this.globalMockDefault;
    if(options == null) options = {
      filter: function(f) {
        if(path.basename(f).match(/^\._/) != null) return false;
        return path.extname(f) == '.js';
      }
    }
    return gas.require(folderPath, globalObject, options);
  }
};
