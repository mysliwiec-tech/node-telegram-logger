

node-telegram-logger
=============

Telegram Logger Library for nodejs which allows you to log messages into telegram channels using bots .


# Screenshot

![telegram handler demo screenshot](https://i.imgsafe.org/e4/e46f38474b.png)


# Installation
-----------
Install using npm:

```bash
npm i node-telegram-logger@latest
```



# Usage
```javascript
const TelegramLogger = require('node-telegram-logger')
let tg = new TelegramLogger('token','channelName')
tg.sendMessage('first log ever','EMERGENCY')

// there are 8 level for messages based on their priority you can use on of :
// DEBUG,INFO,NOTICE,WARNING,ERROR,CRITICAL,ALERT,EMERGENCY
```
- **token** your bot token provided by BotFather
- **channel** your telegram channel userName

# Notes
if your telegram channel is private then you can get your channel id via below method : 

Log into Telegram via web: [telegram web](https://web.telegram.org)
Find your channel and copy the URL. You should have something like this: https://web.telegram.org/#/im?p=c**NUMBER**_number
The numbers between "c" and "_" are the ID of your private channel.

Now tell your bot to send the messages to chat_id=-100NUMBER



