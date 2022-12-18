const { SlashCommandBuilder } = require('discord.js');

const data = new SlashCommandBuilder()
    .setName("user")
    .setDescription("User command!")
    .addUserOption(option => 
        option
            .setName("user")
            .setDescription("user")
        )

module.exports = {
    data
}