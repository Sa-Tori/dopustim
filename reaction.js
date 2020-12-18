//'use strict';
const Discord = require('discord.js');
const client = new Discord.Client();

const poetry = require('./poetry.json');
const flower = require('./poetry.json');
const { fire, tea } = require('./poetry.json');
//const tea = require('./poetry.json');

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
        const reactionEmoji = client.emojis.cache.get(flo);
        msg.react(reactionEmoji);  
    };
  if (msg.author.id === "542663623789641729" && msg.content.toLowerCase().indexOf(" присутствия души")!=-1) { 
msg.react("768469879211687936");
msg.react("768469897398190081");
msg.react("768469924401250325");
msg.react("768469943288332299");
}; 
    /*if (msg.author.id === "155149108183695360") {
        msg.react("<:mme:625115196637315124>");  
    };
    if (msg.author.id === "542663623789641729") {
        //msg.react("<a:fire_green:768469897398190081>");
        const reactionEmoji = client.emojis.cache.get("768469924401250325");
        msg.react(reactionEmoji);
        //msg.react("<:mme:625115196637315124>");
        //msg.react("💚");
        //msg.react("<a:nya:526499575817699348>");
    };*/
    if (msg.author.id === "542663623789641729" && (getRandom(0, 4) == 2)) {
        const fire = poetry.fire;
        const randomIndex = Math.floor(Math.random() * fire.length);
        const fir = fire[randomIndex];
        const reactionEmoji = client.emojis.cache.get(fir);
        msg.react(reactionEmoji);
    };
    if (msg.author.id === "654810705903484949" && (getRandom(0, 4) == 1)) {
        const tea = poetry.tea;
        const randomIndex = Math.floor(Math.random() * tea.length);
        const flot = tea[randomIndex];
        const reactionEmoji = client.emojis.cache.get(flot);
        msg.react(reactionEmoji);  
    };
    if (msg.author.id === "654810705903484949" && msg.content.toLowerCase().indexOf("Новый год идет") != -1) {
        msg.react("768779785114484736");
        msg.react("768779737765511169");
        msg.react("768779760456302602");
    }; 
});



client.login(process.env.BOT_TOKEN);
