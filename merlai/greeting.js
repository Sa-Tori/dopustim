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
            channel.send("Ниче не меркнет! Это <@" + member.id + "> покинул нас.");
        }
    } catch (err) { console.log(err); };
});

//выдача роли в империуме

client2.on('guildMemberAdd',  async (member) => {
    const channel = member.guild.channels.cache.get('749945494880649267');
    if (!channel) return;
    var role = member.guild.roles.cache.find(role => role.id === "699912160494747648");
    member.roles.add(role);
});

client2.login(process.env.BOT_TOKEN2);

