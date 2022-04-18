
// this code is some black magic spaghetti i don't wanna touch it

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

  name: "stopwatch",
  data: new SlashCommandBuilder()
    .setName("stopwatch")
    .setDescription("set a timer for x amount of time")
    .addIntegerOption(option =>
      option.setName("time")
        .setDescription("how long should the timer work for")
        .setRequired(true)
        .setMinValue(0)
        .setMaxValue(100000000)),
  run: async (client, interaction, args, options) =>{
    
    // bot-wide variables or whatever

    const Discord = require('discord.js');

    //command-specific variables or whatever

    const config = require('../../../../../configs/plugbot/plugins/OPBCP/misc/stopwatch.json')

    // your code 

    const input = args[0].value;
        var remainingTime = input,
          remainingCount = 1,
          status = "⏱️";
        var countdown = await interaction.editReply({ embeds:
          [new Discord.MessageEmbed()
            .addField(
              `${config.embedTitle}`,
              `**${config.embedDesc1}${remainingTime}${"s"}** ${status}`
            )
            .setColor(config.embedColor)]
          }
        );
        let clock = setInterval(() => {
          remainingTime--;
          interaction.editReply({embeds: [
            new Discord.MessageEmbed()
              .addField(
                config.embedTitle2,
                `**${remainingTime}${"s"}** ${config.embedDesc2} ${status}`
              )
              .setColor(config.embedColor)
              ]
            }
          );
          if (remainingTime == 0) {
            status = "⏱️";
            clearInterval(clock);
            interaction.editReply({ embeds:
              [new Discord.MessageEmbed()
                .addField(
                  config.embedTitle3,
                  `**${config.embedDesc3}${input}${"s"}** ${status}`
                )
                .setColor(config.embedColor)]
              }
            );
          }
        }, 1000);
  }
}