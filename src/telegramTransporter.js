const winston = require('winston')
const Transport = require('winston-transport');
const util = require('util');
const TelegramLogger = require('../dist/bundle.js')




//
// Inherit from `winston-transport` so you can take advantage
// of the base functionality and `.exceptions.handle()`.
//
export default class telegramTransporter extends Transport {
  constructor(opts,tg) {
    super(opts);
    // console.log(opts,a,'asdasdsda')
    this.tg = tg
    //
    // Consume any custom options here. e.g.:
    // - Connection information for databases
    // - Authentication information for APIs (e.g. loggly, papertrail, 
    //   logentries, etc.).
    //
  }

  log(info, callback) {
    this.tg.sendMessage(info.message,info.level)
    // Perform the writing to the remote service
    callback();
  }
};