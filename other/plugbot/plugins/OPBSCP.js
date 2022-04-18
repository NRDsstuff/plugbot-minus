module.exports = {

    name: "official plugbot SLASH command pack",
    run: (client, PBPlugs, PBCMD, user) =>{

        const { REST } = require('@discordjs/rest');
        const { Routes } = require('discord-api-types/v9');
        const NZTK = require('../../NZTK')
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

            console.log(commandList)

            console.log(command)
        }

        const rest = new REST({ version: '9' }).setToken(NZTK.findinjson(tokens, user.name));

        (async () =>{

            try{

                console.log('Started refreshing application (/) commands.');
                console.log(commands)

                await rest.put(

                    Routes.applicationCommands(clientId),
                    { body: commands }
                );

                console.log('Successfully reloaded application (/) commands.');

            }catch(error){

                console.error(error);
            }
        })();

        client.on('interactionCreate', async (interaction) =>{

            if(!interaction.isCommand) return
            let name = interaction.commandName
            let options = interaction.options

            console.log(name)

            let commandMethod = commandList.get(name)

            console.log(commandMethod)

            if(!commandMethod) return

            const args = options._hoistedOptions

            await interaction.deferReply()
            commandMethod.run(client, interaction, args, options)
        })
    }
}