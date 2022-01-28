module.exports = {
    name: "plugbot",
    desc: "a discord bot that is highly modular",
    version: "0.0.1 alpha",
    usage: "command [arg]",
    run: (args, line, user, apps, rl, programs, users) =>{

        // ur code here lol

        // djs 13 is weird

        const Discord = require('discord.js')
        const intents = new Discord.Intents(32767)

        const client = new Discord.Client({ intents })

        const fs = require('fs')
        const NZTK = require('../other/NZTK')

        const globConfg = require('../configs/globalConf.json')
        const PBConf = require('../configs/plugbot/mainConf.json')
        const tokens = require('../configs/plugbot/tokens.json')

        // make the new rl

        rl.close()

        const PBRLa = require('readline') // the a stands for a 
        const PBRL = PBRLa.createInterface({

            input: process.stdin,
            output: process.stdout
        })

        // now the actual program

        NZTK.log("started plugbot", "plugbot", "random")

        const PBCMD = new Map()
        const PBPlugins = new Map()

        let cmds = fs.readdirSync(`./SHELL/other/plugbot/commands`).filter(file => file.endsWith(`.js`));
            for(const file of cmds){
                const cmd = require(`../other/plugbot/commands/${file}`);
                    
                PBCMD.set(cmd.name, cmd)
            }

        let pgins = fs.readdirSync(`./SHELL/other/plugbot/plugins`).filter(file => file.endsWith(`.js`));
            for(const file of pgins){
                
                const plugin = require(`./other/plugbot/plugins/${file}`);
                    
                PBPlugins.set(plugin.name, plugin)
                plugin.run(client, PBPlugins, PBCMD)
            }

        rl.setPrompt(NZTK.setupps1(PBConf.shell.PS1, user.name, users))

        PBRL.prompt()


        // the cmdline stuff

        PBRL.on("line", (line) =>{

            // how would this be NRD's cmdline without L O G G I N G 

            NZTK.silentlog(`entered ${line} into the cmdline.`, "plugbot", "cmdline")

            // now the actual command handling stuff

            const args = line.split(" ")

            const command = PBCMD.get(args[0])

            if(line){

                if(command){

                    PBCMD.get(args[0]).run(client, args, line, user, PBCMD, PBPlugins, PBRL, programs)
                }else{
    
                    NZTK.log(`called out unexistent command ${args[0]}.`, "plugbot", "cmdline")
                }
            }else{

                console.log(`please enter something into the CMDLINE`)
            }
            

            rl.prompt()
        }).on("close", () =>{

            const rl2 = require('readline')
            const newLien = rl2.createInterface({

                input: process.stdin,
                output: process.stdout
            })

            console.log("thank you for using plugbot.")
            NZTK.silentlog("plugbot shutdown", "plugbot", "session")
            programs.get(globConfg.shell.name).run(users, user, newLien, programs)
        })

        client.login(NZTK.findinjson(tokens, user.name))
    }
}
