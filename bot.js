Discord = require("discord.js");
const botconfig = require("./botconfig.json");
const fs = require("fs");
const client = new Discord.Client();
require('./util/cmdloader.js')(client);//requires the command loader
let token = process.env.token;
let prefix = "-";


client.on('ready', () => {
        client.user.setActivity(`On Dark, Network Server With ${client.users.size} Members`, { type: "PLAYING" });
        setTimeout(game2, 20000)
    });
    

    
    function game2() {
        client.user.setActivity(`Watching ${client.users.size} On Dark, Network`, { type: "LISTENING" });
        setTimeout(game3, 20000)
    }
    
 
client.on('message', message => {

	
 if (message.author.bot) return;
 if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);


	
//command handler
let commandfile = client.commands.get(command);
  let alias = client.aliases.get(command);

  if(commandfile){
	  commandfile.run(client,message,args);
  }
  if(alias){
	  alias.run(client,message,args);
  }
//end of handler


});
client.login(process.env.token);
