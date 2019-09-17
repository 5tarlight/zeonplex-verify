const Discord = require('discord.js')

const bot = new Discord.Client()

bot.on('ready', () => {
  console.log('Bot ready')
})

bot.on('message', msg => {
  const guild = msg.guild
  const channel = msg.channel

  if(
    guild.id !== '468403852308119570'
    || channel.id !== '623537570089009152'
    || msg.content !== 'verify'
  ) return

  msg.delete()
})

bot.login('NjIzMjg3NDcyMjE3OTE1Mzky.XYD3yQ.7Dl8AxBO7gDL4oUHIfu_mnh-Sw0')
