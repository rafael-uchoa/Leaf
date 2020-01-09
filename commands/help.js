const Discord = require("discord.js");
const config = require("../config.json");

let prefix = config.prefix;

module.exports.run = async (bot, message, args) => {  
    let helpEmbed = new Discord.RichEmbed()
    .setColor("#35925D")
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("INFO", `${prefix}help ${prefix}botinfo ${prefix}serverinfo`)
    .addField("MANAGEMENT", `${prefix}report ${prefix}kick ${prefix}ban`)
    .addField("FUN", `${prefix}8ball ${prefix}dog ${prefix}cat`);

    message.channel.send(helpEmbed);
}

module.exports.help = {
  name: "help"
}