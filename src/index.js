const dotenv = require("dotenv");
dotenv.config();
const { Client, GatewayIntentBits } = require('discord.js');
const { google } = require('googleapis');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const youtube = google.youtube({ version: 'v3', auth: process.env.API_KEY });

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);

	client.application.commands.set([
		{
			name: "ping",
			description: "Pong",
			options: []
		},
		{
			name: "yt",
			description: "Search TY",
			options: []
		}
	])
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'ping') {
		await interaction.reply('Pong!');
	}

	if (interaction.commandName === 'yt') {
		youtube.search.list({
			part: 'id,snippet',
			type: 'video',
			q: 'despacito'
		}, async (err, res) => {
			if (err) return console.error(err);

			// aquí puedes procesar los resultados de la búsqueda
			const video = res.data.items[0];
			const videoTitle = video.snippet.title;
			const videoUrl = `https://www.youtube.com/watch?v=${video.id.videoId}`;

			await interaction.reply(videoUrl);
		});
	}
});

client.on('message', message => {
	console.log(message);
});

client.login(process.env.TOKEN);