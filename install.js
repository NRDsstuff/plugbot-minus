const { ShellString } = require('shelljs')

module.exports = (rl, user) =>{

    const fs = require('fs')
    const shell = require('shelljs')
    const NZTK = require('../../../other/NZTK')
    let installed = require('../../../configs/NZPM/toupdate.json')

    // set up a readline for init config

    rl.close()

    const PBRLa = require('readline') // the a stands for a
    const PBRL = PBRLa.createInterface({

        input: process.stdin,
        output: process.stdout
    })

    shell.exec("npm i discord.js db discord.js-reaction-menu one-liner-joke superagent ffmpeg")

    PBRL.question(`please input your bot's token (it will be set for the current user, ${user}.)`, (answer) =>{

        fs.appendFile(`./SHELL/temp/NZPM/plugbot/configs/plugbot/tokens.json`, `{"${user}": "${answer}"}`, (err) =>{

            if (err) console.log("there was an error while setting your token. you will have to add it manually in shell/configs/plugbot/tokens")
        })

        NZTK.moveFile('./SHELL/temp/NZPM/plugbot/programs/plugbot.app.js', './SHELL/programs/plugbot.app.js', "there was an error while moving the app file.", true)
        fs.rename('./SHELL/temp/NZPM/plugbot/other/plugbot', './SHELL/other/plugbot', (err) =>{

            if(err) console.log("there was an error while moving the commands")
        })
        fs.rename("./SHELL/temp/NZPM/plugbot/configs/plugbot", "./SHELL/configs/plugbot", (err) =>{

            if(err) console.log("there was an error while moving config and token files")
        })
        fs.rename("./SHELL/temp/NZPM/plugbot/other/PBTKModules", "./SHELL/other/PBTKModules", (err) =>{

            if(err) console.log("there was an error while installing the plugbot toolkit.")
        })
        fs.mkdir('./SHELL/other/plugbot/plugins', (err) =>{

            if(err) console.log("there was an error while making the plugins folder")
        })
        NZTK.moveFile("./SHELL/temp/NZPM/plugbot/other/PBTK.js", "./SHELL/other/PBTK.js", " ", true)
        
        installed.packages.push("plugbot")

        fs.writeFile("./SHELL/configs/NZPM/toupdate.json", JSON.stringify(installed), (err =>{

            if(err) console.log("there was an error while installing this package")
        }))

        NZTK.removedir('./SHELL/temp/NZPM/plugbot')
        return NZTK.log("finished installing plugbot", "NZTK", "install")
    })
}
