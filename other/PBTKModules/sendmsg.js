module.exports = async (client, guildID, channelID, content, plugin, NZTK) =>{


    let channel = client.guilds.cache.get(guildID).channels.cache.find(r => r.id === channelID);

    channel.send(content)
    await NZTK.log(`sent ${content} in channel ${channel.name} with ID ${channelID}`, plugin, "sendmsg")
}