'use strict';
const Discord3 = require("discord.js");
const client3 = new Discord3.Client();
const role = new Discord3.Role();


client3.on("ready", () => {
    console.log("Роли готовы");
});

let channel_id = "560490009929449493"; 
let message1_id = "889942827172245555"; 
let message2_id = "889942829160345630"; 
let message3_id = "889942850379337730"; 

let channel2_id = "557226495190499331";
let message4_id = "894645182719479868";
let message5_id = "894645183516393473";
let message6_id = "894645186704056340";

let delay = async duration => {
  return new Promise(resolve => {
    return setTimeout(resolve, duration);
  });
};

client3.on("ready", async () => {
  try {
    //вешаем обработку события:"готовность бота для взаимодействия с API discord"
    //_______________________
    await delay(1000); //ставим таймаут в 1 сек, чтобы структура успела построиться
      let channel = await client3.channels.cache.get(channel_id);
    var message = await channel.messages.fetch(message1_id);
    var message = await channel.messages.fetch(message2_id);
    var message = await channel.messages.fetch(message3_id);
    //кешируем сообщение, ведь для бота не существует сообщений, которых нет в ботопамяти,
    //так как это сообщение создалось до, того как бот запустился, нужно добавить его в память бота
    return;
  } catch (err) {
    console.log(err);
  }
}); // \ready

function remrol(messageReaction, user) {
    var rl1 = client3.guilds.cache.get('532954366571708427').roles.cache.find(role => role.id === "592342282179444747");
    user.roles.remove(rl1);
    var rl2 = client3.guilds.cache.get('532954366571708427').roles.cache.find(role => role.id === "560517351171293184");
    user.roles.remove(rl2);
    var rl3 = client3.guilds.cache.get('532954366571708427').roles.cache.find(role => role.id === "560511085468188730");
    user.roles.remove(rl3);
    var rl4 = client3.guilds.cache.get('532954366571708427').roles.cache.find(role => role.id === "560517342229037076");
    user.roles.remove(rl4);
    var rl5 = client3.guilds.cache.get('532954366571708427').roles.cache.find(role => role.id === "592342290987483147");
    user.roles.remove(rl5);
    var rl6 = client3.guilds.cache.get('532954366571708427').roles.cache.find(role => role.id === "592342294359703552");
    user.roles.remove(rl6);
    var rl7 = client3.guilds.cache.get('532954366571708427').roles.cache.find(role => role.id === "561561998924709919");
    user.roles.remove(rl7);
    var rl8 = client3.guilds.cache.get('532954366571708427').roles.cache.find(role => role.id === "560517351871741952");
    user.roles.remove(rl8);
    var rl9 = client3.guilds.cache.get('532954366571708427').roles.cache.find(role => role.id === "560510906660945921");
    user.roles.remove(rl9);
    var rl10 = client3.guilds.cache.get('532954366571708427').roles.cache.find(role => role.id === "560511082280517636");
    user.roles.remove(rl10);

    var rl11 = client3.guilds.cache.get('532954366571708427').roles.cache.find(role => role.id === "560517343625609216");
    user.roles.remove(rl11);
    var rl12 = client3.guilds.cache.get('532954366571708427').roles.cache.find(role => role.id === "592342284750684191");
    user.roles.remove(rl12);
    var rl13 = client3.guilds.cache.get('532954366571708427').roles.cache.find(role => role.id === "560511076773527572");
    user.roles.remove(rl13);
    var rl14 = client3.guilds.cache.get('532954366571708427').roles.cache.find(role => role.id === "560511089511759873");
    user.roles.remove(rl14);
    var rl15 = client3.guilds.cache.get('532954366571708427').roles.cache.find(role => role.id === "592342277247205381");
    user.roles.remove(rl15);
    var rl16 = client3.guilds.cache.get('532954366571708427').roles.cache.find(role => role.id === "560511090908463115");
    user.roles.remove(rl16);
    var rl17 = client3.guilds.cache.get('532954366571708427').roles.cache.find(role => role.id === "560511087380922368");
    user.roles.remove(rl17);
    var rl18 = client3.guilds.cache.get('532954366571708427').roles.cache.find(role => role.id === "560511084851757056");
    user.roles.remove(rl18);
    var rl19 = client3.guilds.cache.get('532954366571708427').roles.cache.find(role => role.id === "560511086323826689");
    user.roles.remove(rl19);
    var rl20 = client3.guilds.cache.get('532954366571708427').roles.cache.find(role => role.id === "560517348595990528");
    user.roles.remove(rl20);

    var rl21 = client3.guilds.cache.get('532954366571708427').roles.cache.find(role => role.id === "592342287636365313");
    user.roles.remove(rl21);
    var rl22 = client3.guilds.cache.get('532954366571708427').roles.cache.find(role => role.id === "592342279591559177");
    user.roles.remove(rl22);
    var rl23 = client3.guilds.cache.get('532954366571708427').roles.cache.find(role => role.id === "560511081756360717");
    user.roles.remove(rl23);
    var rl24 = client3.guilds.cache.get('532954366571708427').roles.cache.find(role => role.id === "592342271937216523");
    user.roles.remove(rl24);
    var rl25 = client3.guilds.cache.get('532954366571708427').roles.cache.find(role => role.id === "592342274051145728");
    user.roles.remove(rl25);
    var rl26 = client3.guilds.cache.get('532954366571708427').roles.cache.find(role => role.id === "560510753623375890");
    user.roles.remove(rl26);
    var rl27 = client3.guilds.cache.get('532954366571708427').roles.cache.find(role => role.id === "560511088559652865");
    user.roles.remove(rl27);
    var rl28 = client3.guilds.cache.get('532954366571708427').roles.cache.find(role => role.id === "560511093693218826");
    user.roles.remove(rl28);
    var rl29 = client3.guilds.cache.get('532954366571708427').roles.cache.find(role => role.id === "560511094183952439");
    user.roles.remove(rl29);
    var rl30 = client3.guilds.cache.get('532954366571708427').roles.cache.find(role => role.id === "560517344615464960");
    user.roles.remove(rl30);
}

