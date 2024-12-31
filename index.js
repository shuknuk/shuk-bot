const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
require('dotenv').config();

const commands = require('./commandsList');
const responses = require('./responses');

client.once('ready', () => {
  console.log('The bot is online! Type !help to learn what commands to use with it');
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  // Handle list commands
  if (command === 'list') {
    const fullMessage = commands.list1.join('\n');
    message.channel.send(fullMessage);
    return;
  } else if (command === 'list2') {
    const fullMessage = commands.list2.join('\n');
    message.channel.send(fullMessage);
    return;
  } else if (command === 'emojis') {
    const fullMessage = commands.emojis.join('\n');
    message.channel.send(fullMessage);
    return;
  }

  // Handle response commands
  if (responses[command]) {
    message.channel.send(responses[command]);
    return;
  }

  // Handle emoji reactions
  if (message.content === '!happy') message.react('😄');
  if (message.content === '!like') message.react('👍');
  if (message.content === '!love') message.react('❤️');
  if (message.content === '!haha') message.react('😂');
  if (message.content === '!wow') message.react('😯');
  if (message.content === '!sad') message.react('😢');
  if (message.content === '!mad') message.react('😡');
  if (message.content === '!XD') message.react('😆');
  if (message.content === '!mask') message.react('😷');
  if (message.content === '!yes') message.react('👍');
  if (message.content === '!no') message.react('👎');

  // Keep only essential utility commands
  if (command === 'server') {
    message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
  } else if (command === 'avatar') {
    const user = message.mentions.users.first() || message.author;
    const avatarEmbed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle(`${user.username}'s Avatar`)
      .setImage(user.displayAvatarURL({ dynamic: true, size: 256 }));
    
    message.channel.send(avatarEmbed);
  } else if (command === 'prune') {
    // What happened to the prune command? 
  }
});

client.login(process.env.BOT_TOKEN);


