/* eslint-disable prefer-arrow-callback */

const API_KEY = 'API_KEY'
const API_KEY_LOG_TYPE = 'ApiKeyLog'
const ADD_API_KEY_ACTION = 'AddApiKey'
const REMOVE_API_KEY_ACTION = 'RemoveApiKey'
const VALIDATE_API_KEY_ACTION = 'ValidateApiKey'

function fetchUserPermissions_ (key) {
  const apiClient = new ApiClient_(new Connection_(key))
  return apiClient.fetchCurrentUserPermissions()
}

function apiKeyProperty_ () { return getUserProperty_(API_KEY) }
function hasApiKeyProperty_ () { return !!apiKeyProperty_() }

function validateApiKey_ (response) {
  return response != null
}

function validateApiKeyPermissions_ (response) {
  return Object.prototype.hasOwnProperty.call(response, 'permissions')
}

function validateSanSheetsAccess_ (response) {
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
    logWarning_({
      type: API_KEY_LOG_TYPE,
      action: ADD_API_KEY_ACTION,
      message: 'An attempt to add invalid API key has been made.'
    })
    return 'API key is not valid and has not been saved!'
  }

  if (validateApiKeyPermissions_(userPermissions) === false) {
    logWarning_({
      type: API_KEY_LOG_TYPE,
      action: ADD_API_KEY_ACTION,
      message: 'An attempt to add a valid API key with no SanSheets permissions was made.'
    })
    return 'API key is valid but has no permissions to access SanSheets and has not been saved.'
  }

  let userMessage
  setApiKeyProperty_(key)

  if (validateSanSheetsAccess_(userPermissions) === true) {
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
      message: "Valid API key has been added but user doesn't have needed permissions."
    })

    userMessage = "API key is valid and has been saved but you don't have needed permissions to access historic data!"
  }

  return userMessage
}

function removeApiKey_ () {
  deleteApiKeyProperty_()

  logInfo_({
    type: API_KEY_LOG_TYPE,
    action: REMOVE_API_KEY_ACTION,
    message: 'API key has been removed.'
  })

  return 'API key has been removed!'
}

function checkApiKeyStillValid_ (key, userPermissions) {
  if (validateApiKey_(userPermissions) === false) {
    logWarning_({
      type: API_KEY_LOG_TYPE,
      action: VALIDATE_API_KEY_ACTION,
      message: 'User has invalid API key.'
    })
    return 'API key is not valid!'
  }

  let userMessage

  if (validateSanSheetsAccess_(userPermissions) === true) {
    userMessage = 'API key is valid.'
  } else {
    logWarning_({
      type: API_KEY_LOG_TYPE,
      action: VALIDATE_API_KEY_ACTION,
      message: "User has valid API key but doesn't have needed permissions."
    })

    userMessage = "API key is valid but you don't have needed permissions to access historic data!"
  }

  return userMessage
}
