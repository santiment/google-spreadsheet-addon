// Console logs to Stackdriver
// https://developers.google.com/apps-script/reference/base/console

/* eslint-disable no-console */

const errorsWithWarnLevel = ['HistoricDataForbiddenError']

function logWarning_ (message) {
  console.warn(JSON.stringify(message))
}

function logInfo_ (message) {
  console.info(JSON.stringify(message))
}

function logError_ (message) {
  if (errorsWithWarnLevel.indexOf(message.name) > -1) {
    logWarning_(JSON.stringify(message))
  } else {
    console.error(JSON.stringify(message))
  }
}
