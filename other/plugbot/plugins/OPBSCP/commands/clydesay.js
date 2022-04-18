const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {

    name: "clydesay",
    data: new SlashCommandBuilder()
		.setName('clydesay')
		.setDescription('forcefully make clyde say something')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('what should clyde say')
				.setRequired(true)),
    run: async (client, interaction, args, options) =>{

        //bot-wide variables or whatever

        const fetch = require("node-fetch");

        // functions

        const NZTK = require('../../../../NZTK')

        //command-specific variables or whatever

        const config = require('../../../../../configs/plugbot/plugins/OPBCP/fun/clydesay.json')

        //your code

        let text = args[0].value;

        const data = await fetch(

            `https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`
        ).then((res) => res.json());

        interaction.editReply(data.message)
        NZTK.log(`sent image, content: ${text} link: ${data.message}`, 'OPBSCP', "clydesay")
    }
}