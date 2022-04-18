const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

    name: "uptime",
    data: new SlashCommandBuilder()
      .setName("uptime")
      .setDescription("see how long this bot ran without a restart"),
    run: (bot, interaction, args, options) =>{

        // bot-wide variables or whatever

        const Discord = require('discord.js');

        // command-specific variables or whatever

        const config = require('../../../../../configs/plugbot/plugins/OPBCP/misc/uptime.json')

        // your code       

        let days = Math.floor(bot.uptime / 86400000);
        let hours = Math.floor(bot.uptime / 3600000) % 24;
        let minutes = Math.floor(bot.uptime / 60000) % 60;
        let seconds = Math.floor(bot.uptime / 1000) % 60;
      
        let uptime = new Discord.MessageEmbed()
          .setColor(config.embedColor)
          .setDescription(config.embedTitle)
          .addFields(
            { name: `${config.daysEmbed}`, value: `${days}` },
            { name: `${config.hoursEmbed}`, value: `${hours}` },
            { name: `${config.minutesEmbed}`, value: `${minutes}` },
            { name: `${config.secondsEmbed}`, value: `${seconds}` }
          )

        interaction.editReply({ embeds: [uptime] });
    }
}