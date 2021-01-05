const Discord2 = require("discord.js");
const client2 = new Discord2.Client();

client2.on ("ready", () => {
    console.log("Ответы готовы");
});

client2.login(process.env.BOT_TOKEN2);
