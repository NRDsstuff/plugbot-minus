const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {

    name: "botstats",
    data: new SlashCommandBuilder()
        .setName("botstats")
        .setDescription("statistics abt the bot"),
    run: (bot, interaction, args, options) =>{

        const Discord = require('discord.js')
        const config = require('../../../../../configs/plugbot/plugins/OPBSCP/misc/botstats.json');
        const PBTKc = require('../../../../PBTK')
        const PBTK = new PBTKc("OPBSCP", bot)

        let embed = new Discord.MessageEmbed()
        .setTitle(config.embedTitle)
        .setColor(config.embedColor)
        .addField(config.ping, `<@${bot.user.id}>`, true)
        .addField(config.servers, `${bot.guilds.cache.size}`, true)
        .addField(config.users, `${bot.users.cache.size}`, true)
        .setTimestamp()

        interaction.editReply({ embeds: [ embed ] })
    }
}