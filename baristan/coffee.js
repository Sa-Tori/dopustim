'use strict';
const Discord3 = require("discord.js");
const client3 = new Discord3.Client();

const poetry = require('./poetry.json');

client3.on("ready", () => {
    console.log("Кофе готов!");
});

function isFinded(s, ate) {
    for (var i = 0; i < ate.length; i++) {
        if (s.toLowerCase().indexOf(ate[i]) != -1) {
            return true;
        }
    }
    return false;
}

function cofreact(msg) {
    try {
        let p1 = msg.content.indexOf(':');
        let text = msg.content.substring(p1 + 1);
        p1 = text.indexOf('>');
        let ch2 = text.substring(7, p1);
        text = text.substring(p1 + 1);
        msg.react(ch2);
    } catch {
        msg.reply("**ERROR!!**");
    }
}

client3.on("message", async (msg) => {
    const acof = poetry.acof;
    const nocof = poetry.nocof;
    if (isFinded(msg.content, nocof)) return;
    if (isFinded(msg.content, acof) && msg.author.id != "836240368206872576" && (msg.guild.id == "532954366571708427" || msg.guild.id == "466006517288665099")) {
        const cof = poetry.cof;
        const randomIndex = Math.floor(Math.random() * cof.length);
        const flot = cof[randomIndex];

        const coffire = poetry.coffire;
        const randcoffire = Math.floor(Math.random() * coffire.length);
        const rtf = coffire[randcoffire];

        const pcof = poetry.pcof;
        const randpcof = Math.floor(Math.random() * pcof.length);
        const word = pcof[randpcof];
        msg.channel.send(rtf + " " + word);
        msg.channel.send(flot);
    };
    if (msg.content === "<:cof108:851846442674946088>" && msg.author.id === "836240368206872576") {
        msg.channel.send('Приятно пожевать <:096:592420847017263134>');
    };
    if (msg.content.startsWith("<:cof0") && msg.author.id === "836240368206872576") {
        cofreact(msg);
    };

});


client3.login(process.env.BOT_TOKEN);
