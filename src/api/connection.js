var SANTIMENT_GRAPHQL_URL = 'https://api.santiment.net/graphql'

function Connection_(apiKey, url) {
    if (apiKey == null && hasApiKeyProperty_()) {
        this.apiKey = apiKeyProperty_()
    } else {
        this.apiKey = apiKey
    }
    this.url = url || SANTIMENT_GRAPHQL_URL
}

Connection_.prototype.buildRequestOptions = function(query) {
    var requestOptions = {
        muteHttpExceptions: true,
        method: 'post',
        contentType: 'application/json',
        payload: JSON.stringify(query),
    }

    if (this.apiKey) {
        requestOptions.headers = { Authorization: 'Apikey ' + this.apiKey }
    }

    return requestOptions
}

Connection_.prototype.fetchQuery = function(query) {
    return UrlFetchApp.fetch(this.url, this.buildRequestOptions(query))
}

Connection_.prototype.buildErrorMessage = function(errors) {
    var message = ''

    if (errors instanceof Array) {
        message = errors
            .map(function(error) {
                return error.message
            })
            .join(', ')
    } else if (errors.hasOwnProperty('details')) {
        message = errors.details
    }

    return message
}

Connection_.prototype.handleResponse = function(
    responseCode,
    responseBody,
    queryName
) {
    var errors = responseBody.errors

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

Connection_.prototype.graphQLQuery = function(query, queryName) {
    try {
        var response = this.fetchQuery(query)
        var responseCode = response.getResponseCode()
        var responseBody = JSON.parse(response.getContentText())

        var logMessage = {
            type: 'RequestLog',
            query: query,
            queryName: queryName,
        }

        logInfo_(logMessage)

        return this.handleResponse(responseCode, responseBody, queryName)
    } catch (e) {
        var error = {
            type: e.name,
            message: e.message,
            query: query,
            queryName: queryName,
            responseCode: response.getResponseCode(),
            responseBody: response.getContentText(),
        }

        logError_(error)
        throw e
    }
}
