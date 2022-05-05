module.exports = {

    name: 'official plugbot ready logging',
    run: (client, args, line, user, PBCMD, PBPlugins, PBRL, programs) =>{

        const NZTKc = require('../../NZTK')
        const NZTK = new NZTKc("OPBRL", user)
        const config = require('../../../configs/plugbot/plugins/OPBRL/conifg.json')

        NZTK.log.success(config.consoleReady, 2, "stuff")

        client.on("ready", () =>{

            client.user.setActivity('your soul', { type: 'LISTENING' })
            client.user.setStatus('idle');

            NZTK.log.success("client is ready.", 2, "stuff")
        });
    }
}
