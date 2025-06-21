const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const ChatMessage = require('./models/ChatMessage');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
app.use(cors());

const io = new Server(server, {
  cors: {
    origin: '*', // change in production
    methods: ['GET', 'POST'],
  },
});

// MongoDB connection
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB error:', err));

// In-memory user storage
const users = [];

io.on('connection', (socket) => {
  console.log('🟢 Connected:', socket.id);

  socket.emit('current-users', users);

  socket.on('new-user', (user) => {
    users.push(user);
    io.emit('user-added', user);
  });

  socket.on('join-room', async (roomId) => {
    socket.join(roomId);
    console.log(`📥 ${socket.id} joined room ${roomId}`);

    // Load history and send it back
    try {
      const messages = await ChatMessage.find({ roomId }).sort({ timestamp: 1 });
      socket.emit('chat-history', messages);
    } catch (err) {
      console.error('Error loading chat history:', err);
    }
  });

  socket.on('send-message', async ({ roomId, message }) => {
    try {
      await ChatMessage.create({ roomId, ...message });
      socket.to(roomId).emit('receive-message', message);
    } catch (err) {
      console.error('Error saving message:', err);
    }
  });

  socket.on('disconnect', () => {
    console.log('🔴 Disconnected:', socket.id);
  });
});

app.get('/', (req, res) => {
  res.send('🧠 SkillSwap WebSocket backend is running');
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});