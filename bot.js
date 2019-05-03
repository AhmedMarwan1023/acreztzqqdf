const Discord = require("discord.js")
const client = new Discord.Client()
const prefix = "$"

client.on('ready', () => {
console.log(`Online.`);
 });
 
 client.on("message", message => {
    if(message.content.startsWith(prefix + "تفعيل")){
        message.channel.send("**اضغـط للتـفعيـل**").then(m => {
m.react('الرياكشن')
let reaction1Filter = (reaction, user) => reaction.emoji.name === 'الرياكشن' && user.id === message.author.id;
let reaction1 = m.createReactionCollector(reaction1Filter, { time: 19000 });
reaction1.on("collect", r => {
let role = message.guild.roles.find("name", "Actived"); //Actived تقدر تغير الرول حق التفعيل انا مسميه
message.member.addRole(role)
})
})
    }
})

client.login(process.env.BOT_TOKEN);