client3.on("messageReactionAdd", async (messageReaction, user) => {
    if(user.id === "836240368206872576") return;
    try {
        let channel = await client3.channels.cache.get(channel_id);
        let message = await channel.messages.fetch(message1_id);
        var user = messageReaction.message.guild.members.cache.get(user.id);

        if (messageReaction.emoji.id == "836975727306866709") {
            var r1 = messageReaction.message.guild.roles.cache.find(role => role.id === "592342282179444747");
            remrol(messageReaction, user);
            user.roles.add(r1);
        };
        if (messageReaction.emoji.id == "836975712212615198") {
            var r2 = messageReaction.message.guild.roles.cache.find(role => role.id === "560517351171293184");
            remrol(messageReaction, user);
            user.roles.add(r2);
        };
        if (messageReaction.emoji.id == "836975697632821320") {
            var r3 = messageReaction.message.guild.roles.cache.find(role => role.id === "560511085468188730");
            remrol(messageReaction, user);
            user.roles.add(r3);
        };
        if (messageReaction.emoji.id == "836975682328199218") {
            var r4 = messageReaction.message.guild.roles.cache.find(role => role.id === "560517342229037076");
            remrol(messageReaction, user);
            user.roles.add(r4);
        };
        if (messageReaction.emoji.id == "836975589084102716") {
            var r5 = messageReaction.message.guild.roles.cache.find(role => role.id === "592342290987483147");
            remrol(messageReaction, user);
            user.roles.add(r5);
        };
        if (messageReaction.emoji.id == "836975572365606932") {
            var r6 = messageReaction.message.guild.roles.cache.find(role => role.id === "592342294359703552");
            remrol(messageReaction, user);
            user.roles.add(r6);
        };
        if (messageReaction.emoji.id == "836975553650229289") {
            var r7 = messageReaction.message.guild.roles.cache.find(role => role.id === "561561998924709919");
            remrol(messageReaction, user);
            user.roles.add(r7);
        };
        if (messageReaction.emoji.id == "836975503852044358") {
            var r8 = messageReaction.message.guild.roles.cache.find(role => role.id === "560517351871741952");
            remrol(messageReaction, user);
            user.roles.add(r8);
        };
        if (messageReaction.emoji.id == "836975471941255168") {
            var r9 = messageReaction.message.guild.roles.cache.find(role => role.id === "560510906660945921");
            remrol(messageReaction, user);
            user.roles.add(r9);
        };
        if (messageReaction.emoji.id == "836975457303003136") {
            var r10 = messageReaction.message.guild.roles.cache.find(role => role.id === "560511082280517636");
            remrol(messageReaction, user);
            user.roles.add(r10);
        };
    } catch (err) {
        console.log(err);
    }
}); 

