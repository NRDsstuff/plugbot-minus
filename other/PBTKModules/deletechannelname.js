module.exports = (client, guildID, channelName, plugin, NZTK) =>{

    let channel = client.guilds.cache.get(guildID).channels.cache.find(r => r.name === `${channelName}`);

    if(!channel.deletable) return;
    
    channel.delete()

    NZTK.log(`deleted channel ${channelName}`, plugin, "deletechannel")
}