const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  var botEmbed = new discord.MessageEmbed()
    .setTitle("XTRME")
    .setDescription("More information below")
    .addFields(
      { name: "Founded", value: "Sick bastards since 2012" },
      { name: "Member Count", value: "14" },
      { name: "Games", value: "All kinds of games" }
    )
    .addField("XTRME BOT", bot.user.username)
    .setImage("https://i.imgur.com/4rRmG9E.jpeg")
    .setFooter(
      "XTRME 2020 ©  Created by Skywalkr. ",
      "https://i.imgur.com/4rRmG9E.jpeg"
    )
    .setTimestamp()
    .setColor("#cf2323");

  return message.channel.send(botEmbed);
};

module.exports.help = {
  name: "info",
};
