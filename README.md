# heheboi bot
## Terminal scripts
Execute these in a terminal
(like cmd and powershell,
obviously you need npm and node.js installed)
#### Start bot
`npm start`
- Starts the bot
- Requires a valid bot token in the file `env.json` (in the key `token`)
#### Deploy slash commands
`npm run deploy`
- Registers guild slash commands to the Discord API
- Only registers the commands to the guild ID specified in the file `env.json` (in the key `guildID`)

## Slash commands
To add a new command, create a new JavaScript file (.js extension) in the `commands` folder, following this format:

```js
"use strict";
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ping") // command name
		.setDescription("Tests if the bot is online"), // command description

	// THIS FUNCTION RUNS WHEN A USER USES THE SLASH COMMAND
	execute(interaction) {
		interaction.reply("Pong! Bot is online.");
	}
};

```

## env.json
This file contains environment variables (basically passwords), so it's not uploaded to here

When running the bot, you have to create the file yourself, following the below format

```json
{
	"token": "bot token goes here",
	"guildID": "id of the guild to register slash commands to",
	"clientID": "client id of your bot (not bot user id)"
}
```

## Remember
If you don't understand stuff, google