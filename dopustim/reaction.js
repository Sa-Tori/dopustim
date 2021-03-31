//'use strict';
const Discord = require('discord.js');
const client = new Discord.Client();

const poetry = require('./poetry.json');
const flower = require('./poetry.json');
const { fire, tea } = require('./poetry.json');
const ahegao = require('./poetry.json');
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
    if (msg.author.id === "542663623789641729" && (getRandom(1, 7) == 4) && msg.content.toLowerCase().indexOf("нов") == -1 && msg.content.toLowerCase().indexOf("год") == -1) {
        const fire = poetry.fire;
        const randomIndex = Math.floor(Math.random() * fire.length);
        const fir = fire[randomIndex];
        const reactionEmoji = client.emojis.cache.get(fir);
        msg.react(reactionEmoji);
    };
    if ((msg.author.id === "654810705903484949" && (getRandom(0, 2) == 1)) || (msg.guild.id == "532954366571708427" && (msg.content.toLowerCase().indexOf("чай") != -1 || msg.content.toLowerCase().indexOf("чая") != -1))) {
        if (msg.content.toLowerCase().indexOf("новый год") != -1) return;
        const tea = poetry.tea;
        const randomIndex = Math.floor(Math.random() * tea.length);
        const flot = tea[randomIndex];
        const reactionEmoji = client.emojis.cache.get(flot);
        msg.react(reactionEmoji);
    };
    /*if (msg.content.toLowerCase().indexOf("ов") != -1 && msg.content.toLowerCase().indexOf("год") != -1) {
        const rng = getRandom(1, 5);
        if (rng == 1) {
            msg.react("768779785114484736");
            msg.react("768779737765511169");
            msg.react("768779760456302602");
        }
        if (rng == 2) {
            msg.react("789577059315613696");
            msg.react("789577035898421258");
            msg.react("789577009453858816");
            msg.react("789576988112584704");
            msg.react("789576942172372992");
            msg.react("789576909108281346");
        }
        if (rng == 3) {
            msg.react("789573460417314876");
            msg.react("789573427669106709");
            msg.react("789573398623551569");
            msg.react("789573370861453313");
            msg.react("789573337596166144");
            msg.react("789573307594571787");
            msg.react("789573263855583313");
        }
        if (rng == 4) {
            msg.react("789566255996076032");
            msg.react("789566219580735498");
            msg.react("789566183707115530");
        }
        if (rng == 5) {
            msg.react("789559203345858612");
            msg.react("789559170767912970");
            msg.react("789559132767125544");
            msg.react("789559101205643294");
        }
    }; 
    if (msg.content.toLowerCase().indexOf("зажги") != -1 || msg.content.toLowerCase().indexOf("гори") != -1) {
        const ng = poetry.ng;
        const randomIndex = Math.floor(Math.random() * ng.length);
        const emoji = ng[randomIndex];
        msg.channel.send(emoji);
    };*/
    if (msg.content.toLowerCase().indexOf("хлеп") != -1) {
        msg.channel.send("<a:g2774:760531480824512512>");
    };
    if (msg.author.id === "542663623789641729" && (getRandom(0, 4) == 1) && msg.content.length == 0
        && msg.channel.id == "804838051729637396" && msg.channel.id == "625758087554400266" && msg.channel.id == "816351964278292541" ) {
        const ahegao = poetry.ahegao;
        const randomIndex = Math.floor(Math.random() * ahegao.length);
        const ah = ahegao[randomIndex];
        msg.react(ah);
    };
});
});

client.on("message", (msg) => {
  if (msg.content === "пика") {
        msg.channel.send("<a:cda8:526723928815566848>");
    };
});

client.login(process.env.BOT_TOKEN);
