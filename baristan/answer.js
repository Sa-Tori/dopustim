'use strict';
const Discord3 = require("discord.js");
const client3 = new Discord3.Client();



client3.on("ready", () => {
    console.log('Ответы Баристана готовы');
});

client3.on("message", (msg) => {
    if (msg.content.startsWith("Баристан") && msg.author.id == "776445694587306028") {
            msg.channel.send("Здравствуйте, я ваш новый бариста!");
    }
});

client3.login(process.env.BOT_TOKEN3);
