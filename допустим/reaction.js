//'use strict';
const Discord = require('discord.js');
const client = new Discord.Client();

const poetry = require('./poetry.json');
const flower = require('./poetry.json');
const { fire, tea } = require('./poetry.json');
const ahegao = require('./poetry.json');
//const tea = require('./poetry.json');

const page = 'reaction';
var point = '';

client.on('ready', () => {
  console.log('Реакции готовы');
});

function getRandom(l, r) {
    return Math.round((Math.random() * r)) % (r - l) + l;
}

client.on("message", async (msg) => {
  point = '1';
  try {
    if (msg.author.id === "519186885331910676" && (getRandom(0, 2) == 1)) {
        const flower = poetry.flower;
        const randomIndex = Math.floor(Math.random() * flower.length);
        const flo = flower[randomIndex];
        const reactionEmoji = client.emojis.cache.get(flo);
        msg.react(reactionEmoji);  
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
    /*if (msg.author.id === "542663623789641729" && (getRandom(0, 8) == 7)) {
        const fire = poetry.fire;
        const randomIndex = Math.floor(Math.random() * fire.length);
        const fir = fire[randomIndex];
        msg.react(fir);
    };*/
//чайные реакции 
    /*if ((msg.author.id === "654810705903484949" && (getRandom(0, 2) == 1)) || (msg.guild.id == "532954366571708427" && (msg.content.toLowerCase().indexOf("чай") != -1 || msg.content.toLowerCase().indexOf("чая ") != -1))) {
        if (msg.content.toLowerCase().indexOf("новый год") != -1) return;
        const tea = poetry.tea;
        const randomIndex = Math.floor(Math.random() * tea.length);
        const flot = tea[randomIndex];
        const reactionEmoji = client.emojis.cache.get(flot);
        msg.react(reactionEmoji);
    };*/
    /*if (msg.content.toLowerCase().indexOf("ов") != -1 && msg.content.toLowerCase().indexOf("год") != -1) {
        const rng = getRandom(1, 6);
        if (rng == 1) {
            msg.react("909086950496018503");
            msg.react("909086950672203836");
            msg.react("909086950605082644");
        }
        if (rng == 2) {
            msg.react("909086949128667137");
            msg.react("909086950852538378");
            msg.react("909086950416351252");
            msg.react("909086950143721494");
            msg.react("909086950022053958");
            msg.react("909086950324064256");
        }
        if (rng == 3) {
            msg.react("909086949439070278");
            msg.react("909086949883670528");
            msg.react("909086949829124126");
            msg.react("909086949845901373");
            msg.react("909086950064025640");
            msg.react("909086950064009246");
            msg.react("909086950458273823");
        }
        if (rng == 4) {
            msg.react("909087018838020146");
            msg.react("909087018838016101");
            msg.react("909087018791882782");
        }
        if (rng == 5) {
            msg.react("909086949468418058");
            msg.react("909086949560692818");
            msg.react("909086950030446653");
            msg.react("909086950022078484");
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
    if ((getRandom(0, 7) == 4) && msg.content.length == 0 && ( msg.channel.id == "523123642293420052"
        || msg.channel.id == "804838051729637396" || msg.channel.id == "625758087554400266" || msg.channel.id == "816351964278292541" 
        || msg.channel.id == "838111748757127218" || msg.channel.id == "838116275896713277" || msg.channel.id == "838111662254456832")) {
        const ahegao = poetry.ahegao;
        const randomIndex = Math.floor(Math.random() * ahegao.length);
        const ah = ahegao[randomIndex];
        msg.react(ah);
    };
  } catch (err) { 
    let center = client.channels.cache.get('522817871370387472');
    center.send('Страница: ' + page+'\nПункт: '+point+'\nСостояние: failed.');
    console.log(err); 
  };
});

client.on("message", async (msg) => {
   point = '2';
   if ((msg.author.id === "542663623789641729" || msg.author.id === "478669590365339649") && (getRandom(0, 13) == 4) && msg.content.toLowerCase().indexOf("нов") == -1 && msg.content.toLowerCase().indexOf("год") == -1) {
   let f = '';
   try{
        const fire = poetry.fire;
        const randomIndex = Math.floor(Math.random() * fire.length);
        const fir = fire[randomIndex];
        f = fir;
        const reactionEmoji = client.emojis.cache.get(fir);
        if(!reactionEmoji) {return console.log("Эмоджи не существует "+fir)}
        msg.react(reactionEmoji);
     }catch(err){
       msg.channel.send('<@542663623789641729> мам, я упал <a:hlepng:882291167948079165>'); 
       let center = client.channels.cache.get('522817871370387472');
       center.send('Страница: ' + page+'\nПункт: '+point+'\nСостояние: failed.');
       center.log('ЭМОДЖИ '+f);
       console.log(err);
     }
    };
});

client.on("message", (msg) => {
  if (msg.content === "пика") {
        msg.channel.send("<a:cda8:526723928815566848>");
    };
});

client.login(process.env.BOT_TOKEN);
