const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {

    name: "hostinfo",
    data: new SlashCommandBuilder()
        .setName("hostinfo")
        .setDescription("some info about what this bot is hosted on"),
    run: (client, interaction, args, options) =>{

        const Discord = require('discord.js')
        const os = require('os')
        const config = require('../../../../../configs/plugbot/plugins/OPBCP/misc/hostinfo.json')

        var totalmem = os.totalmem()
        var freemem = os.freemem()
        
        totalmem = totalmem / 1024 / 1024 / 1024
        freemem = freemem / 1024 / 1024 / 1024
        
        var freememgb = Math.round(freemem * 1)
        var totalmemgb = Math.round(totalmem * 1)
        
        var cpus = os.cpus()
        
        var cpumodel = cpus[0].model
        
        var ostype = os.type()
        
        const sysinfo = new Discord.MessageEmbed()
        .addFields(
            {name: config.freeRam, value: `${freememgb}GB`, inline: true},
            {name: config.totalRam, value: `${totalmemgb}GB`, inline: true},
            {name: config.cpuModel, value: `${cpumodel}`, inline: true},
            {name: config.osType, value: `${ostype}`, inline: true})
        
        interaction.editReply({ embeds: [ sysinfo ] })
    }
}
