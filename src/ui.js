function loadAddApiKeyMenu_(ui, menu) {
  var apiKeySubMenu = ui
    .createMenu('API key')
    .addItem('Add', 'addApiKeyDialog_')
  menu.addSubMenu(apiKeySubMenu).addToUi()
}

function loadManageExistingApiKeyMenu_(ui, menu) {
  var apiKeySubMenu = ui
    .createMenu('API key')
    .addItem('View', 'viewApiKeyDialog_')
    .addItem('Validate', 'validateApiKeyDialog_')
    .addItem('Remove', 'removeApiKeyDialog_')

  menu.addSubMenu(apiKeySubMenu).addToUi()
}

function loadFullMenu_() {
  var ui = SpreadsheetApp.getUi()
  var menu = ui.createAddonMenu()

  if (hasApiKeyProperty_()) {
    loadManageExistingApiKeyMenu_(ui, menu)
  } else {
    loadAddApiKeyMenu_(ui, menu)
  }
}

function loadBasicMenu_() {
  SpreadsheetApp.getUi()
    .createAddonMenu()
    .addItem('Enable', 'enable_')
    .addToUi()
}

function onOpen(e) {
  if (e && e.authMode === ScriptApp.AuthMode.NONE) {
    loadBasicMenu_()
  } else {
    loadFullMenu_()
  }
}

function onInstall(e) {
  onOpen(e)
}

function enable_() {
  var title = 'SANsheets'
  var message =
    'This add-on gives you access to cryptocurrency data through various custom functions. Every function starts with =SAN.'
  var ui = SpreadsheetApp.getUi()
  ui.alert(title, message, ui.ButtonSet.OK)

  loadFullMenu_()
}

function addApiKeyDialog_() {
  var ui = SpreadsheetApp.getUi()

  var title = 'Add an API key'
  var inputCaption = 'Please enter your API key:'

  var result = ui.prompt(title, inputCaption, ui.ButtonSet.OK_CANCEL)
  var button = result.getSelectedButton()
  var input = result.getResponseText().trim()

  if (button === ui.Button.OK) {
    var userPermissions = handleErrors_(fetchUserPermissions_)(input)
    var userMessage = addApiKey_(input, userPermissions)
    ui.alert(userMessage)
    loadFullMenu_()
  }
}

function viewApiKeyDialog_() {
  var ui = SpreadsheetApp.getUi()
  var title = 'Your API key'
  var apiKey = apiKeyProperty_()
  var text = obfuscateApiKey_(apiKey)

  ui.alert(title, text, ui.ButtonSet.OK)
}

function validateApiKeyDialog_() {
  var ui = SpreadsheetApp.getUi()
  var apiKey = apiKeyProperty_()
  var userPermissions = handleErrors_(fetchUserPermissions_)(apiKey)
  var userMessage = checkApiKeyStillValid_(apiKey, userPermissions)
  ui.alert(userMessage)
}

function removeApiKeyDialog_() {
  var ui = SpreadsheetApp.getUi()
  var title = 'Remove API key'
  var text = 'Are you sure you want to remove the API key?'
  var result = ui.alert(title, text, ui.ButtonSet.OK_CANCEL)

  if (result === ui.Button.OK) {
    var userMessage = removeApiKey_()
    ui.alert(userMessage)
    loadFullMenu_()
  }
}
