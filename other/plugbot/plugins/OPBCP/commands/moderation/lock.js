module.exports = {

    name: "lock",
    run: (message) =>{

        const Discord = require('discord.js')
        const config = require('../../../../../../configs/plugbot/plugins/OPBCP/mod/lock.json')
        const { Permissions } = require('discord.js')

        if (!message.member.permissions.has([Permissions.FLAGS.MANAGE_GUILD, Permissions.FLAGS.MANAGE_CHANNELS])) {
            return message.channel.send("incorrect permissions");
            }
            message.channel.permissionOverwrites.edit(message.guild.roles.everyone, { SEND_MESSAGES: false });
            const lockedChannelEmbed = new Discord.MessageEmbed()
            .setTitle(config.embedTitle)
            .setDescription(config.embedDescription)
            .setColor(config.embedColor)
            message.channel.send({ embeds: [lockedChannelEmbed] });
            message.delete();
    }
}