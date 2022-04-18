module.exports = {

    name: "serverinfo",
    run: (msg, args, client) =>{

        const Discord = require('discord.js')
        const config = require('../../../../../../configs/plugbot/plugins/OPBCP/misc/serverinfo.json')
        const PBTKc = require('../../../../../PBTK')
        const PBTK = new PBTKc("OPBCP", client)

        if(!msg.guild) return;

        let server = {

            logo: msg.guild.iconURL(),
            name: msg.guild.name,
            createdAt: msg.guild.createdAt,
            id: msg.guild.id,
            serverowner: `<@${msg.guild.ownerId}>`,
            region: msg.guild.preferredLocale,
            verified: msg.guild.verified,
            members: msg.guild.memberCount
        };

        let embed = new Discord.MessageEmbed()
        .setTitle(config.embedTitle)
        .setColor(config.embedColor)
        .setThumbnail(server.logo)
        .addField(config.name, `${server.name}`, false)
        .addField(config.ID, `${server.id}`, false)
        .addField(config.owner, `${server.serverowner}`, false)
        .addField(config.region, `${server.region}`, false)
        .addField(config.verified, `${server.verified}`, false)
        .addField(config.users, `${server.members}`, false)
        .addField(config.createdAt, `${server.createdAt}`, false)
        .setTimestamp();

        PBTK.reply(client, msg, { embeds: [embed] })
    }
}