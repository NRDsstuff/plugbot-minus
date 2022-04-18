const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    
    name: "allemojis",
    data: new SlashCommandBuilder()
        .setName("allemojis")
        .setDescription("show the emojis of this server"),
    run: async(bot, interaction, args, options) =>{

        const Discord = require('discord.js')
        const config = require('../../../../../configs/plugbot/plugins/OPBCP/misc/allemojis.json')
        const PBTKc = require('../../../../PBTK')
        const PBTK = new PBTKc("OPBSCP", bot)

        try{
        let Emojis = "";
        let EmojisAnimated = "";
        let EmojiCount = 0;
        let Animated = 0;
        let OverallEmojis = 0;
        function Emoji(id){
            return bot.emojis.cache.get(id).toString()
        }
        interaction.guild.emojis.cache.forEach(emoji => {

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
        .setTitle(`${config.embedTitle}${interaction.guild.name}`)
        .setThumbnail(interaction.guild.iconURL({ dynamic: true, format: 'png', size: 512 }))
        .addField(`${config.animatedEmojis}${Animated}`, `${EmojisAnimated}⠀`, false)
        .addField(`${config.emojis}${EmojiCount}`, `${Emojis}⠀`, false)
        .setColor(0x2f3136)

        interaction.editReply({ embeds: [ emn ] })

        }catch(err){

            if(err) interaction.editReply("there was an error.")
        }
    }
}