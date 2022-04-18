module.exports = {

    name: "bet",
    run: (message) =>{

        const Discord = require('discord.js')

        const member = message.mentions.members.first();

        if (!member) return message.reply("Please provide a user");

        const n = Math.random();

        if(n < 0.5){

            const embed = new Discord.MessageEmbed()
                .setTitle(`${message.author.username} bets on ${member.user.username}`)
                .setColor("BLUE")
                .setDescription(`${message.author.username} bet on ${member.user.username}!\n ${message.author.username} didn't win the bet`);

            message.channel.send({ embeds: [embed] });
        }else{

            const embed = new Discord.MessageEmbed()
                .setTitle(`${message.author.username} bets on ${member.user.username}`)
                .setColor("BLUE")
                .setDescription(`${message.author.username} bet on ${member.user.username} and ${message.author.username} won the bet`);

            message.channel.send({ embeds: [embed] });
        }
    }
}