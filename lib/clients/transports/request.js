/**
 * Simple transport using the node request library.
 */


var has = require('lodash').has;
var partial = require('lodash').partial;
var request = require('request');


var handleRequestTranportRes = function handleRequestTranportRes(cb, err, response, body) {
  var headers;
  var statusCode;

  if (err) {
    headers = response ? response.headers || {} : {};
    statusCode = response ? response.statusCode || null : null;
    cb(err, headers, statusCode, body);
  } else {
    cb(err, response.headers, response.statusCode, body);
  }
};


var getRequestTransportArgs = function getReqestTransportArgs(args) {
  var transportArgs = {
    url: args.url,
    headers: args.headers
  };

  if (has(args.data, 'file')) {
    transportArgs.formData = args.data;
  } else {
    transportArgs.form = args.data;
  }
  return transportArgs;
};


var requestTransport = function requestTransport(args, cb) {
  var requestArgs = getRequestTransportArgs(args);

  request.post(requestArgs, partial(handleRequestTranportRes, cb));
};


module.exports.requestTransport = requestTransport;
