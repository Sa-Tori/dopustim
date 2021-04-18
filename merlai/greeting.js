const Discord2 = require("discord.js");
const client2 = new Discord2.Client();

client2.on("ready", () => {
    console.log('Приветствие Мерлая готово');
    
});

client2.on('guildMemberRemove', async (member) => {
    const channel = member.guild.channels.cache.find(ch => ch.name === '🍓врата' || ch.name === "🤖ваш-покорный-слуга");
    if (!channel) return;
    try {
        if (channel) {
            let delay = async (duration) => { await new Promise(resolve => setTimeout(resolve, duration)) };
            await delay(5 * 1000);
            channel.send(`Ниче не меркнет! Это ${member} покинул нас.`);
        }
    } catch (err) { console.log(err); };
});

client2.login(process.env.BOT_TOKEN2);