client3.on("messageReactionAdd", async (messageReaction, user) => {
    if(user.id === "836240368206872576") return;
    try {
        let channel = await client3.channels.cache.get(channel_id);
        let message = await channel.messages.fetch(message2_id);
        var user = messageReaction.message.guild.members.cache.get(user.id);

        if (messageReaction.emoji.id == "836975440711254066") {
            var r11 = messageReaction.message.guild.roles.cache.find(role => role.id === "560517343625609216");
            remrol(messageReaction, user);
            user.roles.add(r11);
        };
        if (messageReaction.emoji.id == "836975424490700872") {
            var r12 = messageReaction.message.guild.roles.cache.find(role => role.id === "592342284750684191");
            remrol(messageReaction, user);
            user.roles.add(r12);
        };
        if (messageReaction.emoji.id == "836975408673980447") {
            var r13 = messageReaction.message.guild.roles.cache.find(role => role.id === "560511076773527572");
            remrol(messageReaction, user);
            user.roles.add(r13);
        };
        if (messageReaction.emoji.id == "836975394161688577") {
            var r14 = messageReaction.message.guild.roles.cache.find(role => role.id === "560511089511759873");
            remrol(messageReaction, user);
            user.roles.add(r14);
        };
        if (messageReaction.emoji.id == "836975378992070716") {
            var r15 = messageReaction.message.guild.roles.cache.find(role => role.id === "592342277247205381");
            remrol(messageReaction, user);
            user.roles.add(r15);
        };
        if (messageReaction.emoji.id == "836975362842951711") {
            var r16 = messageReaction.message.guild.roles.cache.find(role => role.id === "560511090908463115");
            remrol(messageReaction, user);
            user.roles.add(r16);
        };
        if (messageReaction.emoji.id == "836975346137169920") {
            var r17 = messageReaction.message.guild.roles.cache.find(role => role.id === "560511087380922368");
            remrol(messageReaction, user);
            user.roles.add(r17);
        };
        if (messageReaction.emoji.id == "836975329275936808") {
            var r18 = messageReaction.message.guild.roles.cache.find(role => role.id === "560511084851757056");
            remrol(messageReaction, user);
            user.roles.add(r18);
        };
        if (messageReaction.emoji.id == "836975308246745108") {
            var r19 = messageReaction.message.guild.roles.cache.find(role => role.id === "560511086323826689");
            remrol(messageReaction, user);
            user.roles.add(r19);
        };
        if (messageReaction.emoji.id == "836975283830521898") {
            var r20 = messageReaction.message.guild.roles.cache.find(role => role.id === "560517348595990528");
            remrol(messageReaction, user);
            user.roles.add(r20);
        };
    } catch (err) {
        console.log(err);
    }
}); 

