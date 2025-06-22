const express = require('express');
const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
const { Server } = require('socket.io');
const ChatMessage = require('./models/ChatMessage');
const profileRoutes = require('./routes/profile');
require('dotenv').config();

console.log('🔍 Loaded DB_URI:', process.env.DB_URI);

const app = express();
const server = http.createServer(app);

// Middleware
app.use(cors());
app.use(express.json()); // for handling POST/JSON payloads
app.use('/api/profile', profileRoutes);

// MongoDB connection
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// In-memory user tracking (for demo only)
const users = [];

// WebSocket setup
const io = new Server(server, {
  cors: {
    origin: '*', // Change this in production
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('🟢 Connected:', socket.id);

  // Send current users to newly connected client
  socket.emit('current-users', users);

  socket.on('new-user', (user) => {
    if (!users.includes(user)) {
      users.push(user);
      console.log('👤 New user added:', user);
      io.emit('user-added', user); // Notify all clients
    }
  });

  socket.on('join-room', async (roomId) => {
    socket.join(roomId);
    console.log(`📥 ${socket.id} joined room ${roomId}`);

    // Load chat history from MongoDB
    try {
      const messages = await ChatMessage.find({ roomId }).sort({ timestamp: 1 });
      socket.emit('chat-history', messages);
    } catch (error) {
      console.error('❌ Error loading chat history:', error);
    }
  });

  socket.on('send-message', async ({ roomId, message }) => {
    try {
      // Save to DB
      await ChatMessage.create({ roomId, ...message });

      // Send to other users in room
      socket.to(roomId).emit('receive-message', message);
    } catch (error) {
      console.error('❌ Error saving message:', error);
    }
  });

  socket.on('disconnect', () => {
    console.log('🔴 Disconnected:', socket.id);
  });
});

// Health check route
app.get('/', (req, res) => {
  res.send('🧠 SkillSwap WebSocket backend is running');
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});