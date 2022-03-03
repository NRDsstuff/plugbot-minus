const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {

    name: "joke",
    data: new SlashCommandBuilder()
		.setName('joke')
		.setDescription('make me say unfunny'),
    run: (client, interaction, args, options) =>{

        //bot-wide variables or whatever

        const joke = require("one-liner-joke").getRandomJoke;
        const daJoke = joke({ exclude_tags: ["dirty", "marriage", "sex", "death"] })
        .body

        // functions

        const NZTK = require('../../../../NZTK')

        interaction.editReply(daJoke)

        NZTK.log(`i said unfunny (${daJoke})`, "OPBSCP", "joke")
    }
}