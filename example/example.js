const TelegramLogger = require('../dist/bundle.js')
let tg = new TelegramLogger('TOKEN','@channel')
tg.sendMessage('failed to upload user avatar','ERROR')
// const winstonTransporter =require('../src/winstonTransporter')






// winston example 
// const winston = require('winston'); if you want to use with winston
// const logger = winston.createLogger({
//   level: 'info',
//   transports: [
//     tg.setWinstonTransporter(tg,'mylog.log','info')
//   ]
// });
// logger.log('info', 'Hello distributed log files!');

