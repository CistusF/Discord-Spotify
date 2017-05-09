import { bot } from '../bot.js'

const SpotifyWebHelper = require('spotify-web-helper')
const s = new SpotifyWebHelper()

function spotifyListener () {
  s.player.on('error', err => {
    console.log(`Encountered error with Spotify:\n${err}`)
    process.exit()
  })

  s.player.on('ready', _ => {
    s.player.on('track-will-change', track => {
      let trackInfo = `♫ ${track.artist_resource.name} - ${track.track_resource.name}`
      console.log(`Track changed, current track: ${trackInfo}`)
      bot.User.setStatus('online', trackInfo)
    })
  })
}

export { spotifyListener }
