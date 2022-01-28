module.exports = (client) =>{

    // load configs

    const mainConfig = require('../../../../../configs/plugbot/mainConf.json')

    // load other functions

    const fs = require('fs')
    const NZTK = require('../../../../NZTK')
    const PBTKc = require('../../../../PBTK')
    const PBTK = new PBTKc("OPBCP")

    // load commands

    const cmdlist = new Map()

    let cmds0 = fs.readdirSync(`./SHELL/other/plugbot/plugins/OPBCP/commands/fun`).filter(file => file.endsWith(`.js`));
        for(const file of cmds0){
            const cmd = require(`../commands/fun/${file}`);
                
            cmdlist.set(cmd.name, cmd)
        }

    let cmds1 = fs.readdirSync(`./SHELL/other/plugbot/plugins/OPBCP/commands/misc`).filter(file => file.endsWith(`.js`));
        for(const file of cmds1){
            const cmd = require(`../commands/misc/${file}`);
                
            cmdlist.set(cmd.name, cmd)
        }

    let cmds2 = fs.readdirSync(`./SHELL/other/plugbot/plugins/OPBCP/commands/moderation`).filter(file => file.endsWith(`.js`));
        for(const file of cmds2){
            const cmd = require(`../commands/moderation/${file}`);
                
            cmdlist.set(cmd.name, cmd)
        }

    NZTK.log("OPBCP is ready.", "OPBCP", "launcher")
    
    client.on('messageCreate', msg =>{

        const args = msg.content.slice(mainConfig.plugins.prefix.length).split(/ +/);
        const command = args.shift().toLocaleLowerCase();

        if(!msg.content.includes(mainConfig.plugins.prefix)) return;

        if(cmdlist.has(command)){

            cmdlist.get(command).run(msg, args, client)
            NZTK.log(`someone called out ${command}`, "OPBCP", "launcher")
        }
    })
}