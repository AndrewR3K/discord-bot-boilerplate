const pckg = require('../../package.json') 
module.exports = {
    helloWorld: function (payload) {
        payload.message.channel.send(`hello ${payload.user}!`)
    },
    pingMe: async function (payload) {
      const m = await payload.message.channel.send("\`\`\`Pinging...\`\`\`")
      m.edit(`\`\`\`My Latency is ${m.createdTimestamp - payload.message.createdTimestamp}ms. Latency is ${Math.round(payload.client.ping)}ms\`\`\``)
    },
    botInfo: function (payload) {
      let v = pckg.version || '0.1.0'
      let auth = pckg.author || ''
      let description = pckg.description || 'Beep Bo0P'
      let msg = {embed: {
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
      payload.message.channel.send(msg)
    },
};