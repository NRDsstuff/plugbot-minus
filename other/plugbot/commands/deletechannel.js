module.exports = {
    name: "deletechannel",
    desc: "delete a channel",
    usage: "deletechannel [ID/name] [guild id] [channel id/channel name]",
    run: (client, args) =>{

        const PBTKc = require('../../PBTK')
        const PBTK = new PBTKc("deletechannel", client)

        switch(args[1]){
                        
            case "ID":
                
                PBTK.deleteChannelByID(args[2], args[3])
            break;
        
            case "name":
        
                PBTK.deleteChannelByName(args[2], args[3])
            break;
        
            default: 
                console.log("please chose between id or name")
            break;
            
        }
    }
}
