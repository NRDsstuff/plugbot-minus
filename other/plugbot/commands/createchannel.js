module.exports = {
    name: "createchannel",
    desc: "create a text channel",
    usage: "createchannel [guild ID] [channel name] [channel type]",
    run: (client, args) =>{

        const PBTKc = require('../../PBTK')
        const PBTK = new PBTKc("createchannel", client)

        PBTK.createChannel(args[1], {type: args[3]}, args[2])
    }
}