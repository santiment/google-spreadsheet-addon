var iconv = require('iconv-lite');

var HTTPResponse = function(body) {
  var content_ = body;
  var response = {};
  var code_ = -1

  response.setContentText = function(content) {
    content_ = content;
  }
  
  response.getContentText = function(charset) {
    if(charset == null) charset = 'utf8';
    return iconv.decode(content_, charset);
  }

  response.setResponseCode = function(code) {
    code_ = code;
  }

  response.getResponseCode = function() {
    return code_;
  }

  return response;
}

function getMock(body) {
  return new HTTPResponse(body);
}

module.exports = {getMock};
