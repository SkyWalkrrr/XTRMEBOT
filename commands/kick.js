const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  // const args = message.content.slice(prefix.length).split(/ +/);

  if (!message.member.hasPermission("KICK_MEMBERS"))
    return message.reply("You are not allowed to use this command!");

  if (!message.guild.me.hasPermission("KICK_MEMBERS"))
    return message.reply("No Perms");

  // if (!args[1]) return message.reply("No user found!");
  if (!args[0]) return message.reply("No user found!");

  // if (!args[1]) return message.reply("ERROR need 'REASON'");
  if (!args[1]) return message.reply("Please give a reason.");

  // var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]
  var kickUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );

  //    var reason = args.slice(0).join(" ");
  var reason = args.slice(1).join(" ");

  if (!kickUser) return message.reply("Cant find user!");

  var embed = new discord.MessageEmbed()
    .setColor("#ff0000")
    .setThumbnail(kickUser.user.displayAvatarURL)
    .setFooter(
      "XTRME 2020 ©  Created by Skywalkr.",
      message.author.displayAvatarURL
    )
    .setImage("https://i.imgur.com/WtxVTsq.jpg")
    .setTimestamp().setDescription(`** Kicked:** ${kickUser} (${kickUser.id})
            **Kicked by:** ${message.author}
            **Reason: ** ${reason}`);

  var embedPrompt = new discord.MessageEmbed()
    .setColor("GREEN")
    .setAuthor("You have 30 seconds to reply")
    .setDescription(`Do you want to kick ${kickUser} ?`);

  message.channel.send(embedPrompt).then(async (msg) => {
    var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

    if (emoji === "✅") {
      msg.delete();

      kickUser.kick(reason).catch((err) => {
        if (err) return message.channel.send(`Something went wrong!`);
      });

      message.reply(embed);
    } else if (emoji === "❌") {
      msg.delete();

      message.reply("You lucky bitch!").then((m) => m.delete(5000));
    }
  });
};

async function promptMessage(message, author, time, reactions) {
  time *= 1000;
  for (const reaction of reactions) {
    await message.react(reaction);
  }

  var filter = (reaction, user) =>
    reactions.includes(reaction.emoji.name) && user.id === author.id;

  return message
    .awaitReactions(filter, { max: 1, time: time })
    .then((collected) => collected.first() && collected.first().emoji.name);
}

module.exports.help = {
  name: "kick",
};
