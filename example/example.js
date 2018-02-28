const TelegramLogger = require('../dist/bundle.js')
let tg = new TelegramLogger('TOKEN','@channel')

tg.sendMessage('checkout email verifation route','RANDOM')

// tg.sendMessage('user just logged in','INFO')
// tg.sendMessage('there is still a todo in userController','NOTICE')
// tg.sendMessage('failed to upload user avatar','ERROR')
