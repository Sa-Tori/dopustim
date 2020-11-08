//'use strict';
const Discord = require('discord.js');
const client = new Discord.Client();

const poetry = require('./poetry.json');
const flower = require('./poetry.json');

client.on('ready', () => {
  console.log('Реакции готовы');
});

function getRandom(l, r) {
    return Math.round((Math.random() * r)) % (r - l) + l;
}

client.on("message", (msg) => {
    if (msg.author.id === "519186885331910676" && (getRandom(0, 2) == 1)) {
        const flower = poetry.flower;
        const randomIndex = Math.floor(Math.random() * flower.length);
        const flo = flower[randomIndex];
        msg.react(flo);  
    };
    /*if (msg.author.id === "542663623789641729") {
        msg.react("<:mme:625115196637315124>");  
    };*/
});


client.login(process.env.BOT_TOKEN);