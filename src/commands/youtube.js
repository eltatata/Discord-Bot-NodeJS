const { SlashCommandBuilder } = require('discord.js');

const data = new SlashCommandBuilder()
    .setName("youtube")
    .setDescription("Search a youtube video!")
    .addStringOption(option =>
        option
            .setName("name")
            .setDescription("name video")
            .setRequired(true)
            )

module.exports = {
    data
}