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

function formatDatetimeField_ (field, datetimeField) {
  if (datetimeField === 'datetime') {
    sliceLength = 19
  } else {
    sliceLength = 10
  }
  return new Date(field).toISOString().slice(0, sliceLength).replace('T', ' ')
}

function formatNumber_ (field) {
  return parseFloat(field || 0)
}

function roundToMinutes_ (date) {
  const ms = 1000 * 60 * 5
  const roundedDate = new Date(Math.round(date.getTime() / ms) * ms)

  return roundedDate
}

function toUTC_ (date) {
  const timezone = SpreadsheetApp.getActive().getSpreadsheetTimeZone()
  if (date.startsWith('utc_now')) {
    const dt = new Date()
    const [firstPart, secondPart] = date.split('-')
    if ((typeof secondPart) !== 'undefined') {
      dt.setDate(dt.getDate() - Number(secondPart.substring(0, secondPart.length - 1)))
    }

    return Utilities.formatDate(roundToMinutes_(dt), timezone, "yyyy-MM-dd'T'HH:mm:ss'Z'")
  }
  return Utilities.formatDate(roundToMinutes_(new Date(date)), timezone, "yyyy-MM-dd'T'HH:mm:ss'Z'")
}

function beginningOfDaytoEndOfDay_ (date) {
  const millisInDay = 24 * 60 * 60 * 1000
  return new Date(date.getTime() + millisInDay - 1000) // remove a second to get 23:59:59
}
