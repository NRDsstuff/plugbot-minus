
const fs = require('fs')

module.exports = {
    name: "pluginlist",
    desc: "shows all the loaded plugins",
    usage: "pluginlist",
    run: (client, args, line, user, PBCMD, PBPlugins, PBRL) =>{
        
        console.log(PBPlugins)
    }
}