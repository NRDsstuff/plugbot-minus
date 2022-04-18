
// this code is some black magic spaghetti i don't wanna touch it

module.exports = {

  name: "stopwatch",
  run: async (message, args) =>{
    
    // bot-wide variables or whatever

    const Discord = require('discord.js');

    //command-specific variables or whatever

    const config = require('../../../../../../configs/plugbot/plugins/OPBCP/misc/stopwatch.json')

    // your code 
    
    if(args[0] <= 0 || isNaN(args[0])) return

    const input = args[0];
        const input2 = args[1];
        const reply =
          1500 ||
          input2

            // NOOOOOOO YOU CAN'T JUST SLAP POLISH IN HERE

            // HAHA POLISH GO BRRRRRR
            
            .replace(`s` || `second`|| `detik` || `sekund`, 1500)
            .replace(`m` || `minute`|| `menit` || `minut`, 50000)
            .replace(`h` || `hour`|| `jam` || `godzin`, 3500000)
            .replace(`d` || `day`|| `hari` || `dni`, 86300000);
        const Ss = reply;
        var remainingTime = input,
          remainingCount = 1,
          status = "⏱️";
        var countdown = await message.channel.send({ embeds:
          [new Discord.MessageEmbed()
            .addField(
              `${config.embedTitle}`,
              `**${config.embedDesc1}${remainingTime}${input2 || "s"}** ${status}`
            )
            .setColor(config.embedColor)]
          }
        );
        let clock = setInterval(() => {
          remainingTime--;
          countdown.edit({embeds: [
            new Discord.MessageEmbed()
              .addField(
                config.embedTitle2,
                `**${remainingTime}${input2 || "s"}** ${config.embedDesc2} ${status}`
              )
              .setColor(config.embedColor)
              ]
            }
          );
          if (remainingTime == 0) {
            status = "⏱️";
            clearInterval(clock);
            message.channel.send({ embeds:
              [new Discord.MessageEmbed()
                .addField(
                  config.embedTitle3,
                  `**${config.embedDesc3}${input}${input2 || "s"}** ${status}`
                )
                .setColor(config.embedColor)]
              }
            );
          }
        }, Ss);
  }
}