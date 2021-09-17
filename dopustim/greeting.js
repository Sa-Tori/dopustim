'use strict';
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Приветствие Картуса готово');
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === '🍓врата' || ch.name === "🤖ваш-покорный-слуга" || ch.name === "🛋welcome");
  if (!channel) return;
  channel.send(`${member} а ты ещё кто такой <:ezgif1:840339018453090306>`);
});

client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === '🍓врата' || ch.name === "🤖ваш-покорный-слуга" || ch.name === "🛋welcome");
  if (!channel) return;
  channel.send(`Разбиты окна,\nМеркнет свет..\nНа голову надет пакет.`);
});

client.on("message", msg => {
    if (msg.content.startsWith("Ниче не меркнет!") && msg.author.id == "776445694587306028") {
      msg.channel.send("Скатертью дорожка <:mme:625115196637315124>");
    }   
});


client.login(process.env.BOT_TOKEN);
