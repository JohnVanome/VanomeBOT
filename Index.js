
const Discord = require('discord.js');
const Commando = require('discord.js-commando')

const client = new Commando.Client({
  owner: "289378171684519936",// <== should fix owner issue
  commandPrefix: "~" // <== prefix
});

client.registry.registerGroup('simple', 'Simple');
client.registry.registerGroup('info', 'Info');
client.registry.registerGroup('music', 'Music');
client.registry.registerGroup('team', 'Team');
client.registry.registerGroup('admin', 'Admin');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + '/commands');

client.on('ready',function(){
  console.log("Ready");
});

client.login('NTM4MzM0NTY0NjQ1NDcwMjIz.Dy3mAg.R7tWMdqOc5EidrhuVRx1OPR3Rj8');