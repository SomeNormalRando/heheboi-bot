"use strict";
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("Tests if the bot is online"),
	execute(interaction) {
		interaction.reply("Pong! Bot is online.");
	}
};
