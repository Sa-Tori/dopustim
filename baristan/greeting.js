'use strict';
const Discord3 = require("discord.js");
const client3 = new Discord3.Client();
const poetry = require('./poetry.json');

client3.on("ready", () => {
    console.log('Приветствие Баристана готово');
});

function getRandom(l, r) {
    return Math.round((Math.random() * r)) % (r - l) + l;
}

client3.on('guildMemberAdd', async (member) => {
    let greet = poetry.greet11;
    const channel = member.guild.channels.cache.get('532954367100452866');
    if (!channel) return;
    let fl = 0;
    try {
        if (channel) {
            let delay = async (duration) => { await new Promise(resolve => setTimeout(resolve, duration)) };
            await delay(5 * 1000);
            let str = member.id;
            str = str + "";
            if (str.lastIndexOf('1') == 17 || str.lastIndexOf('5') == 17 || str.lastIndexOf('7') == 17) {
                if (getRandom(1, 2) == 2) {
                    greet = poetry.greet22;
                    fl = 1;
                }
                let r = Math.floor(Math.random() * greet.length);
                const greeting = greet[r];
                if (fl == 1) channel.send('${member}' + greeting);
                else channel.send(greeting);
            }
        }
    } catch (err) {
        msg.channel.send('<@542663623789641729> мам, я упал <a:hlepng:882291167948079165>');
        let control = client.channels.cache.get('878520465856036935');
        control.send('Мама, хлеп!');
        console.log(err);
    };
});

client3.on("message", async (msg) => {
    try {
        let delay = async (duration) => { await new Promise(resolve => setTimeout(resolve, duration)) };
        await delay(10 * 1000);
        if (msg.author.id == "523116257390886954") { //Картус
            if (msg.content.toLowerCase().indexOf("emento mori, hikikomori") != -1) msg.channel.send("Не нагнетай, мы и так все мертвы.");
            if (msg.content.toLowerCase().indexOf("это за метка на твоём") != -1) msg.channel.send("Это след преступления ещё не совершенного...");
            if (msg.content.toLowerCase().indexOf("аристан, мне кажется,") != -1) msg.channel.send("Ой!");
            if (msg.content.toLowerCase().indexOf("а ну брысь, шерстяное") != -1) msg.channel.send("Картус, мать твою! Это не кот, это наш посетитель!");
            if (msg.content.toLowerCase().indexOf("у нас тут что, чебуречная") != -1) msg.channel.send("А где он тут вообще мясо достал <:ezgif:840338961275813909>");
        };
        if (msg.author.id == "776445694587306028") { //Мерлай
            if (msg.content.toLowerCase().indexOf("зачем пожаловал к нам?") != -1) msg.channel.send("Будь повежливее с посетителями.");
            if (msg.content.toLowerCase().indexOf("надеюсь, ты ему там чай") != -1) msg.channel.send("У нас же закончился чай!");
            if (msg.content.indexOf("<@") != -1 && msg.content.length == 22) msg.channel.send("Ну и зачем ты пинганул посетителя?");
            if (msg.content.toLowerCase().indexOf("обы ему было неприятно") != -1) msg.channel.send("Ты что! А вдруг он уйдет?");
            if (msg.content.toLowerCase().indexOf("отведай этот прекрасный") != -1) msg.channel.send("Что ты там ему предлагаешь?<:ezgif1:840339018453090306>");
            if (msg.content.toLowerCase().indexOf("сего лишь кофе с ликером") != -1) msg.channel.send("Но у нас же закончился кофе!");
            if (msg.content.toLowerCase().indexOf("что ты пьёшь, и я") != -1) msg.channel.send("<@776445694587306028>, хватит уже искать себе собутыльника и иди работай!");
            if (msg.content.toLowerCase().indexOf("не добро пожаловать") != -1) msg.channel.send("Где твои манеры!");
            if (msg.content.toLowerCase().indexOf("примите мои оскорбления") != -1) msg.channel.send("Мерлай!");
            if (msg.content.toLowerCase().indexOf("надеюсь, мы сопьемся") != -1) msg.channel.send('Может "споемся"?');
            if (msg.content.toLowerCase().indexOf("atire, latiremo") != -1) msg.channel.send("Картус, неси лопату - Мерлай снова в могилу пьян.");
            if (msg.content.toLowerCase().indexOf("бан за выход один") != -1) msg.channel.send("<@776445694587306028> <:091:592420742893666315>");
        };
    } catch (err) {
        msg.channel.send('<@542663623789641729> мам, я упал <a:hlepng:882291167948079165>');
        let control = client.channels.cache.get('878520465856036935');
        control.send('Мама, хлеп!');
        console.log(err);
    };
});

client3.login(process.env.BOT_TOKEN3);
