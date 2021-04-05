if (!mess.member.hasPermission("MANAGE_MESSAGES")) return mess.channel.send("У  вас нет прав"); /* Если у исполнителя команды нету привилегии MANGAGE_MESSAGES, он не сможет её использовать */

let robotmessage = args = mess.content.split(' '); // Пробелы между словами 
args.shift();
args = args.join(' ');

mess.delete().catch(); // Удаление сообщения пользователя после отправки 

mess.channel.send(robotmessage).then(mess.channel.send(mess.author)) /* Отправление в чат сообщения бота */
