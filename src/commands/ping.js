const { SlashCommandBuilder } = require('discord.js');

const data = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Pong!")

module.exports = {
    data
}