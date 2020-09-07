const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('The bot is online! Type !help to learn what commands to use with it');
});


client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();



	// ALL COMMANDS TO USE WITH BOT
	if (command === 'list') {
		message.channel.send(' `!hello` `!help` `!kick @User` `!avatar @user` `!prune (amount) [dis command deletes msgs so be careful]` `!author` `!server`  `Emojis => !happy !like !love !haha !wow !sad !mad !XD !mask !yes !no` ||| `!tacos !cats !github !apple_vs_android !dogs_terrified !poop !doit !google !cheers !panic !news !boomer_alert !apple !knuckles !bye !android !youtube !mornin` ');
	}
	// END OF COMMANDS TO USE WITH BOT

	// ---------------------------------SEPERATION--------------------------------------

    if (command === 'tacos') {
        message.channel.send('https://tenor.com/view/tacos-taco-guru-hartos-tacos-toma-pobre-thrown-gif-12143253');
	}

	if (command === 'dingdong') {
		message.channel.send('Hello im here lol');
	}

	if (command === 'yo') {
		message.channel.send('https://drive.google.com/file/d/1T8f_AGjIIjg9Acc2F__P-IVegnPBKMDw/view?usp=sharing');
	}

	if (command === 'cats') {
		message.channel.send('https://tenor.com/view/cat-driving-serious-cat-driving-focus-driving-gif-15519638');
	}

    if (command === 'google') {
        message.channel.send('https://www.google.com');
	}

	if (command === 'hello') {
		message.channel.send('Hello there! Type !list to learn what commands to use with me! You can also type !help to view a simplified page of the commands to');
	}

	if (command === 'cheers') {
		message.channel.send('https://thumbs.gfycat.com/DiscreteDirtyBeagle-size_restricted.gif');
	}

	if (command === 'poop') {
		message.channel.send('That is some smelly shit you got there');
	}

	if (command === 'author') {
		message.channel.send('Bot created and programmed by Kinshuk Goel.');
	}

	if (command === 'help') {
		message.channel.send('You can visit this page for the commands to use: https://pastebin.com/6usNqskj');
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
	} else if (amount > 6) {
		return message.reply('You need to input a number between 1 and 6.');
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
		const amount = parseInt(args[0]) + 1;
			// When typing the !prune command, enter an amount and it deletes that many messages.
			// Limit is from 2-100 per submission
		if (isNaN(amount)) {
			return message.reply('that doesn\'t seem to be a valid number.');
		} else if (amount < 2 || amount > 100) {
			return message.reply('you need to input a number between 2 and 100.');
		}

		message.channel.bulkDelete(amount);

		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('there was an error trying to prune messages in this channel!');
		});
	}
});



client.login(process.env.token);




// List of commands now on PasteBin
// https://pastebin.com/6usNqskj
