class Properties {
  constructor () {
    this._data = {}
  }

  deleteAllProperties () {
    this._data = {}
    return this
  }

  deleteProperty (key) {
    delete this._data[key]
    return this
  }

  getKeys () {
    return Object.keys(this._data)
  }

  getProperties () {
    return this._data
  }

  getProperty (key) {
    return this._data[key] || null
  }

  setProperties (properties = {}, deleteAllOthers = false) {
    this._data = Object
      .assign(deleteAllOthers ? {} : this._data, properties)

    return this
  }

  setProperty (key, value) {
    this._data[key] = value
    return this
  }
}

class PropertiesService {
  static init () {
    PropertiesService.documentProperties = new Properties()
    PropertiesService.scriptProperties = new Properties()
    PropertiesService.userProperties = new Properties()
  }

  static getDocumentProperties () {
    return PropertiesService.documentProperties
  }

  static getScriptProperties () {
    return PropertiesService.scriptProperties
  }

  static getUserProperties () {
    return PropertiesService.userProperties
  }
}

const getMock = () => PropertiesService

module.exports = { getMock }
