'use strict';
const Discord = require("discord.js");
const client = new Discord.Client();

//дополнение

const poetry = require('./poetry.json');
const {noprefix, shprefix} = require('./poetry.json');

//сообщения

client.on ("ready", () => {
    console.log("Ответы Картуса готовы");
});

client.on("message", (msg) => {
    /*if (msg.content.startsWith("ping")) {
        if (msg.author.id === "224197682510561280") {
            msg.channel.send("Отстань от Кофуку ");
        } else {
            msg.channel.send("pong");
        }
    };*/
    if (msg.content === "pong" && msg.author.id === "519186885331910676") {
            msg.channel.send('ping');
    };
    if (msg.content.startsWith("картус где ганги")) {
            msg.channel.send("Никакого уважения..");
    };
    if (msg.content.startsWith("Картус привет")) {
            msg.channel.send("Привет, а ты кто?");
    };
    if (msg.content === "Ghbdtn") {
            msg.reply(' я тебя не понял, но привет');
    };
    if (msg.content === "одиночество") {
            msg.channel.send('loneliness');
    };
    if (msg.content.startsWith("я тут подумал")) {
            msg.channel.send('Не говори вслух, ты понижаешь IQ всего сервера');
    };
    if (msg.content.startsWith("Допустим")) {
            msg.channel.send('???');
    };
    if (msg.content.startsWith("Мери")) {
            msg.channel.send('Где он??');
    };
    if (msg.content.startsWith(`${noprefix}`)) {
            msg.channel.send("Ты за кого меня принимаешь??");
    };
    if (msg.content.startsWith(`${shprefix}`)) {
            msg.channel.send("Не повышай на меня шрифт!");
    };
    if (msg.content.toLowerCase().indexOf("твой папочка вернулся")!=-1 && msg.author.id == "478669590365339649") {
            msg.channel.send("Мог бы и не возвращаться <:084:592420618084024320>");
    };
    
    if (msg.content.startsWith("kds")) {
            msg.channel.send("<a:fire_green:768469897398190081><a:fire_green:768469897398190081><a:fire_green:768469897398190081><a:fire_green:768469897398190081><a:fire_green:768469897398190081>");
    };
    /*if (msg.content.startsWith("С добрым утром")) {
        if (msg.author.id === "297089757651927040") {
            msg.channel.send("Здравствуй, <@" + msg.author.id + "> <:089:684120628734722048> ");
        } else {
            msg.channel.send("С каких пор утро доброе <:035:737098587728510996> ");
        }
    }*/
    if (msg.content.toLowerCase().indexOf("картафилиус")!=-1 && msg.author.id != "172002275412279296" && msg.author.id != "276060004262477825"){
        if (msg.author.id == "542663623789641729"){
            msg.channel.send("Самовлюбленность..");
        } else {
            msg.channel.send("Время не стоит, \nЗло ли ты таишь в себе..\nНе поминай в суе.");
        };
    };
    if (msg.content.toLowerCase() == "лень") {
            msg.channel.send("Олень");
    };
    if (msg.content === "Олень" && msg.author.id === "523116257390886954") {
            msg.channel.send('Тюлень');
    };
    if (msg.content === "Тюлень" && msg.author.id === "523116257390886954") {
            msg.channel.send('Пельмень');
    };
    if (msg.content.startsWith("MEH")) {
            msg.channel.send("```diff\n- Тебе расчесать?```");         
    };
    /*if (msg.content.toLowerCase().indexOf("привет")!=-1 && msg.author.id === "542663623789641729") {
            msg.channel.send("Где ты пропала?");
    };*/
    if ((msg.content.toLowerCase().indexOf("523116257390886954") != -1 || msg.content.toLowerCase().indexOf("картус") != -1) && msg.content.toLowerCase().indexOf("?") != -1) {
        let q = ['да', 'нет', 'не знаю', 'наверное да', 'наверное нет'];
        let c = Math.floor(Math.random() * q.length);
        const a = q[c];
        msg.channel.send(a);
    };
});

/*client.on("message", async (msg) => {
    try {
        if (msg.content.toLowerCase().indexOf("привет") != -1 && msg.author.id === "542663623789641729" && msg.content != "Картус привет") {
            let delay = async (duration) => { await new Promise(resolve => setTimeout(resolve, duration)) };
            await delay(5 * 1000);
            msg.channel.send("Где ты пропала?");
        }
    } catch (err) { console.log(err); };
   
});*/


client.login(process.env.BOT_TOKEN);

