module.exports = {

    name: "ban",
    run: (message, args) =>{
        
        //your code

        const config = require('../../../../../../configs/plugbot/plugins/OPBCP/mod/ban.json')
        const { Permissions } = require('discord.js')

        if (!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return message.channel.send(config.invalidPermissions)

        let User = message.mentions.members?.first() || message.guild.members.get(args[0])

        if (!User) return message.channel.send(config.invalidUser)

        let banReason = args.join(" ").slice(22);

        if (!banReason) {

            banReason = config.noBanReason
        }

        if(config.mentionBannedUser === `true`){
            
            message.channel.send(`${User}${config.banMessage}`)
        }
        else{

            message.channel.send(`${config.banMessage}`)
        }
        
        User.ban({reason: banReason, delete_message_days: 0})
    }
}