function loadAddApiKeyMenu_ (ui, menu) {
  const apiKeySubMenu = ui.createMenu('API key').addItem('Add', 'addApiKeyDialog_')
  menu.addSubMenu(apiKeySubMenu).addToUi()
}

function loadManageExistingApiKeyMenu_ (ui, menu) {
  const apiKeySubMenu = ui
    .createMenu('API key')
    .addItem('View', 'viewApiKeyDialog_')
    .addItem('Validate', 'validateApiKeyDialog_')
    .addItem('Remove', 'removeApiKeyDialog_')

  menu.addSubMenu(apiKeySubMenu).addToUi()
}

function loadFullMenu_ () {
  const ui = SpreadsheetApp.getUi()
  const menu = ui.createAddonMenu()

  if (hasApiKeyProperty_()) {
    loadManageExistingApiKeyMenu_(ui, menu)
  } else {
    loadAddApiKeyMenu_(ui, menu)
  }
}

function loadBasicMenu_ () {
  SpreadsheetApp.getUi().createAddonMenu().addItem('Enable', 'enable_').addToUi()
}

function onOpen (e) {
  if (e && e.authMode === ScriptApp.AuthMode.NONE) {
    loadBasicMenu_()
  } else {
    loadFullMenu_()
  }
}

function onInstall (e) {
  onOpen(e)
}

function enable_ () {
  const title = 'SANsheets'
  const message =
    'This add-on gives you access to cryptocurrency data through constious custom functions.\
    Every function starts with =SAN.'
  const ui = SpreadsheetApp.getUi()
  ui.alert(title, message, ui.ButtonSet.OK)

  loadFullMenu_()
}

function addApiKeyDialog_ () {
  const ui = SpreadsheetApp.getUi()

  const title = 'Add an API key'
  const inputCaption = 'Please enter your API key:'

  const result = ui.prompt(title, inputCaption, ui.ButtonSet.OK_CANCEL)
  const button = result.getSelectedButton()
  const input = result.getResponseText().trim()

  if (button === ui.Button.OK) {
    const userPermissions = handleErrors_(fetchUserPermissions_)(input)
    const userMessage = addApiKey_(input, userPermissions)
    ui.alert(userMessage)
    loadFullMenu_()
  }
}

function viewApiKeyDialog_ () {
  const ui = SpreadsheetApp.getUi()
  const title = 'Your API key'
  const apiKey = apiKeyProperty_()
  const text = obfuscateApiKey_(apiKey)

  ui.alert(title, text, ui.ButtonSet.OK)
}

function validateApiKeyDialog_ () {
  const ui = SpreadsheetApp.getUi()
  const apiKey = apiKeyProperty_()
  const userPermissions = handleErrors_(fetchUserPermissions_)(apiKey)
  const userMessage = checkApiKeyStillValid_(apiKey, userPermissions)
  ui.alert(userMessage)
}

function removeApiKeyDialog_ () {
  const ui = SpreadsheetApp.getUi()
  const title = 'Remove API key'
  const text = 'Are you sure you want to remove the API key?'
  const result = ui.alert(title, text, ui.ButtonSet.OK_CANCEL)

  if (result === ui.Button.OK) {
    const userMessage = removeApiKey_()
    ui.alert(userMessage)
    loadFullMenu_()
  }
}
