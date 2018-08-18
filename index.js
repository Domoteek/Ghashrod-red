const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = require('./index.json');
const token = process.env.token;
var PREFIX = "!";
    
bot.on('ready', function() {
    bot.user.setActivity("ghashrod-red, !h");
    console.log("Je suis prêt !")
});
    
bot.on('message', async function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;
    var args = message.content.substring(PREFIX.length).split(" ");
switch(args[0].toLowerCase()) {
    case "invite":
    message.channel.send("", {
        embed: {
            color: 0xFF0000,
            author: message.author.name,
            title: '',
            fields: [{
                name: "Lien d'invitation discord",
                value: "https://discord.gg/BNNM6nj",
                inline: false
            }],
            footer: {
                footer: "Partager ce lien à tous vos amis !",
                },
        }
    });
    break;
    case "h":
    message.channel.send("", {
        embed: {
            color: 0xFF0000,
            author: message.author.name,
            title: '',
            fields: [{
                name: "Lien d'invitation discord",
                value: "https://discord.gg/BNNM6nj",
                inline: false
            }],
            footer: {
                footer: "Partager ce lien à tous vos amis !",
                },
        }
    });
    break;
}

   
});
    
bot.login(token);
