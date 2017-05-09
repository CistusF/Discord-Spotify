'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bot = undefined;

var _discordie = require('discordie');

var _discordie2 = _interopRequireDefault(_discordie);

var _spotify = require('./engine/spotify');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bot = new _discordie2.default({ autoReconnect: true }); /*
                                                            Discord-Spotify
                                                            Author: Linus Willner (LWTechGaming)
                                                            License: GPL-3.0
                                                            
                                                            Copyright (c) 2017 Linus Willner.
                                                            */

exports.bot = bot;


var Config = require('./config.json');


try {
  require('./config.json');
} catch (err) {
  console.log('ERROR: Encountered issue while loading config:\n' + err);
}

try {
  bot.connect({ token: Config.token });
} catch (err) {
  console.log('ERROR: Encountered issue while logging in, invalid credentials?\n' + err);
  process.exit(); // Avoid API spam
}

bot.Dispatcher.on('GATEWAY_READY', function (_) {
  console.log('INFO: Successfully connected!');
});

(0, _spotify.spotifyListener)(bot);

bot.Dispatcher.on('MESSAGE_CREATE', function (m) {
  if (m.message.author.id !== bot.User.id) {
    // Omit
  } else {
    if (m.message.content === '>clearstatus') {
      bot.User.setStatus('online', null);
      m.message.delete();
    }
    if (m.message.content === '>exit') {
      bot.User.setStatus('online', null);
      m.message.delete();
      process.exit();
    }
  }
});
