const dotenv = require("dotenv").config();
// Require the necessary discord.js classes
const { Client, Intents } = require("discord.js");

// Create a new client instance
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  retryLimit: 5,
});

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready!");
});

client.on("messageCreate", (msg) => {
  if (msg.content == "Ping") msg.reply({ content: "Poong!!" });
});
// Login to Discord with your client's token
client.login(process.env.DISCROD_BOT_TOKEN);
