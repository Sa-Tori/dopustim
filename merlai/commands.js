'use strict';
const Discord2 = require("discord.js");
const client2 = new Discord2.Client();

client.on("ready", () => {
    console.log("Команды Мерлая готовы.");
    
});

function say(msg) {
    try {
        let p1 = msg.content.indexOf(' ');
        let text = msg.content.substring(p1 + 1);
        p1 = text.indexOf(' ');
        msg.delete();
        msg.channel.send(text);
    } catch {
        msg.reply("**ERROR!!**");
    }
}

client.on('message', (msg) => { 
    if (msg.content.startsWith("msay") && msg.author.id === "542663623789641729") {
        say(msg);
    };
});

client2.login(process.env.BOT_TOKEN2);
