'use strict';
const Discord4 = require("discord.js");
const client4 = new Discord4.Client();



client4.on("message", (msg) => {
    if (msg.content.startsWith("ping")) {
            msg.channel.send("pong");
    };
    if ((msg.content.toLowerCase().indexOf("898462500293578802") != -1 || msg.content.toLowerCase().indexOf("масхел") != -1 || msg.channel.id === "921881663036874763") && msg.content.toLowerCase().indexOf("?") != -1) {
        let q = ['Да', 'Нет', 'Не знаю', 'Наверное да', 'Наверное нет', 'Возможно', 'Возможно да', 'Возможно нет', 'Не определено', 'Не спрашивай', 'Не могу ответить', 'Ага', 'Не-а'];
        let c = Math.floor(Math.random() * q.length);
        const a = q[c];
        msg.channel.send(a);
    };
});


client4.login(process.env.BOT_TOKEN4);