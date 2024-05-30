const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_44_05_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDc2LFxuICAgICAgICAzMixcbiAgICAgICAgNDAsXG4gICAgICAgIDM2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIsXG4gICAgICAgIDE3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTk3LFxuICAgICAgICA3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDksXG4gICAgICAgIDE4LFxuICAgICAgICAyMTksXG4gICAgICAgIDY2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjE5LFxuICAgICAgICA0NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMyLFxuICAgICAgICAzNixcbiAgICAgICAgMjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDcwLFxuICAgICAgICA1MyxcbiAgICAgICAgNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDk5LFxuICAgICAgICA1NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAxLFxuICAgICAgICA0MixcbiAgICAgICAgOTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA0MixcbiAgICAgICAgMjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDMzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDYxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM3LFxuICAgICAgICA3NixcbiAgICAgICAgNjUsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDUsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDgsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjAzLFxuICAgICAgICA5NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5LFxuICAgICAgICA2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAzOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjksXG4gICAgICAgIDE1NSxcbiAgICAgICAgODIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDksXG4gICAgICAgIDMyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3LFxuICAgICAgICAzOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDk3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjNvTTFadFNIeGhnMkM3UlhKSGlYRGQ2dk8yaUpPOUdvNThGTU5aL1U0emc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjMzNTA4ODkwMDk3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCOTc3REUyMzkxMDc4NUIyQ0JBRDRDRjg2NDA4QTEwMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTcwOTEwNDJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiR0FyWkJkOTlTekdUMjl2QXZEZ2pzUVwiLFxuICBcInBob25lSWRcIjogXCI2MmVkMWMxNy03YWQxLTRkZGItYWU5Yi0zYWFjZjRmYmYwMDlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY5LFxuICAgICAgMjksXG4gICAgICAxLFxuICAgICAgMjMzLFxuICAgICAgNjIsXG4gICAgICAxOTMsXG4gICAgICAxNixcbiAgICAgIDE3MCxcbiAgICAgIDI0NSxcbiAgICAgIDE5LFxuICAgICAgODEsXG4gICAgICA2MSxcbiAgICAgIDEyNSxcbiAgICAgIDEwMCxcbiAgICAgIDE3LFxuICAgICAgMTksXG4gICAgICA1NixcbiAgICAgIDc4LFxuICAgICAgNTUsXG4gICAgICAyMDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEsXG4gICAgICAxMDEsXG4gICAgICAxMjcsXG4gICAgICAxMzgsXG4gICAgICAxMTAsXG4gICAgICAxNTgsXG4gICAgICAyNDAsXG4gICAgICA4NCxcbiAgICAgIDM5LFxuICAgICAgOTAsXG4gICAgICAxMTcsXG4gICAgICA2OSxcbiAgICAgIDI5LFxuICAgICAgMjAsXG4gICAgICA5NSxcbiAgICAgIDg2LFxuICAgICAgMjI3LFxuICAgICAgNjQsXG4gICAgICAyNDEsXG4gICAgICAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNLWVhDVEhQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1MDg4OTAwOTc6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjI3NDAxNzU3OTAwODM3OjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0x4Mzk4RkVOWDE0cklHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXbVNoUHJCa281VHYrR2lHdEVqRmp2Q3dMTjVEQmFnTDhxdERXWW8wWEFvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk9CeXpyRy9MUG5oZWJ4YVlqc0JFRE5yeTRud2IxK1hvTXBEU21TVWdnWmUwUWhRVnVPL3FvZENJVkdON21GbzJWejZNWHZFbEZNOERZMlUvY1EvUUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVibURyMjRPekRDU3FpUlJLR1NxL1NOMTlGOE9uYUczVDZNRkowVUJMS0dtTmZ2QnFzRVpwUVpsQXlBSEpiY3BmaHBVMSt1dXVJeGFsQ1VWQjlqbWd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzUwODg5MDA5NzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTcwOTEwMzQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNblpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1uWi5qc29uIjogIntcImtleURhdGFcIjpcIkh4MHc2Z0tBbjZaeEg1Qnp4Qzg4dWFWM3VjV09rRXNpdE5jY0dQTzlIaUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU0Mjk3NzY5OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE1OTg4ODg2ODg5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
