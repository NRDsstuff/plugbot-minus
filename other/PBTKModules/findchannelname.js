module.exports = (client, channelName) =>{

    return client.channels.cache.find(channel => channel.name === `${channelName}`);
}