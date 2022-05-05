module.exports = {

    name: "clydesay",
    run: async (msg, args, client, NZTK, user) =>{

        //bot-wide variables or whatever

        const fetch = require("node-fetch");

        // functions

        const PBTKc = require('../../../../../PBTK')
        const PBTK = new PBTKc("OPBCP", client, user)

        //command-specific variables or whatever

        const config = require('../../../../../../configs/plugbot/plugins/OPBCP/fun/clydesay.json')

        //your code

        PBTK.delete(msg)

        let text = args.join(" ");
        if (!text) return message.reply(config.noText);

            const data = await fetch(
            `https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`

        ).then((res) => res.json());

        PBTK.sendmsg(msg.guild.id, msg.channel.id, data.message)

        NZTK.log.success(`sent image, content: ${text} link: ${data.message}`, 'OPBCP', "clydesay")
    }
}