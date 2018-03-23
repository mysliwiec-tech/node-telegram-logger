const winston = require('winston');
const TelegramLogger = require('../dist/bundle.js')
let tg = new TelegramLogger('243913457:AAHqd7Ry-db5Sg8LHKJwZfaqZDqZF0fNpLI','@armandweb')
// const winstonTransporter =require('../src/winstonTransporter')

// tg.sendMessage('failed to upload user avatar','ERROR')
const logger = winston.createLogger({
  level: 'info',
  transports: [
    tg.setWinstonTransporter(tg)
  ]
});
logger.log('info', 'Hello distributed log files!');

