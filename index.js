const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token
const PREFIX = ("/");


bot.on('ready', function() {
    console.log("Je suis prêt !");
});

bot.on('message', message => {
    if(message.content === PREFIX) {
        if(message.content ==='!hello') {
            message.reply('world !');
        }
    }
});

bot.login(token); //token
