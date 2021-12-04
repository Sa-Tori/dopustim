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
const antinitro = require("./dopustim/antinitro");
const coffee = require("./dopustim/coffee");
const control = require("./dopustim/control");


//запуск

client.on("ready", () => {
    console.log("Картус жив!");
    let center = client.channels.cache.get('522817871370387472');
        center.send('Перезапуск приложения...');
    client.user.setPresence({
        status: 'online',
        activity: {
            type: 'PLAYING',
            name: 'Сумеречных островах',
        },
    });
});

client.on("message", (msg) => {
    if (msg.content.toLowerCase().indexOf("отчет") != -1 && msg.author.id === "542663623789641729") {
        msg.channel.send("Изменения приняты, я жиф!");
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
const antinitro2 = require("./merlai/antinitro");
const greeting2 = require("./merlai/greeting");
const control2 = require("./merlai/control");
const worker2 = require("./merlai/worker");

client2.on("ready", () => {
    console.log("Мерлай жив!");
    let center2 = client.channels.cache.get('522817871370387472');
        center2.send("```xl\n'Чуть потускнело.. но всё же работает!'```");
    client2.user.setPresence({
        status: 'online',
        activity: {
            type: 'WATCHING',
            name: 'на бухло',
        },
    });
});

client2.on("message", (msg) => {
    if (msg.content.startsWith("Изменения приняты") && msg.author.id === "523116257390886954") {
        msg.channel.send("```xl\n'Чуть потускнело.. но всё же работает!'```");
    }
});

client2.login(process.env.BOT_TOKEN2);



const Discord3 = require("discord.js");
const client3 = new Discord3.Client();


const answer3 = require("./baristan/answer");
const coffee3 = require("./baristan/coffee");
const reaction3 = require("./baristan/reaction");
const rerole3 = require("./baristan/rerole");
const greeting3 = require("./baristan/greeting");


client3.on("ready", () => {
    console.log("Баристан жив!");
    client3.user.setPresence({
        status: 'online',
        activity: {
            type: 'LISTENING',
            name: 'посетителей',
        },
    });
});

client3.on("message", (msg) => {
    if (msg.content.startsWith("Изменения приняты") && msg.author.id === "523116257390886954") {
        msg.channel.send("Кому кофе <:073:592420364429164595>");
    }
});

client3.login(process.env.BOT_TOKEN3);
