const { SlashCommandBuilder, EmbedBuilder  } = require('discord.js');
const pckg = require('../../package.json') 
// Docs for Embeds: https://discordjs.guide/popular-topics/embeds.html#using-the-embed-constructor
module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Provides information about the bot.'),
	async execute(interaction) {
        const embed = new EmbedBuilder()
        .setColor(3447003)
        .setTitle('Bot Info')
        .setDescription(pckg.description || 'Beep Bo0P')
        .addFields(
            { name: 'Manufacturer', value: pckg.author || 'not found', inline: true },
            { name: 'Version', value: pckg.version || 'not found', inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: 'Made in', value: 'USA with :heart: and :coffee:'}
        )
        
        
		await interaction.reply({ embeds: [ embed ] });
	},
};