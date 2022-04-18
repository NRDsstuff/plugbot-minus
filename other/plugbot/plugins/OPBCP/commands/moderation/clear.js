module.exports = {

    name: "clear",
    run: (message) =>{

        const NZTK = require('../../../../../NZTK')
        const config = require('../../../../../../configs/plugbot/plugins/OPBCP/mod/clear.json')
        const { Permissions } = require('discord.js')
        
        if(!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)){

            NZTK.log(`${message.author} tried to clear ${message.channel.name} with incorrect perms.`, "OPBCP", "clear")
            return message.channel.send(config.incorrectPerms)
        } 

        if(!message.channel.deletable){
            
            NZTK.log(`channel is undeletable.`, "OPBCP", "clear")
            return message.channel.send(config.unDeletable)
        }

        message.channel.clone()
        message.channel.delete()
        NZTK.log("channel cleared.", "OPBCP", "clear")
    }
}

