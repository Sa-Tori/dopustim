const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const poetry = require('./poetry.json');


client.on("ready", () => {
  console.log("Эмберы готовы");
});


   client.on('message', message => {
 
  if (message.content === "привет") {
    const embed = new MessageEmbed()
      .setTitle("Приветствие")
      .setColor(0xff0000)
      .setDescription("Досвидания, мне неприятно");
    message.channel.send(embed);
  }
  if (message.content === "Утра" && message.author.id === "542663623789641729") {
    const embed = new MessageEmbed()
        .setTitle("И тебе, мой сладкий)")
        .setColor(0x0d004d)
        .setImage("https://media.discordapp.net/attachments/499796673598586941/526742577878401035/24728.gif");
    message.channel.send(embed);
  }
  if (message.content === "мех") {
    if (message.author.id === "542663623789641729") {
    const embed = new MessageEmbed()
        .setTitle("Мех")
        .setColor(0x0d004d)
        .setImage("http://bestanimations.com/media/dragons/1758478091dragon-animated-gif-69.gif");
    message.channel.send(embed);
  } else {
    const embed = new MessageEmbed()
        .setTitle("Ты кто??")
        .setColor(0x0d004d)
        .setDescription("Досвидания, мне неприятно");
    message.channel.send(embed);
  }
  }
  if (message.content === "Одиночество") {
    if (message.author.id === "405109483396661268") {
        const embed = new MessageEmbed()
            .setTitle("Всегда рядом")
            .setDescription(message.author)
            .setColor(0x0d004d)
            .setImage("https://media1.tenor.com/images/a5a88dd6f4b00b44361ec7ef55b85dd4/tenor.gif?itemid=7636561");
        message.channel.send(embed);
    } else {
        const embed = new MessageEmbed()
            .setTitle("Да что ты знаешь об одиночестве??")
            .setColor(0x0d004d)
            .setImage("https://i.imgur.com/XWSzl8R.gif");
        message.channel.send(embed);
    }
  }
  if (message.content.toLowerCase() == "спокойной ночи") { //&& message.author.id === "405109483396661268"
    if (message.author.id === "405109483396661268") {
        const embed = new MessageEmbed()
            .setTitle("И тебе, мой сладкий) <:1Rem:684121137386487833>")
            .setDescription(message.author)
            .setColor(0x0d004d)
            .setImage("https://tenor.com/view/sleeping-kiss-hug-anime-gif-15619689");
        message.channel.send(embed);
    } else {
        const embed = new MessageEmbed()
            .setTitle("Я пока не знаю что тебе ответить...")
            .setColor(0x0d004d)
            .setDescription(message.author);
        message.channel.send(embed);
    }
  }
  if (message.content === "доброе утро") {
    const embed = new MessageEmbed()
        .setTitle("Ооооо, Утро")
        .setDescription("Ну уж нет, я еще посплю")
        .setColor(0x0d004d)
        .setImage("https://i.gifer.com/Kzlh.gif");
    message.channel.send(embed);
  }
});


function isFinded(s, morn, morn2) {
    for (var i = 0; i < morn.length; i++) {
        if (s.toLowerCase().indexOf(morn[i]) != -1) {
            return true;
        }
    }
    for (var i = 0; i < morn2.length; i++) {
        if (s.toLowerCase().indexOf(morn2[i]) != -1) {
            return true;
        }
    }
    return false;
}

client.on('message', msg => {
    const morning = poetry.morning;
    const amorning = poetry.amorning;
    if (isFinded(msg.content, morning, amorning) && msg.content != "доброе утро" && msg.content != "Утра" && msg.author.id != "297089757651927040") {
        const randommorning = Math.floor(Math.random() * morning.length);
        const morn = morning[randommorning];
        const dragon = poetry.dragon;
        const randomIndex = Math.floor(Math.random() * dragon.length);
        const drag = dragon[randomIndex];
        const embed = new MessageEmbed()
            .setTitle("И тебе "+morn)
            .setDescription(msg.author)
            .setColor(0x0d004d)
            .setImage(drag);
        msg.channel.send(embed);
    }
    if (msg.content.toLowerCase().indexOf("нихуя")!=-1){
        const nihua = poetry.nihua;
        const randomIndex = Math.floor(Math.random() * nihua.length);
        const word = nihua[randomIndex];
        const embed = new MessageEmbed()
            .setColor(0x0d004d)
            .setImage(word);
        msg.channel.send(embed);
    }
});







client.login(process.env.BOT_TOKEN);