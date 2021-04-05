'use strict';
const Discord = require("discord.js");
const client = new Discord.Client();

//файлы

const greeting = require("./dopustim/greeting");
const replicas = require("./dopustim/replicas");
const avatars = require("./dopustim/avatars");
const embeds = require("./dopustim/embeds");
const theult = require("./dopustim/theult");
const reaction = require("./dopustim/reaction");
const answer = require("./dopustim/answer");
const commands = require("./dopustim/commands");

//запуск

client.on("ready", () => {
    console.log("Центр хранения файлов.");
    client.user.setPresence({
        status: 'online',
        activity: {
            type: 'WATCHING',
            name: 'в бездну',
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


const replicas2 = require("./merlai/replicas");
const embeds2 = require("./merlai/embeds");
const reaction2 = require("./merlai/reaction");
const answer2 = require("./merlai/answer");
const commands2 = require("./merlai/commands");

client2.on("ready", () => {
    console.log("Центр управления");
    client2.user.setPresence({
        status: 'online',
        activity: {
            type: 'WATCHING',
            name: 'на бухло',
        },
    });
});

client2.on("message", (msg) => {
    if (msg.content.startsWith("Изменения приняты.") && msg.author.id === "523116257390886954") {
        msg.channel.send("```xl\n'Чуть потускнело.. но всё же работает!'```");
    }
});

client2.login(process.env.BOT_TOKEN2);
