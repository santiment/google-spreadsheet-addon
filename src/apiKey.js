var API_KEY = 'API_KEY'
var API_KEY_LOG_TYPE = 'ApiKeyLog'

function apiKeyProperty_ () { return getUserProperty_(API_KEY) }
function hasApiKeyProperty_ () { return !!apiKeyProperty_() }

function validateApiKey_ (response) {
  return response != null && response.hasOwnProperty('permissions')
}

function validateCanAccessHistoricData_ (response) {
  return (validateApiKey_(response) && response.permissions.spreadsheet) === true
}

function setApiKeyProperty_ (key) {
  setUserProperty_(API_KEY, key)
}

function deleteApiKeyProperty_ () {
  deleteUserProperty_(API_KEY)
}

function obfuscateApiKey_ (key) {
  return key.replace(/(.{3})(.+)(.{3})/g, function (_match, start, middle, end) {
    return start + Array(middle.length).join('*') + end
  })
}

function addApiKey_ (key, userPermissions) {
  if (validateApiKey_(userPermissions) === false) {
    logWarning_({type: API_KEY_LOG_TYPE, message: 'An attempt to add invalid API key has been made.'})
    return 'API key is not valid and has not been saved!'
  }

  var userMessage
  setApiKeyProperty_(key)

  if (validateCanAccessHistoricData_(userPermissions) === true) {
    logInfo_({type: API_KEY_LOG_TYPE, message: 'Valid API key has been added.'})
    userMessage = 'API key is valid and has been saved.'
  } else {
    logWarning_({type: API_KEY_LOG_TYPE, message: "Valid API key has been added but user doesn't have needed permissions."})
    userMessage = "API key is valid and has been saved but you don't have needed permissions to access historic data!"
  }

  return userMessage
}

function checkApiKeyStillValid_ (key, userPermissions) {
  if (validateApiKey_(userPermissions) === false) {
    logWarning_({type: API_KEY_LOG_TYPE, message: 'User has invalid API key.'})
    return 'API key is not valid!'
  }

  var userMessage

  if (validateCanAccessHistoricData_(userPermissions) === true) {
    userMessage = 'API key is valid.'
  } else {
    logWarning_({type: API_KEY_LOG_TYPE, message: "User has valid API key but doesn't have needed permissions."})
    userMessage = "API key is valid but you don't have needed permissions to access historic data!"
  }

  return userMessage
}
