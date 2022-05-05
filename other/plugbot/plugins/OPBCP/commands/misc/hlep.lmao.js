module.exports ={

    name: "hlep",
    run: (msg, args, client, NZTK, user) =>{

        const PBTKc = require('../../../../../PBTK')
        const PBTK = new PBTKc("OPBCP", client, user)

        PBTK.reply(msg, `lmao you found the easter eg, so enjoy the shithole that is the reward: DISCORDLINK/brJWK6mqW9`)
    }
}