const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {

    name: "cat",
    data: new SlashCommandBuilder()
        .setName("cat")
        .setDescription("qt image of cat"),
run: (client, interaction, args, options, user, NZTK) =>{

        const fetch = require('superagent')
        const Discord = require('discord.js')

        let lincc 

        fetch.get("https://some-random-api.ml/img/cat").then(x => {
            
            lincc = x.body.link 

            interaction.editReply(x.body.link);
        }).then(NZTK.log.success(`sent ${lincc}`, 1, "cat"))
    }
}