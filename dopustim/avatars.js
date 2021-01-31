'use strict';

/**
 * Отправьте пользователю ссылку на его аватар
 */

// Импорт данных discord.js модуль
const Discord = require('discord.js');

// Создать экземпляр клиента рознь
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
/**
 * Готовое событие жизненно важно, это означает, что только после этого ваш бот начнет реагировать на информацию
* полученные от раздора
 */
client.on('ready', () => {
  console.log('Аватар готов');
});

// Создайте прослушиватель событий для сообщений
client.on('message', message => {
  // Если сообщение "что такое мой аватар"
  if (message.content === 'какой мой аватар') {
  const embed = new MessageEmbed()
    .setTitle("Твой аватар")
    .setColor(0x010000)
    .setDescription(message.author)
    .setImage(message.author.displayAvatarURL());
    message.channel.send(embed);

    // Отправить URL - адрес аватара пользователя
   // message.reply(message.author.displayAvatarURL());
  }
});

client.login(process.env.BOT_TOKEN);