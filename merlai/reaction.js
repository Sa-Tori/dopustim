//'use strict';
const Discord2 = require("discord.js");
const client2 = new Discord2.Client();

client2.on("ready", () => {
    console.log('Реакции Мерлая готовы');
});

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
});

client2.login(process.env.BOT_TOKEN2);