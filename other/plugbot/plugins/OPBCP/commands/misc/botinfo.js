module.exports = {
    
    name: "botinfo",
    run: (msg) =>{

        //bot-wide variables or whatever

        const Discord = require('discord.js');

        // functions

        const PBTKc = require('../../../../../PBTK')
        const PBTK = new PBTKc("OPBCP", "/:")

        //command-specific variables or whatever

        const config = ('../../../../configs/OPBCP/misc/botinfo.json')

        //command itself

        PBTK.replyQuickEmbed(msg, 'who am i?', 'a bot made to make making bots easier \n (by smorter#6942)', config.embedColor)
    }
}