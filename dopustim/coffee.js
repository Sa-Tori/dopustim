'use strict'; 
const Discord = require("discord.js");
const client = new Discord.Client();

const poetry = require('./poetry.json');
const {tea, ptea, teafire, notea} = require('./poetry.json');
const page = 'coffee';
var point = '';

client.on ("ready", () => {
 console.log("Чай готов!");
});

function isFinded(s, ate) {
    for (var i = 0; i < ate.length; i++) {
        if (s.toLowerCase().indexOf(ate[i]) != -1) {
            return true;
        }
    }
    return false;
}

function teareact(msg) {
    try {
        let p1 = msg.content.indexOf(':');
        let text = msg.content.substring(p1 + 1);
        p1 = text.indexOf('>');
        let ch2 = text.substring(7, p1);
        text = text.substring(p1 + 1);
        msg.react(ch2);
    } catch {
        msg.reply("**ERROR!!**");
    }
}

client.on("message", async (msg) => {
    point = '1';
    const atea = poetry.atea;
    const notea = poetry.notea;
    if (isFinded(msg.content, notea)) return;
    try {
      if ((isFinded(msg.content, atea) && msg.author.id != "523116257390886954" && (msg.guild.id == "532954366571708427" || msg.guild.id == "466006517288665099" || msg.guild.id == "884726247182184468")) || 
          msg.author.id != "523116257390886954" && msg.author.id != "654810705903484949" && (msg.content.startsWith("чaй") || msg.content.startsWith("Чaй")) && msg.guild.id == "622954155077533696") {
          const tea = poetry.tea;
          const randomIndex = Math.floor(Math.random() * tea.length);
          const flot = tea[randomIndex];

          const teafire = poetry.teafire;
          const randteafire = Math.floor(Math.random() * teafire.length);
          const rtf = teafire[randteafire];

          const ptea = poetry.ptea;
          const randptea = Math.floor(Math.random() * ptea.length);
          const word = ptea[randptea];
          msg.channel.send(rtf + " " + word);
          msg.channel.send(flot);
      };
      if (msg.content === "<:tea002:796066261565833226>" && msg.author.id === "523116257390886954") {
              msg.channel.send('Приятно пожевать <:096:592420847017263134>');
      };
      if (msg.content.startsWith("<:tea0") && msg.author.id === "523116257390886954") {
              teareact(msg);
      };
    } catch (err) { 
        msg.channel.send('<@542663623789641729> мама, я упал <a:hlepng:882291167948079165>'); 
        let center = client.channels.cache.get('522817871370387472');
        center.send('Страница: ' + page+'\nПункт: '+point+'\nСостояние: failed.');
        console.log(err); 
    };
});


client.login(process.env.BOT_TOKEN);
