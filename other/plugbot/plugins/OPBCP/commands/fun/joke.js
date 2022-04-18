module.exports = {

    name: "joke",
    run: (msg) =>{

        //bot-wide variables or whatever

        const joke = require("one-liner-joke").getRandomJoke;
        const daJoke = joke({ exclude_tags: ["dirty", "marriage", "sex", "death"] })
        .body

        // functions

        const NZTK = require('../../../../../NZTK')

        msg.channel.send(
            
            daJoke
        );

        NZTK.log(`i said unfunny (${daJoke})`, "OPBCP", "joke")
    }
}