const Discord2 = require("discord.js");
const client2 = new Discord2.Client();
const { Client, MessageEmbed } = require('discord.js');

const page = 'control';
var point = '';

client2.on ("ready", () => {
 console.log("Control Мерлая готов");
});
/*
client2.on('messageDelete', async msg => {
	let control = client2.channels.cache.get('878520465856036935');
	if (msg.author.id === "776445694587306028") {
		if (!msg.guild) return;
		const fetchedLogs = await msg.guild.fetchAuditLogs({
			limit: 1,
			type: 'MESSAGE_DELETE',
		});
		const deletionLog = fetchedLogs.entries.first();
		if (!deletionLog) return control.send(`Сообщение от ${msg.author.tag} был удален, но соответствующие журналы аудита не были найдены.`);

		const { executor, target } = deletionLog;
		if (target.id === msg.author.id && executor.id != "776445694587306028") {
			control.send(`Сообщение от ${msg.author.tag} было удалено ${executor.tag}.`);
			msg.channel.send(`Какой-то пидор удалил мое сообщение. <:084:592420618084024320>\nА, постойте, это же ${executor.tag} <:096:592420847017263134>`);
		} else {
			control.send(`Сообщение от ${msg.author.tag} было удалено, но мы не знаем, кем.`);
		};
	};
});*/

client2.on('message', async msg => {
    try {
    point = '1';
    let control = client2.channels.cache.get('878520465856036935');
    let UserTag = msg.author.tag;
    var palish = client2.channels.cache.get('889592085747990589');
      if (msg.guild.id == '884726247182184468') {
        const embed = new MessageEmbed()
            .setAuthor(UserTag, msg.author.displayAvatarURL({ dynamic: true }))
            .setColor(0xf7fcff)
            .setDescription(msg.content + "\n**Канал:** " + msg.channel.name + "\n**id канала:** " + msg.channel.id + "\n**id:** " + msg.id)
            .setTimestamp();
         palish.send(embed);
    };
    } catch (err) { 
      let center = client2.channels.cache.get('522817871370387472');
      center.send('Страница: ' + page+'\nПункт: '+point+'\nСостояние: failed.');
      console.log(err); 
    };
});
 


client2.login(process.env.BOT_TOKEN2);
