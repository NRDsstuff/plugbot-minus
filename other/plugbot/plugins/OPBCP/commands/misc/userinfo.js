module.exports = {

    name: "userinfo",
    run: (msg, args, client) =>{

      // bot-wide variables or whatever

      const Discord = require('discord.js');

      // command-specific variables or whatever

      const config = require('../../../../../../configs/plugbot/plugins/OPBCP/misc/userinfo.json')

      // your code

      let user = msg.mentions.users.first() || msg.author
    
      let userinfo = {
        avatar: user.avatarURL,
        name: user.username,
        discrim: `#${user.discriminator}`,
        id: user.id,
        bot: user.bot,
        userCreatedAt: user.createdAt,
      }
    
      let embed = new Discord.MessageEmbed()
      .setTitle(config.embedTitle)
      .setColor(config.embedColor)
      .setThumbnail(userinfo.avatar)
      .addField(`${config.embedUsername}`, `${userinfo.name}`, true)
      .addField(`${config.embedTag}`, `${userinfo.discrim}`, true)
      .addField(`${config.embedID}`, `${userinfo.id}`, true)
      .addField(`${config.embedBot}`, `${userinfo.bot}`, true)
      .addField(`${config.embedCreatedAt}`, `${userinfo.userCreatedAt}`, true)
    
      msg.channel.send({ embeds: [embed] });
    }
}