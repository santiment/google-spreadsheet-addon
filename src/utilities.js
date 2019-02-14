function setUserProperty_(key, value) {
  PropertiesService.getUserProperties().setProperty(key, value);
}

function getUserProperty_(key) {
  return PropertiesService.getUserProperties().getProperty(key);
}

function formatDatetimeField_(field) {
  return new Date(field).toISOString().slice(0,10)
}

function formatNumber_(field) {
  return parseFloat(field || 0)
}

function toUTC_(date) {
  var timezone = SpreadsheetApp.getActive().getSpreadsheetTimeZone();
  return Utilities.formatDate(new Date(date), timezone, "yyyy-MM-dd'T'HH:mm:ss'Z'");
}
