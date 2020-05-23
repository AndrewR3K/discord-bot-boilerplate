const pckg = require('../../package.json') 
module.exports = {
    helloWorld: function () {
      this.message.channel.send(`hello ${this.user}!`)
    },
    pingMe: async function () {
      const m = await this.message.channel.send("\`\`\`Pinging...\`\`\`")
      m.edit(`\`\`\`My Latency is ${m.createdTimestamp - this.message.createdTimestamp}ms. Latency is ${Math.round(this.client.ping)}ms\`\`\``)
    },
    botInfo: function () {
      let v = pckg.version || '0.1.0'
      let auth = pckg.author || ''
      let description = pckg.description || 'Beep Bo0P'
      let msg = { embed: {
          color: 3447003,
          title: `Made with <3 in CA, USA ${process.env.NODE_ENV === 'development' ? '<<<< DEVELOPMENT MODE ON 🤙 >>>>' : ''}`,
          description: ``,
          fields: [
            {
              name: "Version",
              value: `${v}`
            },
            {
              name: "Manufacturer",
              value: `${auth}`
            },
            {
              name: "Who am I?",
              value: `${description}`
            }
          ]
        }
      }
      this.message.channel.send(msg)
    },
};