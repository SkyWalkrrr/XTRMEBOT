const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  var botEmbed = new discord.MessageEmbed()
    .setTitle("XTRME")
    .setDescription("More information below")
    .setColor("#cf2323")
    .addFields(
      { name: "XTRME BOT", value: bot.user.username },
      { name: "You joined this server on:", value: message.member.joinedAt },
      { name: "Total members", value: message.guild.memberCount }
    )
    .setFooter(
      "XTRME 2020 ©  Created by Skywalkr. ",
      "https://i.imgur.com/4rRmG9E.jpeg"
    )
    .setTimestamp();

  return message.channel.send(botEmbed);
};

module.exports.help = {
  name: "server",
};
