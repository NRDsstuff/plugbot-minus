const NZTK = require('./NZTK')

const sendMsg = require('./PBTKModules/sendmsg')
const createChannel = require('./PBTKModules/createchannel')
const deleteChannelName = require('./PBTKModules/deletechannelname')
const deleteChannelID = require('./PBTKModules/deletechannelID')
const findChannelName = require('./PBTKModules/findchannelname')

module.exports = class PBTK{

    constructor(plugin, client){

        this.plugin = plugin
        this.client = client
    }

    findChannelName(channel){

        findChannelName(this.client, channel)
    }
    sendmsg(guildID, channelID, content){

        sendMsg(this.client, guildID, channelID, content, this.plugin, NZTK)
    }
    createChannel(guildID, channelData, channelName){

        createChannel(this.client, guildID, channelData, channelName, this.plugin, NZTK)
    }
    deleteChannelID(guildID, channelID){

        deleteChannelID(this.client, guildID, channelID, this.plugin, NZTK)
    }
    deleteChannelName(guildID, channelName){

        deleteChannelName(this.client, guildID, channelName, this.plugin, NZTK)
    }
    
}