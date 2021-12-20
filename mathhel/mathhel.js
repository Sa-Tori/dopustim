'use strict';
const Discord4 = require("discord.js");
const client4 = new Discord4.Client();
const { Client, MessageEmbed } = require('discord.js');

const poetry = require('./poetry.json');

client4.on("ready", () => {
	console.log("Приложение подключено");
});

//_______________________________функция рандом

function getRandom(l, r) {
	return Math.round((Math.random() * r)) % (r - l) + l;
}

//_______________________________функция поиска соответствий в строке

function isFinded2(s, morn2) {
	for (var i = 0; i < morn2.length; i++) {
		if (s.toLowerCase().indexOf(morn2[i]) != -1) {
			return true;
		}
	}
	return false;
}

//_______________________________функция команды "say"

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
			client4.channels.cache.get(ch_id).send(text);
		}
		msg.delete();
	} catch {
		msg.reply("ERROR!!");
	}
}

//_______________________________функция удаления одного сообщения

function del(msg) {
	try {
		let chen = msg.channel.id;
		let p1 = msg.content.indexOf(' ');
		let mes_id = msg.content.substring(p1 + 1);
		let channel = client4.channels.cache.get(chen);
		var message = channel.messages.cache.get(mes_id);
		message.delete();
		msg.delete();
	} catch {
		msg.reply("ERROR!!");
	}
}

//_______________________________команда delete для удаления сообщений

client4.on('message', (msg) => { 
	const arggs = msg.content.split(' ').slice(1); 
	const amount = arggs.join(' '); 
	if (msg.content.startsWith("delete") && (msg.author.id === "542663623789641729" || msg.author.id === "478669590365339649")) {

		if (!amount) return msg.channel.send('Вы не указали, сколько сообщений нужно удалить!'); 
		if (isNaN(amount)) return msg.channel.send('Это не число!'); 

		if (amount > 100) return msg.channel.send('Вы не можете удалить 100 сообщений за раз'); 
		if (amount < 1) return msg.channel.send('Вы должны ввести число больше чем 1'); 

		async function delete_messages() {

			await msg.channel.messages.fetch({
				limit: amount
			}).then(messages => {
				msg.channel.bulkDelete(messages)
				msg.channel.send(`Удалено ${amount} сообщений!`)
			})
		};
		delete_messages();
	};

//_______________________________вызов функции "say"

	if (msg.content.startsWith("m!say") && (msg.author.id === "542663623789641729" || msg.author.id === "478669590365339649")) {
		say(msg);
	};

});

//_______________________________вызов функции "del"

client4.on('message', (msg) => {
	if (msg.content.startsWith("m!del") && (msg.author.id === "542663623789641729" || msg.author.id === "478669590365339649")) {
		del(msg);
	};
});

//_______________________________Приветствие новых пользователей

client4.on('guildMemberAdd', async (member) => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'гостевая');
    try {
    if (!channel) return;
        channel.send(`${member} добро пожаловать на сервер ${guild} <:ezgif1:840339018453090306>`);
    } catch (err) {
        let center = client4.channels.cache.get('921686023812022272');
        center.send('Ошибка события: guildMemberAdd');
        console.log(err);
    };
});

//_______________________________Сообщение об уходе пользователей

client4.on('guildMemberRemove', async (member) => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'гостевая');
    let UserTag = member.user.tag;
    if (!channel) return;
    try {
        if (channel) {
            channel.send("Пользователь " + UserTag + " покинул сервер.");
        }
    } catch (err) {
        let center = client4.channels.cache.get('921686023812022272');
        center.send('Ошибка события: guildMemberRemove');
        console.log(err);
    };
});

//_______________________________автоответчик

client4.on("message", (msg) => {
	if (msg.content.startsWith("ping")) {
		msg.channel.send("pong");
	};
	if ((msg.content.toLowerCase().indexOf("898462500293578802") != -1 || msg.content.toLowerCase().indexOf("масхел") != -1 || msg.channel.id === "921881663036874763") && msg.content.toLowerCase().indexOf("?") != -1) {
		let q = ['Да', 'Нет', 'Не знаю', 'Наверное да', 'Наверное нет', 'Возможно', 'Возможно да', 'Возможно нет', 'Не определено', 'Не спрашивай', 'Не могу ответить', 'Ага', 'Не-а'];
		let c = Math.floor(Math.random() * q.length);
		const a = q[c];
		msg.channel.send(a);
	};
});

//_______________________________вывод аватара пользователя

client4.on('message', async (msg) => {
	let UserTag = msg.author.tag;
	try {
		if (msg.content.startsWith('ava')) {
			let emb;
			let s = msg.content;
			if (s.indexOf(' ') !== -1 && s.indexOf(' ') + 3 < s.length) {
				let id = s.substring(s.indexOf(' ') + 3, s.length - 1);
				while (id.charAt(0) < '0' || id.charAt(0) > '9')
					id = id.substring(1);
				let us = client4.users.cache.get(id);
				emb = new MessageEmbed()
					.setTitle("Аватар пользователя " + us)
					.setAuthor(UserTag, msg.author.displayAvatarURL({ dynamic: true }))
					.setColor(0xd38247)
					.setTimestamp() 
					.setImage(us.avatarURL({ dynamic: true }));
			} else {
				emb = new MessageEmbed()
					.setTitle("Ваш аватар")
					.setAuthor(UserTag, msg.author.displayAvatarURL({ dynamic: true }))
					.setColor(0xd38247)
					.setTimestamp() 
					.setImage(msg.author.displayAvatarURL({ dynamic: true }));
			}
			msg.reply(emb)
		}
	} catch (err) {
		let center = client4.channels.cache.get('921686023812022272');
		center.send('Ошибка события: message\nКоманда: ava');
		console.log(err);
	};
});

////_______________________________новогодние реакции

client4.on('message', async (msg) => {
	try {
		if (msg.content.toLowerCase().indexOf("нов") != -1 && msg.content.toLowerCase().indexOf("год") != -1) {
			const rng = getRandom(1, 6);
			if (rng == 1) {
				msg.react("909086950496018503");
				msg.react("909086950672203836");
				msg.react("909086950605082644");
			}
			if (rng == 2) {
				msg.react("909086949128667137");
				msg.react("909086950852538378");
				msg.react("909086950416351252");
				msg.react("909086950143721494");
				msg.react("909086950022053958");
				msg.react("909086950324064256");
			}
			if (rng == 3) {
				msg.react("909086949439070278");
				msg.react("909086949883670528");
				msg.react("909086949829124126");
				msg.react("909086949845901373");
				msg.react("909086950064025640");
				msg.react("909086950064009246");
				msg.react("909086950458273823");
			}
			if (rng == 4) {
				msg.react("909087018838020146");
				msg.react("909087018838016101");
				msg.react("909087018791882782");
			}
			if (rng == 5) {
				msg.react("909086949468418058");
				msg.react("909086949560692818");
				msg.react("909086950030446653");
				msg.react("909086950022078484");
			}
		};

//_______________________________триггер "гирлянда" из эмодзи

		if (msg.content.toLowerCase().indexOf("зажги") != -1 || msg.content.toLowerCase().indexOf("гори") != -1) {
			const ng = poetry.ng;
			const randomIndex = Math.floor(Math.random() * ng.length);
			const emoji = ng[randomIndex];
			msg.channel.send(emoji);
		};
	} catch (err) {
		let center = client4.channels.cache.get('921686023812022272');
		center.send('Ошибка события: message\nТип: Гирлянда');
		console.log(err);
	};
});

client4.login(process.env.BOT_TOKEN4);
