module.exports = {

    name: "vote",
    run: (msg, args, client, NZTK, user) =>{

      //bot-wide variables or whatever

      const Discord = require('discord.js');
      const PBTKc = require('../../../../../PBTK')
      const PBTK = new PBTKc("OPBCP", client, user)

      //command-specific variables or whatever

      const config = require('../../../../../../configs/plugbot/plugins/OPBCP/misc/vote.json')

      // your code
          
        if(!args[0]) return PBTK.reply(msg, config.noText)
        
        let embed = new Discord.MessageEmbed()
        .setTitle(msg.author.username + ` starts a vote`)
        .addField(args.join(" "), `${config.yesEmoji}${config.yes}${config.noEmoji}${config.no}`, true)
        .setColor(config.embedColor)
        .setTimestamp();
        
        msg.reply({ embeds: [embed] }).then(msg=>{

          msg.react(config.yesEmoji);
          msg.react(config.noEmoji);
        });
    }
}