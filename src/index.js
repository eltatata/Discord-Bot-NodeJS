require("./commands/slashCommands")
const dotenv = require("dotenv");
dotenv.config();
const { Client, GatewayIntentBits } = require('discord.js');
const { google } = require('googleapis');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent
	],
});

const youtube = google.youtube({ version: 'v3', auth: process.env.API_KEY });

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'ping') {
		await interaction.reply('Pong!');
	}

	if (interaction.commandName === 'youtube') {
		const search = interaction.options.get("name").value

		youtube.search.list({
			part: 'id,snippet',
			type: 'video',
			q: search
		}, async (err, res) => {
			if (err) return console.error(err);

			// aquí puedes procesar los resultados de la búsqueda
			const video = res.data.items[0];
			const videoUrl = `https://www.youtube.com/watch?v=${video.id.videoId}`;

			await interaction.reply(videoUrl);
		});
	}
});

client.on('messageCreate', message => {
	if (message.content.startsWith('!youtube')) {
		const search = message.content.split(' ').slice(1).join(' ');

		youtube.search.list({
			part: 'id,snippet',
			type: 'video',
			q: search
		}, async (err, res) => {
			if (err) return console.error(err);

			// aquí puedes procesar los resultados de la búsqueda
			const video = res.data.items[0];
			const videoUrl = `https://www.youtube.com/watch?v=${video.id.videoId}`;

			await message.reply(videoUrl);
		});
	}
});

client.login(process.env.TOKEN);