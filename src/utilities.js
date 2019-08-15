function setUserProperty_ (key, value) {
  PropertiesService.getUserProperties().setProperty(key, value)
}

function getUserProperty_ (key) {
  return PropertiesService.getUserProperties().getProperty(key)
}

function deleteUserProperty_ (key) {
  PropertiesService.getUserProperties().deleteProperty(key)
}

function assertHasData_ (data) {
  if (data === null || data === []) throw new NoDataError_()
}

function formatDatetimeField_ (field) {
  return new Date(field).toISOString().slice(0, 10)
}

function formatNumber_ (field) {
  return parseFloat(field || 0)
}

function toUTC_ (date) {
  var timezone = SpreadsheetApp.getActive().getSpreadsheetTimeZone()
  return Utilities.formatDate(new Date(date), timezone, "yyyy-MM-dd'T'HH:mm:ss'Z'")
}

function beginningOfDaytoEndOfDay_ (date) {
  var millisInDay = 24 * 60 * 60 * 1000
  return new Date(date.getTime() + millisInDay - 1000) // remove a second to get 23:59:59
}

function assertParameters_ (dictOfParams) {
  for (var key in dictOfParams) {
    if (dictOfParams.hasOwnProperty(key)) {
      if (dictOfParams[key] === 'string' && !(key === 'string')) {
        throw new UnsupportedError_('Invalid ' + key + '! It should be a string.')
      }
      if (dictOfParams[key] === 'Date' && !(key === 'Date')) {
        throw new UnsupportedError_('Invalid ' + key + '! It should be a DATE.' )
      }
      if (dictOfParams[key] === 'number' && !(key === 'number')) {
        throw new UnsupportedError_('Invalid ' + key + '! It should be a number.')
      }
    }
  }
}
