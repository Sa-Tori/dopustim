//'use strict';
const Discord2 = require("discord.js");
const client2 = new Discord2.Client();

const poetry = require('./poetry.json');
const ahegao = require('./poetry.json');
const { fire, tea } = require('./poetry.json');

client2.on("ready", () => {
    console.log('Реакции Мерлая готовы');
});

function getRandom(l, r) {
    return Math.round((Math.random() * r)) % (r - l) + l;
}

client2.on("message", (msg) => {
  if (msg.author.id === "523116257390886954" && msg.content.toLowerCase().indexOf("часть смерти явно")!=-1) { 
      msg.react("768469879211687936");
  };
  if (msg.author.id === "523116257390886954" && msg.content.toLowerCase().indexOf("часть и дурман для глаз")!=-1) { 
      msg.react("768469897398190081");
  };
  if (msg.author.id === "523116257390886954" && msg.content.toLowerCase().indexOf("часть гордости это")!=-1) { 
      msg.react("768469924401250325");
  };
  if (msg.author.id === "523116257390886954" && msg.content.toLowerCase().indexOf("часть тебя безразлична")!=-1) { 
      msg.react("768469943288332299");
  };
    if ((getRandom(0, 4) == 2) && msg.content.length == 0
        && msg.channel.id == "804838051729637396" && msg.channel.id == "625758087554400266" && msg.channel.id == "816351964278292541" ) {
        const ahegao = poetry.ahegao;
        const randomIndex = Math.floor(Math.random() * ahegao.length);
        const ah = ahegao[randomIndex];
        msg.react(ah);
    };
    if (msg.author.id === "542663623789641729" && msg.content.toLowerCase().indexOf(" присутствия души")!=-1) { 
        msg.react("768469879211687936");
        msg.react("768469897398190081");
        msg.react("768469924401250325");
        msg.react("768469943288332299");
    };
    if (msg.author.id === "542663623789641729" && (getRandom(0, 9) == 7)) {
        const fire = poetry.fire;
        const randomIndex = Math.floor(Math.random() * fire.length);
        const fir = fire[randomIndex];
        msg.react(fir);
    };
});


client2.login(process.env.BOT_TOKEN2);
