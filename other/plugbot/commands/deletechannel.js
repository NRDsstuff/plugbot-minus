module.exports = {
    name: "deletechannel",
    desc: "delete a channel",
    usage: "deletechannel [ID/name] [guild id] [channel id/channel name]",
    run: (client, args, line, user, PBCMD, PBPlugins, PBRL, programs) =>{

        const NZTKc = require('../../NZTK')
        const NZTK = new NZTKc("plugbot", user)

        const PBTKc = require('../../PBTK')
        const PBTK = new PBTKc("deletechannel", client)

        switch(args[1]){
                        
            case "ID":
                
                PBTK.deleteChannelID(args[2], args[3])
            break;
        
            case "name":
        
                PBTK.deleteChannelName(args[2], args[3])
            break;
        
            default: 
                NZTK.log.warn("please chose between id or name", 2, "œœœœ")
            break;
            
        }
    }
}
