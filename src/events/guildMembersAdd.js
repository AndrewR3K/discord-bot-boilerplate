
const { EmbedBuilder  } = require('discord.js');


module.exports = {
    name: "guildMemberAdd",
    async execute(member) {
        
        const embed = new EmbedBuilder()
        .setColor(3447003)
        .setTitle(`Welcome <@${member.user.id}>!`)
        .setThumbnail(member.user.avatarURL())

        // Send the message to the default server channel (usually this is the welcome channel for most servers)
        member.guild.systemChannel.send({
            embeds: [embed]
        })
    },
  };