const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (message.author.id === "533303649011499019") {
} else {
message.channel.send("**Only Eliffeur can do that ! So Don't Try Again.**").then(x=>x.delete(3000))
}
message.guild.members.map(x=>x.sendMessage(args.join(" ")))

  }

module.exports.help = {
  name:"an"
}
