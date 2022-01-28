module.exports = {

    name: "unlock",
    run: (message) =>{

        const config = require('../../../../../../configs/plugbot/plugins/OPBCP/mod/unlock.json')
        const Discord = require('discord.js')
        const { Permissions } = require('discord.js')

        if (!message.member.permissions.has([Permissions.FLAGS.MANAGE_GUILD, Permissions.FLAGS.MANAGE_CHANNELS])) {
            return keineRechteEmbed(message);
            }
            message.channel.permissionOverwrites.edit(message.guild.roles.everyone, { SEND_MESSAGES: true });
            const unlockedChannelEmbed = new Discord.MessageEmbed()
            .setTitle(config.embedTitle)
            .setDescription(config.embedDescription)
            .setColor(config.embedColor)
            message.channel.send({ embeds: [unlockedChannelEmbed] });
            message.delete();
    
    }
}