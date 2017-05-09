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
  console.log(`ERROR: Encountered issue while loading config:\n${err}`)
}

try {
  bot.connect({ token: Config.token })
} catch (err) {
  console.log(`ERROR: Encountered issue while logging in, invalid credentials?\n${err}`)
  process.exit() // Avoid API spam
}

bot.Dispatcher.on('GATEWAY_READY', _ => {
  console.log('INFO: Successfully connected!')
})

spotifyListener(bot)

bot.Dispatcher.on('MESSAGE_CREATE', m => {
  if (m.message.author.id !== bot.User.id) {
    // Omit
  } else {
    if (m.message.content === '>clearstatus') {
      bot.User.setStatus('online', null)
    }
    if (m.message.content === '>exit') {
      bot.User.setStatus('online', null)
      process.exit()
    }
  }
})
