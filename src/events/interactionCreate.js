const { Events } = require('discord.js');
import Logger from '../utils/logger'

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			Logger.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

		try {
			await command.execute(interaction);
		} catch (error) {
			Logger.error(`Error executing ${interaction.commandName}`);
			Logger.error(error.message);
			console.log(error)
		}
	}
};