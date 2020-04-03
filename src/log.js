// Console logs to Stackdriver
// https://developers.google.com/apps-script/reference/base/console

/* eslint-disable no-console */

const errorsWithWarnLevel = ['HistoricDataForbiddenError']

function logWarning_ (message) {
  console.warn(message)
}

function logInfo_ (message) {
  console.info(message)
}

function logError_ (message) {
  if (errorsWithWarnLevel.indexOf(message.name) > -1) {
    logWarning_(message)
  } else {
    console.error(message)
  }
}
