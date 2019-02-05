/**
 * Runs when the add-on is installed.
 */
function onInstall() {
  onOpen();
}

/**
 * Runs when the document is opened, creating the add-on's menu. Custom function
 * add-ons need at least one menu item, since the add-on is only enabled in the
 * current spreadsheet when a function is run.
 */
function onOpen() {
  SpreadsheetApp.getUi().createAddonMenu()
      .addItem('Enable', 'enable_')
      .addToUi();
}

/**
 * Enables the add-on on for the current spreadsheet (simply by running) and
 * shows a popup informing the user of the new functions that are available.
 */
function enable_() {
  var title = 'Santiment Data';
  var message = 'This add-on gives you access to cryptocurrency data through various custom functions. Every function starts with =SAN.';
  var ui = SpreadsheetApp.getUi();
  ui.alert(title, message, ui.ButtonSet.OK);
}

function graphQLTimeseriesQuery_(query, query_name, fields) {
  var data = graphQLQuery_(query, query_name)
  var headers = [["date"].concat(fields)]

  var values = data.map(function(data_point) {
    return [
      formatDatetimeField_(data_point['datetime'])
    ].concat(fields.map(function(field) { return data_point[field]; }))
  })

  return headers.concat(values)
}

function formatDatetimeField_(field) {
  return new Date(field).toISOString().slice(0,10)
}

function formatNumber_(field) {
  return parseFloat(field || 0)
}

function graphQLQuery_(query, query_name) {
  var response = UrlFetchApp.fetch("https://api.santiment.net/graphql", {
    'muteHttpExceptions': true,
    'method' : 'post',
    'contentType': 'application/json',
    'payload' : JSON.stringify(query)
  });

  if (response.getResponseCode() != 200) {
    throw new Error(JSON.parse(response.getContentText())["errors"]["detail"]);
  }

  return JSON.parse(response.getContentText())["data"][query_name];
}

function checkForHistoricData_(from) {
  var oneDay = 24 * 60 * 60 * 1000;
  var timeSpan = ((new Date()) - from) / oneDay;
  if (timeSpan > 90) {
    throw new Error("You can't use the add-on for historic data at the moment. Please select a starting date within three months in the past.");
  }
}

function toUTC_(date) {
  var timezone = SpreadsheetApp.getActive().getSpreadsheetTimeZone();
  return Utilities.formatDate(new Date(date), timezone, "yyyy-MM-dd'T'HH:mm:ss'Z'");
}
