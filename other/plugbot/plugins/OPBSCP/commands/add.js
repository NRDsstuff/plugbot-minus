const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

    name: "add",
	data: new SlashCommandBuilder()
		.setName('add')
		.setDescription('adds 2 numbers.')
		.addIntegerOption(option =>
			option.setName('number')
				.setDescription('first number')
				.setRequired(true)
				.setMinValue(0)
				.setMaxValue(2147483648))
		.addIntegerOption(option2 =>
			option2.setName('numbah')
				.setDescription('2nd number')
				.setRequired(true)
				.setMinValue(0)
				.setMaxValue(2147483648)),

	run: (client, interaction, args, options) =>{

		console.log(args)
		interaction.editReply(`${args[0].value + args[1].value}`)
	},
};
