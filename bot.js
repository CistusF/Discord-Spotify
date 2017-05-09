/*
Discord-Spotify
Author: Linus Willner (LWTechGaming)
License: GPL-3.0

Copyright (c) 2017 Linus Willner.
*/

import Discordie from 'discordie'
const bot = new Discordie({ autoReconnect: true })
export { bot }

const Config = require('./config.json')
import { spotifyListener } from './engine/spotify'

try {
  require('./config.json')
} catch (err) {
  console.log(`Encountered issue while loading config:\n${err}`)
}

try {
  bot.connect({ token: Config.token })
} catch (err) {
  console.log(`Encountered issue while logging in, invalid credentials?\n${err}`)
  process.exit() // Avoid API spam
}

bot.Dispatcher.on('GATEWAY_READY', _ => {
  console.log('Successfully connected!')
})

spotifyListener()
