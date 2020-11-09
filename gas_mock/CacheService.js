class Cache {
  constructor () {
    this._data = {}
  }

  getScriptCache () {
    return this._data
  }

  getCacheKeys () {
    return this._data.keys()
  }

  get (key) {
    if (this._data.hasOwnProperty(key) && this._data[key].data) {
      return this._data[key].data
    }
    return null
  }

  put (key, data, expiry) {
    let to = false
    if (expiry > 0) {
      to = setTimeout(() => { if (this._data.hasOwnProperty(key)) { this._data[key] = null } }, expiry)
    }

    this._data[key] = {
      expiry: expiry,
      data: data,
      timeout: to
    }

    return this
  }

  deleteAllCache () {
    this._data = {}
    return this
  }

  deleteCacheKey (key) {
    delete this._data[key]
    return this
  }
}

class CacheService {
  static init () {
    CacheService.scriptCache = new Cache()
  }

  static getScriptCache () {
    return CacheService.scriptCache
  }
}

CacheService.init()

const getMock = () => CacheService

module.exports = { getMock }
