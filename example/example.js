const winston = require('winston');
const TelegramLogger = require('../dist/bundle.js')
let tg = new TelegramLogger('243913457:AAHqd7Ry-db5Sg8LHKJwZfaqZDqZF0fNpLI','@armandweb')
// const winstonTransporter =require('../src/winstonTransporter')
// tg.sendMessage('checkout email verifation route','RANDOM')

// tg.sendMessage('user just logged in','INFO')
// tg.sendMessage('there is still a todo in userController','NOTICE')
// tg.sendMessage('failed to upload user avatar','ERROR')
const logger = winston.createLogger({
  level: 'info',
  transports: [
    // new (winston.transports.File)({ filename: 'somefile.log' })
    //
    // - Write to all logs with level `info` and below to `combined.log` 
    // - Write all logs error (and below) to `error.log`.
    //
    // new telegramTransporter({ filename: 'error.log', level: 'info' }),
    tg.setWinstonTransporter(tg)
  ]
});
logger.log('info', 'Hello distributed log files!');

