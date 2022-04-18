module.exports = {

    name: 'official plugbot ready logging',
    run: (client) =>{

        const NZTK = require('../../NZTK')
        const config = require('../../../configs/plugbot/plugins/OPBRL/conifg.json')

        NZTK.log(config.consoleReady, "OPBRL", "stuff")

        client.on("ready", () =>{

            client.user.setActivity('your soul', { type: 'LISTENING' })
            client.user.setStatus('idle');

            NZTK.log("client is ready.", "OPBRL", "stuff")
        });
    }
}
