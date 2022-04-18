module.exports = {

    name: "randomuser",
    run: (msg, args, client) =>{

        const Discord = require('discord.js')
        const config = require('../../../../../../configs/plugbot/plugins/OPBCP/misc/randomuser.json');
        const PBTKc = require('../../../../../PBTK')
        const PBTK = new PBTKc("OPBCP", client)  
        
        let member = msg.guild.members.cache.random();

        PBTK.replyQuickEmbed(msg, config.embedTitle, `${member}`, config.embedColor)
    }
}