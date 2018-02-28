

node-telegram-logger
=============

Telegram Logger Library for nodejs which allows you to log messages into telegram channels using bots .


# Screenshot

![node-telegram-logger demo screenshot](https://i.imgsafe.org/80/8002a819f4.png)


# Installation
-----------
Install using npm:

```bash
npm i node-telegram-logger@latest --save
```


# Features
- simple wrapper for telegram 
- universal which works on nodejs and browser with one simple api 
- 8 log levels

# Usage
```javascript
const TelegramLogger = require('node-telegram-logger')
let tg = new TelegramLogger('token','channelName')
tg.sendMessage('first log ever','EMERGENCY')
```
- **token** your bot token provided by BotFather
- **channelName** your telegram channel userName or simply chat_id

 there are 8 level for messages based on their priority you can use on of :  
 DEBUG, INFO, NOTICE, WARNING, ERROR, CRITICAL, ALERT, EMERGENCY  
 default is set to INFO, also you can use ```RANDOM``` argument to get a random emoji each time 

# Notes
if your telegram channel is private then you can get your channel id via below method : 

Log into Telegram via web: [telegram web](https://web.telegram.org)
Find your channel and copy the URL. You should have something like this: https://web.telegram.org/#/im?p=c**NUMBER**_number
The numbers between "c" and "_" are the ID of your private channel.

Now tell your bot to send the messages to chat_id=-100NUMBER




# TODO List
- [ ] compatiblity with react-native
