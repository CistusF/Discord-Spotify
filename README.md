# Discord-Spotify

Simple Node.js bot for getting your current playing song in Spotify and mirroring it to your Discord status.

## How it works

The bot is mainly intended for use on your own user account as it features no commands. When started, the bot will log the current playing track in the background.

It will set your Discord status to the current track with the format `♫ ${artistName} - ${trackName}`. When the track ends and changes, the bot will automatically update your playing status and leave a note in the console without any user input. Fire and forget, right?

## Install

Clone the repository into a folder of your choice. `npm install` will install local dependencies. If you want to use legacy Node, you don't need to do anything further for the installation part.

In case you want to, dependencies needed as global can be installed by running the global install script for your OS from the `scripts` folder. You can run the bot without these, however having them global especially if you want to contribute is a good idea.

## Configuration
Open `config.example.json` and replace the placeholder in the `token` field with your user account token (Or bot token, if you're doing this with some special purpose). Save the file as `config.json`. The token in either case is sensitive and should hence not be exposed in any way.

### User Account
If you want to use your own user account, you need to have 2-factor authentication enabled on your account. Then use the Electron inspector inside the Discord client to find the token from the local storage. The reason I'm being vague here is that if you know how to do what I just described, you understand the risks of it as well.

### Bot Account

If you want to use a bot account, create a bot account in the Discord Developers panel and get the token from there. If you don't know how to do that, check this guide: [http://discordguide.us/#/development/bot-accounts](http://discordguide.us/#/development/embot-accountsem)

## Running

**Make sure Spotify is open and logged in before starting!**

Open a command window in the bot's folder and run `npm start`. This will start the bot with regular Node.js. If you have installed the global deps, you can use `npm run start-es6`.

**NOTE**: `npm run start-dev` is not intended for you, the end user. Unless you know what this does, don't use it.

## Support & chattery

For any issues or suggestions, I'd prefer if you used [Issues](https://github.com/LWTechGaming/Discord-Spotify/issues) in this repo. If you want to contribute, feel free to fork and make a PR! If you have other questions, comments, issues or just want to talk to me, feel free to join my Discord. Click the banner below to get started.

<p align="center">
  <a href="https://discord.gg/NaN39J8"><img src="https://discordapp.com/api/guilds/293097624246943744/widget.png?style=banner2" alt="Discord server"></a>
</p>

---

"Discord", "Discord App", and any associated logos are registered trademarks of Hammer & Chisel, inc.
