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
	
    
    if (command === 'tacos') {
        message.channel.send('https://tenor.com/view/tacos-taco-guru-hartos-tacos-toma-pobre-thrown-gif-12143253');
	}
	
	if (command === 'cats') {
		message.channel.send('https://tenor.com/view/cat-driving-serious-cat-driving-focus-driving-gif-15519638');
	}

    if (command === 'google') {
        message.channel.send('https://www.google.com');
	}

	if (command === 'hello') {
		message.channel.send('Hello there! Type !help to learn what commands to use with me!');
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

	

// I added a new label and i editied it


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

	

	// in the future, a github page should be added here!!!
	

// Message guides, etc.
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


