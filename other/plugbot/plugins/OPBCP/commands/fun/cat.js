module.exports = {

    name: "cat",
    run: (msg, args, client, NZTK, user) =>{

        const PBTKc = require('../../../../../PBTK')
        const PBTK = new PBTKc("OPBCP", client, user)

        const fetch = require('superagent')
        const Discord = require('discord.js')

        let thej 

        fetch.get("https://some-random-api.ml/img/cat").then(x => {
            
            thej = x.body.link

            PBTK.reply(msg, x.body.link);

            NZTK.log.success(`sent an image of a cat\nlink: ${thej}`, 1, "cat")
        })
    }
}