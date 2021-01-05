'use strict';
const Discord = require("discord.js");
const client = new Discord.Client();

//файлы
//const greeting = require("./greeting");

const replicas = require("./replicas");
const avatars = require("./avatars");
const embeds = require("./embeds");
const theult = require("./theult");
const reaction = require("./reaction");
const answer = require("./answer");

//запуск

client.on("ready", () => {
    console.log("Центр хранения файлов.");
    client.user.setPresence({
        status: 'online',
        activity: {
            type: 'WATCHING',
            name: 'на бухло',
        },
    });
});

client.on("message", (msg) => {
    //if (msg.content.toLowerCase().indexOf("отчет") != -1 && msg.author.id === "542663623789641729") {
    if (msg.content.toLowerCase().indexOf("отчет") != -1 && msg.author.id === "542663623789641729") {
        msg.channel.send("Изменения приняты.");
    }
});

client.login(process.env.BOT_TOKEN);



const Discord2 = require("discord.js");
const client2 = new Discord2.Client();

const answer = require("./merlai/answer.js");

client2.on("ready", () => {
    console.log("Центр управления");
    client2.user.setPresence({
        status: 'online',
        activity: {
            type: 'WATCHING',
            name: 'в бездну',
        },
    });
});

client2.on("message", (msg) => {
    if (msg.content.startsWith("Изменения приняты.") && msg.author.id === "523116257390886954") {
        msg.channel.send("```xl\n'Чуть потускнело.. но всё же работает!'```");
    }
});

client2.login(process.env.BOT_TOKEN2);
