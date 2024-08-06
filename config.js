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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348167440533";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_10_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTksXG4gICAgICAgIDUyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTk1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDM2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDQzLFxuICAgICAgICAzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDk3LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDMsXG4gICAgICAgIDUwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMzLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDgxLFxuICAgICAgICA2NixcbiAgICAgICAgMzQsXG4gICAgICAgIDM0LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDgsXG4gICAgICAgIDk3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMxLFxuICAgICAgICAzMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDUwLFxuICAgICAgICA0MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5LFxuICAgICAgICA0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI4LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDIsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNSxcbiAgICAgICAgODQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwLFxuICAgICAgICAyOCxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDc4LFxuICAgICAgICA4MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODIsXG4gICAgICAgIDQ5LFxuICAgICAgICA4NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUsXG4gICAgICAgIDU1LFxuICAgICAgICA2NixcbiAgICAgICAgMTYwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTcxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIyZFhTdDk4dEpiRFgxMXM3Mk1IVVE2V1pPSEJsZnZHbzU5MjVZYjgrY3Q4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIZHhoMjhMclJiLUY1YU90ZEYyWE9nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdmZTJjYWI1LTNlMWYtNDU3Yy1hNjYxLWMyNTkxOGRkNTQwZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1LFxuICAgICAgMTE2LFxuICAgICAgMTEsXG4gICAgICAyNSxcbiAgICAgIDc0LFxuICAgICAgMTgyLFxuICAgICAgMTMxLFxuICAgICAgMjAsXG4gICAgICA1OSxcbiAgICAgIDI0MixcbiAgICAgIDEzMixcbiAgICAgIDIwMCxcbiAgICAgIDEyOSxcbiAgICAgIDM3LFxuICAgICAgNzUsXG4gICAgICAyMjgsXG4gICAgICAyNDUsXG4gICAgICAxNTgsXG4gICAgICAxNDAsXG4gICAgICAzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NixcbiAgICAgIDczLFxuICAgICAgMTgsXG4gICAgICAxNDUsXG4gICAgICAxODEsXG4gICAgICAxMzgsXG4gICAgICAyNDMsXG4gICAgICA0OCxcbiAgICAgIDIxMSxcbiAgICAgIDIyMyxcbiAgICAgIDUxLFxuICAgICAgMTU2LFxuICAgICAgMTY5LFxuICAgICAgMTI5LFxuICAgICAgMTUyLFxuICAgICAgMjIsXG4gICAgICAxNixcbiAgICAgIDI0NSxcbiAgICAgIDIyMyxcbiAgICAgIDEyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQRDlaTDRLNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE2NzQ0MDUzMzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiR29kJ3MgR2xvcnlcIixcbiAgICBcImxpZFwiOiBcIjg3MDExNzc2MDEyNDI2OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXJPOFpBRUVNQyt5clVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ1R3ErM2M3OFhaYWlHdllIejk0ZnQ4aTdnWFRjU0FpNTJJTEE1TG1vNTNzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInFKYStKdlNWK3d0NGs3Zy91SzVPSVRHazVuWmsxZUVkQ1NVb2g3enFUVEhJdVZTczZ3R2VSR2M5QjhiOEI5WnRORTNJVkRad2dDMG5uZS9DWkh6VkFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIitLR0Fjc3RTWDJSRVp5ZDRNWXBtOFR6MGVjRDNGNjNnemtKMmpQZE1kOEoybnFZWjVRR050UkxFVUVZRWQzTnBBQU82aENISTE0MGExRTAxTUUrYkJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNjc0NDA1MzM6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI5ODIyMTFcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
