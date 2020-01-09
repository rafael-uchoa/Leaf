const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
    if(!args[0]) return message.reply(`You need to ask me something :thinking:\n Try this: ${config.prefix}8ball <Question>`);

    let randomFortune = Math.floor(Math.random() * config.fortunes.length);
    message.channel.send(config.fortunes[randomFortune]);
}

module.exports.help = {
  name: "8ball"
}