module.exports = (guild, member, roleName, plugin, NZTK, client) =>{
    
    let server = client.guilds.cache.get(guild)
    let role = server.roles.get(roleName)
    NZTK.log(`found role with an id of ${roleName}`, plugin, "giverole")

    member.roles.add(role)
    NZTK.log(`gave role ${roleName}`, plugin, "giverole")
}