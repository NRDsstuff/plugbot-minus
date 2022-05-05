module.exports = {

    name: "purge",
    run: (message, args) =>{

        const config = require('../../../../../../configs/plugbot/plugins/OPBCP/mod/purge.json')
        const { Permissions } = require('discord.js')

        if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES) && !message.member.id == "786127059020808192") return message.channel.send("invalid permissions")
        if (isNaN(args[0]))
            return message.channel.send(config.invalidMessages);

        if (args[0] < 1)
            return message.channel.send(config.tooLowMessages);
        else if(args[0] > 100)
            return message.channel.send("too many messages.")

        message.channel.bulkDelete(args[0])
            .then(messages => message.channel.send(`**Succesfully deleted \`${messages.size}/${args[0]}\` messages**`).then(msg => msg.delete({ timeout: 5000 }))).catch(() => null)
    }
}