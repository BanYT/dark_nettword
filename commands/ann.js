const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (message.author.id === "533765048171102228" || "409351580551479308") {
} else {
message.channel.send("**Only Zloy can do that ! So Don't Try Again.**").then(x=>x.delete(3000))
}
message.guild.members.map(x=>x.sendMessage(args.join(" ")))

  }

module.exports.help = {
  name:"an"
}
