const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {

    name: "cat",
    data: new SlashCommandBuilder()
        .setName("cat")
        .setDescription("qt image of cat"),
run: (client, interaction, args, options) =>{

        const fetch = require('superagent')
        const NZTK = require('../../../../NZTK')
        const Discord = require('discord.js')

        fetch.get("https://some-random-api.ml/img/cat").then(x => {

            const catEmbed = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setImage(x.body.link);
            interaction.editReply({ embeds: [catEmbed] });
        }).then(NZTK.log(`sent an image.`, "OPBCP", "cat"))
    }
}