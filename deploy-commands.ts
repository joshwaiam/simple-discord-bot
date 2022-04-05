import { REST } from '@discordjs/rest'
import { SlashCommandBuilder } from '@discordjs/builders'
import { Routes } from 'discord-api-types/v9'
import 'dotenv/config'

const token = process.env.DISCORD_CLIENT_SECRET as string
const clientId = process.env.DISCORD_CLIENT_ID as string
const guildId = process.env.DISCORD_GUILD_ID as string

const commands = [
  new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with pong!'),
  new SlashCommandBuilder()
    .setName('server')
    .setDescription('Replies with server info!'),
  new SlashCommandBuilder()
    .setName('user')
    .setDescription('Replies with user info!'),
  new SlashCommandBuilder()
    .setName('squishy')
    .setDescription('Replies with how old Squishy is.'),
  new SlashCommandBuilder().setName('dong').setDescription('What you slangin?'),
].map((command) => command.toJSON())

const rest = new REST({ version: '9' }).setToken(token)

rest
  .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
  .then(() => console.log('Successfully registered application commands.'))
  .catch(console.error)
