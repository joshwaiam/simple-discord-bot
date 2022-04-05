import { Interaction } from 'discord.js'
import 'dotenv/config'
// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js')

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log('Ready!')
})

let squishyAge = 38

function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

client.on('interactionCreate', async (interaction: Interaction) => {
  if (!interaction.isCommand()) return

  const { commandName } = interaction

  if (commandName === 'ping') {
    await interaction.reply('Pong!')
  } else if (commandName === 'server') {
    await interaction.reply(
      `Server name: ${interaction.guild?.name}\nTotal members: ${interaction.guild?.memberCount}`
    )
  } else if (commandName === 'user') {
    await interaction.reply(
      `Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`
    )
  } else if (commandName === 'squishy') {
    await interaction.reply(`Squishy is ${squishyAge++} years old.`)
  } else if (commandName === 'dong') {
    if (interaction.user.tag === 'Mooniscring') {
      const poorMoon = randomNumber(0.4, 0.7)
      await interaction.reply(
        `Damn bro, you working with ${poorMoon} inch dong!`
      )
      return
    }
    await interaction.reply(
      `Damn bro, you working with ${randomNumber(1, 12)} inch dong!`
    )
  }
})

// Login to Discord with your client's token
client.login(process.env.DISCORD_CLIENT_SECRET)
