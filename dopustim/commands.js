'use strict';
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Команды Картуса готовы.");
    
});

function isFinded2(s, morn2) {
	for (var i = 0; i < morn2.length; i++) {
		if (s.toLowerCase().indexOf(morn2[i]) != -1) {
			return true;
		}
	}
	return false;
}

function say(msg) {
	try {
		let numbers = [' 1', ' 2', ' 3', ' 4', ' 5', ' 6', ' 7', ' 8', ' 9', ' 0'];
		let p1 = msg.content.indexOf(' ');
		let text = msg.content.substring(p1 + 1);
		if (!isFinded2(msg.content, numbers)) {
			msg.channel.send(text);
		} else {
			p1 = text.indexOf(' ');
			let ch_id = text.substring(0, p1);
			text = text.substring(p1 + 1);
			client2.channels.cache.get(ch_id).send(text);
		}
		msg.delete();
	} catch {
		msg.reply("ERROR!!");
	}
}

client.on('message', (msg) => { // Реагирование на сообщения
    const arggs = msg.content.split(' ').slice(1); // Все аргументы за именем команды с префиксом
    const amount = arggs.join(' '); // Количество сообщений, которые должны быть удалены
    if (msg.content.startsWith("delete") && (msg.author.id === "542663623789641729" || msg.author.id === "478669590365339649")) {
        
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
    
    if (msg.content.startsWith("ksay") && (msg.author.id === "542663623789641729" || msg.author.id === "478669590365339649")) {
        say(msg);
    };
});


client.login(process.env.BOT_TOKEN);

