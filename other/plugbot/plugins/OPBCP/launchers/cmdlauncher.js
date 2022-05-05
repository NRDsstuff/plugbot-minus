module.exports = (client, NZTK, user) =>{

    // load configs

    const mainConfig = require('../../../../../configs/plugbot/mainConf.json')

    // load other functions

    const fs = require('fs')
    const PBTKc = require('../../../../PBTK')
    const PBTK = new PBTKc("OPBCP", client, user)

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

    NZTK.log.success("OPBCP is ready.", 2, "launcher")
    
    client.on('messageCreate', msg =>{

        const args = msg.content.slice(mainConfig.plugins.prefix.length).split(/ +/);
        const command = args.shift().toLocaleLowerCase();

        if(!msg.content.includes(mainConfig.plugins.prefix)) return;

        if(cmdlist.has(command)){

            cmdlist.get(command).run(msg, args, client, NZTK, user)
            NZTK.log.normal(`someone called out ${command}`, 2, "launcher")
        }
    })
}