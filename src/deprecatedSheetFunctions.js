/* eslint-disable valid-jsdoc */

function useInstead_ (newFunctionName, oldFunctionName) {
  const message = `Deprecated function ${oldFunctionName} has been used.`
  logInfo_({ type: 'Deprecated', message })
  return `DEPRECATED: Use = ${newFunctionName} instead.`
}
