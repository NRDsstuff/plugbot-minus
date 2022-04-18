module.exports = (client, guildID, channelID, plugin, NZTK) =>{

    let channel = client.guilds.cache.get(guildID).channels.cache.find(r => r.id === channelID);

    if(!channel.deletable) return;
    
    channel.delete()

    NZTK.log(`deleted channel with an id of ${channelID}`, plugin, "deletechannel")
}