client3.on("messageReactionAdd", async (messageReaction, user) => {
    if(user.id === "836240368206872576") return;
    try {

        let channel = await client3.channels.cache.get(channel_id);
        let message = await channel.messages.fetch(message3_id);
        var user = messageReaction.message.guild.members.cache.get(user.id);

        if (messageReaction.emoji.id == "836975267716792360") {
            var r21 = messageReaction.message.guild.roles.cache.find(role => role.id === "592342287636365313");
            remrol(messageReaction, user);
            user.roles.add(r21);
        };
        if (messageReaction.emoji.id == "836975247911419936") {
            var r22 = messageReaction.message.guild.roles.cache.find(role => role.id === "592342279591559177");
            remrol(messageReaction, user);
            user.roles.add(r22);
        };
        if (messageReaction.emoji.id == "836975230613717022") {
            var r23 = messageReaction.message.guild.roles.cache.find(role => role.id === "560511081756360717");
            remrol(messageReaction, user);
            user.roles.add(r23);
        };
        if (messageReaction.emoji.id == "836975213425066096") {
            var r24 = messageReaction.message.guild.roles.cache.find(role => role.id === "592342271937216523");
            remrol(messageReaction, user);
            user.roles.add(r24);
        };
        if (messageReaction.emoji.id == "836975196538929154") {
            remrol(messageReaction, user);
            var r25 = messageReaction.message.guild.roles.cache.find(role => role.id === "592342274051145728");
            user.roles.add(r25);
        };
        if (messageReaction.emoji.id == "836975179421843456") {
            remrol(messageReaction, user);
            var r26 = messageReaction.message.guild.roles.cache.find(role => role.id === "560510753623375890");
            user.roles.add(r26);
        };
        if (messageReaction.emoji.id == "836975163819687946") {
            remrol(messageReaction, user);
            var r27 = messageReaction.message.guild.roles.cache.find(role => role.id === "560511088559652865");
            user.roles.add(r27);
        };
        if (messageReaction.emoji.id == "836975146375446559") {
            remrol(messageReaction, user);
            var r28 = messageReaction.message.guild.roles.cache.find(role => role.id === "560511093693218826");
            user.roles.add(r28);
        };
        if (messageReaction.emoji.id == "836975130060128256") {
            remrol(messageReaction, user);
            var r29 = messageReaction.message.guild.roles.cache.find(role => role.id === "560511094183952439");
            user.roles.add(r29);
        };
        if (messageReaction.emoji.id == "836975113349890079") {
            remrol(messageReaction, user);
            var r30 = messageReaction.message.guild.roles.cache.find(role => role.id === "560517344615464960");
            user.roles.add(r30);
        };
    } catch (err) {
        console.log(err);
    }
}); 

// __________________________________________________________________________________________________________________________________________

client3.on("messageReactionRemove", async (messageReaction, user) => {
    if(user.id === "836240368206872576") return;
    try {

        let channel = await client3.channels.cache.get(channel_id);
        let message = await channel.messages.fetch(message1_id);
        var user = messageReaction.message.guild.members.cache.get(user.id);

        if (messageReaction.emoji.id == "836975727306866709") {
            var r1 = messageReaction.message.guild.roles.cache.find(role => role.id === "592342282179444747");
            user.roles.remove(r1);
        };
        if (messageReaction.emoji.id == "836975712212615198") {
            var r2 = messageReaction.message.guild.roles.cache.find(role => role.id === "560517351171293184");
            user.roles.remove(r2);
        };
        if (messageReaction.emoji.id == "836975697632821320") {
            var r3 = messageReaction.message.guild.roles.cache.find(role => role.id === "560511085468188730");
            user.roles.remove(r3);
        };
        if (messageReaction.emoji.id == "836975682328199218") {
            var r4 = messageReaction.message.guild.roles.cache.find(role => role.id === "560517342229037076");
            user.roles.remove(r4);
        };
        if (messageReaction.emoji.id == "836975589084102716") {
            var r5 = messageReaction.message.guild.roles.cache.find(role => role.id === "592342290987483147");
            user.roles.remove(r5);
        };
        if (messageReaction.emoji.id == "836975572365606932") {
            var r6 = messageReaction.message.guild.roles.cache.find(role => role.id === "592342294359703552");
            user.roles.remove(r6);
        };
        if (messageReaction.emoji.id == "836975553650229289") {
            var r7 = messageReaction.message.guild.roles.cache.find(role => role.id === "561561998924709919");
            user.roles.remove(r7);
        };
        if (messageReaction.emoji.id == "836975503852044358") {
            var r8 = messageReaction.message.guild.roles.cache.find(role => role.id === "560517351871741952");
            user.roles.remove(r8);
        };
        if (messageReaction.emoji.id == "836975471941255168") {
            var r9 = messageReaction.message.guild.roles.cache.find(role => role.id === "560510906660945921");
            user.roles.remove(r9);
        };
        if (messageReaction.emoji.id == "836975457303003136") {
            var r10 = messageReaction.message.guild.roles.cache.find(role => role.id === "560511082280517636");
            user.roles.remove(r10);
        };
    } catch (err) {
        console.log(err);
    }
});

