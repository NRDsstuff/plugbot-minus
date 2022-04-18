const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    
    name: "botinfo",
    data: new SlashCommandBuilder()
        .setName("botinfo")
        .setDescription("info about the bot"),
    run: (client, interaction, args, options) =>{

        //bot-wide variables or whatever

        const Discord = require('discord.js');

        // functions

        //command itself

        const embedium = new Discord.MessageEmbed()
        .setTitle("who am i?")
        .setDescription("a discord bot that lets everyone have their own by NRD#6942")

        interaction.editReply({ embeds: [ embedium ] })
    }
}