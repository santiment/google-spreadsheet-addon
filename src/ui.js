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
       .addItem('Add API key', 'addApiKeyDialog_')
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

function addApiKeyDialog_() {
  var ui = SpreadsheetApp.getUi()

  var title = 'Add an API key';
  var inputCaption = 'Please enter your API key:';

  var result = ui.prompt(title, inputCaption, ui.ButtonSet.OK_CANCEL);
  var button = result.getSelectedButton();
  var input = result.getResponseText();

  if (button == ui.Button.OK) {
    var apiClient = new ApiClient_(new Connection_(input))
    if (apiClient.hasValidApiKey() === true) {
      setUserProperty_(API_KEY, input);

      ui.alert('Your API key is valid and has been saved');
    } else {
      ui.alert('Your API key is not valid and has not been saved!');
    }
  }
}
