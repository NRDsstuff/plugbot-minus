module.exports = {
    name: "Official plugbot Commands Pack",
    run: (client) =>{

        // load other functions

        const PBTKc = require('../../PBTK')
        const PBTK = new PBTKc("OPBCP", client)
        const NZTK = require('../../NZTK')

        NZTK.log(`OPBCP for bot was called out.`, 'OPBCP', 'main')

        // start it

        const a = require("./OPBCP/launchers/cmdlauncher")
        a(client)
    }
}
