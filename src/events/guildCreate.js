
import fs from 'fs'

module.exports = {
    name: "guildCreate",
    async execute(guild) {
        // Log when a server adds this bot to their discord. This is nice so you can see who is using it xD
        fs.readFile('./src/data/serverlist.json', 'utf8', function(err, data){
            let temp = JSON.parse(data)
            temp.push({
                id: guild.id,
                name: guild.name,
                iconURL: guild.iconURL,
                ownerId: guild.ownerId
            })
            fs.writeFile('./src/data/serverlist.json', JSON.stringify(temp), function (err) {
                if (err) throw err;
                console.log('File is created successfully.');
            });
        });
    },
  };