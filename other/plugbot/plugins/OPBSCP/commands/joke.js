const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {

    name: "joke",
    data: new SlashCommandBuilder()
		.setName('joke')
		.setDescription('make me say unfunny'),
    run: (client, interaction, args, options, user, NZTK) =>{

        //bot-wide variables or whatever

        const joke = require("one-liner-joke").getRandomJoke;
        const daJoke = joke({ exclude_tags: ["dirty", "marriage", "sex", "death"] })
        .body

        // functions

        interaction.editReply(daJoke)

        NZTK.log.success(`i said unfunny (${daJoke})`, 1, "joke")
    }
}