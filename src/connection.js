var SANTIMENT_GRAPHQL_URL = "https://api.santiment.net/graphql"

function Connection_(apiKey, url) {
  if (apiKey == null && hasApiKeyProperty_()) { apiKey = apiKeyProperty_() }
  this.apiKey = apiKey
  this.url = url || SANTIMENT_GRAPHQL_URL
}

Connection_.prototype.buildRequestOptions = function (query) {
  var requestOptions = {
    'muteHttpExceptions': true,
    'method' : 'post',
    'contentType': 'application/json',
    'payload' : JSON.stringify(query)
  }

  if (this.apiKey) {
    requestOptions['headers'] = { Authorization: 'Apikey ' + this.apiKey }
  }

  return requestOptions
}

Connection_.prototype.fetchQuery = function (query) {
  return UrlFetchApp.fetch(this.url, this.buildRequestOptions(query))
}

Connection_.prototype.parseResponse = function (response, queryName) {
  if (response.getResponseCode() != 200) {
    var errorMessage = JSON.parse(response.getContentText())["errors"].map(function(error) { return error["message"]});
    throw new Error("code: " + response.getResponseCode() + ", messages: " + errorMessage);
  }

  return JSON.parse(response.getContentText())["data"][queryName]
}

Connection_.prototype.graphQLQuery = function (query, queryName) {
  var response = this.fetchQuery(query)
  return this.parseResponse(response, queryName)
}
