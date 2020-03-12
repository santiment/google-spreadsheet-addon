/* eslint-disable prefer-rest-params*/

const NO_DATA_MSG = 'No data'

const INTERNAL_SERVER_ERROR_MSG = 'Internal server error!'

const SERVER_ERROR_MSG = 'Server error!'

function NoDataError_ () {
  this.name = 'NoDataError'
  this.message = NO_DATA_MSG
}

function InternalServerError_ () {
  this.name = 'InternalServerError'
  this.message = INTERNAL_SERVER_ERROR_MSG
}

function ServerError_ (message) {
  this.name = 'ServerError'
  if (message != null) {
    this.message = `${SERVER_ERROR_MSG} ${message}`
  } else {
    this.message = SERVER_ERROR_MSG
  }
}

function UnsupportedError_ (message) {
  this.name = 'UnsupportedError'
  this.message = message
}

NoDataError_.prototype = Object.create(Error.prototype)
NoDataError_.prototype.constructor = NoDataError_

InternalServerError_.prototype = Object.create(Error.prototype)
InternalServerError_.prototype.constructor = InternalServerError_

ServerError_.prototype = Object.create(Error.prototype)
ServerError_.prototype.constructor = ServerError_

UnsupportedError_.prototype = Object.create(Error.prototype)
UnsupportedError_.prototype.constructor = UnsupportedError_

function handleErrors_ (func) {
  return function () {
    try {
      return func.apply(this, arguments)
    } catch (e) {
      return [e.message]
    }
  }
}
