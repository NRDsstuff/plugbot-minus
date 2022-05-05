module.exports = {

    name: "kick",
    run: (message, args, client, NZTK, user) =>{

        const config = require('../../../../../../configs/plugbot/plugins/OPBCP/mod/kick.json')
        const { Permissions } = require('discord.js')

        if (!message.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) return message.channel.send(config.invalidPermissions)

        let User = message.mentions.members?.first() || message.guild.members.get(args[0])

        if (!User) return message.channel.send(config.invalidUser)

        let kickReason = args.join(" ").slice(22);

        if (!kickReason) {

            kickReason = config.noKickReason
        }

        if(config.mentionKickedUser === `true`){

            message.channel.send(`${User}${config.kickMessage}`)
        }
        else{

            message.channel.send(`${config.kickMessage}`)
        }
        
        User.kick({reason: kickReason})
        NZTK.log(`kicked ${User}. reason: ${kickReason}`, "OPBCP", "kick")
    }
}