import SpotifyWebHelper from 'spotify-web-helper'
import { log } from './log'
const s = new SpotifyWebHelper()

function spotifyListener (bot) {
  s.player.on('error', err => {
    if (err.message === 'Cannot read property \'name\' of undefined') {
      log.warn('Please start playing a song.')
    } else {
      log.error(`Encountered error with Spotify:\n` + err)
    }
    process.exit()
  })

  s.player.on('ready', _ => {
    s.player.on('track-will-change', track => {
      let trackInfo = `${track.artist_resource.name} - ${track.track_resource.name}`
      log.info(`Track changed, current track: ${trackInfo}`)
      bot.User.setStatus('online', { type: 0, name: `♫ ${trackInfo}` })
      // TODO: Make this emoji customizable in the config
    })
  })
}

export { spotifyListener }
