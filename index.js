const discord = require("discord.js");
const botConfig = require("./botconfig.json");
const botconfig = require("./botconfig.json");
const fs = require("fs");
const bot = new discord.Client();
bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) console.log(err);

  var jsFiles = files.filter((f) => f.split(".").pop() === "js");

  if (jsFiles.length <= 0) {
    console.log("Could not find files!");
    return;
  }

  jsFiles.forEach((f) => {
    var fileGet = require(`./commands/${f}`);
    console.log(`The file ${f} Is loaded`);

    bot.commands.set(fileGet.help.name, fileGet);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online.`);

  bot.user.setActivity("Created by Yannick", { type: "PLAYING" });
});
//* Args
bot.on("message", async (message) => {
  if (message.author.bot) return;

  if (message.channel.type == "dm") return;

  var prefix = botConfig.prefix;

  var messageArray = message.content.split(" ");

  var command = messageArray[0];

  var arguments = messageArray.slice(1);

  var commands = bot.commands.get(command.slice(prefix.length));

  if (commands) commands.run(bot, message, arguments);

  //* XTRME MEMBER COMMANDS //
  if (command === `${prefix}dad`) {
    return message.channel.send("Yannick is my dad! He coded me on 22/11/2020");
  }

  if (command === `${prefix}alpha`) {
    return message.channel.send("Founder of xTrMe, 'AKA' Beerke");
  }

  if (command === `${prefix}skywalkr`) {
    return message.channel.send("Say no more.. LEGEND");
  }

  if (command === `${prefix}wraith`) {
    return message.channel.send("Simple. PSENO");
  }

  if (command === `${prefix}haze`) {
    return message.channel.send("Haze is PAKE :man_white_haired:");
  }

  if (command === `${prefix}flipper`) {
    return message.channel.send("Flipper is love flipper is life :heart:");
  }

  if (command === `${prefix}scorpion`) {
    v;
    return message.channel.send("Adolf Snitchel :flag_de:");
  }

  if (command === `${prefix}torque`) {
    return message.channel.send("Glenn is vijand :rage: ");
  }

  if (command === `${prefix}scooby`) {
    return message.channel.send("WUWU WOEF :dog: ");
  }

  if (command === `${prefix}xtrme`) {
    return message.channel.send("SICK BASTARDS! ");
  }

  if (command === `${prefix}bot`) {
    return message.channel.send("Stfu you are a bot! ");
  }

  //* END OF COMMANDS //
});

bot.login(process.env.token);
