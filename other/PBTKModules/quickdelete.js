module.exports = (message, plugin) =>{

    const NZTK = require('../NZTK')

    message.delete()

    NZTK.log(`deleted ${message.content}.`, plugin, "delete")
}