'use strict';

//Бот, который приветствует новых членов гильдии, когда они присоединяются


// Импорт данных discord.js модуль
const Discord = require('discord.js');
const client = new Discord.Client();
//const client = require("./dopustim");


client.on('ready', () => {
  console.log('Приветствие готово');
});

// Создайте прослушиватель событий для новых членов гильдии
client.on('guildMemberAdd', member => {
  // Отправьте сообщение по назначенному каналу на сервере:
  const channel = member.guild.channels.cache.find(ch => ch.name === 'врата');
  // Ничего не делайте, если канал не был найден на этом сервере
  if (!channel) return;
  // Отправить сообщение, упомянув члена Отправить сообщение, упомянув члена
  channel.send(`Welcome to the server, ${member}`);
});


client.login(process.env.BOT_TOKEN);