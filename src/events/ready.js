import { Events } from 'discord.js'
import Logger from '../utils/logger'

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		Logger.info(`Ready! Logged in as ${client.user.tag}`);
	},
};