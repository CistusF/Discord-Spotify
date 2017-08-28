'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.log = undefined;

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = new _winston2.default.Logger({
  transports: [new _winston2.default.transports.Console({
    colorize: true,
    timestamp: true,
    level: 'verbose',
    humanReadableUnhandledException: true,
    json: false
  })],
  exitOnError: true
});

exports.log = log;