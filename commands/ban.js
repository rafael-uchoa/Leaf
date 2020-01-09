const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
    if(!args[1]) return message.reply(`Try this instead: \n${config.prefix}ban <User> <Reason>`);
  
    let banUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!banUser) return message.channel.send("Cant find user!");
    let banReason = args.join(" ").slice(22);

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to use this command.");
    if(banUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be banned.");
    
    let banEmbed = new Discord.RichEmbed()
    .setDescription("Ban")
    .setColor("#bc0000")
    .addField("banned User", `${banUser} with ID ${banUser.id}`)
    .addField("banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", banReason);

    message.channel.send(banEmbed);
}

module.exports.help = {
  name: "ban"
}