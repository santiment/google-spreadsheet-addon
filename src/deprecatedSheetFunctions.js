/* eslint-disable valid-jsdoc */

function useInstead_ (newFunctionName, oldFunctionName) {
  var message = 'Deprecated function ' + oldFunctionName + ' has been used.'
  logInfo_({type: 'Deprecated', message: message})
  return 'DEPRECATED: Use =' + newFunctionName + ' instead.'
}
