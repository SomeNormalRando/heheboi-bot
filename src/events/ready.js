"use strict";
module.exports = {
	name: "ready",
	once: false,
	execute(client) {
		console.log(`Bot is ready, logged in as ${client.user.tag}`);
	}
};
