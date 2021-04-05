'use strict';
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Команды Картуса готовы.");
    
});

function say(msg) {
    try {
        let p1 = msg.content.indexOf(' ');
        let text = msg.content.substring(p1 + 1);
        p1 = text.indexOf(' ');
        msg.delete();
        msg.channel.send(text);
    } catch {
        msg.reply("**ERROR!!**");
    }
}

client.on('message', (msg) => { // Реагирование на сообщения
    const arggs = msg.content.split(' ').slice(1); // Все аргументы за именем команды с префиксом
    const amount = arggs.join(' '); // Количество сообщений, которые должны быть удалены
    if (msg.content.startsWith("delete") && msg.author.id === "542663623789641729") {
        
        if (!amount) return msg.channel.send('Вы не указали, сколько сообщений нужно удалить!'); // Проверка, задан ли параметр количества
        if (isNaN(amount)) return msg.channel.send('Это не число!'); // Проверка, является ли числом ввод пользователя 

        if (amount > 100) return msg.channel.send('Вы не можете удалить 100 сообщений за раз'); // Проверка, является ли ввод пользователя числом больше 100
        if (amount < 1) return msg.channel.send('Вы должны ввести число больше чем 1'); // Проверка, является ли ввод пользователя числом меньше 1

        async function delete_messages() { // Объявление асинхронной функции

            await msg.channel.messages.fetch({
                limit: amount
            }).then(messages => {
                msg.channel.bulkDelete(messages)
                msg.channel.send(`Удалено ${amount} сообщений!`)
            })
        };
        delete_messages();
    };
    
    if (msg.content.startsWith("ksay") && msg.author.id === "542663623789641729") {
        say(msg);
    };
});
