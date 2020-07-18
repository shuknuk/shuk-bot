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

// I added a new label


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

		if (isNaN(amount)) {
			return message.reply('that doesn\'t seem to be a valid number.');
		} else if (amount <= 1 || amount > 100) {
			return message.reply('you need to input a number between 1 and 99.');
		}

		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('there was an error trying to prune messages in this channel!');
		});
	}
});

	

client.login(process.env.token);



// Note: [prefix] = !
// So {prefix}beep = !beep


// List of commands now on PasteBin
// https://pastebin.com/6usNqskj


// I wish I could get a new laptop
// But I don't know exactly when I will
// I almost got a new one, but like 1 day after I got it my sister's laptop broke
// I feel like she broke it just so she could get my new laptop, but I doubt it
// Since she's in highschool, I have to give the laptop to her so she can use it for education
// Now, I'm just using a broken slow laptop that's heavy to move around. 
// It's based on linux
// I mean it isn't slow, thanks to Linux
// But its hard to move around, and it doesn't have the great specs...