'use strict';
const Discord2 = require("discord.js");
const client2 = new Discord2.Client();

client2.on("ready", () => {
    console.log("Команды Мерлая готовы.");
    
});

function say(msg) {
    try {
        let p1 = msg.content.indexOf(' ');
        let text = msg.content.substring(p1 + 1);
        p1 = text.indexOf(' ');
        let ch_id = text.substring(0, p1);
        text = text.substring(p1 + 1);
        client.channels.cache.get(ch_id).send(text);
        msg.delete();
    } catch {
        msg.reply("ERROR!!");
    }
}

client2.on('message', (msg) => { 
    if (msg.content.startsWith("msay") && (msg.author.id === "542663623789641729" || msg.author.id === "478669590365339649")) {
        say(msg);
    };
});


client2.login(process.env.BOT_TOKEN2);

