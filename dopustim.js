'use strict';
const Discord = require("discord.js");
const client = new Discord.Client();

//подключенные файлы
//const greeting = require("./greeting"); 

const avatars = require("./avatars");
const embeds = require("./embeds");
const theult = require("./theult"); 

//сообщения

client.on ("ready", () => {
 console.log("Ответы готовы");
});


client.on("message", (msg) => {
    if (msg.content.startsWith("ping")) {
            msg.channel.send("pong");
    }
    if (msg.content.startsWith("Картус где ганги?")) {
            msg.channel.send("R");
    }
    if (msg.content.startsWith("Картус привет")) {
            msg.channel.send(" Привет, привет");
    }
    if (msg.content === "Ghbdtn") {
            msg.reply(' я тебя не понял, но привет');
    }
    if (msg.content === "одиночество") {
            msg.channel.send('loneliness');
    }
    if (msg.content.startsWith("я тут подумал")) {
            msg.channel.send('Не говори вслух, ты понижаешь IQ всей улицы');
    }
    if (msg.content.startsWith("@Допустим")) {
            msg.channel.send('???');
    }
    if (msg.content.startsWith("Картус хочешь роль?")) {
            msg.channel.send("Дайте мне пожалуйста роль @Пьяный Картус");
    }
    if (msg.content.startsWith("С добрым утром")) {
        if (msg.author.id === "297089757651927040") {
            msg.channel.send("Здравствуй, <@" + msg.author.id + "> <:089:684120628734722048> ");
        } else {
            msg.channel.send("С каких пор утро доброе <:035:737098587728510996> ");
        }
    }

});



/*client.on('message', msg => {
if (msg.content === 'рандом') {
  const randomWords = [
    ["key1"],
    ["key2"],
    ["key3"],
    ["key4"],
    ["key5"],
    ["key6"]
  ];

  const randomIndex = Math.floor(Math.random() * randomWords.length);
  const word = randomWords[randomIndex];

  msg.channel.send(word);
}
});

*/




client.login(process.env.BOT_TOKEN);