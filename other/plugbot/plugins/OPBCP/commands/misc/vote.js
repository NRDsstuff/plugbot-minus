module.exports = {

    name: "vote",
    run: (msg, args, client) =>{

      //bot-wide variables or whatever

      const Discord = require('discord.js');

      //command-specific variables or whatever

      const config = require('../../../../../../configs/plugbot/plugins/OPBCP/misc/vote.json')

      //your code
 
        msg.delete();
          
        if(!args) return msg.channel.send(config.noText)
        
        let embed = new Discord.MessageEmbed()
        .setTitle(msg.author.username + ` starts a vote`)
        .addField(args.join(" "), `${config.yesEmoji}${config.yes}${config.noEmoji}${config.no}`, true)
        .setColor(config.embedColor)
        .setTimestamp();
        
        msg.channel.send({ embeds: [embed] }).then(msg=>{

          msg.react(config.yesEmoji);
          msg.react(config.noEmoji);
        });
    }
}