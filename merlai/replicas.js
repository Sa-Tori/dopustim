const Discord2 = require("discord.js");
const client2 = new Discord2.Client();
const { Client, MessageEmbed } = require('discord.js');

client2.on("ready", () => {
    console.log('Реплики Мерлая готовы');
});

function getRandom(l, r) {
	return Math.round((Math.random() * r)) % (r - l) + l;
}

function isFinded(s, morn) {
	for (var i = 0; i < morn.length; i++) {
		if (s.toLowerCase().indexOf(morn[i]) != -1) {
			return true;
		}
	}
	return false;
}

let chls = ['523123642293420052', '591607946107158538', '501832333750435861', '499945033252864010', '492547076094164993',   //клан экспрессии 
	'557227694107000855', '557227808124960768', '557591312199843872', '557545230010810398',                                 //Кофейня
	'666143344417570816', '626437711418359838', '625110420604321804', '659144018118311947', '625113743008858118', '709529256190803999',   //сервер савы
	'628992957273473035', '699975781375541298'];                                                        //Империум

client2.on("message", (msg) => {
	let control = client2.channels.cache.get('878520465856036935');
	let UserTag = msg.author.tag;
	if (isFinded(msg.channel.id, chls)) {
		let idc = Math.floor(Math.random() * chls.length);
		const id_chls = chls[idc];
		let chnnls = client2.channels.cache.get(id_chls);

		var str = msg.content;
		var fl = false; 
		if (msg.content === "mr") return;
		if (msg.content.startsWith('mr')) {
			var str = msg.content.substring(3, msg.content.length);
			fl = true; 
		};
		
		let arr = str.trim().split(/ +/g);
		let random = (max) => { return Math.floor(Math.random() * max); };
		let len = random(arr.length) + 1;
		let max = arr.length - len + 1;

		let new_arr = arr.splice(random(max), len)
		let new_str = new_arr.join(" ");
		if (getRandom(0, 100) == 49 || fl == true) {
			const embed = new MessageEmbed()
				.setAuthor(UserTag, msg.author.displayAvatarURL({ dynamic: true }))
				.setDescription("**Текст:** `"+new_str+"`\n**Исходный текст:** `"+str+"`")
				.addFields({
					name: 'Данные',
					value: "**Канал:** `"+msg.channel.name+"`\n**id автора:** `"+msg.author+"`\n**Отправлено в канал:** `"+chnnls.name+"`\n**Использование команды:** `"+fl+"`"
				})
				.setColor(0xf7fcff)
			control.send(embed);
			chnnls.send(new_str);
		};
	};
});

client2.login(process.env.BOT_TOKEN2);
