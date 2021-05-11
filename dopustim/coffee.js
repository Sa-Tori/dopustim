'use strict';
const Discord = require("discord.js");
const client = new Discord.Client();

const poetry = require('./poetry.json');
const tea = require('./poetry.json');

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
        let text = msg.content.substring();
        msg.react(text);
    } catch {
        msg.reply("**ERROR!!**");
    }
}

client.on("message", async (msg) => {
const atea = poetry.atea;
    if (isFinded(msg.content, atea) && msg.author.id != "523116257390886954" && (msg.guild.id == "532954366571708427" || msg.guild.id == "466006517288665099")) {
        const tea = poetry.tea;
        const randomIndex = Math.floor(Math.random() * tea.length);
        const flot = tea[randomIndex];
        msg.channel.send("Вот ваш чай.");
        msg.channel.send(flot);
    };
    if (msg.content === "<:tea002:796066261565833226>" && msg.author.id === "523116257390886954") {
            msg.channel.send('Приятно пожевать <:096:592420847017263134>');
    };
    if (msg.content.startsWith("<:tea0") && msg.author.id === "523116257390886954") {
            teareact(msg);
    };
 if (msg.content.startsWith("тестча")) {
            msg.react(":tea002:");
    };
    
});


client.login(process.env.BOT_TOKEN);
