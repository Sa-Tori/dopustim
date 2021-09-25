'use strict';
const Discord2 = require("discord.js");
const client2 = new Discord2.Client();

//сообщения

client2.on("ready", () => {
    console.log('Работа Мерлая готова');
});

client2.on('message', async (msg) => {
    let bump = client2.channels.cache.get('570922055407501332');
    try {
        if (msg.embeds.length > 0 && msg.embeds[0].description.toLowerCase().indexOf("server bumped by") != -1) {
            let delay = async (duration) => { await new Promise(resolve => setTimeout(resolve, duration)) };
            await delay(4 * 60 * 60 * 1000);
            bump.send('<@&891331557300764712> Пора бампать!');
        }
    } catch (err) { console.log(err); };
});

client2.login(process.env.BOT_TOKEN2);
