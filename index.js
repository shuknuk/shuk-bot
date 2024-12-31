const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
require('dotenv').config();

const commands = require('./commandsList');

client.once('ready', () => {
  console.log('The bot is online! Type !help to learn what commands to use with it');
});


client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();



  // ALL COMMANDS TO USE WITH BOT stage another change

  if (command === 'list') {
    const fullMessage = commands.list1.join('\n');
    message.channel.send(fullMessage);
  }

  if (command === 'list2') {
    const fullMessage = commands.list2.join('\n');
    message.channel.send(fullMessage);
  }

  if (command === 'emojis') {
    const fullMessage = commands.emojis.join('\n');
    message.channel.send(fullMessage);
  }
  // END OF COMMANDS TO USE WITH BOT

  // ---------------------------------SEPERATION--------------------------------------

  if (command === '!tacos') {
    message.channel.send('https://tenor.com/view/tacos-taco-guru-hartos-tacos-toma-pobre-thrown-gif-12143253');
  }

  if (command === '!dingdong') {
    message.channel.send('Hello im here lol');
  }

  if (command === 'yo') {
    message.channel.send('https://drive.google.com/file/d/1T8f_AGjIIjg9Acc2F__P-IVegnPBKMDw/view?usp=sharing');
  }

  if (command === 'homie_hello') {
    message.channel.send('Yo what is up my homie?');
  }

  if (command === 'I_am_tired') {
    message.channel.send('I am tired too, of being online all the time!');
  }

  if (command === 'why') {
    message.channel.send('Welp its because I can, /shrug ');
  }

  if (command === 'cats') {
    message.channel.send('https://tenor.com/view/cat-driving-serious-cat-driving-focus-driving-gif-15519638');
  }

  if (command === 'agree') {
    message.channel.send('Yes, I do agree with that statement! I will note that down. *Pen writing noises*');
  }

  if (command === 'school') {
    message.channel.send('https://media.tenor.com/images/7a2a78b065e7be080232b379e9ff0cc4/tenor.gif');
  }

  if (command === 'whattfisurname') {
    message.channel.send('go f urself fr');
  }

  if (command === 'dead') {
    message.channel.send('https://media3.giphy.com/media/QNGtIbsXz88V2/giphy.gif');
  }

  if (command === 'iguana_corp') {
    message.channel.send('https://cdn.discordapp.com/attachments/750725430058680340/766072437129216010/Screen_Shot_2020-10-14_at_6.57.43_PM.png');
  }

  if (command === 'thanks') {
    message.channel.send('https://media.tenor.com/images/ac576471c28cc8c1ba698b888457fe37/tenor.gif');
  }

  if (command === 'why') {
    message.channel.send('Because I can.')
  }

  if (command === 'separator') {
    message.channel.send('------------------------------------------------------------------------------------------------------------------------------');
  }

  if (command === 'minecraft') {
    message.channel.send('Official Minecraft Download Link => https://www.minecraft.net/en-us/download');
  }

  if (command === 'reddit') {
    message.channel.send('https://www.reddit.com');
  }

  if (command === 'code_editor') {
    message.channel.send('This bot was developed using the IDE **Visual Studio Code.**');
  }

  if (command === 'google') {
    message.channel.send('https://www.google.com');
  }

  if (command === 'github') {
    message.channel.send('https://github.com/Kinshuk-Goel/shuk-bot');
  }

  if (command === 'hello') {
    message.channel.send('Hello there! Type !list to learn what commands to use with me!');
  }

  if (command === 'cheers') {
    message.channel.send('https://thumbs.gfycat.com/DiscreteDirtyBeagle-size_restricted.gif');
  }

  if (command === 'fireworks') {
    message.channel.send('https://media2.giphy.com/media/26tOZ42Mg6pbTUPHW/giphy.gif');
  }

  if (command === 'feedback') {
    message.channel.send('Any concerns or compliments? Contact the developer here: `e734103@gmail.com`');
  }

  if (command === 'poop') {
    message.channel.send('That is some smelly shit you got there');
  }

  if (command === 'author') {
    message.channel.send('Bot created and programmed by Kinshuk Goel.');
  }

  if (command === 'help') {
    message.channel.send('Type the command `!list` and `!list2` to learn what commands to use with me!');
  }

  if (command === 'mornin') {
    message.channel.send('Mornin my dudes!');
  }

  if (command === 'dogs_terrified') {
    message.channel.send('https://media.giphy.com/media/fItgT774J3nWw/giphy.gif');
  }

  if (command === 'apple_vs_android') {
    message.channel.send('https://media.giphy.com/media/WsJzXF8M8tl6w/giphy.gif');
  }

  if (command === 'doit') {
    message.channel.send('https://media.giphy.com/media/GcSqyYa2aF8dy/giphy.gif');
  }

  if (command === 'panic') {
    message.channel.send('https://images-ext-2.discordapp.net/external/qZw1eKzoZ5YQxVjRpzs61DBuGvbzvO0wBRtvG0VpOp4/https/images-ext-1.discordapp.net/external/DUyLzeMzo93_divTJPzzGVzsdJfcWZ17kfUlrtyx3gY/https/media.tenor.com/images/8de5bce8f5903037ada38cce0157738f/tenor.gif');
  }

  if (command === 'halloween') {
    message.channel.send('HAPPY HALLOWEEN BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO`OOOOOOO`OOOOOOOOOOOOOOOO**OOOOOOOOOOOOOOOOOOO**OOOOOOOOOOOOOOO');
  }

  if (command === 'bored') {
    message.channel.send('Consult these websites for boredom: https://blog.hubspot.com/marketing/surf-internet-websites | https://parade.com/1018413/marynliles/things-to-do-when-bored/ | https://en.softonic.com/articles/10-ways-to-do-more-with-discord ');
  }

  if (command === 'start_news') {
    message.channel.send('Connecting cameras... Executing mics... Loading.......');
  } else if (command === 'start_news_final') {
    message.channel.send('News channel successfully started! Please switch to `news-reporting-studio` to continue.');
  } else if (command === 'end_news') {
    message.channel.send('News studio successfully ended.');
  }

  if (command === 'boomer_alert') {
    message.channel.send('https://images-ext-1.discordapp.net/external/FzIHi9fXAmW6_jOhK5drP9C8sCmCaBTOp2NkbzUd3s8/https/media.tenor.com/images/f7c2d344e67d5fb01e05804b17dac783/tenor.gif');
  }

  if (command === 'knuckles') {
    message.channel.send('https://media.tenor.com/images/0a2e5d661a2bccaeb8bc493e8e02f924/tenor.gif');
  }

  if (command === 'news') {
    message.channel.send('THE NEWS TODAY IS ABOUT A KID NAMED ICENOOB69 WHO HAS DECIDED TO KILL OTZI. tHIS IS VERY SAD. MORE NEWS WILL BE ON DA WAY');
  }

  if (command === 'roll') {
    message.channel.send('Pick a number to roll between 1 - 6. For example, `!roll_3` or `!roll_2` ');
  }

  if (command === 'plswork') {
    message.channel.send('I hope it does work indeed.');
  }

  if (command === 'bye') {
    message.channel.send('Bye https://thumbs.gfycat.com/ClumsyFarawayBeardedcollie-size_restricted.gif');
  }

  if (command === 'how_are_you_doing') {
    message.channel.send('I am doing good, thanks for asking! How are you doing?');
  }

  if (command === 'android') {
    message.channel.send('https://lh3.googleusercontent.com/GTmuiIZrppouc6hhdWiocybtRx1Tpbl52eYw4l-nAqHtHd4BpSMEqe-vGv7ZFiaHhG_l4v2m5Fdhapxw9aFLf28ErztHEv5WYIz5fA');
  }

  if (command === 'apple') {
    message.channel.send('https://pbs.twimg.com/profile_images/1283958620359516160/p7zz5dxZ_400x400.jpg');
  }

  if (command === 'youtube') {
    message.channel.send('https://media.giphy.com/media/13Nc3xlO1kGg3S/giphy.gif');
  }








  // Add the github link when public: https://github.com/Kinshuk-Goel/shuk-bot
  // In order to add this as public I have to make sure that the token is not exposed anywhere
  // or seen. So it's gonna be a bit hard to get it to be public.


  // I added a new label and i editied it and I did it again! Save the code.


  //Emoji reactions
  if (message.content === '!happy') {
    message.react('😄');
  }

  if (message.content === '!like') {
    message.react('👍');
  }

  if (message.content === '!love') {
    message.react('❤️');
  }

  if (message.content === '!haha') {
    message.react('😂');
  }

  if (message.content === '!wow') {
    message.react('😯');
  }

  if (message.content === '!sad') {
    message.react('😢');
  }

  if (message.content === '!mad') {
    message.react('😡');
  }

  if (message.content === '!XD') {
    message.react('😆');
  }

  if (message.content === '!mask') {
    message.react('😷');
  }

  if (message.content === '!yes') {
    message.react('👍');
  }

  if (message.content === '!no') {
    message.react('👎');
  }



  // in the future, a github page should be added here!!! and it has been


  // Message guides, etc.

  // Dice roll test command --- May not work
  if (command === 'roll_1') {
    message.channel.send('🎲 3');
  } else if (command === 'roll_2') {
    message.channel.send('🎲 6');
  } else if (command === 'roll_3') {
    message.channel.send('🎲 2');
  } else if (command === 'roll_4') {
    message.channel.send('🎲 1')
  } else if (command === 'roll_5') {
    message.channel.send('🎲 4');
  } else if (command === 'roll_6') {
    message.channel.send('🎲 5');
  }

  if (command === 'ping') {
    message.channel.send('Pong.');
  } else if (command === 'beep') {
    message.channel.send('Boop.');
  } else if (command === 'server') {
    message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
  } else if (command === 'user-info') {
    message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
  } else if (command === 'info') {
    if (!args.length) {
      return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    } else if (args[0] === 'foo') {
      return message.channel.send('bar');
    }

    message.channel.send(`First argument: ${args[0]}`);
  } else if (command === 'kick') {
    if (!message.mentions.users.size) {
      return message.reply('you need to tag a user in order to kick them!');
    }

    const taggedUser = message.mentions.users.first();

    message.channel.send(`You wanted to kick: ${taggedUser.username}`);
  } else if (command === 'avatar') {
    if (!message.mentions.users.size) {
      return message.channel.send(`Your avatar: <${message.author.displayAvatarURL}>`);
    }

    const avatarList = message.mentions.users.map(user => {
      return `${user.username}'s avatar: <${user.displayAvatarURL}>`;
    });

    message.channel.send(avatarList);
  } else if (command === 'prune') {
    // Check if user has permission to manage messages
    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
      return message.reply('you need permission to manage messages to use this command.');
    }

    const amount = parseInt(args[0]);

    // Input validation
    if (isNaN(amount)) {
      return message.reply('please provide a valid number.');
    }
    if (amount < 1 || amount > 99) {
      return message.reply('you need to input a number between 1 and 99.');
    }

    // Delete messages
    message.channel.bulkDelete(amount + 1, true)
      .then(messages => {
        message.channel.send(`Successfully deleted ${messages.size - 1} messages.`)
          .then(msg => msg.delete({ timeout: 3000 })); // Delete confirmation after 3 seconds
      })
      .catch(error => {
        console.error(error);
        message.channel.send('There was an error trying to delete messages! Messages older than 14 days cannot be bulk deleted.');
      });
  }
});

// save changes pls

client.login(process.env.BOT_TOKEN);


//...Discord Bot Code Above ^^

const express = require('express')
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


