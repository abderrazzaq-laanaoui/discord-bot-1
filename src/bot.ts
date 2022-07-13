import dotenv from "dotenv";
dotenv.config();

// Require the necessary discord.js classes
import DiscordJS, { Intents } from "discord.js";

// Create a new client instance
const client = new DiscordJS.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  retryLimit: 5,
});

// When the client is ready, run this code (only once)
client.on("ready", () => {
  console.log("Ready!");

  const guildId = "996790285315092491";
  const guild = client.guilds.cache.get(guildId);

  let commandes = guild ? guild.commands : client.application?.commands;

  commandes?.create({
    name: "ping",
    description: "Replies with poong!",
  });

  commandes?.create({
    name: "add",
    description: "adds two numbers",
    options: [
      {
        name: "num1",
        description: "the first number.",
        type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER,
        required: true,
      },
      {
        name: "num2",
        description: "the second number.",
        type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER,
        required: true,
      },
    ],
  });
});

client.on("messageCreate", (msg) => {
  if (msg.content == "Ping") msg.reply({ content: "Poong!!" });
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName, options } = interaction;

  if (commandName == "ping")
    interaction.reply({
      content: "Pooong!",
      ephemeral: true,
    });
  else if (commandName == "add") {
    let num1: number = options.getNumber("num1")!;
    let num2: number = options.getNumber("num2")!;

    interaction.reply({
      content: `The sum is ${num1 + num2}`,
      ephemeral: true,
    });
  }
});

// Login to Discord with your client's token
client.login(process.env.DISCROD_BOT_TOKEN);
