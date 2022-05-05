module.exports = {
  
  name: "changemymind",
  run: async (message, args, client, NZTK, user) =>{

    //bot-wide variables or whatever

    const fetch = require("node-fetch");

    // functions

    const PBTKc = require('../../../../../PBTK')
    const PBTK = new PBTKc("OPBCP", client, user)

    //command-specific variables or whatever

    const config = require('../../../../../../configs/plugbot/plugins/OPBCP/fun/changemymind.json')

    //your code

    PBTK.delete(message)
    
    const text = args.join(" ");

    if (!text) return message.channel.send(config.noText);

    const sendMsg = await message.channel.send(config.waitingText);

    const data = await fetch(
      `https://nekobot.xyz/api/imagegen?type=changemymind&text=${text}`
    ).then((res) => res.json());

    sendMsg.delete();

    PBTK.sendmsg(message.guild.id, message.channel.id, data.message)
  }
}