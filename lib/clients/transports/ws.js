/**
 * Helper to make a new ws WebSocket instance.
 */
 
var WebSocket = require('ws');


/**
 *
 * @param {String} socketUrl
 * @param {Object=} opts
 * @param {String} opts.proxyURL
 * @returns {*}
 */
var wsTransport = function wsTransport(socketUrl, opts) {
  var wsTransportOpts = opts || {};
  var wsOpts = {};

  return new WebSocket(socketUrl, wsOpts);
};

module.exports = wsTransport;
