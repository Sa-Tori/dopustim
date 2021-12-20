'use strict';
const Discord4 = require("discord.js");
const client4 = new Discord4.Client();
const { Client, MessageEmbed } = require('discord.js');

const poetry = require('./poetry.json');
var event = '';
var point = '';

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

client4.on('message', async (msg) => {
	event = 'message';
	const arggs = msg.content.split(' ').slice(1);
	const amount = arggs.join(' ');
	try {
		point = 'команда delete';
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
	} catch (err) {
		let center = client4.channels.cache.get('921686023812022272');
		center.send('Ошибка события: ' + event + '\nНазначение: ' + point);
		console.log(err);
	};

	//_______________________________вызов функции "say"
	try {
		point = 'команда say';
		if (msg.content.startsWith("m!say") && (msg.author.id === "542663623789641729" || msg.author.id === "478669590365339649")) {
			say(msg);
		};
	} catch (err) {
		let center = client4.channels.cache.get('921686023812022272');
		center.send('Ошибка события: ' + event + '\nНазначение: ' + point);
		console.log(err);
	};
});

//_______________________________вызов функции "del"

client4.on('message', (msg) => {
	event = 'message';
	try {
		point = 'команда del';
		if (msg.content.startsWith("m!del") && (msg.author.id === "542663623789641729" || msg.author.id === "478669590365339649")) {
			del(msg);
		};
	} catch (err) {
		let center = client4.channels.cache.get('921686023812022272');
		center.send('Ошибка события: ' + event + '\nНазначение: ' + point);
		console.log(err);
	};
});

//_______________________________Приветствие новых пользователей

client4.on('guildMemberAdd', (member) => {
	event = 'guildMemberAdd';
	const channel = member.guild.channels.cache.get('921684420413493250');
	try {
		point = 'Приветствие';
		if (!channel) return;
		channel.send(`${member} добро пожаловать на сервер!`);
	} catch (err) {
		let center = client4.channels.cache.get('921686023812022272');
		center.send('Ошибка события: ' + event + '\nНазначение: ' + point);
		console.log(err);
	};
});

//_______________________________Сообщение об уходе пользователей

client4.on('guildMemberRemove', async (member) => {
	event = 'guildMemberRemove';
	const channel = member.guild.channels.cache.get('921684420413493250');
	let UserTag = member.user.tag;
	if (!channel) return;
	try {
		point = '';
		if (channel) {
			channel.send("Пользователь " + UserTag + " покинул сервер.");
		}
	} catch (err) {
		let center = client4.channels.cache.get('921686023812022272');
		center.send('Ошибка события: ' + event + '\nНазначение: ' + point);
		console.log(err);
	};
});

//_______________________________автоответчик

