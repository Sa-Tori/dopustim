'use strict';
const Discord = require("discord.js");
const client = new Discord.Client();

const poetry = require('./poetry.json');
const {tea, ptea, teafire} = require('./poetry.json');

client.on ("ready", () => {
 console.log("Чай готов!");
});

function isFinded(s, ate) {
    for (var i = 0; i < ate.length; i++) {
        if (s.toLowerCase().indexOf(ate[i]) != -1) {
            return true;
        }
    }
    return false;
}

function teareact(msg) {
    try {
        let p1 = msg.content.indexOf(':');
        let text = msg.content.substring(p1 + 1);
        p1 = text.indexOf('>');
        let ch_id = text.substring(7, p1);
        text = text.substring(p1 + 1);
        msg.react(ch_id);
    } catch {
        msg.reply("**ERROR!!**");
    }
}

client.on("message", async (msg) => {
const atea = poetry.atea;
    if (msg.content.toLowerCase().indexOf("чаян")!=-1 || msg.content.toLowerCase().indexOf("чайн")!=-1 || msg.content.toLowerCase().indexOf("чает")!=-1) return;
    if (isFinded(msg.content, atea) && msg.author.id != "523116257390886954" && (msg.guild.id == "532954366571708427" || msg.guild.id == "466006517288665099")) {
        const tea = poetry.tea;
        const randomIndex = Math.floor(Math.random() * tea.length);
        const flot = tea[randomIndex];
     
        const teafire = poetry.teafire;
        const randteafire = Math.floor(Math.random() * teafire.length);
        const rtf = teafire[randteafire];
        
        const ptea = poetry.ptea;
        const randptea = Math.floor(Math.random() * ptea.length);
        const word = ptea[randptea];
        msg.channel.send(rtf + " " + word);
        msg.channel.send(flot);
    };
    if (msg.content === "<:tea002:796066261565833226>" && msg.author.id === "523116257390886954") {
            msg.channel.send('Приятно пожевать <:096:592420847017263134>');
    };
    if (msg.content.startsWith("<:tea0") && msg.author.id === "523116257390886954") {
            teareact(msg);
    };
    
});


client.login(process.env.BOT_TOKEN);
