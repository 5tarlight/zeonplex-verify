const Discord = require('discord.js')

const bot = new Discord.Client()

bot.on('ready', () => {
  console.log('Bot ready')
})

const introduction = `
***ZEONPLEX***
제온플렉스 디스코드에 오신것을 환영합니다.
저희 제온플렉스에서는 악성유저 방지를 위해 캡챠 시스템을 도입하고 있습니다.
#verify 채널에 가서 \`verify\`를 입력해 주시면 정상적으로 모든 기능을 사용하실 수 있습니다.
감사합니다.

Welcome to ZEONPLX official discord
We are introducing a CAPTCHA system to prevent malicious users.
Please go to #verify channel and send \`verify\` to visit whole channel of our discord
Thank you
`

bot.on('guildMemberAdd', member => {
  member.send(introduction)
})

bot.on('message', msg => {
  if(msg.channel.type == 'dm') return

  const guild = msg.guild
  const channel = msg.channel

  if(
    guild.id !== '468403852308119570'
    || channel.id !== '623537570089009152'
    || msg.content !== 'verify'
  ) return

  const user = msg.guild.member(msg.author)

  user.addRole(msg.guild.roles.find('name', 'USER').id)
  user.removeRole(msg.guild.roles.find('name', 'unverified').id)
  msg.delete()
})

bot.login('NjIzMjg3NDcyMjE3OTE1Mzky.XYJDzA.kzo4n9vfFrMFLNg2IZNPQrftCiM')
