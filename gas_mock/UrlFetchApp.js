var request = require('sync-request');

var UrlFetchApp = function(response) {
  response_ = response;
  fetchapp = {};

  fetchapp.fetch = function(url, params) {
    var method = 'GET';
    if(params == null) params = {};
    if(params['method'] != null) {
      method = params['method'].toUpperCase();
    }
    var res;
    if(method == 'POST') {
      res = request(method, url, {json: JSON.parse(params['payload'])});
    } else {
      res = request(method, url);
    }

    response_.setContentText(res.body);
    response_.setResponseCode(res.statusCode);
    return response_;
  }

  return fetchapp;
}

function getMock(response) {
  return new UrlFetchApp(response);
}

module.exports = {getMock};
