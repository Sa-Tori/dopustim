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

let servers = ['532954366571708427', '622954155077533696', '595645801628434461', '884726247182184468'];
let chls = ['557227808124960768', '557591312199843872',  // кофейня
//'666143344417570816', '625110384277192704', '667121233653006357', '872069721489547354', '626437711418359838', '709529256190803999', '625110420604321804', '819889380692721705', '830625000888598549', '775424100561584159', 
//	'817770948186996746', '659144018118311947',            //сервер савы
	    '885191628703301632', '884762025551601674', '885923305931030578', '885932463669518366', '885203009120919663', '885402752350556181',    //вересковая пустошь
'628992957273473035', '699975781375541298'];        //Империум

client2.on("message", (msg) => {
	let control = client2.channels.cache.get('878520465856036935');
	let UserTag = msg.author.tag;
	if (isFinded(msg.guild.id, servers)) {
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
		if (getRandom(0, 99) == 49 && msg.channel.id != "523123642293420052" || fl == true) {
			const embed = new MessageEmbed()
				.setAuthor(UserTag, msg.author.displayAvatarURL({ dynamic: true }))
				.setDescription("**Текст:** `"+new_str+"`\n**Исходный текст:** `"+str+"`")
				.addFields({
					name: 'Данные',
					value: "**Источник:** `"+msg.channel.name+"`\n**Отправлено:** `"+chnnls.name+"`\n**id канала:** `"+id_chls+"`\n**id автора:** `"+msg.author+"`\n**Запрос:** `"+fl+"`"
				})
				.setColor(0xf7fcff)
			control.send(embed);
			chnnls.send(new_str);
		};
	};
});



client2.login(process.env.BOT_TOKEN2);
