/*
Discord-Spotify
Author: Linus Willner (LWTechGaming)
License: GPL-3.0

Copyright (c) 2017 Linus Willner.
*/

import Discordie from 'discordie'
import { spotifyListener } from './engine/spotify'
import { log } from './engine/log'

const Config = require('./config.json')
const bot = new Discordie({ autoReconnect: true })

try {
  require('./config.json')
} catch (err) {
  if (err.message === `Cannot find module 'config.json'`) {
    log.error('Config file not found, please make one and restart. (See README.md for instructions)')
  } else {
    log.error(`Encountered error while loading config file:\n` + err)
  }
}

bot.connect({ token: Config.token })

bot.Dispatcher.on('REQUEST_AUTH_LOGIN_ERROR', _ => {
  log.error('Encountered error while logging in. Exiting...')
  process.exit()
})

bot.Dispatcher.on('GATEWAY_READY', _ => {
  log.info(`Successfully connected!\nUser: ${bot.User.username}#${bot.User.discriminator}\nID: ${bot.User.id}`)
})

spotifyListener(bot)

bot.Dispatcher.on('MESSAGE_CREATE', m => {
  let msg = m.message
  if (msg.author.id !== bot.User.id) {
    // Only respond to the client user
  } else {
    // Hardcoded
    if (msg.content === '>clearstatus') {
      msg.delete()
      bot.User.setStatus('online', { type: 0, name: null })
      log.info('Cleared status by command.')
    } else if (msg.content === '>exit') {
      msg.delete()
      bot.User.setStatus('online', { type: 0, name: null })
      log.info('Status cleared. Exiting...')
      process.exit()
    }
  }
})

export { bot }
