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
    if ((getRandom(1, 7) == 7) && msg.content.length == 0 && ( msg.channel.id == "523123642293420052"
        || msg.channel.id == "804838051729637396" || msg.channel.id == "625758087554400266" || msg.channel.id == "816351964278292541" || msg.channel.id == "837061475902160967" 
        || msg.channel.id == "838111748757127218" || msg.channel.id == "838116275896713277" || msg.channel.id == "838111662254456832") ) {
        const ahegao = poetry.ahegao;
        const randomIndex = Math.floor(Math.random() * ahegao.length);
        const ah = ahegao[randomIndex];
        msg.react(ah);
    };
    if ((msg.author.id === "542663623789641729" || msg.author.id === "478669590365339649") && msg.content.toLowerCase().indexOf(" присутствия души")!=-1) { 
        msg.react("837282717463871489");
        msg.react("837281812211433472");
        msg.react("837281979773878293");
        msg.react("526735386110722068");
        msg.react("872262702389669969");
        msg.react("526735399314391040");
        msg.react("837282591996248075");
    };
    if (msg.author.id === "542663623789641729" && (getRandom(0, 17) == 7)) {
        const fire = poetry.fire;
        const randomIndex = Math.floor(Math.random() * fire.length);
        const fir = fire[randomIndex];
        msg.react(fir);
    };
});



client2.login(process.env.BOT_TOKEN2);

