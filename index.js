const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = require('./index.json');
const token = process.env.token;
var PREFIX = "!";
    
bot.on('ready', function() {
    bot.user.setActivity("ghashrod-red, /help");
    console.log("Je suis prêt !")
});
    
bot.on('message', async function(message) {
    if (message.content === PREFIX) {
        if(message.content ==='hello') {
                message.reply('world !');
        }
    }
});
    
bot.login(token);
