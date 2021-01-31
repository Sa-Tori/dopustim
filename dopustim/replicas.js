const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const fs = require("fs");
const poetry = require('./poetry.json');
const servers = ["381829822982389771", "471630590806851584"];


client.on ("ready", () => {
 console.log("Реплики готовы");
});


function getRandom(l, r) {
    return Math.round((Math.random() * r)) % (r - l) + l;
}


function lowerCase(s) {
	var s1 = "";
	for (var i = 0; i < s.length; i++) {
		if (s.charCodeAt(i) == 1025) {
			s1 += "е";
			continue;
		} else if (s.charCodeAt(i) >= 1040 && s.charCodeAt(i) <= 1071) {
			s1 += String.fromCharCode(s.charCodeAt(i)+32);
			continue;
		} else
			s1 += s.charAt(i);
	}
	return s1;
}


function isDigit(s) {
	if (s.charCodeAt(0) >= 97 && s.charCodeAt(0) <= 122)
		return true;
	if (s.charCodeAt(0) >= 1072 && s.charCodeAt(0) <= 1103)
		return true;
	return false;
}


function rand_word(s) {
	var a = [];
	s = lowerCase(s);
	while (s.length > 0) {
		while(s.length > 0 && !isDigit(s.charAt(0))) {
			s = s.substr(1,s.length-1);
		}
		var z = "";
		var i = 0;
		if (s.length == 0)
			break;
		while(i < s.length && isDigit(s.charAt(i))) {
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


function getStrof(s, w) {
	var y = lowerCase(s).indexOf(w);
	var ans = "";
	var i = y;
	while(i < s.length && s.charAt(i) != '.' && s.charAt(i) != '?' && s.charAt(i) != '!') {
		ans += s.charAt(i);
		i++;
	}
	i = y-1;
	while(i >= 0 && s.charAt(i) != '.' && s.charAt(i) != '?' && s.charAt(i) != '!') {
		ans = s.charAt(i) + ans;
		i--;
	}
	return ans;
}


client.on("message", (msg) => {
 

	if ((msg.guild.id == "683107614589976657" || msg.guild.id == "532954366571708427" || msg.guild.id == "622954155077533696" || msg.guild.id == "466006517288665099" || msg.guild.id == "683107614589976657" || msg.guild.id == "611111608219074570" || msg.content.startsWith('ds')) && msg.author.id != "523116257390886954") {
		var m = msg.content; // получаем весь текст сообщения
		var fl = 0;
		if (msg.content.startsWith('ds')) { //если начинается с ds обрежем его и запомним, что так было в fl
			m = msg.content.substring(3, msg.content.length);
			fl = 1;
		}
		var rd = rand_word(m); // достает рандомное слово из строки m
		var b = [];
		var voice = poetry.voice; // массив всех стихов
		for (var i = 0; i < voice.length; i++) // находит все стихи, где есть это слово и записывает их в b
			if (lowerCase(voice[i]).includes(rd))
				b.push(voice[i]);
		if (b.length != 0 && (getRandom(0, 20) == 7 || fl == 1)) { // если ести стихи с этим словом и рандом выпадает (или же у нас был запрос qt) отправим стих
			var t = getRandom(0, b.length); // выберем рандомный стих из b
			msg.channel.send("```"+b[t]+"```"); // вот тут выберем предложение из стиха
		}
		if (fl == 1 && b.length == 0) { // если был запрос ds и стихотворений нет
			msg.reply("Прошу меня простить, меня ждут крипы.");
		}
	}
});


client.on("message", async (msg) => {
	if (msg.author.id != "542663623789641729") {
		const hokku = poetry.hokku;
		const randomIndex = Math.floor(Math.random() * hokku.length);
		const word = hokku[randomIndex];
		const rng = getRandom(0, 2021);
		try {
			if (rng == 222) {
				let delay = async (duration) => { await new Promise(resolve => setTimeout(resolve, duration)) };
				await delay(22 * 3600 * 1000);
				msg.channel.send("```xl\n'" + word + "'```");
			}
		} catch (err) { console.log(err); };
		try {
			if (rng == 444) {
				let delay = async (duration) => { await new Promise(resolve => setTimeout(resolve, duration)) };
				await delay(4 * 3600 * 1000);
				msg.channel.send("```xl\n'" + word + "'```");
			}
		} catch (err) { console.log(err); };
		try {
			if (rng == 777) {
				let delay = async (duration) => { await new Promise(resolve => setTimeout(resolve, duration)) };
				await delay(15 * 3600 * 1000);
				msg.channel.send("```xl\n'" + word + "'```");
			}
		} catch (err) { console.log(err); };
		try {
			if (rng == 13) {
				let delay = async (duration) => { await new Promise(resolve => setTimeout(resolve, duration)) };
				await delay(13 * 3600 * 1000);
				msg.channel.send("```xl\n'" + word + "'```");
			}
		} catch (err) { console.log(err); };
	}
});



client.login(process.env.BOT_TOKEN);