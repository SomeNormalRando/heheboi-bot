"use strict";
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("serverinfo")
		.setDescription("Get server info"),
	execute(interaction) {
		interaction.reply("WIP");
	}
};
