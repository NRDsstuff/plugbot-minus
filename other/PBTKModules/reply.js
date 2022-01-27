module.exports = async (client, message, content, plugin, NZTK) =>{

    message.react(content)
    await NZTK.log(`replied with ${content} to ${message.author}.`, plugin, sendmsg)
}