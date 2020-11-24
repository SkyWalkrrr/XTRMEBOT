const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("You dont have permission for this command!");

  if (!args[0])
    return message.reply(
      "Type the number of how many messages you would like to delete."
    );

  if (Number.isInteger(parseInt(args[0]))) {
    var aantal = parseInt(args[0]) + 1;

    message.channel.bulkDelete(aantal).then(() => {
      if (args[0] == 0) {
        message
          .reply(`You cant delete 0 messages!`)
          .then((msg) => msg.delete({ timeout: 3000 }));
      } else if (args[0] == 1) {
        message
          .reply(`You deleted 1 message.`)
          .then((msg) => msg.delete({ timeout: 3000 }));
      } else {
        message
          .reply(`You deleted ${args[0]} messages`)
          .then((msg) => msg.delete({ timeout: 3000 }));
      }
    });
  } else {
    return message.reply("Enter a number");
  }
};

module.exports.help = {
  name: "clear",
};
