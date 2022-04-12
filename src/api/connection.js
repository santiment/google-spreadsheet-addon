/* eslint-disable no-var */

var SANTIMENT_GRAPHQL_URL = 'https://api.santiment.net/graphql'
const NON_CACHED_QUERIES = ['currentUser']

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

Connection_.prototype.fetchQuery = function (query, queryName) {
  const cache = CacheService.getScriptCache()
  const reformedQuery = this.buildRequestOptions(query)

  const key = Utilities.computeDigest(
    Utilities.DigestAlgorithm.SHA_256,
    JSON.stringify(reformedQuery)
  )

  const cachedResponse = cache.get(key)

  if (cachedResponse !== null) {
    const parsedResponse = JSON.parse(cachedResponse)
    if (
      parsedResponse.code === 200 &&
      !('errors' in parsedResponse.body) &&
      queryName in parsedResponse.body.data &&
      NON_CACHED_QUERIES.indexOf(queryName) < 0
    ) {
      return [parsedResponse, 'CacheHitLog']
    }
    // TODO: Figure out why we cached a wrong result in the first place
    cache.remove(key)
  }

  const response = UrlFetchApp.fetch(this.url, reformedQuery)

  const returnedResponse = {
    code: response.getResponseCode(),
    body: JSON.parse(response.getContentText())
  }

  if (returnedResponse.code === 200 && !('errors' in returnedResponse.body) && NON_CACHED_QUERIES.indexOf(queryName) < 0) {
    try {
      // The expiry is a random value in seconds between 60 and 90 minutes.
      // The random value helps avoiding the issue where all cache keys expire
      // at the same time
      const expiry = 3600 + parseInt(Math.random(1800), 10)
      cache.put(key, JSON.stringify(returnedResponse), expiry)
    } catch (e) {
      const error = {
        type: e.name,
        message: e.message,
        query: query
      }
      logWarning_(error)
    }
  }

  return [returnedResponse, 'RequestLog']
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
  switch (responseCode) {
  case 200:
    if ('errors' in responseBody) {
      throw new ServerError_(this.buildErrorMessage(responseBody.errors))
    } else {
      return responseBody.data[queryName]
    }
  case 500:
    throw new InternalServerError_()
  default:
    if ('errors' in responseBody) {
      throw new ServerError_(this.buildErrorMessage(responseBody.errors))
    } else {
      throw new ServerError_()
    }
  }
}

Connection_.prototype.graphQLQuery = function (query, queryName) {
  const [response, logType] = this.fetchQuery(query, queryName)
  try {
    const responseCode = response.code
    const responseBody = response.body

    const logMessage = {
      type: logType,
      query: query,
      queryName: queryName
    }

    logInfo_(logMessage)

    return this.handleResponse(responseCode, responseBody, queryName)
  } catch (e) {
    const error = {
      type: e.name,
      message: e.message,
      query: query,
      queryName: queryName,
      responseCode: response.code,
      responseBody: JSON.stringify(response.body)
    }

    logError_(error)
    throw e
  }
}
