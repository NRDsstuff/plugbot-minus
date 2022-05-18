module.exports = (rl, user, cb) =>{

    const fs = require('fs')
    const shell = require('shelljs')
    const NZTKc = require('../../../other/NZTK')
    const NZTK = new NZTKc("NZPM", user)
    let installed = require('../../configs/NZPM/toupdate.json')

    // set up a readline for init config

    rl.close()

    const PBRLa = require('readline') // the a stands for a
    const PBRL = PBRLa.createInterface({

        input: process.stdin,
        output: process.stdout
    })

    // takes way too long to do idk why

    PBRL.question(`please input your bot's token (it will be set for the current user, ${user.name}.)`, (answer) =>{

        fs.appendFile(`./SHELL/temp/NZPM/plugbot/configs/plugbot/tokens.json`, `{"${user.name}": "${answer}"}`, (err) =>{

            if (err) NZTK.log.error(`could not set the token automatically. you will have to set the token in SHELL/temp/NZPM/plugbot/configs/plugbot/tokens.json manually: {"MINUS SHELL USERNAME": TOKEN}`, 2, 'e')
        })

        // move shtuff

        NZTK.moveFile('./SHELL/temp/NZPM/plugbot/programs/plugbot.app.js', './SHELL/programs/plugbot.app.js', "there was an error while moving the app file.", true)
        NZTK.moveFile('./SHELL/temp/NZPM/plugbot/other/plugbot', './SHELL/other/plugbot', "there was an error while moving the misc functions.", true)
        NZTK.moveFile("./SHELL/temp/NZPM/plugbot/other/PBTK.js", "./SHELL/other/PBTK.js", "there was an error while moving the PBTK core", true)
        NZTK.moveFile('./SHELL/temp/NZPM/plugbot/other/PBTKModules', './SHELL/other/PBTKModules', "there was an error while moving the PBTK files.", true)
        
        if(!installed.packages.indexOf("plugbot")) installed.packages.push("plugbot")

        fs.writeFile("./SHELL/configs/NZPM/toupdate.json", JSON.stringify(installed), (err =>{

            if(err) console.log("there was an error while installing this package")
        }))

        // node dependencies 

        shell.exec("npm i discord.js db discord.js-reaction-menu one-liner-joke superagent ffmpeg @discordjs/rest @discordjs/builders discord-api-types")

        // finishing up shtuff

        NZTK.removeDir('./SHELL/temp/NZPM/plugbot')
        cb("plugbot")
    })
}
