# Discord-Spotify

Simple Node.js bot for getting your current playing song in Spotify and mirroring it to your Discord status.

## How it works

The bot is mainly intended for use on your own user account. When started, the bot will log the current playing track in the background.

It will set your Discord status to the current track with the format `♫ ${artistName} - ${trackName}`. When the track ends and changes, the bot will automatically update your playing status without any user input. Fire and forget, right?

Due to how Discord functions, the status updates will not show in your client. You should rely on this working, if in doubt, ask a friend as they'll see it.

## Example

Outlook in the members sidebar:

![DiscordSidebar](http://images.lwtechgaming.me/f6q97ph.png)

And in your public profile:

![DiscordProfile](http://images.lwtechgaming.me/AQqft63.png)

## Commands

These commands cannot be executed by anyone else than the user on whose account the bot runs on.

| Name | Description |
| ---- | ----------- |
| clearstatus | Debug tool to wipe your status if it is stuck. |
| exit | Gracefully terminate the process and wipe the status on exit. |

## Install

Before you begin, install Node.js LTS or current from https://nodejs.org/en/download/.

Clone this repository into a folder of your choice. Run `npm install` to install required dependencies. If you encounter warns during installation of dependencies, you can safely ignore them.

## Configuration
Open `config.example.json` and replace the placeholder in the `token` field with your user account token (Or bot token, if you're doing this with some special purpose). Save the file as `config.json`. The token in either case is sensitive information and should hence not be exposed in any way.

When you've saved the file, copy it into the `dist` folder as the bot will run from there.

### User Account

If you want to use your own user account, you need to have 2-factor authentication enabled on your account. Then use the Electron inspector inside the Discord client to find the token from the local storage.

Note: This is purposefully vague, since if you know how to get the token, I assume you understand the risks as well.

### Bot Account

If you want to use a bot account, create a bot account in the Discord Developers panel and get the token from there. If you don't know how to do that, check this guide: [http://discordguide.us/#/development/bot-accounts](http://discordguide.us/#/development/embot-accountsem)

## Running

**Make sure Spotify is open and you are logged in to an account before starting!**

Open a command window in the bot's folder and run `npm start`. Or, if you're feeling lazy, run `start.bat`.

When you want to exit, it's advised to type `>exit` in any channel where it is discreet to do so. This will make the bot clear your status before exiting and avoid you having the same status message stuck.

**Note**: You shouldn't run other NPM scripts than those instructed here, they're most likely for development use only.

## Support & chattery

For any issues or suggestions, I'd prefer if you used [Issues](https://github.com/LWTechGaming/Discord-Spotify/issues) in this repo. If you want to contribute, feel free to fork and make a PR! If you have other questions, comments, issues or just want to talk to me, feel free to join my Discord. Click the banner below to get started.

<p align="center">
  <a href="https://discord.gg/NaN39J8"><img src="https://discordapp.com/api/guilds/293097624246943744/widget.png?style=banner2" alt="Discord server"></a>
</p>

---

"Discord", "Discord App", and any associated logos are registered trademarks of Hammer & Chisel, inc.
