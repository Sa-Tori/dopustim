'use strict';
const Discord2 = require("discord.js");
const client2 = new Discord2.Client();

//дополнение

const poetry = require('./poetry.json');
const alcohol = require('./poetry.json');

//сообщения

client2.on("ready", () => {
    console.log('Ответы Мерлая готовы');
});

client2.on("message", async (msg) => {
    try {
        if (msg.content.toLowerCase().indexOf("умерла я")!=-1 && (msg.author.id === "542663623789641729" || msg.author.id === "478669590365339649")) {
            let delay = async (duration) => { await new Promise(resolve => setTimeout(resolve, duration)) };
            await delay(5 * 1000);
            msg.channel.send("Клянусь, нет её у меня!");
        }
    } catch (err) { 
	msg.channel.send('<@542663623789641729> мам, я упал <a:hlepng:882291167948079165>'); 
	let control = client2.channels.cache.get('878520465856036935');
	control.send('Мама, хлеп!');
	console.log(err); 
    };
});

client2.on("message", (msg) => {
    if (msg.content.toLowerCase().indexOf("ча")!=-1 && msg.content.toLowerCase().indexOf(" ча")!=-1 && msg.author.id === "654810705903484949"){
            const alcohol = poetry.alcohol;
            const randomIndex = Math.floor(Math.random() * alcohol.length);
            const word = alcohol[randomIndex];
            msg.channel.send(word+" <:mme:625115196637315124>");
    };
	if (msg.author.id === "523116257390886954" && (msg.content.toLowerCase().indexOf("мордекайзер") != -1 || msg.content.toLowerCase().indexOf("панцирь из металла") != -1)) {
		msg.channel.send("```diff\n- В смерти нет смысла, Картус. Важно то, что ты делаешь после неё.```");
	};
	if (msg.author.id === "523116257390886954" && (msg.content.toLowerCase().indexOf("сион") != -1 || msg.content.toLowerCase().indexOf("эхо величия") != -1)) {
		msg.channel.send("```diff\n- Даже смерть трепещет при виде меня.```");
	};
	if (msg.author.id === "523116257390886954" && msg.content.toLowerCase().indexOf("долго обманываешь смерть") != -1) {
		msg.channel.send("```diff\n- Мне ещё так много нужно.. убить..```");
	};
	if (msg.author.id === "523116257390886954" && (msg.content.toLowerCase().indexOf("mordekaiser") != -1 || msg.content.toLowerCase().indexOf("a shell of metal") != -1)) {
		msg.channel.send("```diff\n- Death has no meaning, Karthus, all that matters is one's purpose beyond it.```");
	};	
});

client2.login(process.env.BOT_TOKEN2);
