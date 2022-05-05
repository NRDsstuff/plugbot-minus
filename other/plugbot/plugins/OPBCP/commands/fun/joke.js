module.exports = {

    name: "joke",
    run: (msg, args, client, NZTK, user) =>{

        const PBTKc = require('../../../../../PBTK')
        const PBTK = new PBTKc("OPBCP", client, user)

        //bot-wide variables or whatever

        const joke = require("one-liner-joke").getRandomJoke;
        const daJoke = joke({ exclude_tags: ["dirty", "marriage", "sex", "death"] })
        .body

        PBTK.reply(msg, daJoke)
    }
}