client3.on("messageReactionRemove", async (messageReaction, user) => {
    if(user.id === "836240368206872576") return;
    try {

        let channel = await client3.channels.cache.get(channel_id);
        let message = await channel.messages.fetch(message1_id);
        var user = messageReaction.message.guild.members.cache.get(user.id);

        if (messageReaction.emoji.id == "836975440711254066") {
            var r11 = messageReaction.message.guild.roles.cache.find(role => role.id === "560517343625609216");
            user.roles.remove(r11);
        };
        if (messageReaction.emoji.id == "836975424490700872") {
            var r12 = messageReaction.message.guild.roles.cache.find(role => role.id === "592342284750684191");
            user.roles.remove(r12);
        };
        if (messageReaction.emoji.id == "836975408673980447") {
            var r13 = messageReaction.message.guild.roles.cache.find(role => role.id === "560511076773527572");
            user.roles.remove(r13);
        };
        if (messageReaction.emoji.id == "836975394161688577") {
            var r14 = messageReaction.message.guild.roles.cache.find(role => role.id === "560511089511759873");
            user.roles.remove(r14);
        };
        if (messageReaction.emoji.id == "836975378992070716") {
            var r15 = messageReaction.message.guild.roles.cache.find(role => role.id === "592342277247205381");
            user.roles.remove(r15);
        };
        if (messageReaction.emoji.id == "836975362842951711") {
            var r16 = messageReaction.message.guild.roles.cache.find(role => role.id === "560511090908463115");
            user.roles.remove(r16);
        };
        if (messageReaction.emoji.id == "836975346137169920") {
            var r17 = messageReaction.message.guild.roles.cache.find(role => role.id === "560511087380922368");
            user.roles.remove(r17);
        };
        if (messageReaction.emoji.id == "836975329275936808") {
            var r18 = messageReaction.message.guild.roles.cache.find(role => role.id === "560511084851757056");
            user.roles.remove(r18);
        };
        if (messageReaction.emoji.id == "836975308246745108") {
            var r19 = messageReaction.message.guild.roles.cache.find(role => role.id === "560511086323826689");
            user.roles.remove(r19);
        };
        if (messageReaction.emoji.id == "836975283830521898") {
            var r20 = messageReaction.message.guild.roles.cache.find(role => role.id === "560517348595990528");
            user.roles.remove(r20);
        };
    } catch (err) {
        console.log(err);
    }
});

