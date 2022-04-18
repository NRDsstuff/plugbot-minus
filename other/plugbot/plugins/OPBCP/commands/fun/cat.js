module.exports = {

    name: "cat",
    run: (msg) =>{

        const fetch = require('superagent')
        const NZTK = require('../../../../../NZTK')
        const Discord = require('discord.js')

        fetch.get("https://some-random-api.ml/img/cat").then(x => {

            const catEmbed = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setImage(x.body.link);
            msg.channel.send({ embeds: [catEmbed] });
        }).then(NZTK.log(`sent an image.`, "OPBCP", "cat"))
    }
}