module.exports = {
    name: "clear",
    desc: "clear the terminal screen",
    usage: "clear",
    run: (client, args, line, user, PBCMD, PBPlugins, PBRL, programs) =>{

        const NZTKc = require('../../NZTK')
        const NZTK = new NZTKc("plugbot", user)
        
        console.clear()
        NZTK.log.success("cleared the terminal screen", 1, "clear")
    }
}