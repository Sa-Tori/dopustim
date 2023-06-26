'use strict';
const Discord = require('discord.js');
const client = new Discord.Client();
const poetry = require('./poetry.json');

client.on('ready', () => {
  console.log('Приветствие Картуса готово');
});

function getRandom(l, r) {
    return Math.round((Math.random() * r)) % (r - l) + l;
}

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === '🍓врата' || ch.name === "🤖ваш-покорный-слуга" || ch.name === "🛋welcome");
  if (!channel) return;
  channel.send(`${member} а ты ещё кто такой <:ezgif1:840339018453090306>`);
});

client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === '🍓врата' || ch.name === "🤖ваш-покорный-слуга" || ch.name === "🛋welcome");
  if (!channel) return;
  channel.send(`Разбиты окна,\nМеркнет свет..\nНа голову надет пакет.`);
});

client.on("message", msg => {
    if (msg.content.startsWith("Ниче не меркнет!") && msg.author.id == "776445694587306028") {
      msg.channel.send("Скатертью дорожка <:mme:625115196637315124>");
    }   
});

client.on('guildMemberAdd', async (member) => {
    let greet = poetry.greet;
    const channel = member.guild.channels.cache.get('532954367100452866');
    if (!channel) return;
    let fl = 0;
    try {
        if (channel) {
            let delay = async (duration) => { await new Promise(resolve => setTimeout(resolve, duration)) };
            await delay(5 * 1000);
            let str = member.id;
            str = str + "";
            if (str.lastIndexOf('3') == 17 || str.lastIndexOf('5') == 17 || str.lastIndexOf('9') == 17) {
                if (getRandom(1, 2) == 2) {
                    greet = poetry.greet2;
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

//приветствие дипломной работы
client.on('guildMemberAdd', async (member) => {
    let greet = poetry.greet;
    const channel = member.guild.channels.cache.get('1122856220567539752');
    if (!channel) return;
    let fl = 0;
    try {
        if (channel) {
            let delay = async (duration) => { await new Promise(resolve => setTimeout(resolve, duration)) };
            await delay(5 * 1000);
            let str = member.id;
            str = str + "";
            if (str.lastIndexOf('3') == 17 || str.lastIndexOf('5') == 17 || str.lastIndexOf('9') == 17) {
                if (getRandom(1, 2) == 2) {
                    greet = poetry.greet2;
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

client.on("message", async (msg) => {
    try {
        let delay = async (duration) => { await new Promise(resolve => setTimeout(resolve, duration)) };
        await delay(10 * 1000);
        if (msg.author.id == "776445694587306028") { //Мерлай
            if (msg.content.toLowerCase().indexOf("смотри, кто тут у нас") != -1) msg.channel.send("Ещё один призрак <:ezgif:840338961275813909>");
            if (msg.content.toLowerCase().indexOf("этого мы будем встречать") != -1) msg.channel.send("Думаю, нет. Он уже уходит.");
            if (msg.content.toLowerCase().indexOf("деревья, цветы завяли,") != -1) msg.channel.send("А теперь от него одни огрызки остались <:059:592420289921548312>");
            if (msg.content.toLowerCase().indexOf("Я могу предложить тебе бухло.") != -1) msg.channel.send("У нас его нет <:084:592420618084024320>");
            if (msg.content.toLowerCase().indexOf("Дед, ты опять забыл принять") != -1) msg.channel.send("Я хочу золото!!!");
            if (msg.content.toLowerCase().indexOf("Только оленей не корми, у") != -1) msg.channel.send("Мог бы и повежливее говорить про админа.");
            if (msg.content.toLowerCase().indexOf("артус, тебя заклинило") != -1) msg.channel.send("хорошо");
            if (msg.content.toLowerCase().indexOf("вторая ошибка женщины") != -1) msg.channel.send("<@776445694587306028>, ты пьян?");
            if (msg.content.toLowerCase().indexOf("оброго времени уток") != -1) msg.channel.send('Может "суток"?');
            if (msg.content.toLowerCase().indexOf("орячие чебуреки") != -1) msg.channel.send("<@776445694587306028> у нас тут что, чебуречная??");
            if (msg.content.toLowerCase().indexOf("я надеюсь, ты принес моё") != -1) msg.channel.send("Откуда у мертвецов золото???");
        };
        if (msg.author.id == "836240368206872576") { //Баристан
            if (msg.content.toLowerCase().indexOf("пришел сюда посмотреть на драконов?") != -1) msg.channel.send("Нет их сейчас, они в спячке.");
            if (msg.content.toLowerCase().indexOf("вы наш новый электрик") != -1) msg.channel.send("Баристан, мне кажется, ты что-то путаешь...");
            if (msg.content.toLowerCase().indexOf("олько вчера о тебе думал") != -1) msg.channel.send("<@836240368206872576> ты что, маньяк какой-то?");
            if (msg.content.toLowerCase().indexOf("то не кот, это наш") != -1) msg.channel.send("Не поминай админа");
            if (msg.content.toLowerCase().indexOf("тус, неси лопату") != -1) msg.channel.send("Может давай просто его утопим?");
            if (msg.content.toLowerCase().indexOf("чего нет у живых") != -1) msg.channel.send("Загробный чай, прямиком из склепа!");
        };
    } catch (err) {
        msg.channel.send('<@542663623789641729> мам, я упал <a:hlepng:882291167948079165>');
        let control = client.channels.cache.get('878520465856036935');
        control.send('Мама, хлеп!');
        console.log(err);
    };
});


client.login(process.env.BOT_TOKEN);
