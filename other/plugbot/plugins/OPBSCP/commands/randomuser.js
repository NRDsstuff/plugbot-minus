const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {

    name: "randomuser",
    data: new SlashCommandBuilder()
        .setName("randomuser")
        .setDescription("ping a random user"),
    run: (client, interaction, args, options) =>{

        const Discord = require('discord.js')
        const config = require('../../../../../configs/plugbot/plugins/OPBSCP/misc/randomuser.json');
        const PBTKc = require('../../../../PBTK')
        const PBTK = new PBTKc("OPBSCP", client)  
        
        let member = interaction.guild.members.cache.random();

        interaction.editReply(`${member}`)
    }
}