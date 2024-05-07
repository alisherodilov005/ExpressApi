// app.js
const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Use JSON middleware
app.use(express.json());

// Use user routes
app.use('/api', userRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// const TelegramBot = require("node-telegram-bot-api");
// const DB = require("./config/db");


// const token = "5511146177:AAGOQWVmfiKd4dalk0o5SVP8Tg_LE6WlviE";
// const bot = new TelegramBot(token, { polling: true });
// bot.onText(/\/echo (.+)/, (msg, match) => {
//   const chatId = msg.chat.id;
//   const resp = match[1]; // the captured "whatever"
//   bot.sendMessage(chatId, resp);
// });



// bot.on("message", (msg) => {
//   const chatId = msg.chat.id;
//   const chatType = msg.chat.type;
//   let db = new DB('localhost' , 'root' , 'password' , 'test');
//   db.connect()
//   if (chatType === "group" || chatType === "supergroup") {
//     bot.sendMessage(chatId, `Group ID: ${chatId}`);
//   }
//   bot.sendMessage(chatId, "Received your message");
// });
