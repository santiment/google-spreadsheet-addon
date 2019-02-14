const request = require('sync-request')

class UrlFetchApp {
  constructor (response) {
    this.response = response
  }

  fetch (url, params) {
    let method = 'GET'
    params = params || {}
    const headers = params['headers'] || {}

    if (params['method'] != null) { method = params['method'].toUpperCase() }

    let response
    if (method === 'POST') {
      response = request(method, url, { json: JSON.parse(params['payload']), headers: headers })
    } else {
      response = request(method, url)
    }

    this.response.setContentText(response.body)
    this.response.setResponseCode(response.statusCode)

    return this.response
  }
}

const getMock = response => new UrlFetchApp(response)

module.exports = { getMock }
