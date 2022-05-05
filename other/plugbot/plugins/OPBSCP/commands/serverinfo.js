const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {

    name: "serverinfo",
    data: new SlashCommandBuilder()
        .setName("serverinfo")
        .setDescription("info about this server"),
    run: (client, interaction, args, options, user, NZTK) =>{

        const Discord = require('discord.js')
        const config = require('../../../../../configs/plugbot/plugins/OPBCP/misc/serverinfo.json')
        const PBTKc = require('../../../../PBTK')
        const PBTK = new PBTKc("OPBCP", client, user)

        if(!interaction.guild) return;

        let server = {

            logo: interaction.guild.iconURL(),
            name: interaction.guild.name,
            createdAt: interaction.guild.createdAt,
            id: interaction.guild.id,
            serverowner: `<@${interaction.guild.ownerId}>`,
            region: interaction.guild.preferredLocale,
            verified: interaction.guild.verified,
            members: interaction.guild.memberCount
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

        interaction.editReply({ embeds: [ embed ] })
    }
}