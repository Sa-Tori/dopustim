'use strict';
const Discord2 = require("discord.js");
const client2 = new Discord2.Client();

client2.on("ready", () => {
    console.log("Команды Мерлая готовы.");
    
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

function del(msg) {
	try {
		let chen = msg.channel.id;
		let p1 = msg.content.indexOf(' ');
		let mes_id = msg.content.substring(p1 + 1);
		let channel = client2.channels.cache.get(chen);
		var message = channel.messages.cache.get(mes_id);
		message.delete();
		msg.delete();
	} catch {
		msg.reply("ERROR!!");
	}
}

client2.on('message', (msg) => { 
    	if (msg.content.startsWith("msay") && (msg.author.id === "542663623789641729" || msg.author.id === "478669590365339649")) {
        	say(msg);
    	};
	if (msg.content.startsWith("Мерлай удали") && (msg.author.id === "542663623789641729" || msg.author.id === "478669590365339649")) {
		del(msg);
	};
});


client2.login(process.env.BOT_TOKEN2);

