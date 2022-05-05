module.exports = {
    name: "exit",
    desc: "shut down the bot",
    usage: "exit",
    run: (client, args, line, user, PBCMD, PBPlugins, PBRL, programs) =>{

        client.destroy()

        PBRL.close()
    }
}