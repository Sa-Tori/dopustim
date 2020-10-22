const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');


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
  if (message.content === "Утра") {
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

client.on('message', msg => {
if (msg.content === 'утра') {
  const randomWords = [
    "https://media.discordapp.net/attachments/499796673598586941/526742577878401035/24728.gif",
    "http://bestanimations.com/media/dragons/1758478091dragon-animated-gif-69.gif",
    //"https://giffiles.alphacoders.com/247/24706.gif",
    "https://i.gifer.com/5znW.gif",
    "https://i.pinimg.com/originals/15/4c/e9/154ce9e170df808d8bb03db6b64e7996.gif",
    "https://bestanimations.com/Fantasy/Dragons/dragon-animated-gif-73.gif",
    "https://i.gifer.com/embedded/download/XoD1.gif",
    //"https://giffiles.alphacoders.com/207/207666.gif",
    "https://bestanimations.com/media/dragons/194278153dragon-animated-gif-81.gif",
    "https://66.media.tumblr.com/2c1d62db5766573aed6b3c8d9b8c47e4/tumblr_n6ut5am3LQ1rmrywfo2_500.gif",
    "https://thumbs.gfycat.com/PessimisticPotableDuckbillplatypus-small.gif"
  ];
  const randomIndex = Math.floor(Math.random() * randomWords.length);
  const word = randomWords[randomIndex];
  const embed = new MessageEmbed()
        .setTitle("И тебе, радость моя)")
        .setDescription(msg.author)
        .setColor(0x0d004d)
        .setImage(word);
    msg.channel.send(embed);
}
if (msg.content.toLowerCase().indexOf("нихуя")!=-1){
  const randomWords = [
    "https://i.imgur.com/BjoUh.gif",
    "https://i.gifer.com/VkpB.gif",
    "https://i.makeagif.com/media/12-03-2015/FDdSfM.gif",
    "https://i.gifer.com/311q.gif",
    "https://i.imgur.com/MgRSIYg.gif?noredirect",
    "https://media1.tenor.com/images/d2d817f9f1a14f3805e6a7487169e5ee/tenor.gif?itemid=16584815",
    "https://data.photofunky.net/output/image/c/c/b/3/ccb3c8/photofunky.gif",
    "https://i.gifer.com/KbSl.gif",
    "https://66.media.tumblr.com/tumblr_mbg6b3UyXh1qedvmno4_400.gif",
    "https://i.gifer.com/IAQD.gif",
    "https://69.media.tumblr.com/9e007d7f1fe860451b3cd86330333573/tumblr_oyo1dcqCto1r9dm6no1_400.gif",
    "https://i.gifer.com/TffG.gif"
  ];

  const randomIndex = Math.floor(Math.random() * randomWords.length);
  const word = randomWords[randomIndex];
  const embed = new MessageEmbed()
        //.setTitle("И тебе, радость моя)")
        //.setDescription(msg.author)
        .setColor(0x0d004d)
        .setImage(word);
    msg.channel.send(embed);
}


});






client.login(process.env.BOT_TOKEN);