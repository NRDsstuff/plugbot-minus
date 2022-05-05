module.exports = {

    name: "hostinfo",
    run: (msg, args, client, NZTK, user) =>{

        const Discord = require('discord.js')
        const os = require('os')
        const config = require('../../../../../../configs/plugbot/plugins/OPBCP/misc/hostinfo.json')
        const PBTKc = require('../../../../../PBTK')
        const PBTK = new PBTKc("OPBCP", client, user)

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
        
        PBTK.reply(msg, { embeds: [sysinfo] })
    }
}
