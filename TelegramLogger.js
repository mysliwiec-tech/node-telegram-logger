const http = require('https')
const querystring = require('querystring')
module.exports = class TelegramLogger {
    constructor(token,channelName){
        this.isThereToken(token)
        this.isThereChannel(channelName)
        this.token = token 
        this.channelName = channelName
        this.baseUrl = `https://api.telegram.org/bot${token}/`
    }
    isThereToken(token){
        if(!token) throw new Error('there is no token in class constructor')
    }
    isThereChannel(channel){
        if(!channel) throw new Error('there is no token in class constructor')
    }
    sendRequest(url){
        http.get(url,(res)=> {
            const { statusCode } = res;
            if(statusCode !== 200){
                let data 
                res.on('data',(chunk)=>{
                    data += chunk
                })
                res.on('end',()=>{
                    console.log(data)
                })
            } 
        }).on('error',(e)=>{
            console.log(e,'got an error in https request')
        })
    }
    sendMessage(message,level='INFO'){
        let emoji = this.emojiMap()[level]
        if(level == 'RANDOM')  {
            let emojiArray = Object.keys(this.emojiMap()).sort()
            let emojiIndex = emojiArray[this.getRandomNumber(1,5)]
            emoji = this.emojiMap()[emojiIndex]
        }
        message = `${emoji} ${message}
${this.getDate()}`
        let urlParams = querystring.stringify({
            chat_id : this.channelName,
            text : message ,
            parse_mode  :'HTML'
        })
        let url =  `${this.baseUrl}sendMessage?${urlParams}`
        this.sendRequest(url)
        
    }
     emojiMap(){
        return {
            DEBUG    : '🚧',
            INFO     : '‍💬',
            NOTICE   : '🕵',
            WARNING  : '⚡️',
            ERROR    : '🚨',
            CRITICAL : '🤒',
            ALERT    : '👀',
            EMERGENCY: '🤕',
        }   
    }
    getDate(){
        let date = new Date()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let ampm = hours >= 12 ? 'pm' : 'am'
        hours = hours % 12
        hours = hours ? hours : 12 // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes
        let strTime = hours + ':' + minutes + ' ' + ampm
        return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime
    }
    getRandomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min)
      }
}

