import dotenv from "dotenv";
dotenv.config();

import path from 'path';

// Require the necessary discord.js classes
import DiscordJS, { Intents } from "discord.js";

import WOKCommands from "wokcommands";
// Create a new client instance
const client = new DiscordJS.Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
    retryLimit: 5,
});

// When the client is ready, run this code (only once)
client.on("ready", () => {
    new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'commands'),
        typeScript: true,
        testServers: ['996790285315092491'],
    })
});


// Login to Discord with your client's token
client.login(process.env.DISCROD_BOT_TOKEN);
