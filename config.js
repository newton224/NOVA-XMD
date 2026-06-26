const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID || "NOVA~;;;H4sIAAAAAAAAA5VU2ZKiSBT9l3zVaNkRIypi2EQUXJBFa6IfUkgWZTNJsLCj/r0Dq6qrH2Z6anhKbmbce+45594foKyyBq1QD2Y/QI2zDhI0HElfIzADShvHCIMxiCCBYAaMDfSc9KQUsVTEvNNz67MVqKPKslNORYwfOeLGtSOKNqZP4HUM6vaUZ+EfEl7upEhuyJ7OJ+uREFirtjITdrtosuk0VM5UT8E001eLU7l7Aq9DRpjhrEz0OkUFwjBfoX4LM/w1+LbeeKyfTW7LXSAsRspmNZrEKWU2z4Wfa221qPs50Ta+bXBfg8+5zDY3C08Od0WbNvE1sO7b/upRa77wyzPOdgd+ojqlrkzf4DdZUqLIjFBJMtJ/nXez5yhKjQ6HNcvYx5NmNns5XFD6+nIjG+nk2zEfkFa8H3ZfA347n9A98lW7ubauVsxJEI+M3Lt1Ukcmun7Xe5e1qOdA9MzfgW/xh1cu/4d3VXUUQ+A7rhUm1TbIDf86aTqcp1XqlGEg3ii1vu4rZ3HxvgZ/pLOUxi09DjbTU/yiJC1j6LuwWwv2y848tYFwOy6Kuiw06hM+JC3+E0pRH63DnSGpSVncLc7dLudNJa0SOuSny+ZS8tXxslJuV8F07D5S+XwiONphkU/Cjg5da8WdBO/SMsTUGmZxT3ohoz319vTo6IJ6MwIz+nUMMEqyhmBIsqp8xCRuDGDU7VGIEXnQC5I6jWm5C/aRVbuHZ7ZYJg6lmHNW5s6pvNJ9N1bc1dnhbf0JjEGNqxA1DYoWWUMq3NuoaWCCGjD7+/sYlOiFvAk3lGPpMYgz3BCvbOu8gtGHqh+XMAyrtiT7vgzV4YAwmFGfYURIVibNwGNbQhymWYfUFJIGzGKYN+hXhwijCMwIbtGvqVWraCB+JQSeeVwswBgUD0GyCMwAw3Miy0sMPRWlmUT91Xy7DWlhXX8rEQFjkD+eCQzHsCLDixLLSszwcIiPQQmHXEAuI5hDN0U2Hnh/Rz0UiRCBWd4MdrQ7oUamoS8zdiTphiHriawmMvjs8sMub3IYXalWUpIIhl5vM3o0jyKfh1eWVjxtMZI7yqehVCVWMt89/UMSMAMsvl+TlDmLl/QqnBwqP2qbJbyfKNiPNlYoWyN1L1+TuxTbYSoeZNFDNLPsXGE+euZU2mBPziWOpz41dwrpqCVscMTa4K0xiFCXhej3YqqRV5eyxTe9bdVDtLkEcH91o3LRnS+Wdr8ZftdX6ZTyBTM8itnGXCUNa23dJLtrK9IHCsYvIp3HkjpSrOpF6V6SXns38mOQ8vcFlj0sNug3/MYZeuyDdyX+U8834IPtqNfxbzneN8y/TKniYP523R7NTZquXI7E6eHgo+BKpJ0vv0wSS5pHQQdNlVM88Pr6fQzqHJK4wgWYAVhGuHrYBVft4GOzjKs/LS7ZNLVdMh86z2FD5M/ZcLMCNQQWNZjR4pThKY7lhTEoermu9wSSj5EC8vBtNBm8/gS5aTCDbgcAAA==",
// add your Session Id 

AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen

AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 

AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true or false for auto react on status

ANTI_CALL: process.env.ANTI_CALL || "false",
// anticall on/off

AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY NOVA XMD 🔥*",
// set the auto reply massage on status reply  

ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     

ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// change it to 'same' if you want to resend deleted message in same chat     

WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    

ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
// make true to know who dismiss or promoted a member in group

ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 

MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 

MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://url.bmbxmd.workers.dev/1N0H3G.jpg",
// add custom menu and mention reply image url

PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   

BOT_NAME: process.env.BOT_NAME || "NOVA-XMD",
// add bot namw here for menu

CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    

OWNER_NUMBER: process.env.OWNER_NUMBER || "254793753327",
// add your bot owner number

OWNER_NAME: process.env.OWNER_NAME || "addner name

DESCRIPTION: process.env.DESCRIPTION || "*© POWERED NOVA TECH*",
// add bot description    

ALIVE_IMG: process.env.ALIVE_IMG || "https://url.bmbxmd.workers.dev/1N0H3G.jpg",
// add img for alive msg

LIVE_MSG: process.env.LIVE_MSG || "> Powered by Megamind",
// add alive msg here 

READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs

AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs

ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  

MODE: process.env.MODE || "public",
// make bot public-private-inbox

AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 

AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 

ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 

PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod

AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   

READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 

DEV: process.env.DEV || "255767862457",
// replace with your whatsapp number        

ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 

AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
// make it true for auto recoding 

CHAT_BOT: process.env.CHAT_BOT || "false",
// make true if you want AI chatbot responses enabled
};
