const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription('Replies with a Hello!'),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		await interaction.reply({
			content: `Hello, ${interaction.user.username}!`,
			ephemeral: true, //This message will only show to the user who enacted the command
		});
	},
};