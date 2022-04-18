module.exports = (message, prefix, commandName, plugin) =>{

    const NZTK = require('../NZTK')
        
    message.channel.send(message.content.substring(prefix.length + commandName.length))

    NZTK.log(`repeated ${message.content.substring(prefix.length + commandName.length)}`, plugin, "repeatafteruser")
}