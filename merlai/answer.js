'use strict';
const Discord2 = require("discord.js");
const client2 = new Discord2.Client();

client2.on("ready", () => {
    console.log('Ответы Мерлая готовы');
});

client2.on("message", async (msg) => {
    try {
        if (msg.content.toLowerCase().indexOf("умерла я")!=-1 && msg.author.id === "542663623789641729") {
            let delay = async (duration) => { await new Promise(resolve => setTimeout(resolve, duration)) };
            await delay(5 * 1000);
            msg.channel.send("Клянусь, нет её у меня!");
        }
    } catch (err) { console.log(err); };
});

/*client2.on("message", (msg) => {
  if (msg.content.toLowerCase().indexOf("умерла я")!=-1 && msg.author.id === "542663623789641729") {
            msg.channel.send("Клянусь, нет её у меня!");
    };
});*/

client2.login(process.env.BOT_TOKEN2);
