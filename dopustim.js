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
    if (msg.content.startsWith("Центр управления в норме.") && msg.author.id === "776445694587306028") {
        msg.channel.send("Ну я типа живой, да.");
    }
});

client.login(process.env.BOT_TOKEN);


const Discord2 = require("discord.js");
const client2 = new Discord2.Client();

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
    if (msg.content.toLowerCase().indexOf("отчет") != -1 && msg.author.id === "542663623789641729") {
        msg.channel.send("Центр управления в норме.");
    }
});

client2.login(process.env.BOT_TOKEN2);