client3.on("messageReactionRemove", async (messageReaction, user) => {
    if(user.id === "836240368206872576") return;
    try {

        let channel = await client3.channels.cache.get(channel_id);
        let message = await channel.messages.fetch(message1_id);
        var user = messageReaction.message.guild.members.cache.get(user.id);

        if (messageReaction.emoji.id == "836975267716792360") {
            var r21 = messageReaction.message.guild.roles.cache.find(role => role.id === "592342287636365313");
            user.roles.remove(r21);
        };
        if (messageReaction.emoji.id == "836975247911419936") {
            var r22 = messageReaction.message.guild.roles.cache.find(role => role.id === "592342279591559177");
            user.roles.remove(r22);
        };
        if (messageReaction.emoji.id == "836975230613717022") {
            var r23 = messageReaction.message.guild.roles.cache.find(role => role.id === "560511081756360717");
            user.roles.remove(r23);
        };
        if (messageReaction.emoji.id == "836975213425066096") {
            var r24 = messageReaction.message.guild.roles.cache.find(role => role.id === "592342271937216523");
            user.roles.remove(r24);
        };
        if (messageReaction.emoji.id == "836975196538929154") {
            var r25 = messageReaction.message.guild.roles.cache.find(role => role.id === "592342274051145728");
            user.roles.remove(r25);
        };
        if (messageReaction.emoji.id == "836975179421843456") {
            var r26 = messageReaction.message.guild.roles.cache.find(role => role.id === "560510753623375890");
            user.roles.remove(r26);
        };
        if (messageReaction.emoji.id == "836975163819687946") {
            var r27 = messageReaction.message.guild.roles.cache.find(role => role.id === "560511088559652865");
            user.roles.remove(r27);
        };
        if (messageReaction.emoji.id == "836975146375446559") {
            var r28 = messageReaction.message.guild.roles.cache.find(role => role.id === "560511093693218826");
            user.roles.remove(r28);
        };
        if (messageReaction.emoji.id == "836975130060128256") {
            var r29 = messageReaction.message.guild.roles.cache.find(role => role.id === "560511094183952439");
            user.roles.remove(r29);
        };
        if (messageReaction.emoji.id == "836975113349890079") {
            var r30 = messageReaction.message.guild.roles.cache.find(role => role.id === "560517344615464960");
            user.roles.remove(r30);
        };
    } catch (err) {
        console.log(err);
    }
});

//--------------------------------------------------------------------------------------------------------------rolewelcom

client3.on("ready", async () => {
    try {
        await delay(1000); 
        let channel = await client3.channels.cache.get(channel2_id);
        var message = await channel.messages.fetch(message4_id);
        var message = await channel.messages.fetch(message5_id);
        var message = await channel.messages.fetch(message6_id);
        return;
    } catch (err) {
        console.log(err);
    }
}); 

function okey(messageReaction, user) {
    if (fl1 === true && fl2 === true && fl3 === true) {
        var flr = messageReaction.message.guild.roles.cache.find(role => role.id === "558356849347264512");
        user.roles.add(flr);
        var fаr = messageReaction.message.guild.roles.cache.find(role => role.id === "894649795224956948");
        user.roles.remove(fаr);
        var flr1 = messageReaction.message.guild.roles.cache.find(role => role.id === "897921546511863808");
        user.roles.add(flr1);
        fl1 = false;
        fl2 = false;
        fl3 = false;
    };
}

var fl1 = false;
var fl2 = false;
var fl3 = false;
client3.on("messageReactionAdd", async (messageReaction, user) => {
    if (user.id === "836240368206872576") return;
    try {
        let channel = await client3.channels.cache.get(channel2_id);
        let message = await channel.messages.fetch(message4_id);
        var user = messageReaction.message.guild.members.cache.get(user.id);
        if (messageReaction.emoji.id == "894270696245559336") {
            fl1 = true;
            okey(messageReaction, user);
        };
        if (messageReaction.emoji.id == "894271076908015626") {
            fl2 = true;
            okey(messageReaction, user);
        };
        if (messageReaction.emoji.id == "894270610774057003") {
            fl3 = true;
            okey(messageReaction, user);
        };
    } catch (err) {
        console.log(err);
    }
});

client3.on("messageReactionRemove", async (messageReaction, user) => {
    if (user.id === "836240368206872576") return;
    try {
        let channel = await client3.channels.cache.get(channel2_id);
        var user = messageReaction.message.guild.members.cache.get(user.id);
        if (messageReaction.emoji.id == "894270696245559336") {
            var fg1 = messageReaction.message.guild.roles.cache.find(role => role.id === "890216187387052052");
            user.roles.add(fg1);
        };
        if (messageReaction.emoji.id == "894271076908015626") {
            var fg2 = messageReaction.message.guild.roles.cache.find(role => role.id === "890216255246712842");
            user.roles.add(fg2);
        };
        if (messageReaction.emoji.id == "894270610774057003") {
            var fg3 = messageReaction.message.guild.roles.cache.find(role => role.id === "890216382514466887");
            user.roles.add(fg3);
        };
    } catch (err) {
        console.log(err);
    }
});



client3.login(process.env.BOT_TOKEN3);
