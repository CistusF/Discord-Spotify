'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bot = undefined;

var _discordie = require('discordie');

var _discordie2 = _interopRequireDefault(_discordie);

var _spotify = require('./engine/spotify');

var _log = require('./engine/log');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Config = require('./config.json'); /*
                                       Discord-Spotify
                                       Author: Linus Willner (LWTechGaming)
                                       License: GPL-3.0
                                       
                                       Copyright (c) 2017 Linus Willner.
                                       */

var bot = new _discordie2.default({ autoReconnect: true });

try {
  require('./config.json');
} catch (err) {
  if (err.message === 'Cannot find module \'config.json\'') {
    _log.log.error('Config file not found, please make one and restart. (See README.md for instructions)');
  } else {
    _log.log.error('Encountered error while loading config file:\n' + err);
  }
}

bot.connect({ token: Config.token });

bot.Dispatcher.on('REQUEST_AUTH_LOGIN_ERROR', function (_) {
  _log.log.error('Encountered error while logging in. Exiting...');
  process.exit();
});

bot.Dispatcher.on('GATEWAY_READY', function (_) {
  _log.log.info('Successfully connected!\nUser: ' + bot.User.username + '#' + bot.User.discriminator + '\nID: ' + bot.User.id);
});

(0, _spotify.spotifyListener)(bot);

bot.Dispatcher.on('MESSAGE_CREATE', function (m) {
  var msg = m.message;
  if (msg.author.id !== bot.User.id) {
    // Only respond to the client user
  } else {
    // Hardcoded
    if (msg.content === '>clearstatus') {
      msg.delete();
      bot.User.setStatus('online', { type: 0, name: null });
      _log.log.info('Cleared status by command.');
    } else if (msg.content === '>exit') {
      msg.delete();
      bot.User.setStatus('online', { type: 0, name: null });
      _log.log.info('Status cleared. Exiting...');
      process.exit();
    }
  }
});

exports.bot = bot;