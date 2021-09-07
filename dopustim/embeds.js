const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const poetry = require('./poetry.json');

client.on("ready", () => {
  console.log("Эмберы готовы");
});


   client.on('message', message => {
 
  if (message.content === "Привет" && message.author.id != "542663623789641729") {
    const embed = new MessageEmbed()
      .setTitle("Приветствие")
      .setColor(0x368ba2)
      .setDescription("Досвидания, мне неприятно");
    message.channel.send(embed);
  };
  /*if (message.content === "Утра") {
    const embed = new MessageEmbed()
        .setTitle("И тебе, мой сладкий)")
        .setColor(0x368ba2)
        .setImage("https://media.discordapp.net/attachments/499796673598586941/526742577878401035/24728.gif");
    message.channel.send(embed);
  };*/
  if (message.content === "мех") {
    if (message.author.id === "542663623789641729") {
    const embed = new MessageEmbed()
        .setTitle("Мех")
        .setColor(0x368ba2)
        .setImage("http://bestanimations.com/media/dragons/1758478091dragon-animated-gif-69.gif");
    message.channel.send(embed);
  } else {
    const embed = new MessageEmbed()
        .setTitle("Ты кто??")
        .setColor(0x368ba2)
        .setDescription("Досвидания, мне неприятно");
    message.channel.send(embed);
  }
  };
  if (message.content === "Одиночество") {
    if (message.author.id === "405109483396661268") {
        const embed = new MessageEmbed()
            .setTitle("Всегда рядом")
            .setDescription(message.author)
            .setColor(0x368ba2)
            .setImage("https://media1.tenor.com/images/a5a88dd6f4b00b44361ec7ef55b85dd4/tenor.gif?itemid=7636561");
        message.channel.send(embed);
    } else {
        const embed = new MessageEmbed()
            .setTitle("Да что ты знаешь об одиночестве??")
            .setColor(0x368ba2)
            .setImage("https://i.imgur.com/XWSzl8R.gif");
        message.channel.send(embed);
    }
  };
  if (message.content.toLowerCase() == "спокойной ночи") { //&& message.author.id === "405109483396661268"
    if (message.author.id === "405109483396661268") {
        const embed = new MessageEmbed()
            .setTitle("И тебе, мой сладкий) <:1Rem:684121137386487833>")
            .setDescription(message.author)
            .setColor(0x368ba2)
            .setImage("https://tenor.com/view/sleeping-kiss-hug-anime-gif-15619689");
        message.channel.send(embed);
    } else {
        const embed = new MessageEmbed()
            .setTitle("Я пока не знаю что тебе ответить...")
            .setColor(0x368ba2)
            .setDescription(message.author);
        message.channel.send(embed);
    }
  };
  if (message.content === "доброе утро") {
    const embed = new MessageEmbed()
        .setTitle("Ооооо, Утро")
        .setDescription("Ну уж нет, я еще посплю")
        .setColor(0x368ba2)
        .setImage("https://i.gifer.com/Kzlh.gif");
    message.channel.send(embed);
  };
  if (message.content === "покажи") {
    const embed = new MessageEmbed()
        .setTitle("Пошел нахуй")
        .setDescription("меня заебала твоя ссылка")
        .setColor(0x368ba2)
        .setImage("https://media1.tenor.com/images/25ec03203265dee174003d8557e7c668/tenor.gif");
    message.channel.send(embed);
    };
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
    let control = client.channels.cache.get('878520465856036935');
    let UserTag = msg.author.tag;
    let us = client.users.cache.get('523116257390886954');
    const morning = poetry.morning;
    const amorning = poetry.amorning;
    if (isFinded(msg.content, morning, amorning) && msg.content != "доброе утро" && msg.content != "Утра" && msg.author.id != "297089757651927040" && msg.content.length < 30) {
        const randommorning = Math.floor(Math.random() * morning.length);
        const morn = morning[randommorning];
        const dragon = poetry.dragon;
        const randomIndex = Math.floor(Math.random() * dragon.length);
        const drag = dragon[randomIndex];
        const embed = new MessageEmbed()
            .setTitle("<a:firea:872262702389669969>И тебе " + morn + " <:dragwu:838458320531619930>")
            .setAuthor(UserTag, msg.author.displayAvatarURL({ dynamic: true }))
            .setThumbnail('https://i.ibb.co/ctR84n3/torch11.gif')
            .setColor(0x368ba2)
            .setImage(drag)
            .setTimestamp()
            .setFooter('Утро тогда, когда проснулся. ', us.avatarURL({ dynamic: true }));
        msg.channel.send(embed);
        control.send(embed);
        control.send("```" + drag + "```");
    };
    const utra = poetry.utra;
    if (msg.content === "Утра") {
      const teafire = poetry.teafire;
      const randteafire = Math.floor(Math.random() * teafire.length);
      const rtf = teafire[randteafire];
      const randomutra = Math.floor(Math.random() * utra.length);
      const utras = utra[randomutra];
      const drutra = poetry.drutra;
      const randomIndex = Math.floor(Math.random() * drutra.length);
      const drutras = drutra[randomIndex];
      const embed = new MessageEmbed()
        .setTitle(rtf + " И тебе, " + utras + ".")
        .setAuthor(UserTag, msg.author.displayAvatarURL({ dynamic: true }))
        .setThumbnail('https://i.ibb.co/ctR84n3/torch11.gif')
        .setColor(0x368ba2)
        .setImage(drutras)
        .setTimestamp()
        .setFooter('Это не клиновый листок, это ДРАКОН! ', us.avatarURL({ dynamic: true }));
      msg.channel.send(embed);
      control.send(embed);
      control.send("```" + drutras + "```");
    };
    if (msg.content.toLowerCase().indexOf("нихуя")!=-1){
        const nihua = poetry.nihua;
        const randomIndex = Math.floor(Math.random() * nihua.length);
        const word = nihua[randomIndex];
        const embed = new MessageEmbed()
            .setColor(0x368ba2)
            .setImage(word);
        msg.channel.send(embed);
        control.send(embed);
        control.send("```" + word + "```");
    };

    let palish = client.channels.cache.get('883608296664203334');
/*if (msg.guild.id == '532954366571708427' && msg.channel.id != '878520465856036935') {
     const embed = new MessageEmbed()
            .setAuthor(UserTag, msg.author.displayAvatarURL({ dynamic: true }))
            .setColor(0x368ba2)
            .setDescription(msg.content + "\n**Канал: **" + msg.channel.name)
            .setTimestamp();
        palish.send(embed);
      };*/
      if (msg.guild.id == '622954155077533696') {
     const embed = new MessageEmbed()
            .setAuthor(UserTag, msg.author.displayAvatarURL({ dynamic: true }))
            .setColor(0x368ba2)
            .setDescription(msg.content+"\n**Канал:** "+msg.channel.name+"\n**id канала:** "+msg.channel.id+"\n**id:** "+msg.id)
            .setTimestamp();
        palish.send(embed);
     };
    
});





client.login(process.env.BOT_TOKEN);
