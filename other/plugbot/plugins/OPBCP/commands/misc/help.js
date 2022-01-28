module.exports = {

    name: "help",
    run: (msg) =>{

        const Discord = require('discord.js');
        const rm = require('discord.js-reaction-menu')

        rm.reactions.first = ''
        rm.reactions.stop = ''
        rm.reactions.last = ''

        const mainConfig = require('../../../../../../configs/plugbot/mainConf.json')
        const miscConfig = require("../../../../../../configs/plugbot/plugins/OPBCP/misc/help/misc.json")
        const helpConfig = require('../../../../../../configs/plugbot/plugins/OPBCP/misc/help/commands.json')

        new rm.menu({

            channel: msg.channel,
            userID: msg.author.id,
            pages: [

                new Discord.MessageEmbed()
                .setColor(miscConfig.embedColor)
                .setDescription(`**this is the help menu for the bot.**
                press ◀ to go back
                press ▶ to go foward`)
                .setThumbnail(miscConfig.embedThumbnail),
                new Discord.MessageEmbed()
                .setColor(miscConfig.embedColor)
                .setDescription(`
                > **${mainConfig.plugins.prefix}${helpConfig.commands.v1} ► ${helpConfig.values.v1}**
                > *${helpConfig.comments.v1}*
                > **${mainConfig.plugins.prefix}${helpConfig.commands.v2} ► ${helpConfig.values.v2}**
                > *${helpConfig.comments.v2}*
                > **${mainConfig.plugins.prefix}${helpConfig.commands.v3} ► ${helpConfig.values.v3}**
                > *${helpConfig.comments.v3}*
                > **${mainConfig.plugins.prefix}${helpConfig.commands.v4} ► ${helpConfig.values.v4}**
                > *${helpConfig.comments.v4}*
                > **${mainConfig.plugins.prefix}${helpConfig.commands.v5} ► ${helpConfig.values.v5}**
                > *${helpConfig.comments.v5}*`)
                .setThumbnail(miscConfig.embedThumbnail),

                new Discord.MessageEmbed()
                .setColor(miscConfig.embedColor)
                .setDescription(`
                > **${mainConfig.plugins.prefix}${helpConfig.commands.v6} ► ${helpConfig.values.v6}**
                > *${helpConfig.comments.v6}*
                > **${mainConfig.plugins.prefix}${helpConfig.commands.v7} ► ${helpConfig.values.v7}**
                > *${helpConfig.comments.v7}*
                > **${mainConfig.plugins.prefix}${helpConfig.commands.v8} ► ${helpConfig.values.v8}**
                > *${helpConfig.comments.v8}*
                > **${mainConfig.plugins.prefix}${helpConfig.commands.v9} ► ${helpConfig.values.v9}**
                > *${helpConfig.comments.v9}*
                > **${mainConfig.plugins.prefix}${helpConfig.commands.v10} ► ${helpConfig.values.v10}**
                > *${helpConfig.comments.v10}*`)
                .setThumbnail(miscConfig.embedThumbnail),

                new Discord.MessageEmbed()
                .setColor(miscConfig.embedColor)
                .setDescription(`
                > **${mainConfig.plugins.prefix}${helpConfig.commands.v11} ► ${helpConfig.values.v11}**
                > *${helpConfig.comments.v11}*
                > **${mainConfig.plugins.prefix}${helpConfig.commands.v12} ► ${helpConfig.values.v12}**
                > *${helpConfig.comments.v12}*
                > **${mainConfig.plugins.prefix}${helpConfig.commands.v13} ► ${helpConfig.values.v13}**
                > *${helpConfig.comments.v13}*
                > **${mainConfig.plugins.prefix}${helpConfig.commands.v14} ► ${helpConfig.values.v14}**
                > *${helpConfig.comments.v14}*
                > **${mainConfig.plugins.prefix}${helpConfig.commands.v15} ► ${helpConfig.values.v15}**
                > *${helpConfig.comments.v15}*
                > **${mainConfig.plugins.prefix}${helpConfig.commands.v16} ► ${helpConfig.values.v16}**
                > *${helpConfig.comments.v16}*`)
                .setThumbnail(miscConfig.embedThumbnail),

                new Discord.MessageEmbed()
                .setColor(miscConfig.embedColor)
                .setDescription(`
                > **${mainConfig.plugins.prefix}${helpConfig.commands.v17} ► ${helpConfig.values.v17}**
                > *${helpConfig.comments.v17}*
                > **${mainConfig.plugins.prefix}${helpConfig.commands.v18} ► ${helpConfig.values.v18}**
                > *${helpConfig.comments.v18}*
                > **${mainConfig.plugins.prefix}${helpConfig.commands.v19} ► ${helpConfig.values.v19}**
                > *${helpConfig.comments.v19}*
                > **${mainConfig.plugins.prefix}${helpConfig.commands.v20} ► ${helpConfig.values.v20}**
                > *${helpConfig.comments.v20}*
                > **${mainConfig.plugins.prefix}${helpConfig.commands.v21} ► ${helpConfig.values.v21}**
                > *${helpConfig.comments.v21}*
                > **${mainConfig.plugins.prefix}${helpConfig.commands.v22} ► ${helpConfig.values.v22}**
                > *${helpConfig.comments.v22}*
                > **${mainConfig.plugins.prefix}${helpConfig.commands.v23} ► ${helpConfig.values.v23}**
                > *${helpConfig.comments.v23}*
                ... aaaand that's all for now.`),
            ]
        })
    }
}