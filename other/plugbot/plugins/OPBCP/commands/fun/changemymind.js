module.exports = {
  
  name: "changemymind",
  run: async (message, args, client) =>{

    //bot-wide variables or whatever

    const fetch = require("node-fetch");

    // functions

    const NZTK = require('../../../../../NZTK')
    const PBTKc = require('../../../../../PBTK')
    const PBTK = new PBTKc("OPBCP", client)

    //command-specific variables or whatever

    const config = require('../../../../../../configs/plugbot/plugins/OPBCP/fun/changemymind.json')

    //your code

    message.delete()

    NZTK.log(`deleted message, content: ${message.content}`, "OPBCP", "changemymind")
    
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