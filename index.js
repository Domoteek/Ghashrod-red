const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX ="!";

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

bot.login('NDgwMjk5ODczMDg2ODY1NDA4.Dll-rg.FDlO39gLudofTUhjjOAIAthcWfQ') //token