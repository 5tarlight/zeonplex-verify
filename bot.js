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

bot.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('id', '469475495776485376')
  channel.send(`**${member.user.tag}**님 재밌게 즐기셨나요;;; 나중에 또 오세요 :(`)
})

bot.on('guildMemberAdd', member => {
  try {
    if(member.bot) return
    member.send(introduction)
  
    const channel = member.guild.channels.find('id', '469475495776485376')
    channel.send(`안녕하세요 ${member.user}님 **ZEONPLEX**에 오신것을 환영합니다! :tada::hugging: 즐거운 시간 되세요~`)
  } catch(e) {
    const log = member.guild.channels.find('name', 'logs')
    const embed = new Discord.RichEmbed()
    .setTitle(`**${member.user.tag}**`)
    .setDescription('Welcome Failed')
    .setColor('#ff2222')
    .setTimestamp(new Date())

    log.send(embed)
  }
})

bot.on('message', msg => {
  if(msg.author.bot) return
  if(msg.channel.type == 'dm') return

  const guild = msg.guild
  const channel = msg.channel
  const log = guild.channels.find('name', 'logs')

  if(
    guild.id !== '468403852308119570'
    || channel.id !== '623537570089009152'
    || msg.content !== 'verify'
  ) return

  const user = msg.guild.member(msg.author)

  const embed = new Discord.RichEmbed()
    .setTitle(`**${msg.author.tag}**`)
    .setDescription('New Verification')
    .setColor('#00ff00')
    .setTimestamp(new Date())

  user.addRole(msg.guild.roles.find('name', 'USER').id)
  user.removeRole(msg.guild.roles.find('name', 'unverified').id)
  log.send(embed)
  msg.delete()
})

bot.login('TOKEN HERE')
