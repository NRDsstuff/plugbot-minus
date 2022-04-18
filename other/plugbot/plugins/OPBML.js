
module.exports = {

    name: "Official PluginBot Message Logging",
    run: (client) =>{

        const NZTK = require('../../NZTK')
        
        client.on('messageCreate', msg =>{
            
            NZTK.log(`${msg.author.username}#${msg.author.discriminator} (${msg.author}) said ${msg.content} in ${msg.channel.name} (${msg.channel}) which is in ${msg.guild.name} (${msg.guild.id})`)
        })    
    }
}