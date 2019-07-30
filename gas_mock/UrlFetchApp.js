const request = require('sync-request')

class UrlFetchApp {
  constructor(response) {
    this.response = response
  }

  _request() {
    return request.apply(null, arguments)
  }

  fetch(url, params) {
    let method = 'GET'
    params = params || {}
    const headers = params.headers || {}

    if (params.method != null) {
      method = params.method.toUpperCase()
    }

    let response
    if (method === 'POST') {
      response = this._request(method, url, {
        json: JSON.parse(params.payload),
        headers: headers
      })
    } else {
      response = this._request(method, url)
    }

    this.response.setContentText(response.body)
    this.response.setResponseCode(response.statusCode)

    return this.response
  }
}

const getMock = response => new UrlFetchApp(response)

module.exports = { getMock }
