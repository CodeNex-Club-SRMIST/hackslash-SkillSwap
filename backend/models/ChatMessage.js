const mongoose = require('mongoose');

const ChatMessageSchema = new mongoose.Schema({
  roomId: { type: String, required: true },
  sender: { type: String, required: true },
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ChatMessage', ChatMessageSchema);