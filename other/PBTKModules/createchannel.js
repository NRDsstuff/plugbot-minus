module.exports = (client, guildID, channelData, channelName, pluginName, NZTK) =>{

    client.guilds.cache.get(guildID).channels.create(channelName, channelData)
    NZTK.log(`created channel ${channelName}.`, pluginName, "createchannel")
}