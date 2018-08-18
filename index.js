const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = require('./index.json');
const token = process.env.token;
const prefix = (cfg.prefix);


bot.on('ready', function() {
    console.log("Je suis prêt !")
});

bot.on('message', message => {
    if(message.content === prefix) {
        if(message.content ==='!hello') {
            message.reply('world !');
        }
    }
});

bot.login(token);
