const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

const page = 'control';
var point = '';

client.on ("ready", () => {
 console.log("Control Картуса готов");
});


client.on('message', async (msg) => {
    point = '1';
    try {
    let control = client.channels.cache.get('878520465856036935');
    let UserTag = msg.author.tag;
      if (msg.guild.id == '622954155077533696') {
        if (msg.channel.id == "666143344417570816") {
            var palish = client.channels.cache.get('563752253090168863');
            var descr = msg.content;
        } else {
            palish = client.channels.cache.get('883608296664203334');
            descr = msg.content + "\n**Канал:** " + msg.channel.name + "\n**id канала:** " + msg.channel.id + "\n**id:** " + msg.id;
        };
        const embed = new MessageEmbed()
            .setAuthor(UserTag, msg.author.displayAvatarURL({ dynamic: true }))
            .setColor(0x368ba2)
            .setDescription(descr)
            .setTimestamp();
         palish.send(embed);
    };
    } catch (err) { 
      let center = client.channels.cache.get('522817871370387472');
      center.send('Страница: ' + page+'\nПункт: '+point+'\nСостояние: failed.');
      console.log(err); 
    };
});

client.on('messageDelete', async msg => {
    point = '2';
    try {
	let control = client.channels.cache.get('878520465856036935');
	if (msg.author.id === "523116257390886954") {
		if (!msg.guild) return;
		const fetchedLogs = await msg.guild.fetchAuditLogs({
			limit: 1,
			type: 'MESSAGE_DELETE',
		});
		const deletionLog = fetchedLogs.entries.first();
		if (!deletionLog) return control.send(`Сообщение от ${msg.author.tag} был удален, но соответствующие журналы аудита не были найдены.`);
		
		const { executor, target } = deletionLog;
		if (target.id === msg.author.id && executor.id != "542663623789641729") {
			control.send(`Сообщение от ${msg.author.tag} было удалено ${executor.tag}.`);
			msg.channel.send(`Какой-то пидор удалил мое сообщение. <:mme:625115196637315124>\nА, постойте, это же ${executor.tag} <:096:592420847017263134>`);
		} else {
			control.send(`Сообщение от ${msg.author.tag} было удалено, но мы не знаем, кем.`);
		};
	};
    } catch (err) { 
      let center = client.channels.cache.get('522817871370387472');
      center.send('Страница: ' + page+'\nПункт: '+point+'\nСостояние: failed.');
      console.log(err); 
    };
});

client.on('messageDelete', async msg => {
  point = '3';
  try {
    let deletin = client.channels.cache.get('878081921601642506');
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
    let center = client.channels.cache.get('522817871370387472');
    center.send('Страница: ' + page+'\nПункт: '+point+'\nСостояние: failed.');
    console.log(err); 
  };
});

client.login(process.env.BOT_TOKEN);
