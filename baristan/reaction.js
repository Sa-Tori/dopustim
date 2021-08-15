//'use strict';
const Discord3 = require("discord.js");
const client3 = new Discord3.Client();

client3.on('ready', () => {
  console.log('Реакции Баристана готовы');
});

client3.on("message", (msg) => {
  if ((msg.author.id === "542663623789641729" || msg.author.id === "478669590365339649") && msg.content.toLowerCase().indexOf(" присутствия души")!=-1) { 
        msg.react("837282717463871489");
        msg.react("837281812211433472");
        msg.react("837281979773878293");
        msg.react("526735386110722068");
        msg.react("872262702389669969");
        msg.react("526735399314391040");
        msg.react("837282591996248075");
    }; 
});

client3.login(process.env.BOT_TOKEN3);