client4.on("message", (msg) => {
	event = 'message';
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
	event = 'message';
	let UserTag = msg.author.tag;
	try {
		point = '';
		if (msg.content.startsWith('ava')) {
			let emb;
			let s = msg.content;
			if (s.indexOf(' ') !== -1 && s.indexOf(' ') + 3 < s.length) {
				let id = s.substring(s.indexOf(' ') + 3, s.length - 1);
				while (id.charAt(0) < '0' || id.charAt(0) > '9')
					id = id.substring(1);
				let us = client4.users.cache.get(id);
				emb = new MessageEmbed()
					.setTitle("Аватар пользователя " + us.tag)
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
		center.send('Ошибка события: ' + event + '\nНазначение: ' + point);
		console.log(err);
	};
});

////_______________________________новогодние реакции

client4.on('message', async (msg) => {
	event = 'message';
	try {
		point = 'новогодние реакции';
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
			point = 'гирлянда';
			const ng = poetry.ng;
			const randomIndex = Math.floor(Math.random() * ng.length);
			const emoji = ng[randomIndex];
			msg.channel.send(emoji);
		};
	} catch (err) {
		let center = client4.channels.cache.get('921686023812022272');
		center.send('Ошибка события: ' + event + '\nНазначение: ' + point);
		console.log(err);
	};
});

//_______________________________функция понижения регистра

function lowerCase(s) {
	var s1 = "";
	for (var i = 0; i < s.length; i++) {
		if (s.charCodeAt(i) == 1025) {
			s1 += "е";
			continue;
		} else if (s.charCodeAt(i) >= 1040 && s.charCodeAt(i) <= 1071) {
			s1 += String.fromCharCode(s.charCodeAt(i) + 32);
			continue;
		} else
			s1 += s.charAt(i);
	}
	return s1;
}

//_______________________________функция изменения типа

function isDigit(s) {
	if (s.charCodeAt(0) >= 97 && s.charCodeAt(0) <= 122)
		return true;
	if (s.charCodeAt(0) >= 1072 && s.charCodeAt(0) <= 1103)
		return true;
	return false;
}

//_______________________________функция случайного выбора слова

function rand_word(s) {
	var a = [];
	s = lowerCase(s);
	while (s.length > 0) {
		while (s.length > 0 && !isDigit(s.charAt(0))) {
			s = s.substr(1, s.length - 1);
		}
		var z = "";
		var i = 0;
		if (s.length == 0)
			break;
		while (i < s.length && isDigit(s.charAt(i))) {
			z = z + s.charAt(i);
			i++;
		}
		if (z != "")
			a.push(z);
		s = s.substring(i, s.length);
	}
	var e = getRandom(0, a.length);
	return a[e];
}

//_______________________________отправка случайного определения по соответствию фрагмента строки

client4.on("message", async (msg) => {
	event = 'message';
	try {
		point = 'термины';
		if ((msg.guild.id == "921684419633360896" || msg.content.startsWith('term')) && msg.author.id != "523116257390886954") {
			var m = msg.content;
			var fl = 0;
			if (msg.content.startsWith('term')) {
				m = msg.content.substring(3, msg.content.length);
				fl = 1;
			}
			var rd = rand_word(m);
			var b = [];
			var terms = poetry.terms;
			for (var i = 0; i < terms.length; i++)
				if (lowerCase(terms[i]).includes(rd))
					b.push(terms[i]);
			if (b.length != 0 && (getRandom(0, 100) == 72 || fl == 1)) {
				var t = getRandom(0, b.length);
				msg.channel.send("```" + b[t] + "```");
			}
			if (fl == 1 && b.length == 0) {
				msg.channel.send("Не могу найти подходящего определения.");
			}
		}
	} catch (err) {
		let center = client4.channels.cache.get('921686023812022272');
		center.send('Ошибка события: ' + event + '\nНазначение: ' + point);
		console.log(err);
	};
});

//_______________________________вывод информации об удаленных сообщениях

client4.on('messageDelete', async msg => {
	event = 'messageDelete';
	try {
		point = 'удаление сообщений';
		let deletin = client4.channels.cache.get('922181203300335776');
		let UserTag = msg.author.tag;
		const embed = new MessageEmbed()
			.setAuthor(UserTag, msg.author.displayAvatarURL({ dynamic: true }))
			.setDescription("**Текст:** `" + msg.content + "`")
			.addFields({
				name: 'Данные',
				value: "**Канал:** `" + msg.channel.name + "`\n**id автора:** `" + msg.author + "`"
			})
			.setColor(0xb60808)
		deletin.send(embed);
	} catch (err) {
		let center = client4.channels.cache.get('921686023812022272');
		center.send('Ошибка события: ' + event + '\nНазначение: ' + point);
		console.log(err);
	};
});

//_______________________________меню и список команд и действий

client4.on("message", (msg) => {
	if (msg.content.toLowerCase().indexOf("m!help") != -1) {
		const embed = new MessageEmbed()
			.setTitle("Меню")
			.setDescription("**m!help** - вывод списка меню.\n" + 
				"**delete** - команда удаления нескольких сообщений.\n" +
				"**m!del** - команда удаления одного сообщения.\n" +
				"**m!say** - команда повторить сообщение.\n" +
				"**ping** - pong\n" +
				"**ava** - вывод аватара пользователя.\n" +
				"**Новый год** - новогодняя гирлянда из реакций.\n" +
				"**зажги / гори** - новогодняя гирлянда из emoji.\n" +
				"**term** - запрос математического определения.\n" +
				"**Масхел?** - вопрос боту Масхел.\n" +
				"**m!list** - список других возможностей Масхел.")
			.setColor(0xd38247);
		msg.channel.send(embed);
	};
	if (msg.content.toLowerCase().indexOf("m!list") != -1) {
		const embed = new MessageEmbed()
			.setTitle("Список возможностей")
			.setDescription("**1.** Приветствие новых пользователей сервера.\n" +
				"**2.** Уведомление о выходе пользовотелей с сервера.\n" +
				"**3.** Вывод информации об удаленных сообщениях.\n" +
				"**4.** Случайный вывод случайных математических определений.\n" +
				"**5.** Вывод информации в чат-консоль *'center'*.\n")
			.setColor(0xd38247);
		msg.channel.send(embed);
	};
});

client4.login(process.env.BOT_TOKEN4);
