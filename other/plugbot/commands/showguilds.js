module.exports = {
    name: "showguilds",
    desc: "shows all the guilds the bot is in",
    usage: "showguilds",
    run: (client) =>{

        console.log(client.guilds)
    }
}