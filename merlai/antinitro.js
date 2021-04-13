const Discord2 = require("discord.js");
const client2 = new Discord2.Client();

client2.on("ready", () => {
    console.log("АнтиНитро Мерлая готово.");
    
});


client2.on('message', (msg) => { 
    
});

client2.login(process.env.BOT_TOKEN2);
