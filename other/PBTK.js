const NZTK = require('./NZTK')

const sendMsg = require('./PBTKModules/sendmsg')
const createChannel = require('./PBTKModules/createchannel')
const deleteChannelName = require('./PBTKModules/deletechannelname')
const deleteChannelID = require('./PBTKModules/deletechannelID')
const findChannelName = require('./PBTKModules/findchannelname')
const replyQuickEmbed = require('./PBTKModules/replyquickembed')
const repeatAfterUser = require('./PBTKModules/repeatafteruser')
const reply = require('./PBTKModules/reply')
const addRoleByName = require('./PBTKModules/giverolename')
const quickDelete = require('./PBTKModules/quickdelete')
const sendMsgName = require('./PBTKModules/sendmsgname')

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
    replyQuickEmbed(message, title, desc, color){

        replyQuickEmbed(message, title, desc, color, this.plugin)
    }
    repeatAfterUser(message, prefix, commandName){

        repeatAfterUser(message, prefix, commandName, this.plugin)
    }
    reply(client, message, content){

        reply(client, message, content, this.plugin, NZTK)
    }
    giveRoleName(guild, member, roleName){

        addRoleByName(guild, member, roleName, this.plugin, NZTK, this.client)
    }
    delete(message){

        quickDelete(message, this.plugin)
    }
    sendMsgName(guildID, channelName, content){

        sendMsgName(this.client, guildID, channelName, content, this.plugin, NZTK)
    }
    
}