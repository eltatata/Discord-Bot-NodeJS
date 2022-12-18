const { SlashCommandBuilder } = require('discord.js');

const data = new SlashCommandBuilder()
    .setName("channels")
    .setDescription("Channel command!")
    .addChannelOption(option =>
        option
            .setName("channel")
            .setDescription("channel")
            .setRequired(true)
        )
    .addBooleanOption(option =>
        option
            .setName('deletemsgs')
            .setDescription('Delete messages')
            .setRequired(true)
        )
    .addIntegerOption(option => 
        option
            .setName("age")
            .setDescription("enter your name")
        )
    .addAttachmentOption(option => 
        option
            .setName("file")
            .setDescription("Upload file")
        )

module.exports = {
    data
}