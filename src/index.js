"use strict";
// Import needed modules
const path = require("path");
const { readdirSync } = require("fs");
const { Client, Intents, Collection } = require("discord.js");
const { token } = require("../env.json");

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Command handler
client.commands = new Collection();
const commandsPath = path.join(__dirname, "commands");
const commandFiles = readdirSync(commandsPath).filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection with the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}

// Event handler (reads files in /src/events and registers them as Discord.js events)
const eventsPath = path.join(__dirname, "events");
const eventFiles = readdirSync(eventsPath).filter(file => file.endsWith(".js"));
for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once === true) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

// Login to Discord with your client's token
client.login(token);
