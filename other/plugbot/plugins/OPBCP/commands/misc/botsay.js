module.exports = {

    name: "botsay",
    run: (msg, args, client) =>{

        const { Permissions } = require('discord.js')

        const mainConfig = require('../../../../../../configs/plugbot/mainConf.json')
        const PBTKc = require('../../../../../PBTK')
        const PBTK = new PBTKc("OPBCP", client)

        // delete the message

        PBTK.delete(msg)
        
        // execute the command

        if(msg.author.bot) return

        if(!msg.member.permissions.has(Permissions.FLAGS.MENTION_EVERYONE)){
            
            if(!msg.content.includes('@everyone')){

                if(!msg.content.includes('@here')){

                    PBTK.repeatAfterUser(msg, mainConfig.plugins.prefix, "botsay")
                }
            }
        }else{

            PBTK.repeatAfterUser(msg, mainConfig.plugins.prefix, "botsay")
        }
    }
}