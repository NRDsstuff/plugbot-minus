module.exports = {
    
    name: "allemojis",
    run: async(message, args, client, NZTK, user) =>{

        const Discord = require('discord.js')
        const config = require('../../../../../../configs/plugbot/plugins/OPBCP/misc/allemojis.json')
        const PBTKc = require('../../../../../PBTK')
        const PBTK = new PBTKc("OPBCP", client, user)

        if(message.author.bot) return;
        try{
        let Emojis = "";
        let EmojisAnimated = "";
        let EmojiCount = 0;
        let Animated = 0;
        let OverallEmojis = 0;
        function Emoji(id){
            return client.emojis.cache.get(id).toString()
        }
        message.guild.emojis.cache.forEach(emoji => {

            OverallEmojis++;
            if(emoji.animated){

                Animated++;
                EmojisAnimated+=Emoji(emoji.id)
            }else{

                EmojiCount++;
                Emojis+=Emoji(`${emoji.id}`)
            }
        })

        let emn = new Discord.MessageEmbed()
        .setTitle(`${config.embedTitle}${message.guild.name}`)
        .setThumbnail(message.guild.iconURL({ dynamic: true, format: 'png', size: 512 }))
        .addField(`${config.animatedEmojis}${Animated}`, `${EmojisAnimated} `, false)
        .addField(`${config.emojis}${EmojiCount}`, `${Emojis} `, false)
        .setColor(0x2f3136)

        PBTK.reply(message, { embeds: [emn] })

        }catch(err){

            if(err) PBTK.reply(message, `there was an error`)
        }
    }
}