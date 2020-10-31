'use strict';
const Discord = require("discord.js");
const client = new Discord.Client();

//подключенные файлы
//const greeting = require("./greeting");

const replicas = require("./replicas");
const avatars = require("./avatars");
const embeds = require("./embeds");
const theult = require("./theult"); 

//сообщения

client.on ("ready", () => {
 console.log("Ответы готовы");
 client.user.setPresence({
        game: {
            name: 'Я наблюдаю',
            type: 1
        },
        status: 'online'
    })
 });


client.on("message", (msg) => {
    if (msg.content.startsWith("ping")) {
        if (msg.author.id === "224197682510561280") {
            msg.channel.send("Отстань от Кофуку ");
        } else {
            msg.channel.send("pong");
        }
    }
    if (msg.content.startsWith("картус где ганги")) {
            msg.channel.send("Никакого уважения..");
    }
    if (msg.content.startsWith("Картус привет")) {
            msg.channel.send("Привет, а ты кто?");
    }
    if (msg.content === "Ghbdtn") {
            msg.reply(' я тебя не понял, но привет');
    }
    if (msg.content === "одиночество") {
            msg.channel.send('loneliness');
    }
    if (msg.content.startsWith("я тут подумал")) {
            msg.channel.send('Не говори вслух, ты понижаешь IQ всего сервера');
    }
    if (msg.content.startsWith("Допустим")) {
            msg.channel.send('???');
    }
    if (msg.content.startsWith("k!help")) {
            msg.channel.send("Ты за кого меня принимаешь??");
    }
    if (msg.content.startsWith("K!HELP")) {
            msg.channel.send("Не повышай на меня шрифт!");
    }
    if (msg.content.startsWith("С добрым утром")) {
        if (msg.author.id === "297089757651927040") {
            msg.channel.send("Здравствуй, <@" + msg.author.id + "> <:089:684120628734722048> ");
        } else {
            msg.channel.send("С каких пор утро доброе <:035:737098587728510996> ");
        }
    }
    if (msg.content.toLowerCase().indexOf("картафилиус")!=-1){
            msg.channel.send("Время не стоит, \nЗло ли ты таишь в себе..\nНе поминай в суе.");
    }
    if (msg.content.toLowerCase() == "лень") {
            msg.channel.send("Олень");
    }
    if (msg.content === "Олень" && msg.author.id === "523116257390886954") {
            msg.channel.send('Тюлень');
    }
    if (msg.content === "Тюлень" && msg.author.id === "523116257390886954") {
            msg.channel.send('Пельмень');
    }
    if (msg.content.startsWith("MEH")) {
            msg.channel.send("```diff\n- Тебе расчесать?```");         
    }
});






client.login(process.env.BOT_TOKEN);