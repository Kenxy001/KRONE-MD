const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "lib/config.env") });
const toBool = (x) => x === "true";

module.exports = {
  MONGODB_URI: process.env.MONGODB_URI || "",
  BASE_URL: process.env.BASE_URL || "https://codexnet.xyz/",
  API_KEY: process.env.API_KEY || "L5Ce7iyZng",
  MUSIX_URL: process.env.MUSIX_URL || "https://api.musixmatch.com/ws/1.1/",
  MUSIX_KEY: process.env.MUSIX_KEY || "e6d0cd0023b7ee562a97be33d3c5f524",
  ANTILINK: toBool(process.env.ANTI_LINK) || false,
  LOGS: toBool(process.env.LOGS) || true,
  ANTILINK_ACTION: process.env.ANTI_LINK || "kick",
  SESSION_ID: process.env.SESSION_ID === undefined ? "" : process.env.SESSION_ID,
  LANG: process.env.LANG || "EN",
  AUTH_TOKEN: "",
  HANDLERS: process.env.HANDLER === "false" || process.env.HANDLER === "null"  || process.env.HANDLER === undefined ? "^" : process.env.HANDLER,
  RMBG_KEY: process.env.RMBG_KEY || false,
  BRANCH:process.env.WARN_COUNT || "master",
  WARN_COUNT:process.env.WARN_COUNT || 3,
  WELCOME_MSG: process.env.WELCOME_MSG || "Hello @user Welcome to @gname Enjoy your Stay",
  GOODBYE_MSG: process.env.GOODBYE_MSG || "@user Left The Group",
  PACKNAME: process.env.PACKNAME || "𝑲𝑹𝛩𝑵𝞢–𝑴𝐷"
  AUTHOR: process.env.AUTHOR || "𝛫𝛯𝛮𝛸𝑌",
  SUDO: process.env.SUDO || "919446072492,919562243683",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  OWNER_NAME: process.env.OWNER_NAME || "𝛫𝛯𝛮𝛸𝑌",
  HEROKU: toBool(process.env.HEROKU) || false,
  BOT_NAME: process.env.BOT_NAME || "𝑲𝑹𝛩𝑵𝞢–𝑴𝐷",
  BOT_IMG: process.env.BOT_IMG || "https://raw.githubusercontent.com/c-o-d-e-xx/c-o-d-e-xx/refs/heads/main/img/bixby2.jpeg",
  WORK_TYPE: process.env.WORK_TYPE || "public",
  TIMEZONE: process.env.TIMEZONE || "Asia/Kolkata",
  SESSION_URL: process.env.SESSION_URL || "",
  DELETED_LOG_CHAT: "120363084228202932@g.us",
  DELETED_LOG: toBool(process.env.DELETED_LOG) || false,
  GEMINI_API: process.env.GEMINI_API === undefined ? false :  process.env.GEMINI_API,
};
