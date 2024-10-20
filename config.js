const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919382903498";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || ""  // PUT your SESSION_ID SUHAIL_11_44_10_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzLFxuICAgICAgICAxODMsXG4gICAgICAgIDQ3LFxuICAgICAgICA1NixcbiAgICAgICAgMjYsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQyLFxuICAgICAgICAxODIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOSxcbiAgICAgICAgMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDkyLFxuICAgICAgICAyOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTUxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTYyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2LFxuICAgICAgICA4MixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDg3LFxuICAgICAgICAxODMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDcsXG4gICAgICAgIDcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMixcbiAgICAgICAgMjI5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTYzLFxuICAgICAgICA0MixcbiAgICAgICAgMjYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk3LFxuICAgICAgICA2OCxcbiAgICAgICAgOSxcbiAgICAgICAgODAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAwLFxuICAgICAgICA0MixcbiAgICAgICAgMTQ5LFxuICAgICAgICA2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MixcbiAgICAgICAgNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDksXG4gICAgICAgIDExMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDU4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDUwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDY1LFxuICAgICAgICA2NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzgsXG4gICAgICAgIDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDkyLFxuICAgICAgICAyLFxuICAgICAgICAzMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAzMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMixcbiAgICAgICAgMTg4LFxuICAgICAgICA1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTczLFxuICAgICAgICA2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgODMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlJ5c1pkT0dFejFxMXFleFZFOHl3UURZYTVTQjR0YnhWTWx0cDVoQTlZRUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5MzgyOTAzNDk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBQ0I4RDI0RDQ4NTE1MzNDMEM4MUMzMTJEQTI3MEMwRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjk0MjQ2ODVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTkzODI5MDM0OThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkE2RDlDRkZBQjdGNUFDRjZFQkQ3MEYxRENGNkU4NjQxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyOTQyNDY4NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxOTM4MjkwMzQ5OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUYzRTU2OUU4Q0FEODZBNjIwODVBQ0I2MDBDMUVCNkNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5NDI0Njg4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5MzgyOTAzNDk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0REE1NjNGN0JBMTU4NDk2OUVCRTZDMzQ4QzMzQzBGQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjk0MjQ2ODhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVkZpcm5mMFRUdDJJeWFTQXItQmI1UVwiLFxuICBcInBob25lSWRcIjogXCIzMjk5MWNhNi0wNTZhLTQ3ZjItOTY2My03NTk2YWI3MTViZTZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc5LFxuICAgICAgMTgzLFxuICAgICAgMyxcbiAgICAgIDE3NCxcbiAgICAgIDIwNSxcbiAgICAgIDEyLFxuICAgICAgNjMsXG4gICAgICAxODMsXG4gICAgICAxNDgsXG4gICAgICA0MCxcbiAgICAgIDE5NSxcbiAgICAgIDEyLFxuICAgICAgNDYsXG4gICAgICAyNDUsXG4gICAgICA5MCxcbiAgICAgIDk0LFxuICAgICAgMTgyLFxuICAgICAgMTMwLFxuICAgICAgMjAyLFxuICAgICAgMjM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0OSxcbiAgICAgIDIwNixcbiAgICAgIDY0LFxuICAgICAgMjE4LFxuICAgICAgNixcbiAgICAgIDIwLFxuICAgICAgNjQsXG4gICAgICAyMjAsXG4gICAgICAxNDMsXG4gICAgICAxOTksXG4gICAgICAyMDQsXG4gICAgICA2NCxcbiAgICAgIDE1NixcbiAgICAgIDEzNixcbiAgICAgIDIyNSxcbiAgICAgIDIwNixcbiAgICAgIDIxOSxcbiAgICAgIDE1LFxuICAgICAgMTk1LFxuICAgICAgMjQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJFRFlQQkhEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTkzODI5MDM0OTg6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJQUklZT1wiLFxuICAgIFwibGlkXCI6IFwiMTc4MDY1MjAwMTYwODI0OjMxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0wyYzlHRVFwOXJUdUFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicnl1akZ4Rm1KODhvbXRZLy92TENMTVNmbEZmZWZWMXZ1WFlMTGlRK0NRTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrS2VIN3BHRFVaRUZuT3dMTTk5YVZkdnpMRWRmNjR1L09mQSs5c1NzNEJRd1NNRWhPUTRJbHdHSnUrc0ZheW9VekZENmhhcHVWd3dVeVAzTjU1VXZCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJaTTNDSEJ6VFFYUlBuMVYvSkdUc1d6aWJraCtlQ0RlSHMyL0RpTW5zQVdac0dKeHlyMEZ1ZGpoTStrRmI1bC9HbGhhaXZZQTJoaXY2RVdseEVoY2Vqdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTkzODI5MDM0OTg6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5NDI0NjgzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSVJPXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJUk8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJyL2ViajdsRkJNeWVEYmgzUDZsQnFXcGxMaURoaUZVR3plRndLUmdyWno4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNTMyNzkzMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI5NDI0Njg3NDA2XCJ9Igp9


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
