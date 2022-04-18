const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

    name: "bet",
	data: new SlashCommandBuilder()
		.setName('bet')
		.setDescription('bet on someone')
		.addMentionableOption(option => 
            option.setName("member")
                .setDescription("person you bet on")
                .setRequired(true)),
    run: (client, interaction, args, options) =>{

        console.log(interaction)

        const Discord = require('discord.js')

        const member = args[0].user;

        const n = Math.random();

        if(n < 0.5){

            const embed = new Discord.MessageEmbed()
                .setTitle(`${interaction.member.user.username} bets on ${member.username}`)
                .setColor("BLUE")
                .setDescription(`${interaction.member} bet on ${member.username}!\n ${interaction.member} didn't win the bet`);

            interaction.editReply({ embeds: [embed] });
        }else{

            const embed = new Discord.MessageEmbed()
                .setTitle(`${interaction.member.user.username} bets on ${member.username}`)
                .setColor("BLUE")
                .setDescription(`${interaction.member} bet on ${member.username} and ${interaction.member} won the bet`);

            interaction.editReply({ embeds: [embed] });
        }
    }
}