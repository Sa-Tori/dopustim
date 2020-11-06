'use strict';
const Discord = require("discord.js");
const client = new Discord.Client();

//подключенные файлы
//const greeting = require("./greeting");

const replicas = require("./replicas");
const avatars = require("./avatars");
const embeds = require("./embeds");
const theult = require("./theult"); 

//дополнение

const {poetry, alcohol} = require('./poetry.json');
const {noprefix, shprefix} = require('./poetry.json');

//сообщения

client.on ("ready", () => {
    console.log("Ответы готовы");
    client.user.setPresence({
        status: 'online',
        activity: {
            type: 'WATCHING',
            name: 'в бездну',
        },
    });
  /*static void UpdatePresence()
{
    DiscordRichPresence discordPresence;
    memset(&discordPresence, 0, sizeof(discordPresence));
    discordPresence.state = "Я наблюдаю";
    discordPresence.details = "Competitive";
    discordPresence.startTimestamp = 1507665886;
    discordPresence.endTimestamp = 1507665886;
    discordPresence.largeImageText = "Допустим";
    discordPresence.smallImageText = "Rogue - Level 100";
    discordPresence.partyId = "ae488379-351d-4a4f-ad32-2b9b01c91657";
    discordPresence.partySize = 1;
    discordPresence.partyMax = 5;
    discordPresence.joinSecret = "MTI4NzM0OjFpMmhuZToxMjMxMjM= ";
    Discord_UpdatePresence(&discordPresence);
}*/
 });



client.on("message", (msg) => {
    if (msg.content.startsWith("ping")) {
        if (msg.author.id === "224197682510561280") {
            msg.channel.send("Отстань от Кофуку ");
        } else {
            msg.channel.send("pong");
        }
    }
    if (msg.content.startsWith("картус где ганги")) {
            msg.channel.send("Никакого уважения..");
    }
    if (msg.content.startsWith("Картус привет")) {
            msg.channel.send("Привет, а ты кто?");
    }
    if (msg.content === "Ghbdtn") {
            msg.reply(' я тебя не понял, но привет');
    }
    if (msg.content === "одиночество") {
            msg.channel.send('loneliness');
    }
    if (msg.content.startsWith("я тут подумал")) {
            msg.channel.send('Не говори вслух, ты понижаешь IQ всего сервера');
    }
    if (msg.content.startsWith("Допустим")) {
            msg.channel.send('???');
    }
    if (msg.content.startsWith(`${noprefix}`)) {
            msg.channel.send("Ты за кого меня принимаешь??");
    }
    if (msg.content.startsWith(`${shprefix}`)) {
            msg.channel.send("Не повышай на меня шрифт!");
    }
    if (msg.content.startsWith("С добрым утром")) {
        if (msg.author.id === "297089757651927040") {
            msg.channel.send("Здравствуй, <@" + msg.author.id + "> <:089:684120628734722048> ");
        } else {
            msg.channel.send("С каких пор утро доброе <:035:737098587728510996> ");
        }
    }
    if (msg.content.toLowerCase().indexOf("картафилиус")!=-1){
            msg.channel.send("Время не стоит, \nЗло ли ты таишь в себе..\nНе поминай в суе.");
    }
    if (msg.content.toLowerCase() == "лень") {
            msg.channel.send("Олень");
    }
    if (msg.content === "Олень" && msg.author.id === "523116257390886954") {
            msg.channel.send('Тюлень');
    }
    if (msg.content === "Тюлень" && msg.author.id === "523116257390886954") {
            msg.channel.send('Пельмень');
    }
    if (msg.content.startsWith("MEH")) {
            msg.channel.send("```diff\n- Тебе расчесать?```");         
    }
    if (msg.content.toLowerCase().indexOf("ча")!=-1 && msg.content.toLowerCase().indexOf(" ча")!=-1 && msg.author.id === "654810705903484949"){
            const alcohol = poetry.alcohol;
            const randomIndex = Math.floor(Math.random() * alcohol.length);
            const word = alcohol[randomIndex];
            msg.channel.send(word+" <:mme:625115196637315124>");
    }
});

client.on("message", (msg) => {
    if (msg.content === "Картус" && msg.author.id === "542663623789641729") {
        msg.channel.send('Что?');
        warns: 1;
        fs.writeFile("./data.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err)
        });
    };
    if (msg.content === "Что?" && msg.author.id === "523116257390886954" && warns == 1) {
        msg.channel.send('Что??');
        warns.warns++;
        fs.writeFile("./data.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err)
        });
    };
    if (msg.content === "Что??" && msg.author.id === "523116257390886954" && warns == 2) {
        msg.channel.send('Чего тебе, Сато???');
        warns: 3
    };
    if (msg.content === "Привет" && msg.author.id === "542663623789641729" && warns == 3) {
        warns: 0
    };
    
    /*warns.warns++; // Если все проверки прошли успешно, к текущему количеству предупреждений пользователя прибавляется +1
    fs.writeFile("./data.json", JSON.stringify(warns), (err) => { // Все данные сохраняются в .json файле
        if (err) console.log(err)
    });
    if (warns.warns == 1) { // Если обнаружено 3+ предупреждений, то...
    msg.channel.send('Что?');} // Кикнуть участника сервера по причине "3/3 предупреждений"
    if (warns.warns == 2) {
    msg.channel.send('Что??');}
    if (warns.warns == 3) {
    msg.channel.send('Чего тебе, Сато???');}
    if (warns.warns >= 3) warns = { // Если обнаружено 3+ предупреждений, их количество устанавливается на 0
            warns: 0
    };*/
});




client.login(process.env.BOT_TOKEN);