const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let serverIcon = message.guild.iconURL;
    let serverEmbed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#35925D")
    .setThumbnail(serverIcon)
    .addField("Server Name", message.guild.name)
    .addField("Total Members", message.guild.memberCount)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt);

    message.channel.send(serverEmbed);
}

module.exports.help = {
  name: "serverinfo"
}