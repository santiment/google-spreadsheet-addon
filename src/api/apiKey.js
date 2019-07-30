var API_KEY = 'API_KEY'
var API_KEY_LOG_TYPE = 'ApiKeyLog'
var ADD_API_KEY_ACTION = 'AddApiKey'
var REMOVE_API_KEY_ACTION = 'RemoveApiKey'
var VALIDATE_API_KEY_ACTION = 'ValidateApiKey'

function fetchUserPermissions_(key) {
  var apiClient = new ApiClient_(new Connection_(key))
  return apiClient.fetchCurrentUserPermissions()
}

function apiKeyProperty_() {
  return getUserProperty_(API_KEY)
}
function hasApiKeyProperty_() {
  return !!apiKeyProperty_()
}

function validateApiKey_(response) {
  return response != null && response.hasOwnProperty('permissions')
}

function validateCanAccessHistoricData_(response) {
  return (
    (validateApiKey_(response) && response.permissions.spreadsheet) === true
  )
}

function setApiKeyProperty_(key) {
  setUserProperty_(API_KEY, key)
}

function deleteApiKeyProperty_() {
  deleteUserProperty_(API_KEY)
}

function obfuscateApiKey_(key) {
  return key.replace(/(.{3})(.+)(.{3})/g, function(_match, start, middle, end) {
    return start + Array(middle.length).join('*') + end
  })
}

function addApiKey_(key, userPermissions) {
  if (validateApiKey_(userPermissions) === false) {
    logWarning_({
      type: API_KEY_LOG_TYPE,
      action: ADD_API_KEY_ACTION,
      message: 'An attempt to add invalid API key has been made.'
    })
    return 'API key is not valid and has not been saved!'
  }

  var userMessage
  setApiKeyProperty_(key)

  if (validateCanAccessHistoricData_(userPermissions) === true) {
    logInfo_({
      type: API_KEY_LOG_TYPE,
      action: ADD_API_KEY_ACTION,
      message: 'Valid API key has been added.'
    })

    userMessage = 'API key is valid and has been saved.'
  } else {
    logWarning_({
      type: API_KEY_LOG_TYPE,
      action: ADD_API_KEY_ACTION,
      message:
        "Valid API key has been added but user doesn't have needed permissions."
    })

    userMessage =
      "API key is valid and has been saved but you don't have needed permissions to access historic data!"
  }

  return userMessage
}

function removeApiKey_() {
  deleteApiKeyProperty_()

  logInfo_({
    type: API_KEY_LOG_TYPE,
    action: REMOVE_API_KEY_ACTION,
    message: 'API key has been removed.'
  })

  return 'API key has been removed!'
}

function checkApiKeyStillValid_(key, userPermissions) {
  if (validateApiKey_(userPermissions) === false) {
    logWarning_({
      type: API_KEY_LOG_TYPE,
      action: VALIDATE_API_KEY_ACTION,
      message: 'User has invalid API key.'
    })
    return 'API key is not valid!'
  }

  var userMessage

  if (validateCanAccessHistoricData_(userPermissions) === true) {
    userMessage = 'API key is valid.'
  } else {
    logWarning_({
      type: API_KEY_LOG_TYPE,
      action: VALIDATE_API_KEY_ACTION,
      message: "User has valid API key but doesn't have needed permissions."
    })

    userMessage =
      "API key is valid but you don't have needed permissions to access historic data!"
  }

  return userMessage
}
