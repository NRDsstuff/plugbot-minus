
module.exports = {

    name: "Official PluginBot Message Logging",
    run: (client, args, line, user, PBCMD, PBPlugins, PBRL, programs) =>{

        const NZTKc = require('../../NZTK')
        const NZTK = new NZTKc("OPBML", user)

        client.on('messageCreate', msg =>{
            
            NZTK.log.normal(`${msg.author.username}#${msg.author.discriminator} (${msg.author}) said ${msg.content} in ${msg.channel.name} (${msg.channel}) which is in ${msg.guild.name} (${msg.guild.id})`, 1, "messages")
        })    
    }
}