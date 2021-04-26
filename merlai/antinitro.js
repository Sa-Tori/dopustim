const Discord2 = require("discord.js");
const client2 = new Discord2.Client();

client2.on("ready", () => {
    console.log("АнтиНитро Мерлая готово.");
    
});

/*if (msg.content === "" || msg.content === "") {
        msg.delete();
        msg.channel.send("");
    };*/


client2.on('message', (msg) => { 
    if (msg.author.id != "542663623789641729") return;
    if (msg.content === "мер" || msg.content === "Мер") {
        msg.delete();
        msg.channel.send("<:merlai:826871930325303328>");
    };
    
});


client2.login(process.env.BOT_TOKEN2);
