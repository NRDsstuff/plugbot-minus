module.exports = {

    name: "botstats",
    run: (msg, args, bot, NZTK, user) =>{

        const Discord = require('discord.js')
        const config = require('../../../../../../configs/plugbot/plugins/OPBCP/misc/botstats.json');
        const PBTKc = require('../../../../../PBTK')
        const PBTK = new PBTKc("OPBCP", bot, user)

        if(msg.author.bot) return;

        let embed = new Discord.MessageEmbed()
        .setTitle(config.embedTitle)
        .setColor(config.embedColor)
        .addField(config.ping, `<@${bot.user.id}>`, true)
        .addField(config.servers, `${bot.guilds.cache.size}`, true)
        .addField(config.users, `${bot.users.cache.size}`, true)
        .setTimestamp()

        PBTK.reply(msg, { embeds: [embed] })
    }
}