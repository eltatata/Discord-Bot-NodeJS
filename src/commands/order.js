const { SlashCommandBuilder } = require('discord.js');

const data = new SlashCommandBuilder()
    .setName("order")
    .setDescription("Order your favorite meal!")
    .addStringOption(option =>
        option
            .setName("food")
            .setDescription("Select your favorite food")
            .setRequired(true)
            .setChoices(
                {
                    name: "Cake", value: "cake"
                },
                {
                    name: "Chicken", value: "chicken"
                },
                {
                    name: "Hamburger", value: "hamburger"
                }
            ))
    .addStringOption(option =>
        option
            .setName("drink")
            .setDescription("Select your favorite drink")
            .setRequired(true)
            .setChoices(
                {
                    name: "Pepsi", value: "pepsi"
                },
                {
                    name: "Coke", value: "coke"
                },
                {
                    name: "Fanta", value: "fanta"
                }
            ))

module.exports = {
    data
}