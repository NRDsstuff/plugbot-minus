module.exports = {
    name: "sendmsg",
    desc: "send a message from your terminal of choice!",
    usage: "sendmsg [ID/name] [server id] [channel id/channel name] [message]",
    run: async (client, args, line, user, PBCMD, PBPlugins, PBRL, programs) =>{

        const NZTKc = require('../../NZTK')
        const NZTK = new NZTKc("plugbot", user)

        const PBTKc = require('../../PBTK')
        const PBTK = new PBTKc("sendmsg", client, user)

        const sendmsg = line.substring(args[0].length + args[1].length + args[2].length + args[3].length + 3)

        switch(args[1]){
                        
            case "ID":
                
                PBTK.sendmsg(args[2], args[3], sendmsg)
            break;
        
            case "name":
                
                PBTK.sendMsgName(args[2], args[3], sendmsg)
            break;
        
            default:

                NZTK.log.warn("please input ID or name first", 2, "æ↓”ńœśę→©ŋńś©ŋ↓")
            break;
            
        }
    }
}