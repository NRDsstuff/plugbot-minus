module.exports = {

    name: "official plugbot SLASH command pack",
    run: (client, PBPlugs, PBCMD, user) =>{

        const { REST } = require('@discordjs/rest');
        const { Routes } = require('discord-api-types/v9');
        const NZTKc = require('../../NZTK')
        const NZTK = new NZTKc("OPBSCP", user)
        const fs = require('fs');

        const config = require('../../../configs/plugbot/mainConf.json')
        const tokens = require('../../../configs/plugbot/tokens.json')

        const commands = [];
        const commandList = new Map()
        const commandFiles = fs.readdirSync('./SHELL/other/plugbot/plugins/OPBSCP/commands').filter(file => file.endsWith('.js'));

        console.log(commandFiles)

        // Place your client and guild ids here
        const clientId = "935941610280218724";
        const guildId = "842403138111275039";

        for(const file of commandFiles){
            
            const command = require(`./OPBSCP/commands/${file}`);
            commandList.set(command.data.name, command)
            commands.push(command.data.toJSON());

            NZTK.log.success(`registered command ${command.data.name}`, 2, "AAAAAAAAAH")
        }

        let token

        NZTK.findInJson(tokens, user.name, (data) =>{token = data})

        const rest = new REST({ version: '9' }).setToken(token);

        (async () =>{

            try{

                NZTK.log.normal('Started refreshing application slash commands.', 1, "cmdhandler")

                await rest.put(

                    Routes.applicationCommands(clientId),
                    { body: commands }
                );

                NZTK.log.success('Successfully reloaded application slash commands.', 2, "Ą");

            }catch(error){

                NZTK.log.critError(error);
            }
        })();

        client.on('interactionCreate', async (interaction) =>{

            if(!interaction.isCommand) return
            let name = interaction.commandName
            let options = interaction.options

            NZTK.log.normal(`recieved command ${name}`, 1, "cmdhandler")

            let commandMethod = commandList.get(name)

            if(commandMethod === undefined || !commandMethod){
                
                NZTK.critError(`cannot find command ${name}. starting panic`)
                interaction.reply(`there was a fatal error while trying to load the command ${name}`)
                return
            }

            const args = options._hoistedOptions

            await interaction.deferReply()
            NZTK.log.normal(`running command ${name}`, 1, "cmdhanlder")
            commandMethod.run(client, interaction, args, options, user, NZTK)
            NZTK.log.success(`command ${name} completed successfully`)
        })
    }
}