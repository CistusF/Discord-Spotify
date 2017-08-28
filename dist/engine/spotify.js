'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spotifyListener = undefined;

var _spotifyWebHelper = require('spotify-web-helper');

var _spotifyWebHelper2 = _interopRequireDefault(_spotifyWebHelper);

var _log = require('./log');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s = new _spotifyWebHelper2.default();

function spotifyListener(bot) {
  s.player.on('error', function (err) {
    if (err.message === 'Cannot read property \'name\' of undefined') {
      _log.log.warn('Please start playing a song.');
    } else {
      _log.log.error('Encountered error with Spotify:\n' + err);
    }
    process.exit();
  });

  s.player.on('ready', function (_) {
    s.player.on('track-will-change', function (track) {
      var trackInfo = track.artist_resource.name + ' - ' + track.track_resource.name;
      _log.log.info('Track changed, current track: ' + trackInfo);
      bot.User.setStatus('online', { type: 0, name: '\u266B ' + trackInfo });
      // TODO: Make this emoji customizable in the config
    });
  });
}

exports.spotifyListener = spotifyListener;