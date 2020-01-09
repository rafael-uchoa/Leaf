const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botEmbed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#35925D")
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt);

    message.channel.send(botEmbed);
}

module.exports.help = {
  name: "botinfo"
}