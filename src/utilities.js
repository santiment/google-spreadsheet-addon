var HISTORIC_DATA_THRESHOLD = 90

function setUserProperty_ (key, value) {
  PropertiesService.getUserProperties().setProperty(key, value)
}

function getUserProperty_ (key) {
  return PropertiesService.getUserProperties().getProperty(key)
}

function deleteUserProperty_ (key) {
  PropertiesService.getUserProperties().deleteProperty(key)
}

function requestedDataIsHistoric_ (from) {
  var oneDay = 24 * 60 * 60 * 1000
  var timeSpan = ((new Date()) - from) / oneDay
  return timeSpan > HISTORIC_DATA_THRESHOLD
}

function assertHasData_ (data) {
  if (data === null || data === []) throw new NoDataError_()
}

function assertCanAccessHistoricData_ (from) {
  if (requestedDataIsHistoric_(from) && !hasApiKeyProperty_()) throw new HistoricDataForbiddenError_()
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
