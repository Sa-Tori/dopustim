const Discord = require("discord.js");
const client = new Discord.Client();


client.on ("ready", () => {
 console.log("Онлайн готов");
});


// Get our server
const guild = client.guilds.get('466006517288665099');
							  
// Get our stats channels
const totalUsers = client.channels.get('470358845751951361');
const onlineUsers = client.channels.get('470366354222874665');
const codeMonkeys = client.channels.get('470358906225295391');


var userCount = guild.memberCount;
var onlineCount = guild.members.filter(m => m.presence.status === 'online').size;

 client.on('message', message => {
 
  if (message.content === "привет") {
	msg.channel.send(onlineUsers);
	}
});





client.login(process.env.BOT_TOKEN);