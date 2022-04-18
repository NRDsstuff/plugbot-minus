module.exports = async (message, title, desc, color, plugin) =>{

    const Discord = require('discord.js')
    const NZTK = require('../NZTK')

    const qe = new Discord.MessageEmbed()
        .setTitle(title)
        .setDescription(desc)
        .setColor(color)

    message.reply({ embeds: [qe] })
    await NZTK.log(`replied with an embed to ${message.author}.`, plugin, "replyquickembed")
}