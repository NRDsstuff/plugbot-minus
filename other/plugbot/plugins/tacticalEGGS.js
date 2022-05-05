module.exports = {
    name: "shhh",
    run: (client, args, line, user, PBCMD, PBPlugins, PBRL, programs) =>{

        // load other functions

        const PBTKc = require('../../PBTK')
        const PBTK = new PBTKc("TomFoolerysEpicPlugin", client, user)

        const NZTKc = require('../../NZTK')
        const NZTK = new NZTKc("TomFoolerysEpicPlugin", user)

        NZTK.log.success("all easter eggs loaded", 2, "æææ")

        client.on("messageCreate", (msg) =>{

            let thej = msg.content.toLowerCase()

            if(thej.includes("nrd")) PBTK.reply(msg, "yo its me");
            if(thej.includes("786127059020808192")) PBTK.reply(msg, "yo its me");
            if(thej.includes("jeyphr")) PBTK.reply(msg, "don't mention his name");
            if(thej.includes("667537333469446175")) PBTK.reply(msg, "don't mention his name");
            if(thej.includes("867739920583491605")) PBTK.reply(msg, "don't mention his name");
            if(thej.includes("ital")) PBTK.reply(msg, "https://cdn.discordapp.com/attachments/932002355006824518/970307778805641216/unknown.png?size=4096");
            if(thej.includes("among")) PBTK.reply(msg, "cease");
            if(thej.includes("amog")) PBTK.reply(msg, "cease");
            if(thej.includes("plug")) PBTK.reply(msg, "WHO WOKE ME UP ÆÆÆÆÆÆÆÆ");
            if(thej.includes("poland")) PBTK.reply(msg, "POLSKA GUROM");
            if(thej.includes("satoor")) PBTK.reply(msg, "you mentioned that muslim retard?");
            if(thej.includes("602794822155239425")) PBTK.reply(msg, "you mentioned that muslim retard?");
            if(thej.includes("nrij")) PBTK.reply(msg, "bruh momento");
            if(thej.includes("the j")) PBTK.reply(msg, "bruh momento");
            if(thej.includes("hacker")) PBTK.reply(msg, "no im not");
            if(thej.includes("bri")) PBTK.reply(msg, "did somebody say broeish?");
            if(thej.includes("nuke")) PBTK.reply(msg, "WHERE WHAT WHA- oh wait is this a false alert"); 
        })
    }
}
