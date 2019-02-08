const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("543467202364440586")
setInterval(function() {
channel.send(`im nanct the crazy lol`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
