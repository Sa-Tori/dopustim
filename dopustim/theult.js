const Discord = require("discord.js");
const client = new Discord.Client();

client.on ("ready", () => {
 console.log("Ульта готова");
});



client.cmd_limiter=-1;//создаем переменную, где будет хранится время, после которого очередную команду можно будет выполнять, устанавливаем отрицательное значение, чтоб бот понимал, что команда еще никогда не использовалась.

client.on("message", async (message) => {try{
  
 let now = new Date().getTime();
   if(message.content.startsWith('Картус ультуй') || message.content.startsWith('Картус где ганги') && !message.author.bot){
       if(client.cmd_limiter>now){
           
           let tag = client.cmd_limiter-now;
           return message.channel.send('[R] - '+ Math.round(tag/1000) +' сек.');
       }else{
           message.channel.send('R');
           client.cmd_limiter = now + 200*1000;//устанавливаем ограничительное время: сейчас + 200 с
       };
    };
   
}catch(err){console.log(err);}; });

client.login(process.env.BOT_TOKEN);