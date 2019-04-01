var NO_DATA_MSG = 'No data'

var HISTORIC_DATA_FORBIDDEN_MSG =
  'Full historical data is only accessible to premium users. ' +
  'Add your API key to use it.'

function NoDataError_ () {
  this.name = 'NoDataError'
  this.message = NO_DATA_MSG
}

function HistoricDataForbiddenError_ () {
  this.name = 'HistoricDataForbiddenError'
  this.message = HISTORIC_DATA_FORBIDDEN_MSG
}

NoDataError_.prototype = Object.create(Error.prototype)
NoDataError_.prototype.constructor = NoDataError_

HistoricDataForbiddenError_.prototype = Object.create(Error.prototype)
HistoricDataForbiddenError_.prototype.constructor = HistoricDataForbiddenError_

function handleErrors_ (func) {
  return function () {
    try {
      return func.apply(this, arguments)
    } catch (e) {
      if (e instanceof NoDataError_) {
        return [NO_DATA_MSG]
      } else if (e instanceof HistoricDataForbiddenError_) {
        return [HISTORIC_DATA_FORBIDDEN_MSG]
      }

      throw e
    }
  }
}
