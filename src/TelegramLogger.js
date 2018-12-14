import https from 'https'
// import querystring from 'querystring'
import {isBrowser,isNode} from './utils'
import telegramTransporter from './telegramTransporter'

export default class TelegramLogger {
    constructor(token,channelName){
        this.isThereToken(token)
        this.isThereChannel(channelName)
        this.token = token 
        this.channelName = channelName
        this.baseUrl = `https://api.telegram.org/bot${token}/`
        this.env = this.detectEnv()
    }
    detectEnv(){
        if(isBrowser){
            return 'browser'
        }
        if(isNode){
            return 'node'
        }
    }
    isThereToken(token){
        if(!token) throw new Error('there is no token in class constructor')
    }
    isThereChannel(channel){
        if(!channel) throw new Error('there is no channel name in class constructor')
    }
    sendRequest(url){
        let env = this.env
        if(env == 'node')
            return this.nodeRequest(url)
        else if(env == 'browser')
            return this.browserRequest(url)
        
    }
    async browserRequest(url){
        try{
            let {data} = await fetch(url)
            return data 
        }catch(e){
            console.log(e.response.data)
        }
        
    }
    nodeRequest(url){
        return https.get(url,(res)=> {
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
    sendMessage(message,level='RANDOM'){
        let emoji = this.emojiMap()[level]
        console.log(emoji,level)
        if(level == 'RANDOM')  {
            let emojiArray = Object.keys(this.emojiMap()).sort()
            let emojiIndex = emojiArray[this.getRandomNumber(1,5)]
            emoji = this.emojiMap()[emojiIndex]
        }
        message = `${emoji} ${message}`        

        let urlParams =encodeURI(`chat_id=${this.channelName}&text=${message}&parse_mode=Markdown`)
        // let urlParams = querystring.stringify({
        //     chat_id : this.channelName,
        //     text : message ,
        //     parse_mode  :'HTML'
        // })
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
            emerg: '🤕', 
            crit:  '🤒', 
         
        }   
    }
    getRandomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min)
      }
      setWinstonTransporter(tg){
          return new telegramTransporter({ filename: 'error.log', level: 'info' },tg)
      }
}

