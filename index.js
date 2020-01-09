const config = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

const prefix = config.prefix;
const token = config.token;

// Load commands
fs.readdir("./commands/", (err, files) => {
  err && console.log(err);
  let commandFile = files.filter(f => f.split(".").pop() === "js");

  console.clear();
  console.log("! Loading commands...\n");

  commandFile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

// Sends log when bot sucessfully goes online
bot.on("ready", async () => {
  console.log("\n! Starting BOT...\n");
  console.log(`===============\n${bot.user.username} is online!\n===============\n`);
  bot.user.setActivity(`${prefix}help`);
});

// Commands manager
bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandFile = bot.commands.get(cmd.slice(prefix.length));
  commandFile && commandFile.run(bot, message, args);
});

bot.login(token);