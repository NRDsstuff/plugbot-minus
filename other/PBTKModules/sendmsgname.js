module.exports = async (client, guildID, channelName, content, plugin, NZTK) =>{


    let channel = client.guilds.cache.get(guildID).channels.cache.find(r => r.name === channelName);

    channel.send(content)
    await NZTK.log(`sent ${content} in channel ${channel.name} with ID ${channel.id}`, plugin, "sendmsg")
}