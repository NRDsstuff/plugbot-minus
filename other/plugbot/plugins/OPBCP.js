module.exports = {
    name: "Official plugbot Commands Pack",
    run: (client, args, line, user, PBCMD, PBPlugins, PBRL, programs) =>{

        // load other functions

        const PBTKc = require('../../PBTK')
        const PBTK = new PBTKc("OPBCP", client)

        const NZTKc = require('../../NZTK')
        const NZTK = new NZTKc("OPBCP", user)

        NZTK.log.success(`OPBCP for bot was called out.`, 2, 'main')

        // start it

        const a = require("./OPBCP/launchers/cmdlauncher")
        a(client, NZTK, user)
    }
}
