const Discord2 = require("discord.js");
const client2 = new Discord2.Client();
const poetry = require('./poetry.json');

client2.on("ready", () => {
    console.log('Приветствие Мерлая готово');
});

function getRandom(l, r) {
    return Math.round((Math.random() * r)) % (r - l) + l;
}

client2.on('guildMemberRemove', async (member) => {
    const channel = member.guild.channels.cache.find(ch => ch.name === '🍓врата' || ch.name === "🤖ваш-покорный-слуга" || ch.name === "🛋welcome");
    let UserTag = member.user.tag;
    if (!channel) return;
    try {
        if (channel) {
            let delay = async (duration) => { await new Promise(resolve => setTimeout(resolve, duration)) };
            await delay(5 * 1000);
            channel.send("Ниче не меркнет! Это " + UserTag + " покинул нас.");
        }
    } catch (err) { 
        msg.channel.send('<@542663623789641729> мам, я упал <a:hlepng:882291167948079165>'); 
        let control = client2.channels.cache.get('878520465856036935');
        control.send('Мама, хлеп!');
        console.log(err); 
    };
});

//выдача роли в империуме

client2.on('guildMemberAdd',  async (member) => {
    const channel = member.guild.channels.cache.get('749945494880649267');
    if (!channel) return;
    var role = member.guild.roles.cache.find(role => role.id === "699912160494747648");
    member.roles.add(role);
});

client2.on('guildMemberAdd', async (member) => {
    const channel = member.guild.channels.cache.get('532954367100452866');
    if (!channel) return;
    var role = member.guild.roles.cache.find(role => role.id === "894649795224956948");
    member.roles.add(role);
});

client2.on('guildMemberAdd', async (member) => {
    let greet = poetry.greet1;
    const channel = member.guild.channels.cache.get('532954367100452866');
    if (!channel) return;
    let fl = 0;
    try {
        if (channel) {
            let delay = async (duration) => { await new Promise(resolve => setTimeout(resolve, duration)) };
            await delay(5 * 1000);
            let str = member.id;
            str = str + "";
            if (str.lastIndexOf('2') == 17 || str.lastIndexOf('4') == 17 || str.lastIndexOf('8') == 17 || str.lastIndexOf('0') == 17) {
                if (getRandom(1, 2) == 2) {
                    greet = poetry.greet21;
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

client2.on("message", async (msg) => {
    try {
        let delay = async (duration) => { await new Promise(resolve => setTimeout(resolve, duration)) };
        await delay(10 * 1000);
        if (msg.author.id == "523116257390886954") { //Картус
            if (msg.content.toLowerCase().indexOf("ты знаешь, кто такие мертвые") != -1) msg.channel.send("Если останешься, узнаешь <:096:592420847017263134>");
            if (msg.content.toLowerCase().indexOf("Кто привел тебя к нам?") != -1) msg.channel.send("Никто, он самоубийца.");
            if (msg.content.toLowerCase().indexOf("Ты что-то принес? Что-то золотое") != -1) msg.channel.send("Дед, ты опять забыл принять свои таблетки!");
            if (msg.content.toLowerCase().indexOf("ploha") != -1) msg.channel.send("Картус, тебя заклинило?");
            if (msg.content.toLowerCase().indexOf("проходите, выпейте из этой") != -1) msg.channel.send("Я надеюсь, ты ему там чай наливаешь)");
            if (msg.content.toLowerCase().indexOf("дверями не хлопайте") != -1) msg.channel.send("Он еще жив??");
            if (msg.content.toLowerCase().indexOf("а ты точно не шпиён") != -1) msg.channel.send("Какая разница, если он платит <:009:592419660113117248>");
            if (msg.content.toLowerCase().indexOf('ожет "суток"') != -1) msg.channel.send("Нет <:wreee:895314615410520097>");
            if (msg.content.toLowerCase().indexOf("е поминай админа") != -1) msg.channel.send("Админ ушел за печеньем, можно всех банить <:096:592420847017263134>");
            if (msg.content.toLowerCase().indexOf("ожет давай просто") != -1) msg.channel.send("Dori me");
            if (msg.content.toLowerCase().indexOf("ткуда у мертвецов") != -1) msg.channel.send("А откуда у нас чай???");
        };
        if (msg.author.id == "836240368206872576") { //Баристан
            if (msg.content.toLowerCase().indexOf("проходи, располагайся, путник.") != -1) msg.channel.send("Только оленей не корми, у них диета.");
            if (msg.content.toLowerCase().indexOf("и зачем ты пинганул") != -1) msg.channel.send("Чтобы ему было неприятно).");
            if (msg.content.toLowerCase().indexOf("вдруг он уйдет") != -1) msg.channel.send('Что значит "вдруг"');
            if (msg.content.toLowerCase().indexOf("то ты там ему предлагаешь") != -1) msg.channel.send("Всего лишь кофе с ликером.");
            if (msg.content.toLowerCase().indexOf("де твои манеры!") != -1) msg.channel.send("Им не заплатили <:084:592420618084024320>");
            if (msg.content.toLowerCase().indexOf("какая встреча!") != -1) msg.channel.send("греча");
            if (msg.content.toLowerCase().indexOf('ожет "споемся"') != -1) msg.channel.send("Нет <:wreee:895314615410520097>");
            if (msg.content.toLowerCase().indexOf("нас для вас акция") != -1) msg.channel.send('"Получи бан за выход один раз и получи второй бан в подарок" <:096:592420847017263134>');
            if (msg.content.toLowerCase().indexOf("вас в нашей кофейне") != -1) msg.channel.send("да, да, очень рады <:ezgif:840338961275813909>");
        };
        if (msg.author.id == "776445694587306028") { //Мерлай
            if (msg.content.toLowerCase().indexOf("terimo ayapare, d") != -1) msg.channel.send("Ameno, ameno");
            if (msg.content.toLowerCase().indexOf("meno, ameno") != -1) msg.channel.send("Latire, latiremo");
        };
    } catch (err) {
        msg.channel.send('<@542663623789641729> мам, я упал <a:hlepng:882291167948079165>');
        let control = client.channels.cache.get('878520465856036935');
        control.send('Мама, хлеп!');
        console.log(err);
    };
});


client2.login(process.env.BOT_TOKEN2);

