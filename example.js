const TelegramLogger = require('./')
let tg = new TelegramLogger('token','chat_id')

tg.sendMessage('checkout email verifation route','RANDOM')

// tg.sendMessage('user just logged in','INFO')
// tg.sendMessage('there is still a todo in userController','NOTICE')
// tg.sendMessage('failed to upload user avatar','ERROR')
