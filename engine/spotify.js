const SpotifyWebHelper = require('spotify-web-helper')
const s = new SpotifyWebHelper()

function spotifyListener (bot) {
  s.player.on('error', err => {
    if (err === 'TypeError: Cannot read property \'name\' of undefined') {
      console.log('DEBUG: Please start playing a song.')
    }
    console.log(`ERROR: Encountered error with Spotify:\n${err}`)
    process.exit()
  })

  s.player.on('ready', _ => {
    s.player.on('track-will-change', track => {
      let trackInfo = `${track.artist_resource.name} - ${track.track_resource.name}`
      console.log(`INFO: Track changed, current track: ${trackInfo}`)
      bot.User.setStatus('online', `♫ ${trackInfo}`) // TODO: Make this emoji customizable in the config
    })
  })
}

exports.spotifyListener = spotifyListener
