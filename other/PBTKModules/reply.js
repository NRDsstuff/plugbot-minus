module.exports = async (client, message, content, plugin, NZTK) =>{

    message.reply(content)
    await NZTK.log(`replied with ${content} to ${message.author}.`, plugin, "replyquickembed")
}