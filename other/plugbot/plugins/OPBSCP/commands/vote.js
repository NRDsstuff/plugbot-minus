const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

    name: "vote",
    data: new SlashCommandBuilder()
      .setName('vote')
      .setDescription('start a yes or no vote')
      .addStringOption(option =>
        option.setName("vote")
          .setDescription("what to start the vote for")
          .setRequired(true)),
    run: (client, interaction, args, options) =>{

      //bot-wide variables or whatever

      const Discord = require('discord.js');

      //command-specific variables or whatever

      const config = require('../../../../../configs/plugbot/plugins/OPBCP/misc/vote.json')

      //your code
        
        let embed = new Discord.MessageEmbed()
        .setTitle(interaction.user.username + ` starts a vote`)
        .setDescription(args[0].value)
        .setColor(config.embedColor)
        .setTimestamp();
        
        interaction.editReply({ embeds: [embed] }).then(msg=>{

          msg.react(config.yesEmoji);
          msg.react(config.noEmoji);
        });
    }
}