module.exports = {
    name: "clientinfo",
    desc: "all the data client contains (that's a lot of data)",
    usage: "clientinfo",
    run: (client, args, line, user, PBCMD, PBPlugins, PBRL, programs) =>{

        const NZTKc = require('../../NZTK')
        const NZTK = new NZTKc("plugbot", user)
        
        console.log(client)
    }
}