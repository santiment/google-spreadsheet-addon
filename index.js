const gas = require('gas-local')
const Sugar = require('sugar')
const path = require('path')

const UrlFetchApp = require('./gas_mock/UrlFetchApp')
const HTTPResponse = require('./gas_mock/HTTPResponse')
const PropertiesService = require('./gas_mock/PropertiesService')
const spreadsheetApp = require('./gas_mock/spreadsheetApp')
const Utilities = require('./gas_mock/utilities')
const CacheService = require('./gas_mock/CacheService')

function gasMock () {
  const defaultMock = gas.globalMockDefault

  const customMock = {
    Utilities: Utilities.getMock(),
    HTTPResponse: HTTPResponse.getMock(),
    SpreadsheetApp: spreadsheetApp.getMock(),
    PropertiesService: PropertiesService.getMock(),
    __proto__: defaultMock,
    CacheService: CacheService.getMock()
  }

  const addMock = {
    UrlFetchApp: UrlFetchApp.getMock(customMock['HTTPResponse'])
  }

  return Sugar.Object.merge(customMock, addMock)
}

module.exports = {
  globalMockDefault: gasMock(),
  require: (folderPath, globalObject, options) => {
    if (globalObject == null) globalObject = this.globalMockDefault
    if (options == null) {
      options = {
        filter: (f) => {
          if (path.basename(f).match(/^\._/) != null) return false
          return path.extname(f) === '.js'
        }
      }
    }
    return gas.require(folderPath, globalObject, options)
  }
}
