const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
  if(!args[1]) return message.reply(`Try this instead ${config.prefix}report <User> <Reason>`);
  
  let reportedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!reportedUser) return message.channel.send("Couldn't find user.");
  let reason = args.join(" ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
  .setDescription("Reports")
  .setColor("#35925D")
  .addField("Reported User", `${reportedUser} with ID: ${reportedUser.id}`)
  .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
  .addField("Channel", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", reason);

  message.channel.send(reportEmbed);
}

module.exports.help = {
  name: "report"
}