function onOpen () {
  SpreadsheetApp
    .getUi()
    .createAddonMenu()
    .addItem('Enable', 'enable_')
    .addItem('Add API key', 'addApiKeyDialog_')
    .addToUi()
}

function onInstall () {
  onOpen()
}

function enable_ () {
  var title = 'SANsheets'
  var message = 'This add-on gives you access to cryptocurrency data through various custom functions. Every function starts with =SAN.'
  var ui = SpreadsheetApp.getUi()
  ui.alert(title, message, ui.ButtonSet.OK)
}

function addApiKeyDialog_ () {
  var ui = SpreadsheetApp.getUi()

  var title = 'Add an API key'
  var inputCaption = 'Please enter your API key:'

  var result = ui.prompt(title, inputCaption, ui.ButtonSet.OK_CANCEL)
  var button = result.getSelectedButton()
  var input = result.getResponseText().trim()

  if (button === ui.Button.OK) {
    var apiClient = new ApiClient_(new Connection_(input))
    if (apiClient.hasValidApiKey() === true) {
      setUserProperty_(API_KEY, input)
      logInfo_({type: 'ApiKeyLog', message: 'Valid API key has been added'})
      ui.alert('Your API key is valid and has been saved')
    } else {
      logWarning_({type: 'ApiKeyLog', message: 'An attempt to add invalid API key has been made.'})
      ui.alert('Your API key is not valid and has not been saved!')
    }
  }
}
