const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  
  name: "changemymind",
	data: new SlashCommandBuilder()
		.setName('changemymind')
		.setDescription('makes a change my mind meme')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('the text to put on the thing aaaaaaaaaaaaa')
				.setRequired(true)),
  run: async (client, interaction, args, options) =>{

    //bot-wide variables or whatever

    const fetch = require("node-fetch");

    // functions

    const NZTK = require('../../../../NZTK')
    const PBTKc = require('../../../../PBTK')
    const PBTK = new PBTKc("OPBSCP", client)

    //command-specific variables or whatever

    const config = require('../../../../../configs/plugbot/plugins/OPBCP/fun/changemymind.json')

    //your code

    const data = await fetch(
      `https://nekobot.xyz/api/imagegen?type=changemymind&text=${args[0].value}`
    ).then((res) => res.json());

    interaction.editReply(data.message)
  }
}