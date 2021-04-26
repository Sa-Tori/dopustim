const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const poetry = require('./poetry.json');

client.on("ready", () => {
    console.log("АнтиНитро Картуса готово.");
});

/*if (msg.content === "" || msg.content === "") {
        msg.delete();
        msg.channel.send("");
    };*/

client.on('message', (msg) => { 
    if (msg.author.id != "542663623789641729") return;
//экспрессия
    if (msg.content === "кс1" || msg.content === "Кс1") {
        msg.delete();
        msg.channel.send("<:karthus:826580320044056576>");
    };
    if (msg.content === "кс2" || msg.content === "Кс2") {
        msg.delete();
        msg.channel.send("<:karthus2:826584480311279656>");
    };
    if (msg.content === "кх2" || msg.content === "Кх2") {
        msg.delete();
        msg.channel.send("<:kh2:827959675881652256>");
    };
    if (msg.content === "кф1" || msg.content === "Кф1") {
        msg.delete();
        msg.channel.send("<:karthusf:827539023660449823>");
    };
    if (msg.content === "кф2" || msg.content === "Кф2") {
        msg.delete();
        msg.channel.send("<:karthusf2:827569155292921926>");
    };
    if (msg.content === "кф3" || msg.content === "Кф3") {
        msg.delete();
        msg.channel.send("<:karthusf3:827903691432394762>");
    };
    if (msg.content === "кф4" || msg.content === "Кф4") {
        msg.delete();
        msg.channel.send("<:karthusf4:828269145501991032>");
    };
    if (msg.content === "кекв" || msg.content === "Кекв") {
        msg.delete();
        msg.channel.send("<:kekv:821891736687214662>");
    };
    if (msg.content === "кевк" || msg.content === "Кевк") {
        msg.delete();
        msg.channel.send("<:kekw:821053309087383633>");
    };
    if (msg.content === "хзи" || msg.content === "Хзи") {
        msg.delete();
        msg.channel.send("<:hzi:506113320848457768>");
    };
    if (msg.content === "либа" || msg.content === "Либа") {
        msg.delete();
        msg.channel.send("<:liba:508639165433249802>");
    };
//кофейня
    if (msg.content === "спнч" || msg.content === "Спнч") {
        msg.delete();
        msg.channel.send("<:089:592420693992538167>");
    };
    if (msg.content === "килл" || msg.content === "Килл") {
        msg.delete();
        msg.channel.send("<:087:592420677114396684>");
    };
    if (msg.content === "сетт" || msg.content === "Сетт") {
        msg.delete();
        msg.channel.send("<:085:592420647812988930>");
    };
    if (msg.content === "хаск" || msg.content === "Хаск") {
        msg.delete();
        msg.channel.send("<:079:592420490870521856>");
    };
    if (msg.content === "ппср" || msg.content === "Ппср") {
        msg.delete();
        msg.channel.send("<:078:592420468397572106>");
    };
    if (msg.content === "спот" || msg.content === "Спот") {
        msg.delete();
        msg.channel.send("<:072:592420330480599041>");
    };
    if (msg.content === "мчб" || msg.content === "Мчб") {
        msg.delete();
        msg.channel.send("<:071:592420309768863754>");
    };
    if (msg.content === "ват" || msg.content === "Ват") {
        msg.delete();
        msg.channel.send("<:048:592420210359795712>");
    };
    if (msg.content === "фпл" || msg.content === "Фпл") {
        msg.delete();
        msg.channel.send("<:049:592420229213061121>");
    };
    if (msg.content === "прсв" || msg.content === "Прсв") {
        msg.delete();
        msg.channel.send("<:040:592419753776251002>");
    };
    if (msg.content === "кффи" || msg.content === "Кффи") {
        msg.delete();
        msg.channel.send("<:009:592419660113117248>");
    };
//
    if (msg.content === "дид" || msg.content === "Дид") {
        msg.delete();
        msg.channel.send("<:047:684120725325742098>");
    };
//
    if (msg.content === "кет" || msg.content === "Кет") {
        msg.delete();
        msg.channel.send("<a:001:798978997237186580>");
    };
//напоминание
    if (msg.content === "напомни") {
        const ebd = poetry.ebd;
        const embed = new MessageEmbed()
            .setTitle("напоминание глупому оленю")
            .setColor(0x0d004d)
            .setDescription(ebd);
        msg.channel.send(embed);
    };
});


client.login(process.env.BOT_TOKEN);

