// This is the root runtime File
require("@babel/register")({
    presets: ["@babel/preset-env"]
});

// Import Compontents
import Discord from 'discord.js'
import config from '../config.json'

import Logger from './logger'
import Router from './router'

class Run {
    constructor() {
        this.logger = Logger
        try {
            // TODO: Create a better way to make the context global accross all files
            this.client = new Discord.Client()
            this.welcome_channel = 'Welcome'
            this.getUserData = this._getUserData.bind(this)
            this.messageFormatter = this._messageFormatter.bind(this)
            this._install = this._install.bind(this)
            this._install()
        } catch (e) {
            Logger.error(e)
        }
    }
    async _messageFormatter (message) {
        // Segment commands by the prefix
        const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
        const command = args.shift().toLowerCase()
        return {
            user: await this.getUserData(message),
            args: args,
            command: command,
            message: message,
            client: this.client
        }
    }
    async _getUserData (message) {
        let userstring = message.member.toString()
        let firstreplace = userstring.replace(/<@/g, '')
        let finalreplace = firstreplace.toString().replace(/>/g, '')
        return await this.client.fetchUser(finalreplace)
    }
    async _install () {
        this.client.on('ready', async () => {
            this.logger.info(`Logged in as: ${this.client.user.tag}`)
        })

        // Message Listener
        this.client.on('message', async message => {
            // Ignore other bots
            if(message.author.bot) return
            
            // Ignore non prefixed messages
            if(message.content.indexOf(config.prefix) !== 0) return

            // Format the message
            let payload = await this.messageFormatter(message)
            new Router(payload)
            
            // Welcome Message on new server member.
            this.client.on('guildMemberAdd', member => {
                let msg = {
                    embed: {
                        color: 3447003,
                        description: `"Welcome! Please read through our rules. If you need any help use !help"`
                    }
                }
                member.guild.channels.get(this.welcome_channel).send(msg)
            });
        })
        this.client.login(process.env.TOKEN)      
        this.logger.info('Bot Installed!');
    }
}

new Run()