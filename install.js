module.exports = (rl, user) =>{

    const fs = require('fs')
    const NZTK = require('../../../other/NZTK')

    // set up a readline for init config

    rl.close()

    const PBRLa = require('readline') // the a stands for a 
    const PBRL = PBRLa.createInterface({

        input: process.stdin,
        output: process.stdout
    })

    PBRL.question(`please input your bot's token (it will be set for the current user, ${user.name}.)`, (answer) =>{

        fs.appendFile(`./SHELL/temp/NZPM/plugbot/configs/plugbot/tokens.json`, `{"${user.name}": "${answer}"}`, (err) =>{

            if (err) console.log("there was an error while setting your token. you will have to add it manually in shell/configs/plugbot/tokens")
        })
    })

    NZTK.moveFile('./programs/plugbot.app.js', '../../../programs/plugbot.app.js', "there was an error while moving the app file.", true)
    fs.rename('./SHELL/temp/NZPM/plugbot', './SHELL/other/plugbot', (err) =>{

        if(err) console.log("there was an error while moving the commands")
    })
    fs.rename("./SHELL/temp/NZPM/plugbot/configs/plugbot", "./SHELL/configs/plugbot", (err) =>{

        if(err) console.log("there was an error while moving config and token files")
    })
    fs.rename("./SHELL/temp/NZPM/plugbot/other/PBTKModules", "./SHELL/other/PBTKModules", (err) =>{

        if(err) console.log("there was an error while installing the plugbot toolkit.")
    })
    NZTK.moveFile("./SHELL/temp/NZPM/plugbot/other/PBTK.js", "./SHELL/other/PBTK.js")

    fs.appendFile('./SHELL/configs/NZPM/installed.txt', "plugbot", (err) =>{

        if(err) console.log("there was an error adding PB to the installed list")
    })
    return NZTK.log("finished installing plugbot", "NZTK", "install")
}
