const Discord = require("discord.js");
const config = require("./config.json");
const cmds = require("./commmands.js");
const music = require('./music.js');
const tool = require('./tool.js');
const prompt = require('prompt');
const colors = require("colors");
const cfg = require('./index.json');
prompt.message = "";
prompt.delimiter = '';
const bot = new Discord.Client();
const token = process.env.token;
var PREFIX = "!";
var dispatcher;

//bot.on('ready', function() {
    //bot.user.setActivity("ghashrod-red, !h");
    //console.log("Je suis prêt !")
//});
bot.on('ready', () => {
    console.log(`${bot.user.username} Starting.`);
    console.log(`Serving ${bot.guilds.size} guilds.`);

    bot.user.setActivity(config.PREFIX + 'help');
});

bot.on('message', msg => {
    if(msg.author.bot || msg.channel.type != 'text')
        return;
    if(!msg.content.startsWith(config.PREFIX))
        return;
    let cmd = msg.content.split(/\s+/)[0].slice(config.PREFIX.length).toLowerCase();
    getCmdFunction(cmd)(msg);
})

bot.on('error', (e) => Console.log(e));
bot.on('warn', (e) => Console.log(e));

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

function getCmdFunction(cmd){
    const COMMANDS = {
        'help': cmds.help,
        'music': music.processCommands,
    }
    return COMMANDS[cmd] ? COMMANDS[CMD] : () => {};
}
