const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
    if(!args[1]) return message.reply(`Try this instead: \n${config.prefix}kick <User> <Reason>`);

    let kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kickUser) return message.channel.send("Cant find user!");
    let kickReason = args.join(" ").slice(22);

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to use this command.");
    if(kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked.");
    
    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Kick")
    .setColor("#e56b00")
    .addField("Kicked User", `${kickUser} with ID ${kickUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kickReason);

    message.channel.send(kickEmbed);
}

module.exports.help = {
  name: "kick"
}