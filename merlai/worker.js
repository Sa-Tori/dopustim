'use strict';
const Discord2 = require("discord.js");
const client2 = new Discord2.Client();
const poetry = require('./poetry.json');
const blya = poetry.blya;
const anch = poetry.anch;

const page = 'worker';
var point = '';

//сообщения

client2.on("ready", () => {
	console.log('Работа Мерлая готова');
});

function isFinded(s, morn) {
	for (var i = 0; i < morn.length; i++) {
		if (s.toLowerCase().indexOf(morn[i]) != -1) {
			return true;
		}
	}
	return false;
}

function anblya(msg) {
	try {
		let str_ini = msg.content
		let str = msg.content
		var x = '<:blyat:838469432103141377>'
		blya.forEach(w => {
			let patt = new RegExp(w, 'gi')//создаем шаблон для замены: слово + флаги, g - заменить все слова, i - неучитывать регистр
			str = str.replace(patt, x)
		});
		if (str_ini !== str) {
			if (str !== x) msg.reply('материться запрещено. Цензура:');
			msg.channel.send(str)
			msg.delete()
		};
	} catch {
		msg.reply("ERROR!!");
	}
}

client2.on('message', async (msg) => {
	let bump = client2.channels.cache.get('570922055407501332');
	try {
        point = '1';
		if ((msg.author.id == "315926021457051650" || msg.author.id == "542663623789641729") && msg.guild.id == "532954366571708427" && msg.embeds.length > 0 && msg.embeds[0].description != '') {
		if (msg.embeds[0].description.toLowerCase().indexOf("server bumped by") != -1 || msg.content == "обновить таймер") {
			let delay = async (duration) => { await new Promise(resolve => setTimeout(resolve, duration)) };
			await delay(4 * 60 * 60 * 1000);
			bump.send('<@&891331557300764712> Пора бампать!');
		};
		};
	} catch (err) { 
		msg.channel.send('<@542663623789641729> мам, я упал <a:hlepng:882291167948079165>'); 
		let center = client2.channels.cache.get('522817871370387472');
                center.send('Страница: ' + page+'\nПункт: '+point+'\nСостояние: failed.');
		console.log(err); 
	};
});

client2.on('message', async (msg) => {
   try {
   point = '2';
	if (isFinded(msg.content, blya) && msg.guild.id == "532954366571708427" && !msg.author.bot) {
		for (let i = 0; i < anch.length; i++) {
			if (msg.channel.id === anch[i]) return;
		};
		anblya(msg);
	};
   } catch (err) { 
     let center = client2.channels.cache.get('522817871370387472');
     center.send('Страница: ' + page+'\nПункт: '+point+'\nСостояние: failed.');
     console.log(err); 
   };
});


client2.login(process.env.BOT_TOKEN2);
