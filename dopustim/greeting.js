'use strict';
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Приветствие готово');
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === '🍓врата' || ch.name === "🤖ваш-покорный-слуга");
  if (!channel) return;
  channel.send(`${member} а ты ещё кто <:spdlkon:625115888743350272>`);
});

client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === '🍓врата' || ch.name === "🤖ваш-покорный-слуга");
  if (!channel) return;
  channel.send(`Разбиты окна,\nМеркнет свет..\nНа голову надет пакет.`);
});


client.login(process.env.BOT_TOKEN);
