const Discord2 = require("discord.js");
const client2 = new Discord2.Client();
const { Client, MessageEmbed } = require('discord.js');
const poetry = require('./poetry.json');

client2.on ("ready", () => {
 console.log("Control Мерлая готов");
});


client2.on('message', msg => {
    let control = client2.channels.cache.get('878520465856036935');
    if ((msg.content.toLowerCase().indexOf("треш") != -1 || msg.content.toLowerCase().indexOf("tresh") != -1) && msg.channel.id != "878520465856036935") {
        const tresh = poetry.tresh;
        const randomIndex = Math.floor(Math.random() * tresh.length);
        const word = tresh[randomIndex];
        const embed = new MessageEmbed()
            .setColor(0xf7fcff)
            .setImage(word);
        msg.channel.send(embed);
        control.send(embed);
        control.send("```" + word + "```");
    };
});
 


client2.login(process.env.BOT_TOKEN2);
