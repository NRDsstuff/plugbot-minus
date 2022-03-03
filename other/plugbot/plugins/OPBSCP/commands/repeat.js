const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

    name: "repeat",
	data: new SlashCommandBuilder()
		.setName('repeat')
		.setDescription('repeats after you')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('The input to echo back')
				.setRequired(true)),

	run: (client, interaction, args, options) =>{

		interaction.editReply(args[0].value)
	},
};
