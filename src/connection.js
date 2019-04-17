var SANTIMENT_GRAPHQL_URL = 'https://api.santiment.net/graphql'

function Connection_ (apiKey, url) {
  if (apiKey == null && hasApiKeyProperty_()) {
    this.apiKey = apiKeyProperty_()
  } else {
    this.apiKey = apiKey
  }
  this.url = url || SANTIMENT_GRAPHQL_URL
}

Connection_.prototype.buildRequestOptions = function (query) {
  var requestOptions = {
    'muteHttpExceptions': true,
    'method': 'post',
    'contentType': 'application/json',
    'payload': JSON.stringify(query)
  }

  if (this.apiKey) {
    requestOptions.headers = { Authorization: 'Apikey ' + this.apiKey }
  }

  return requestOptions
}

Connection_.prototype.fetchQuery = function (query) {
  return UrlFetchApp.fetch(this.url, this.buildRequestOptions(query))
}


Connection_.prototype.handleResponse = function (responseCode, responseBody, queryName) {
  switch (responseCode) {
  case 200:
    return responseBody.data[queryName]
  case 500:
    throw new InternalServerError_()
  default:
    var errorMessage
    var errors = responseBody.errors

    if (errors != null) {
      errorMessage = errors.map(function (error) { return error.message }).join(', ')
      throw new ServerError_(errorMessage)
    } else {
      throw new ServerError_()
    }
  }
}

Connection_.prototype.graphQLQuery = function (query, queryName) {
  try {
    var response = this.fetchQuery(query)
    var responseCode = response.getResponseCode()
    var responseBody = JSON.parse(response.getContentText())

    var logMessage = {
      query: query,
      queryName: queryName
    }

    logInfo_(logMessage)

    return this.handleResponse(responseCode, responseBody, queryName)
  } catch (e) {
    var error = {
      message: e.message,
      query: query,
      queryName: queryName,
      responseCode: response.getResponseCode(),
      responseBody: response.getContentText()
    }

    logError_(error)
    throw e
  }
}
