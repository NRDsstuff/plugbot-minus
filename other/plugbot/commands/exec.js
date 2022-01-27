module.exports = {
    name: "exec",
    desc: "execute a command without shutting down the bot",
    usage: "exec [command]",
    run: (client, args, line) =>{       

        const shell = require('shelljs')

        const thrArgs = args.shift()
        const cmd = thrArgs.join(" ")

        shell.exec(cmd)
    }
}