const SANTIMENT_GRAPHQL_URL = 'https://api.santiment.net/graphql'

function Connection_ (apiKey, url) {
  if (apiKey == null && hasApiKeyProperty_()) {
    this.apiKey = apiKeyProperty_()
  } else {
    this.apiKey = apiKey
  }
  this.url = url || SANTIMENT_GRAPHQL_URL
}

Connection_.prototype.buildRequestOptions = function (query) {
  const requestOptions = {
    'muteHttpExceptions': true,
    'method': 'post',
    'contentType': 'application/json',
    'payload': JSON.stringify(query)
  }

  if (this.apiKey) {
    requestOptions.headers = { Authorization: `Apikey ${this.apiKey}` }
  }

  return requestOptions
}

Connection_.prototype.fetchQuery = function (query) {
  return UrlFetchApp.fetch(this.url, this.buildRequestOptions(query))
}

Connection_.prototype.buildErrorMessage = function (errors) {
  let message = ''

  if (errors instanceof Array) {
    message = errors.map(error => error.message).join(', ')
  } else if (Object.prototype.hasOwnProperty.call(errors, 'details')) {
    message = errors.details
  }

  return message
}

Connection_.prototype.handleResponse = function (responseCode, responseBody, queryName) {
  const errors = responseBody.errors

  switch (responseCode) {
  case 200:
    if (errors != null) {
      throw new ServerError_(this.buildErrorMessage(errors))
    } else {
      return responseBody.data[queryName]
    }
  case 500:
    throw new InternalServerError_()
  default:
    if (errors != null) {
      throw new ServerError_(this.buildErrorMessage(errors))
    } else {
      throw new ServerError_()
    }
  }
}

Connection_.prototype.graphQLQuery = function (query, queryName) {
  const response = this.fetchQuery(query)
  try {
    const responseCode = response.getResponseCode()
    const responseBody = JSON.parse(response.getContentText())

    const logMessage = {
      type: 'RequestLog',
      query,
      queryName
    }

    logInfo_(logMessage)

    return this.handleResponse(responseCode, responseBody, queryName)
  } catch (e) {
    const error = {
      type: e.name,
      message: e.message,
      query,
      queryName,
      responseCode: response.getResponseCode(),
      responseBody: response.getContentText()
    }

    logError_(error)
    throw e
  }
}
